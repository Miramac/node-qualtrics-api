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
     * @param {String} nextPage
     * @returns {Promise}
     */
    getContacts(nextPage?: string | null): Promise<any> {
      if (nextPage) {
        return this.fetch.get(nextPage)
      }
      return this.fetch.get(`/directories/${this.directory}/contacts/?pageSize=100`)
    }
  
    /**
       * Get all Directory Contacts
       * @returns {Promise}
       */
    async getAllContacts () {
      let contacts: any[] = []
      let nextPage = null
      try {
        do {
          try {
            const res:any = await this.getContacts(nextPage)
            contacts = contacts.concat(res.result.elements)
            nextPage = res.result.nextPage
          } catch(e) {
            return Promise.reject(e)
          }
        } while (nextPage)
        return contacts
      } catch (e) {
        return Promise.reject(e)
      }
    }
  
    /**
     * Retrieve the contacts in a directory who have opted out.
     * @param nextPage 
     * @returns {Promise}
     */
    getOptedOutContacts (nextPage?: string | null): Promise<any> {
      if (nextPage) {
      return this.fetch.get(nextPage)
      }
      return this.fetch.get(`/directories/${this.directory}/contacts/optedOutContacts/?pageSize=100`)
       
    }

    /**
     * Retrieve all the contacts in a directory who have opted out.
     * @returns {Promise}
     */
     async getAllOptedOutContacts () {
        let contacts: any[] = []
        let nextPage = null
        try {
          do {
            try {
              const res:any = await this.getOptedOutContacts(nextPage)
              contacts = contacts.concat(res.result.elements)
              nextPage = res.result.nextPage
            } catch(e) {
              return Promise.reject(e)
            }
          } while (nextPage)
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
