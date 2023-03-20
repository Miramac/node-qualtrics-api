import { QualtricsOptions } from './interfaces/options'
import { Fetch } from './fetch'

export class MailingList {
  config: QualtricsOptions
  fetch: Fetch
  directory: string | undefined
  id: string | undefined

  constructor(config: QualtricsOptions, id?: string, directory?: string) {
    this.config = config
    this.id = id
    this.directory = directory || this.config.defaultDirectory

    this.fetch = new Fetch(config)
  }

  /**
     * Get 50 mailinglists contacts
     * @param {String} skipToken (optional)
     * @returns {Promise}
     */
  getContacts(skipToken?: string | null) {
    return this.fetch.get(`/directories/${this.directory}/mailinglists/${this.id}/contacts${skipToken ? `?skipToken=${skipToken}` : ''}`)
  }

  /**
   * Get all mailinglists contacts
   * @param skipToken
   * @returns {Promise}
   **/
  async getAllContacts(limit: number = 100) {
    let contacts: any[] = []
    let skipToken = null
    do {
      try {
        const res:any = await this.getContacts(skipToken)
        contacts = contacts.concat(res.result.elements)
        skipToken = res.result.nextPage
        skipToken = (skipToken) ? res.result.nextPage.split('skipToken=')[1] : null
        console
      } catch(e) {
        return Promise.reject(e)
      }
    } while (skipToken && contacts.length < limit)
    return contacts
  }

  /**
     * Get contact from mailinglists
     * @param {String} contactId
     * @returns {Promise}
     */
  getContact(contactId: string) {
    return this.fetch.get(`/directories/${this.directory}/mailinglists/${this.id}/contacts/${contactId}`)
  }

  /**
     * Add List Contact
     * @param {Object} data
     * @returns {Promise}
     */
  addContact(contact: object) {
    return this.fetch.post(`/directories/${this.directory}/mailinglists/${this.id}/contacts/`, contact)
  }
  /**
     * Add List Contact
     * @param {Object} data
     * @returns {Promise}
     */
  addContacts(contacts: Array<object>) {
    return new Promise(async (resolve, rejects) => {
      try {
        const results = [] 
        for (let i = 0; i < contacts.length; i++) {
          results.push(await this.fetch.post(`/directories/${this.directory}/mailinglists/${this.id}/contacts/`, contacts[i]))
        }
        resolve(results)
      } catch (e) {
        rejects(e)
      }
    })
  }

  /**
     * Update Daten eines List Contact
     * @param {String} listId
     * @param {String} contactId
     * @param {Object} data
     * @returns {Promise}
     */
  updateContact(contactId: string, data: object) {
    return this.fetch.put(`/directories/${this.directory}/mailinglists/${this.id}/contacts/${contactId}`, data)
  }

  /**
   * Update Daten eines List Contact
   * @param {String} listId
   * @param {String} contactId
   * @param {Object} data
   * @returns {Promise}
   */
  removeContact(contactId: String) {
    return this.fetch.delete(`/directories/${this.directory}/mailinglists/${this.id}/contacts/${contactId}`)
  }

  /**
   * @param ownerId 
   * @param name
   */
  add(data: object) {
    return this.fetch.post(`/directories/${this.directory}/mailinglists`, data)
  }
    /**
   * Update mteh Mailinglist
   * @param {String} listId
   * @param {String} contactId
   * @param {Object} data
   * @returns {Promise}
   */
  delete() {
    return this.fetch.delete(`/directories/${this.directory}/mailinglists/${this.id}`)
  }
}
