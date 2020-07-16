const fs = require('fs')
const Fetch = require('./fetch')
const sleep = require('util').promisify(setTimeout)

/**
 * Creates a new Qualtrics instance.
 * @class Qualtrics class
 * @param {object} config
 * @example
 *  const config = {
 *    apiToken: '<API_TOKEN>',
 *    baseUrl: 'https://eu.qualtrics.com/API/v3/',
 *    DefaultDirectory: 'POOL_xxxxxxxx'
 *  }
 *  const qualtrics = new Qualtrics(config)
 */
function Qualtrics (config) {
  this.config = config
  this.fetch = new Fetch(this.config)
}
/**
 * Determine the user ID and other user information associated with an Qualtrics API token
 * @returns {Promise}
 * @url https://api.qualtrics.com/reference#who-am-i
 */
Qualtrics.prototype.whoami = function () {
  return this.fetch.get('whoami')
}

/**
 * Gets all users in the collection
 * @returns {Promise}
 * @url https://api.qualtrics.com/reference#list-users 
 * @example
 *  qualtrics.getUsers()
 *  .then(users => {
 *    console.log(users.length)
 *  }).catch(e => {
 *    console.error(e)
 *  })
 */
Qualtrics.prototype.getUsers = function () {
  return this.fetch.get('users')
}

/**
 * Gets general information about a user
 * @param {String} userId
 * @returns {Promise}
 * @Url https://api.qualtrics.com/reference#get-user
 */
Qualtrics.prototype.getUser = function (userId) {
  return this.fetch.get('users/' + userId)
}

/**
 * Updates user information
 * @param {String} userId
 * @param {object} data
 * @returns {Promise}
 */
Qualtrics.prototype.updateUser = function (userId, data) {
  return this.fetch.put('users/' + userId, data)
}

/**
   * Gets list of all groups known to the user account
   * @returns {Promise}
   */
Qualtrics.prototype.getGroups = function () {
  return this.fetch.get('groups')
}

/**
   * Gets information about a specified group
   * @param {String} groupId
   * @returns {Promise}
   */
Qualtrics.prototype.getGroup = function (groupId) {
  return this.fetch.get('groups/' + groupId)
}

/**
   * Creates a new group
   * @param {String} name
   * @param {String} type
   * @param {String} divisionId
   * @returns {Promise}
   */
