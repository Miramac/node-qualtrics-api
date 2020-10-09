import { Fetch } from './fetch'
import * as fs from 'fs'
/** @ignore */
const delay = require('util').promisify(setTimeout)

/**
 * Qualtrics Login data
 */
interface QualtricsOptions { apiToken: string; baseUrl: string, defaultDirectory: string, agent: any } // eslint-disable-line

/**
 * Creates a new Qualtrics instance.
 * @class Qualtrics
 */
export class Qualtrics {
  config: QualtricsOptions
  fetch: Fetch
  /**
  * 
  * @param Options Qualtrics Login data
  * @example
  * ```
  *  const config = {
  *    apiToken: '<API_TOKEN>',
  *    baseUrl: 'https://eu.qualtrics.com/API/v3/',
  *    defaultDirectory: 'POOL_xxxxxxxx'
  *  }
  *  const qualtrics = new Qualtrics(config)
  * ```
  */
  constructor(config: QualtricsOptions) {
    this.config = config
    this.fetch = new Fetch(config)
  }
  /**
   * Determine the user ID and other user information associated with an Qualtrics API token
   * @returns {Promise}
   * @url https://api.qualtrics.com/reference#who-am-i
   */
  whoami() {
    return this.fetch.get('whoami')
  }

  /**
   * Gets all users in the collection
   * @returns {Promise}
   * @url https://api.qualtrics.com/reference#list-users
   * @example
   * ```
   *  qualtrics.getUsers()
   *  .then(users => {
   *    console.log(users.length)
   *  }).catch(e => {
   *    console.error(e)
   *  })
   * ```
   */
  getUsers() {
    return this.fetch.get('users')
  }

  /**
   * Gets general information about a user
   * @param {String} userId
   * @returns {Promise}
   * @Url https://api.qualtrics.com/reference#get-user
   */
  getUser(userId: string) {
    return this.fetch.get('users/' + userId)
  }

  /**
   * Updates user information
   * @param {String} userId
   * @param {object} data
   * @returns {Promise}
   */
  updateUser(userId: string, data: object) {
    return this.fetch.put('users/' + userId, data)
  }

  /**
     * Gets list of all groups known to the user account
     * @returns {Promise}
     */
  getGroups() {
    return this.fetch.get('groups')
  }

  /**
     * Gets information about a specified group
     * @param {String} groupId
     * @returns {Promise}
     */
  getGroup(groupId: string) {
    return this.fetch.get('groups/' + groupId)
  }

  /**
     * Creates a new group
     * @param {String} name
     * @param {String} type
     * @param {String} divisionId
     * @returns {Promise}
     */
  addGroup(name: string, type: string, divisionId?: string) {
    const data = {
      type: type,
      name: name,
      divisionId: divisionId || null
    }
    return this.fetch.post('groups', data)
  }

  /**
     * Add User to Group
     * @param {String} groupId
     * @param {String} userId
     * @returns {Promise}
     */
  addGroupMember(groupId: string, userId: string) {
    const data = {
      userId: userId
    }
    return this.fetch.post(`groups/${groupId}/members`, data)
  }

  /**
     * Remove User from Group
     * @param {String} groupId
     * @param {String} userId
     * @returns {Promise}
     */
  removeGroupMember(groupId: string, userId: string) {
    return this.fetch.delete(`groups/${groupId}/members/${userId}`)
  }

  /**
     * Get Directory Contacts. PageSize 100
     * @param {String} skipToken
     * @param {String=} directoryId
     * @returns {Promise}
     */
  getDirectoryContacts(skipToken: string | null, directoryId?: string) {
    directoryId = directoryId || this.config.defaultDirectory
    return this.fetch.get(`/directories/${directoryId}/contacts/?pageSize=100${(skipToken) ? '&skipToken=' + skipToken : ''}`)
  }

  /**
     * Get all Directory Contacts
     * @param {String=} directoryId
     * @returns {Promise}
     */
  async getAllDirectoryContacts (directoryId?: string) {
    let contacts: any[] = []
    let skipToken = null
    try {
      do {
        const res: any = await this.getDirectoryContacts(skipToken, directoryId)
        if (res.meta.httpStatus !== '200 - OK') {
          return Promise.reject(new Error(res.meta))
        }
        contacts = contacts.concat(res.result.elements)
        skipToken = res.result.nextPage
        skipToken = (skipToken) ? res.result.nextPage.split('skipToken=')[1] : skipToken
      } while (skipToken)
      return contacts
    } catch (e) {
      return Promise.reject(e)
    }
  }

  /**
     * Get data for one Directory Contact
     * @param {String} contactId
     * @param {String=} directoryId
     * @returns {Promise}
     */
  getDirectoryContact(contactId: string, directoryId?: string) {
    directoryId = directoryId || this.config.defaultDirectory
    return this.fetch.get(`/directories/${directoryId}/contacts/${contactId}`)
  }

  /**
     * Update Directory Contact
     * @param {String} contactId
     * @param {Object} data
     * @param {String=} directoryId
     * @returns {Promise}
     */
  updateDirectoryContact(contactId: string, data: object, directoryId?: string) {
    directoryId = directoryId || this.config.defaultDirectory
    return this.fetch.put(`/directories/${directoryId}/contacts/${contactId}`, data)
  }

