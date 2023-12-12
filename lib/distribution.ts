import * as fs from 'fs'
import { QualtricsOptions } from './interfaces/options'
import { Fetch } from './fetch'
const delay = require('util').promisify(setTimeout)

export class Distribution {
  config: QualtricsOptions
  fetch: Fetch
  directory: string | undefined
  id: string | undefined
  surveyId: string

  constructor(config: QualtricsOptions, surveyId: string, id?: string, directory?: string) {
    this.config = config
    this.directory = directory || this.config.defaultDirectory
    this.id = id
    this.surveyId = surveyId
    this.fetch = new Fetch(config)
  }

  /**
 * Create a new link distribution
   * @param {String} mailingListId
   * @param {Object} data
   * @returns {Promise}
   */
  add(mailingListId: string, data?: any) {
    const distributionData = {
      surveyId: this.surveyId,
      // Default Link distribution
      linkType: 'Individual',
      description: 'distribution description',
      action: 'CreateDistribution',
      // Default expirationDate: 90 days
      expirationDate: new Date(new Date().setDate(new Date().getDate() + 90)).toISOString().split('T')[0] + ' 00:00:00',
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
  async get() {
    return this.fetch.get(`/distributions/${this.id}?surveyId=${this.surveyId}`)
  }

  /**
   *
   * @param distributionId
   */
  async delete() {
    return this.fetch.delete(`/distributions/${this.id}`)
  }

  /**
   * get all contacts with survey link for one Distribution
   * @param {String} distributionId Distribution-ID (eg. EMD_abdfgfdgh4e64)
   * @returns {Promise}
   */
  async contacts() {
    let contacts: any[] = []
    let skipToken = false
    try {
      do {
        const res: any = await this.fetch.get(`/distributions/${this.id}/links?surveyId=${this.surveyId}&skipToken=${skipToken || ''}`)
        if (res.meta.httpStatus !== '200 - OK') {
          return Promise.reject(new Error(res.meta))
        }
        if (res.result) {
          contacts = contacts.concat(res.result.elements)
          skipToken = res.result.nextPage
          skipToken = (skipToken) ? res.result.nextPage.split('skipToken=')[1] : skipToken
        }
      } while (skipToken)
      return { 
        contacts
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
