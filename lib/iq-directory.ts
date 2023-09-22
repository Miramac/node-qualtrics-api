import { QualtricsOptions } from './interfaces/options'
import { Fetch } from './fetch'

export class IQDirectory {
  config: QualtricsOptions
  fetch: Fetch
  directory: string | undefined

  constructor(config: QualtricsOptions, directory?: string) {
    this.config = config
    this.directory = directory || this.config.defaultDirectory
    
    this.fetch = new Fetch(config)
  }


  /**
   * Get Directory Contacts
   * @param {String} skipToken (optional) default null
   * @param {Number} pageSize (optional) default 100
   * @returns {Promise}
   */
    getContacts(skipToken?: string | null, pageSize: number = 100) {
      pageSize = pageSize > 100 ? 100 : pageSize
      pageSize = pageSize < 1 ? 1 : pageSize
      return this.fetch.get(`/directories/${this.directory}/contacts?pageSize=${pageSize}${skipToken ? `&skipToken=${skipToken}` : ''}`)
    }
  
    /**
     * Get all Directory Contacts
     * @param {Number} limit (optional) default 100
     * @param {String} skipToken (optional) default null
     * @returns {Promise}
     */
    async getAllContacts(limit: number = 100, skipToken?: string | null) {
      let contacts: any[] = []
      do {
        try {
          const res:any = await this.getContacts(skipToken, limit)
          contacts = contacts.concat(res.result.elements)
          skipToken = res.result.nextPage
          skipToken = (skipToken) ? res.result.nextPage.split('skipToken=')[1] : null
        } catch(e) {
          return Promise.reject(e)
        }
      } while (skipToken && contacts.length < limit)
      return { contacts, skipToken }
    }

  /**
   * Retrieve the contacts in a directory who have opted out.
   * @param {String} skipToken (optional) default null
   * @param {Number} pageSize (optional) default 100
   * @returns {Promise}
   */
    getOptedOutContacts(skipToken?: string | null, pageSize: number = 100) {
      pageSize = pageSize > 100 ? 100 : pageSize
      pageSize = pageSize < 1 ? 1 : pageSize
      return this.fetch.get(`/directories/${this.directory}/contacts/optedOutContacts?pageSize=${pageSize}${skipToken ? `&skipToken=${skipToken}` : ''}`)
    }

    /**
     * Retrieve all the contacts in a directory who have opted out.
     * @param {Number} limit (optional) default 100
     * @param {String} skipToken (optional) default null
     * @returns {Promise}
     */
    async getAllOptedOutContacts(limit: number = 100, skipToken?: string | null) {
      let contacts: any[] = []
      do {
        try {
          const res:any = await this.getOptedOutContacts(skipToken, limit)
          contacts = contacts.concat(res.result.elements)
          skipToken = res.result.nextPage
          skipToken = (skipToken) ? res.result.nextPage.split('skipToken=')[1] : null
        } catch(e) {
          return Promise.reject(e)
        }
      } while (skipToken && contacts.length < limit)
      return { contacts, skipToken }
    }

    /**
       * Get data for one Directory Contact
       * @param {String} id Contact ID
       * @returns {Promise}
       */
    getContact(id: string) {
      return this.fetch.get(`/directories/${this.directory}/contacts/${id}`)
    }
  
    /**
       * Update Directory Contact
       * @param {String} id Contact ID
       * @param {Object} data
       * @param {String=} directoryId
       * @returns {Promise}
       */
    updateContact(id: string, data: object) {
      return this.fetch.put(`/directories/${this.directory}/contacts/${id}`, data)
    }
  
    /**
       * Delete Directory Contact
       * @param {String} id Contact ID
       * @returns {Promise}
       */
    removeContact(id: string) {
      return this.fetch.delete(`/directories/${this.directory}/contacts/${id}`)
    }
  
    /**
      * Unsubscribed Contact im Directory aus
      * @param {String} contactId
      * @param {String=} directoryId
      * @returns {Promise}
      */
    unsubscribedContact(id: string) {
      return this.updateContact(id, { unsubscribed: true })
    }
}