Qualtrics.prototype.addGroup = function (name, type, divisionId) {
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
Qualtrics.prototype.addGroupMember = function (groupId, userId) {
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
Qualtrics.prototype.removeGroupMember = function (groupId, userId) {
  return this.fetch.delete(`groups/${groupId}/members/${userId}`)
}

/**
   * Get Directory Contacts. PageSize 100
   * @param {String} skipToken
   * @param {String} directoryId
   * @returns {Promise}
   */
Qualtrics.prototype.getDirectoryContacts = function (skipToken, directoryId) {
  directoryId = directoryId || this.config.DefaultDirectory
  return this.fetch.get(`/directories/${directoryId}/contacts/?pageSize=100${(skipToken) ? '&skipToken=' + skipToken : ''}`)
}

/**
   * Get all Directory Contacts
   * @param {String} directoryId
   * @returns {Promise}
   */
Qualtrics.prototype.getAllDirectoryContacts = async function (directoryId) {
  let contacts = []
  let skipToken = false
  try {
    do {
      const res = await this.getDirectoryContacts(skipToken, directoryId)
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
   * @param {String} directoryId
   * @returns {Promise}
   */
Qualtrics.prototype.getDirectoryContact = function (contactId, directoryId) {
  directoryId = directoryId || this.config.DefaultDirectory
  return this.fetch.get(`/directories/${directoryId}/contacts/${contactId}`)
}

/**
   * Update Directory Contact
   * @param {String} contactId
   * @param {Object} data
   * @param {String} directoryId
   * @returns {Promise}
   */
Qualtrics.prototype.updateDirectoryContact = function (contactId, data, directoryId) {
  directoryId = directoryId || this.config.DefaultDirectory
  return this.fetch.put(`/directories/${directoryId}/contacts/${contactId}`, data)
}

/**
   * delete Directory Contact
   * @param {String} contactId
   * @param {Object} data
   * @param {String} directoryId
   * @returns {Promise}
   */
Qualtrics.prototype.removeDirectoryContact = function (contactId, directoryId) {
  directoryId = directoryId || this.config.DefaultDirectory
  return this.fetch.delete(`/directories/${directoryId}/contacts/${contactId}`)
}

/**
  * Unsubscribed Contact im Directory aus
  * @param {String} contactId
  * @param {String} directoryId
  * @returns {Promise}
  */
Qualtrics.prototype.unsubscribedDirectoryContact = function (contactId, directoryId) {
  return Qualtrics.updateDirectoryContact(contactId, { unsubscribed: true }, directoryId)
}

/**
   * Liste aller Kontakte einer Mailingliste
   * @param {String} listId
   * @param {String} directoryId
   * @returns {Promise}
   */
Qualtrics.prototype.getListContacts = function (listId, directoryId) {
  directoryId = directoryId || this.config.DefaultDirectory
  return this.fetch.get(`/directories/${directoryId}/mailinglists/${listId}/contacts`)
}

/**
   * Liste aller Kontakte einer Mailingliste
   * @param {String} directoryId
   * @param {String} contactId
   * @param {String} directoryId
   * @returns {Promise}
   */
Qualtrics.prototype.getListContact = function (listId, contactId, directoryId) {
  directoryId = directoryId || this.config.DefaultDirectory
  return this.fetch.get(`/directories/${directoryId}/mailinglists/${listId}/contacts/${contactId}`)
}

/**
   * Update Daten eines List Contact
   * @param {String} listId
   * @param {String} contactId
   * @param {Object} data
   * @param {String} directoryId
   * @returns {Promise}
   */
Qualtrics.prototype.updateListContact = function (listId, contactId, data, directoryId) {
  directoryId = directoryId || this.config.DefaultDirectory
  return this.fetch.put(`/directories/${directoryId}/mailinglists/${listId}/contacts/${contactId}`, data)
}

/**
   * Liste aller Distributions für ein Projekt
   * @param {String} surveyId
   * @param {String} distributionRequestType
   * @returns {Promise}
   */
Qualtrics.prototype.getDistributions = function (surveyId, distributionRequestType) {
  distributionRequestType = (distributionRequestType) ? `&distributionRequestType=${distributionRequestType}` : ''
  return this.fetch.get(`/distributions?surveyId=${surveyId}${distributionRequestType}`)
}

/**
   * Liste aller Kontakte einer Distribution
   * @param {String} surveyId
   * @param {String} distributionRequestType
   * @returns {Promise}
   */
Qualtrics.prototype.getDistributionLinks = async function (surveyId, distributionId) {
  let contacts = []
  let skipToken = false
  try {
    do {
      const res = await this.fetch.get(`/distributions/${distributionId}/links?surveyId=${surveyId}&skipToken=${skipToken || ''}`)
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
Qualtrics.prototype.getSession = async function (surveyId, sessionId) {
  return this.fetch.get(`surveys/${surveyId}/sessions/${sessionId}`)
}

/**
   * @param {String} surveyId
   * @param {String} sessionId
   * @returns {Promise}
   */
Qualtrics.prototype.deleteSession = async function (surveyId, sessionId) {
  return this.fetch.delete(`surveys/${surveyId}/sessions/${sessionId}`)
}

/**
   * Erstellt einen Datenexport und speichert diesen in eine Zip Datei
   * @param {String} surveyId
   * @param {String} outputFile
   * @param {String|Object} format|options
   */
Qualtrics.prototype.downloadResponseExport = async function (surveyId, outputFile, options) {
  options = options || {}
  options = (typeof options === 'string') ? { format: options } : options
  options.format = options.format || 'json'
  const progressId = await create(surveyId)
  if (!progressId) return
  let fileId = null
  while (fileId === null) {
    fileId = await progress(surveyId, progressId)
    await sleep(1000) // Progess nur 1x in der Sekunde abfragen
  }
  await download(surveyId, fileId, outputFile)

  async function create (surveyId) {
    const res = await this.fetch.post(`surveys/${surveyId}/export-responses`, options)
    if (res.meta.error) {
      throw new Error(res.meta.error.errorMessage)
    } else {
      if (res.result.progressId) {
        return res.result.progressId
      }
    }
  }
  async function progress (surveyId, progressId) {
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
  async function download (surveyId, fileId, outputFile) {
    return new Promise((resolve, reject) => {
      this.fetch.getRaw(`surveys/${surveyId}/export-responses/${fileId}/file`)
        .then(res => {
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
}

/**
  * Löscht Umfrageergebnisse
  * @param {String} surveyId
  * @param {String} responseId
  */
Qualtrics.prototype.deleteSurveyResponse = function (surveyId, responseId) {
  return this.fetch.delete(`surveys/${surveyId}/responses/${responseId}`, { decrementQuotas: true })
}

module.exports = Qualtrics
