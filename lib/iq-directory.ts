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
     * Get Directory Contacts. PageSize 100
     * @param {String} skipToken
     * @returns {Promise}
     */
    getContacts(skipToken?: string | null): Promise<any> {
      return this.fetch.get(`/directories/${this.directory}/contacts/?pageSize=100${(skipToken) ? '&skipToken=' + skipToken : ''}`)
    }
  
    /**
       * Get all Directory Contacts
       * @returns {Promise}
       */
    async getAllContacts () {
      let contacts: any[] = []
      let skipToken = null
      try {
        do {
          try {
            const res:any = await this.getContacts(skipToken)
            contacts = contacts.concat(res.result.elements)
            skipToken = res.result.nextPage
            skipToken = (skipToken) ? res.result.nextPage.split('skipToken=')[1] : skipToken
          } catch(e) {
            return Promise.reject(e)
          }
        } while (skipToken)
        return contacts
      } catch (e) {
        return Promise.reject(e)
      }
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
