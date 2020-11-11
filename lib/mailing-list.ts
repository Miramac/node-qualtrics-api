import { QualtricsOptions } from './interfaces/options'
import { Fetch } from './fetch'
import { StringifyOptions } from 'querystring'

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
     * Get all mailinglists contacts
     * @param {String} listId
     * @returns {Promise}
     */
  getContacts() {
    return this.fetch.get(`/directories/${this.directory}/mailinglists/${this.id}/contacts`)
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
  addContact(data: object) {
    return this.fetch.post(`/directories/${this.directory}/mailinglists/${this.id}/contacts/`, data)
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
  add(ownerId: string, name: string) {
    return this.fetch.post(`/directories/${this.directory}/mailinglists`, {name: name, ownerId: ownerId })
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
