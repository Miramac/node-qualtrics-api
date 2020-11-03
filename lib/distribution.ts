import { QualtricsOptions } from './interfaces/options'
import { Fetch } from './fetch'

export class Distribution {
  config: QualtricsOptions
  fetch: Fetch
  directory: string | undefined
  survey: string

  constructor(config: QualtricsOptions, survey: string, directory?: string) {
    this.config = config
    this.directory = directory || this.config.defaultDirectory
    this.survey = survey
    this.fetch = new Fetch(config)
  }

  /**
     * List all survey distributions
     * @param {String} distributionRequestType
     * @returns {Promise}
     */
  getAll(distributionRequestType?: string) {
    distributionRequestType = (distributionRequestType) ? `&distributionRequestType=${distributionRequestType}` : ''
    return this.fetch.get(`/distributions?this.survey=${this.survey}${distributionRequestType}`)
  }

  /**
     * Create a new link distribution
     * @param {String} mailingListId
     * @param {Object} data
     * @returns {Promise}
     */
  addDistribution(mailingListId: string, data?: any) {
    // Default expirationDate: 90 days
    const expirationDate = new Date(new Date().setDate(new Date().getDate() + 90)).toLocaleDateString() + ' 00:00:00'
    const distributionData = {
      surveyId: this.survey,
      linkType: 'Individual',
      description: 'distribution description',
      action: 'CreateDistribution',
      expirationDate: expirationDate,
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
     * get all contacts with survey link for one Distribution
     * @param {String} distribution Distribution-ID (eg. EMD_abdfgfdgh4e64)
     * @returns {Promise}
     */
  async getLinks(distribution: string) {
    let contacts: any[] = []
    let skipToken = false
    try {
      do {
        const res: any = await this.fetch.get(`/distributions/${distribution}/links?surveyId=${this.survey}&skipToken=${skipToken || ''}`)
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
}