  /**
     * Delete Directory Contact
     * @param {String} contactId
     * @param {String=} directoryId
     * @returns {Promise}
     */
  removeDirectoryContact(contactId: string, directoryId?: string) {
    directoryId = directoryId || this.config.defaultDirectory
    return this.fetch.delete(`/directories/${directoryId}/contacts/${contactId}`)
  }

  /**
    * Unsubscribed Contact im Directory aus
    * @param {String} contactId
    * @param {String=} directoryId
    * @returns {Promise}
    */
  unsubscribedDirectoryContact(contactId: string, directoryId?: string) {
    return this.updateDirectoryContact(contactId, { unsubscribed: true }, directoryId)
  }

  /**
     * Get all mailinglists contacts
     * @param {String} listId
     * @param {String=} directoryId
     * @returns {Promise}
     */
  getListContacts(listId: string, directoryId?: string) {
    directoryId = directoryId || this.config.defaultDirectory
    return this.fetch.get(`/directories/${directoryId}/mailinglists/${listId}/contacts`)
  }

  /**
     * Get contact from mailinglists
     * @param {String} listId
     * @param {String} contactId
     * @param {String=} directoryId
     * @returns {Promise}
     */
  getListContact(listId: string, contactId: string, directoryId?: string) {
    directoryId = directoryId || this.config.defaultDirectory
    return this.fetch.get(`/directories/${directoryId}/mailinglists/${listId}/contacts/${contactId}`)
  }

  /**
     * Update Daten eines List Contact
     * @param {String} listId
     * @param {String} contactId
     * @param {Object} data
     * @param {String=} directoryId
     * @returns {Promise}
     */
  updateListContact(listId: string, contactId: string, data: object, directoryId?: string) {
    directoryId = directoryId || this.config.defaultDirectory
    return this.fetch.put(`/directories/${directoryId}/mailinglists/${listId}/contacts/${contactId}`, data)
  }

  /**
     * Liste aller Distributions für ein Projekt
     * @param {String} surveyId
     * @param {String} distributionRequestType
     * @returns {Promise}
     */
  getDistributions(surveyId: string, distributionRequestType?: string) {
    distributionRequestType = (distributionRequestType) ? `&distributionRequestType=${distributionRequestType}` : ''
    return this.fetch.get(`/distributions?surveyId=${surveyId}${distributionRequestType}`)
  }

  /**
     * Liste aller Kontakte einer Distribution
     * @param {String} surveyId
     * @param {String} distributionRequestType
     * @returns {Promise}
     */
  async getDistributionLinks (surveyId: string, distributionId: string) {
    let contacts: any[] = []
    let skipToken = false
    try {
      do {
        const res: any = await this.fetch.get(`/distributions/${distributionId}/links?surveyId=${surveyId}&skipToken=${skipToken || ''}`)
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
     * @param {String} surveyId
     * @param {String} sessionId
     * @returns {Promise}
     */
  getSession (surveyId: string, sessionId: string) {
    return this.fetch.get(`surveys/${surveyId}/sessions/${sessionId}`)
  }

  /**
     * @param {String} surveyId
     * @param {String} sessionId
     * @returns {Promise}
     */
  deleteSession (surveyId: string, sessionId: string) {
    return this.fetch.delete(`surveys/${surveyId}/sessions/${sessionId}`)
  }

  /**
     * Create a Exportfile with the survey response data
     * @param {String} surveyId
     * @param {String} outputFile
     * @param {String|Object} format|options
     */
  async downloadResponseExport (surveyId: string, outputFile: string, options: any) {
    options = options || {}
    options = (typeof options === 'string') ? { format: options } : options
    options.format = options.format || 'json'
    const progressId = await this.createResponseExport(surveyId, options)
    if (!progressId) return
    let fileId = null
    while (fileId === null) {
      fileId = await this.responseExportProgress(surveyId, progressId)
      await delay(1000) // Progess nur 1x in der Sekunde abfragen
    }
    await this.fetchResponseExport(surveyId, fileId, outputFile)
  }

  async createResponseExport (surveyId: string, options: object) {
    const res = await this.fetch.post(`surveys/${surveyId}/export-responses`, options)
    if (res.meta.error) {
      throw new Error(res.meta.error.errorMessage)
    } else {
      if (res.result.progressId) {
        return res.result.progressId
      }
    }
  }

  async responseExportProgress (surveyId: string, progressId: string) {
    const res = await this.fetch.get(`surveys/${surveyId}/export-responses/${progressId}`)
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

  fetchResponseExport (surveyId: string, fileId: string, outputFile: string) {
    return new Promise((resolve, reject) => {
      this.fetch.getRaw(`surveys/${surveyId}/export-responses/${fileId}/file`)
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
  deleteSurveyResponse(surveyId: string, responseId: string) {
    return this.fetch.delete(`surveys/${surveyId}/responses/${responseId}`, { decrementQuotas: true })
  }
}