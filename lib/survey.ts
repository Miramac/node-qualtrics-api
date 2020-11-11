import * as fs from 'fs'
import { QualtricsOptions } from './interfaces/options'
import { Fetch } from './fetch'
const delay = require('util').promisify(setTimeout)

export class Survey {
  config: QualtricsOptions
  fetch: Fetch
  directory: string | undefined
  id: string

  constructor(config: QualtricsOptions, id: string, directory?: string) {
    this.config = config
    this.directory = directory || this.config.defaultDirectory
    this.id = id
    this.fetch = new Fetch(config)
  }

  /**
     * List all survey distributions
     * @param {String} distributionRequestType
     * @returns {Promise}
     */
  getAll(distributionRequestType?: string) {
    distributionRequestType = (distributionRequestType) ? `&distributionRequestType=${distributionRequestType}` : ''
    return this.fetch.get(`/distributions?this.survey=${this.id}${distributionRequestType}`)
  }

  /**
     * Create a new link distribution
     * @param {String} mailingListId
     * @param {Object} data
     * @returns {Promise}
     */
  addDistribution(mailingListId: string, data?: any) {
    const distributionData = {
      surveyId: this.id,
      linkType: 'Individual',
      description: 'distribution description',
      action: 'CreateDistribution',
      // Default expirationDate: 90 days
      expirationDate: (data && data.expirationDate) ? data.expirationDate : new Date(new Date().setDate(new Date().getDate() + 90)).toLocaleDateString() + ' 00:00:00',
      mailingListId: mailingListId
    }
    // overwrite defaults, if available
    if (data) {
      if  (data.linkType) {
        distributionData.linkType = data.linkType
      }
      if (data.description) {
        distributionData.description = data.description
      }
      if (data.expirationDate) {
        distributionData.expirationDate = data.expirationDate
      }
    }
    return this.fetch.post('/distributions', distributionData)
  }

  /**
   *
   * @param distributionId
   */
  async deleteDistribution(distributionId: string) {
    return this.fetch.delete(`/distributions/${distributionId}`)
  }

  /**
     * get all contacts with survey link for one Distribution
     * @param {String} distributionId Distribution-ID (eg. EMD_abdfgfdgh4e64)
     * @returns {Promise}
     */
  async getLinks(distributionId: string) {
    let contacts: any[] = []
    let skipToken = false
    try {
      do {
        const res: any = await this.fetch.get(`/distributions/${distributionId}/links?surveyId=${this.id}&skipToken=${skipToken || ''}`)
        if (res.meta.httpStatus !== '200 - OK') {
          return Promise.reject(new Error(res.meta))
        }
        if (res.result) {
          contacts = contacts.concat(res.result.elements)
          skipToken = res.result.nextPage
          skipToken = (skipToken) ? res.result.nextPage.split('skipToken=')[1] : skipToken
        }
      } while (skipToken)
      return contacts
    } catch (e) {
      return Promise.reject(e)
    }
  }

  /**
     *  get session data
     * @param {String} sessionId
     * @returns {Promise}
     */
    getSession (sessionId: string) {
      return this.fetch.get(`surveys/${this.id}/sessions/${sessionId}`)
    }
  
    /**
       * @param {String} sessionId
       * @returns {Promise}
       */
    deleteSession (sessionId: string) {
      return this.fetch.delete(`surveys/${this.id}/sessions/${sessionId}`)
    }

    
  /**
     * Create a Exportfile with the survey response data
     * @param {String} surveyId
     * @param {String} outputFile
     * @param {String|Object} format|options
     */
  async downloadResponseExport (outputFile: string, options: any) {
    options = options || {}
    options = (typeof options === 'string') ? { format: options } : options
    options.format = options.format || 'json'
    const progressId = await this.createResponseExport( options)
    if (!progressId) return
    let fileId = null
    while (fileId === null) {
      fileId = await this.responseExportProgress( progressId)
      await delay(1000) // wait 1 second for next progess status
    }
    await this.fetchResponseExport(fileId, outputFile)
  }
  /**
   * 
   * @param options 
   */
  async createResponseExport (options: object) {
    const res = await this.fetch.post(`surveys/${this.id}/export-responses`, options)
    if (res.meta.error) {
      throw new Error(res.meta.error.errorMessage)
    } else {
      if (res.result.progressId) {
        return res.result.progressId
      }
    }
  }

  async responseExportProgress (progressId: string) {
    const res = await this.fetch.get(`surveys/${this.id}/export-responses/${progressId}`)
    if (res.meta.error) {
      throw new Error(res.meta.error.errorMessage)
    } else {
      if (res.result.status && res.result.status === 'complete') {
        return res.result.fileId
      } else {
        return null
      }
    }
  }

  fetchResponseExport (fileId: string, outputFile: string) {
    return new Promise((resolve, reject) => {
      this.fetch.getRaw(`surveys/${this.id}/export-responses/${fileId}/file`)
        .then((res: any) => {
          if (res.status === 200) {
            const file = fs.createWriteStream(outputFile)
            // Write outputfile
            res.body.pipe(file)
            file.on('finish', () => resolve(outputFile))
            file.on('error', reject)
          } else {
            reject(new Error(res.statusText))
          }
        })
        .catch(reject)
    })
  }

  /**
    * Delete survey response
    * @param {String} surveyId
    * @param {String} responseId
    */
  deleteResponse(responseId: string) {
    return this.fetch.delete(`surveys/${this.id}/responses/${responseId}`, { decrementQuotas: true })
  }
}
