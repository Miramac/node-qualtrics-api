
import * as fs from 'fs'
import { QualtricsOptions } from './interfaces/options'
import { Fetch } from './fetch'
import { User } from './user'
import { Group } from './group'
import { IQDirectory } from './iq-directory'
import { Survey } from './survey'
import { MailingList } from './mailing-list'

/** @ignore */
const delay = require('util').promisify(setTimeout)

/**
 * Creates a new Qualtrics instance.
 * @class Qualtrics
 */
class Qualtrics {
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
   * @param id {String} User ID   
   * @returns {User}
   * @example
   * ```
   * const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)
   */
  user (id: string) {
    return new User(this.config, id)
  }

  /**
   * Gets all users in the collection
   * @returns {Promise}
   * @url https://api.qualtrics.com/reference#list-users
   * @example
   * ```
   *  qualtrics.allUsers()
   *  .then(users => {
   *    console.log(users.length)
   *  }).catch(e => {
   *    console.error(e)
   *  })
   * ```
   */
  allUsers () {
    return this.fetch.get('users')
  }
  /**
   * Gets all users in the collection
   * @deprecated Use: allUsers()
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
    return this.allUsers()
  }

  /**
   * Gets general information about a user
   * @deprecated Use: user('id').get()
   * @param {String} userId
   * @returns {Promise}
   * @Url https://api.qualtrics.com/reference#get-user
   */
  getUser(userId: string) {
    return this.user(userId).get()
  }

  /**
   * Updates user information
   * @deprecated Use: user('id').update({data})
   * @param {String} userId
   * @param {object} data
   * @returns {Promise}
   */
  updateUser(userId: string, data: object) {
    return this.user(userId).update(data)
  }

  group(id: string) {
    return new Group(this.config, id)
  } 
  /**
  * Gets list of all groups known to the user account
  * @returns {Promise}
  */
  allGroups() {
    return new Group(this.config).getAll()
  }
  /**
     * Gets list of all groups known to the user account
     * @deprecated
     * @returns {Promise}
     */
  getGroups() {
    return this.allGroups()
  }

  /**
     * Gets information about a specified group
     * @deprecated
     * @param {String} groupId
     * @returns {Promise}
     */
  getGroup(groupId: string) {
    return this.group(groupId).get()
  }

  /**
     * Creates a new group
     * @deprecated
     * @param {String} name
     * @param {String} type
     * @param {String} divisionId
     * @returns {Promise}
     */
  addGroup(name: string, type: string, divisionId?: string) {
    return new Group(this.config).add(name, type, divisionId)
  }

  /**
     * Add User to Group
     * @deprecated
     * @param {String} groupId
     * @param {String} userId
     * @returns {Promise}
     */
  addGroupMember(groupId: string, userId: string) {
    return this.group(groupId).addMember(userId)
  }

  /**
     * Remove User from Group
     * @deprecated
     * @param {String} groupId
     * @param {String} userId
     * @returns {Promise}
     */
  removeGroupMember(groupId: string, userId: string) {
    return this.group(groupId).removeMember(userId)
  }

  directory(directory?: string) {
    return new IQDirectory(this.config, directory)
  }
  /**
     * Get Directory Contacts. PageSize 100
     * @deprecated
     * @param {String} skipToken
     * @param {String=} directoryId
     * @returns {Promise}
     */
  getDirectoryContacts(skipToken?: string, directoryId?: string) {
    return this.directory(directoryId).getContacts(skipToken)
  }

  /**
     * Get all Directory Contacts
     * @deprecated
     * @param {String=} directoryId
     * @returns {Promise}
     */
  async getAllDirectoryContacts (directoryId?: string) {
    return this.directory(directoryId).getAllContacts()
  }

  /**
     * Get data for one Directory Contact
     * @deprecated
     * @param {String} contactId
     * @param {String=} directoryId
     * @returns {Promise}
     */
  getDirectoryContact(contactId: string, directoryId?: string) {
    return this.directory(directoryId).getContact(contactId)
  }

  /**
     * Update Directory Contact
     * @deprecated
     * @param {String} contactId
     * @param {Object} data
     * @param {String=} directoryId
     * @returns {Promise}
     */
  updateDirectoryContact(contactId: string, data: object, directoryId?: string) {
    return this.directory(directoryId).updateContact(contactId, data)
  }

  /**
     * Delete Directory Contact
     * @deprecated
     * @param {String} contactId
     * @param {String=} directoryId
     * @returns {Promise}
     */
  removeDirectoryContact(contactId: string, directoryId?: string) {
    return this.directory(directoryId).removeContact(contactId)
  }

  /**
    * Unsubscribed Contact im Directory aus
    * @deprecated
    * @param {String} contactId
    * @param {String=} directoryId
    * @returns {Promise}
    */
  unsubscribedDirectoryContact(contactId: string, directoryId?: string) {
    return this.directory(directoryId).unsubscribedContact(contactId)
  }

  /**
   * 
   * @param userId 
   * @param name 
   * @url https://api.qualtrics.com/api-reference/reference/mailingLists.json/paths/~1directories~1%7BdirectoryId%7D~1mailinglists/post
   */
  addMailingList(ownerId: string, name: string) {
    return this.fetch.post(`/directories/{directoryId}/mailinglists`, {name: name, ownerId: ownerId })
  }
  
  /**
   * 
   * @param id 
   * @param directoryId 
   * @returns MailingList
   */
  mailingList(id: string, directoryId?: string) {
    return new MailingList(this.config, id, directoryId)
  }

  /**
     * Get all mailinglists contacts
     * @deprecated
     * @param {String} listId
     * @param {String=} directoryId
     * @returns {Promise}
     */
  getListContacts(listId: string, directoryId?: string) {
    return this.mailingList(listId, directoryId).getContacts()
  }

  /**
     * Get contact from mailinglists
     * @deprecated
     * @param {String} listId
     * @param {String} contactId
     * @param {String=} directoryId
     * @returns {Promise}
     */
  getListContact(listId: string, contactId: string, directoryId?: string) {
    return this.mailingList(listId, directoryId).getContact(contactId)
  }

  /**
     * Add List Contact
     * @deprecated
     * @param {String} listId
     * @param {Object} data
     * @param {String=} directoryId
     * @returns {Promise}
     */
    addListContact(listId: string, data: object, directoryId?: string) {
    return this.mailingList(listId, directoryId).addContact(data)
    }

  /**
     * Update Daten eines List Contact
     * @deprecated
     * @param {String} listId
     * @param {String} contactId
     * @param {Object} data
     * @param {String=} directoryId
     * @returns {Promise}
     */
  updateListContact(listId: string, contactId: string, data: object, directoryId?: string) {
    return this.mailingList(listId, directoryId).updateContact(contactId, data)
  }

  /**
   * Returns a new survey distribution object
   * @param id SurveyId
   * @returns {Survey}
   */
  survey(id: string) {
    return new Survey(this.config, id)
  }
  /**
     * Liste aller Distributions für ein Projekt
     * @deprecated
     * @param {String} surveyId
     * @param {String} distributionRequestType
     * @returns {Promise}
     */
  getDistributions(surveyId: string, distributionRequestType?: string) {
    return this.survey(surveyId).getAll(distributionRequestType)
  }
/**
     * Liste aller Distributions für ein Projekt
     * @deprecated
     * @param {String} surveyId
     * @param {Object} data
     * @returns {Promise}
     */
    addDistribution(surveyId: string, data: any) {
      return this.survey(surveyId).addDistribution(data.mailingListId, data)
    }
  
  /**
     * Liste aller Kontakte einer Distribution
     * @deprecated
     * @param {String} surveyId
     * @param {String} distributionRequestType
     * @returns {Promise}
     */
  async getDistributionLinks (surveyId: string, distributionId: string) {
    return this.survey(surveyId).getLinks(distributionId)
  }

  /**
     * @deprecated
     * @param {String} surveyId
     * @param {String} sessionId
     * @returns {Promise}
     */
  getSession (surveyId: string, sessionId: string) {
    return this.survey(surveyId).getSession(sessionId)
  }

  /**
     * @deprecated
     * @param {String} surveyId
     * @param {String} sessionId
     * @returns {Promise}
     */
  deleteSession (surveyId: string, sessionId: string) {
    return this.survey(surveyId).deleteSession(sessionId)
  }

  /**
     * Create a Exportfile with the survey response data
     * @param {String} surveyId
     * @param {String} outputFile
     * @param {String|Object} format|options
     */
  downloadResponseExport (surveyId: string, outputFile: string, options: any) {
    return this.survey(surveyId).downloadResponseExport(outputFile, options)
  }

  /**
    * Delete survey response
    * @deprecated
    * @param {String} surveyId
    * @param {String} responseId
    */
  deleteSurveyResponse(surveyId: string, responseId: string) {
    return this.survey(surveyId).deleteResponse(responseId)
  }
}

export = Qualtrics
