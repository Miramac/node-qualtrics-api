
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

export class Qualtrics {
  config: QualtricsOptions
  fetch: Fetch
  /**
  * @param Options Qualtrics Login data
  * @example
  * ```
  *  import Qualtrics from '../lib/qualtrics'
  *  const config = {
  *    apiToken: '<API_TOKEN>',
  *    apiUrl: 'https://eu.qualtrics.com/API/v3/',
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
    return new User(this.config).getAll()
  }

  /**
   * Retrieve information about a specified group.
   * @param id {String} Group ID
   * @returns 
   */
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
   * Returns a new IQDirectory object
   * @param directory {String} Directory ID {POOL_xxxxxxxxxxxxxxxx}
   * @returns 
   */
  directory(directory?: string) {
    return new IQDirectory(this.config, directory)
  }

  /**
   * Returns a new mailing list object
   * @param id {String} Mailing List ID {ML_xxxxxxxxxxxxxxxx
   * @param directoryId 
   * @returns MailingList
   */
  mailingList(id: string, directoryId?: string) {
    return new MailingList(this.config, id, directoryId)
  }

  /**
   * Returns a new survey distribution object
   * @param id {String} Survey ID
   * @returns {Survey}
   */
  survey(id: string) {
    return new Survey(this.config, id)
  }

}
