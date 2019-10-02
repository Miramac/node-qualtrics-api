const fs = require('fs')
const Fetch = require('./fetch')
const sleep = require('util').promisify(setTimeout)

function Qualtrics (config) {
  const fetch = new Fetch(config)
  const self = this

  /**
   * Determine the user ID and other user information associated with an Qualtrics API token
   * @returns {Promise}
   */
  self.whoami = () => {
    return fetch.get('whoami')
  }

  /**
   * Gets list of all users
   * @returns {Promise}
   */
  self.getUsers = () => {
    return fetch.get('users')
  }

  /**
   * Gets general information about a user
   * @param {String} userId
   * @returns {Promise}
   */
  self.getUser = (userId) => {
    return fetch.get('users/' + userId)
  }

  /**
   * Updates user information
   * @param {String} userId
   * @param {object} data
   * @returns {Promise}
   */
  self.updateUser = (userId, data) => {
    return fetch.put('users/' + userId, data)
  }

  /**
   * Gets list of all groups known to the user account
   * @returns {Promise}
   */
  self.getGroups = () => {
    return fetch.get('groups')
  }

  /**
   * Gets information about a specified group
   * @param {String} groupId
   * @returns {Promise}
   */
  self.getGroup = (groupId) => {
    return fetch.get('groups/' + groupId)
  }

  /**
   * Creates a new group
   * @param {String} name
   * @param {String} type
   * @param {String} divisionId
   * @returns {Promise}
   */
  self.addGroup = (name, type, divisionId) => {
    const data = {
      type: type,
      name: name,
      divisionId: divisionId || null
    }
    return fetch.post('groups', data)
  }

  /**
   * Add User to Group
   * @param {String} groupId
   * @param {String} userId
   * @returns {Promise}
   */
  self.addGroupMember = (groupId, userId) => {
    const data = {
      userId: userId
    }
    return fetch.post(`groups/${groupId}/members`, data)
  }

  /**
   * Remove User from Group
   * @param {String} groupId
   * @param {String} userId
   * @returns {Promise}
   */
  self.removeGroupMember = (groupId, userId) => {
    return fetch.delete(`groups/${groupId}/members/${userId}`)
  }

  /**
   * Get Directory Contacts.
   * @param {String} skipToken
   * @param {String} directoryId
   * @returns {Promise}
   */
  self.getDirectoryContacts = (skipToken, directoryId) => {
    directoryId = directoryId || config.DefaultDirectory
    return fetch.get(`/directories/${directoryId}/contacts/?pageSize=100${(skipToken) ? '&skipToken=' + skipToken : ''}`)
  }

  /**
   * Get all Directory Contacts
   * @param {String} directoryId
   * @returns {Promise}
   */
  self.getAllDirectoryContacts = async (directoryId) => {
    let contacts = []
    let skipToken = false
    try {
      do {
        const result = await self.getDirectoryContacts(skipToken, directoryId)
        contacts = contacts.concat(result.elements)
        skipToken = result.nextPage
        skipToken = (skipToken) ? result.nextPage.split('skipToken=')[1] : skipToken
      } while (skipToken)
      return contacts
    } catch (e) {
      return Promise.reject(e)
    }
  }

  /**
   * Get Data for one Directory Contact ab
   * @param {String} contactId
   * @param {String} directoryId
   * @returns {Promise}
   */
  self.getDirectoryContact = (contactId, directoryId) => {
    directoryId = directoryId || config.DefaultDirectory
    return fetch.get(`/directories/${directoryId}/contacts/${contactId}`)
  }

  /**
   * Update Daten einen Directory Contact
   * @param {String} contactId
   * @param {Object} data
   * @param {String} directoryId
   * @returns {Promise}
   */
  self.updateDirectoryContact = (contactId, data, directoryId) => {
    directoryId = directoryId || config.DefaultDirectory
    return fetch.put(`/directories/${directoryId}/contacts/${contactId}`, data)
  }

  /**
   * Löscht Directory Contact
   * @param {String} contactId
   * @param {Object} data
   * @param {String} directoryId
   * @returns {Promise}
   */
  self.removeDirectoryContact = (contactId, directoryId) => {
    directoryId = directoryId || config.DefaultDirectory
    return fetch.delete(`/directories/${directoryId}/contacts/${contactId}`)
  }

  /**
   * Liste aller Kontakte einer Mailingliste
   * @param {String} directoryId
   * @param {String} directoryId
   * @returns {Promise}
   */
  self.getListContacts = (listId, directoryId) => {
    directoryId = directoryId || config.DefaultDirectory
    return fetch.get(`/directories/${directoryId}/mailinglists/${listId}/contacts`)
  }

  /**
   * Liste aller Kontakte einer Mailingliste
   * @param {String} directoryId
   * @param {String} contactId
   * @param {String} directoryId
   * @returns {Promise}
   */
  self.getListContact = (listId, contactId, directoryId) => {
    directoryId = directoryId || config.DefaultDirectory
    return fetch.get(`/directories/${directoryId}/mailinglists/${listId}/contacts/${contactId}`)
  }

  /**
   * Update Daten eines List Contact
   * @param {String} listId
   * @param {String} contactId
   * @param {Object} data
   * @param {String} directoryId
   * @returns {Promise}
   */
  self.updateListContact = (listId, contactId, data, directoryId) => {
    directoryId = directoryId || config.DefaultDirectory
    return fetch.put(`/directories/${directoryId}/mailinglists/${listId}/contacts/${contactId}`, data)
  }

  /**
   * Liste aller Distributions für ein Projekt
   * @param {String} surveyId
   * @param {String} distributionRequestType
   * @returns {Promise}
   */
  self.getDistributions = (surveyId, distributionRequestType) => {
    distributionRequestType = (distributionRequestType) ? `&distributionRequestType=${distributionRequestType}` : ''
    return fetch.get(`/distributions?surveyId=${surveyId}${distributionRequestType}`)
  }

  /**
   * Liste aller Kontakte einer Distribution
   * @param {String} surveyId
   * @param {String} distributionRequestType
   * @returns {Promise}
   */
  self.getDistributionLinks = async (surveyId, distributionId) => {
    let contacts = []
    let skipToken = false
    try {
      do {
        const result = await fetch.get(`/distributions/${distributionId}/links?surveyId=${surveyId}&skipToken=${skipToken || ''}`)
        contacts = contacts.concat(result.elements)
        skipToken = result.nextPage
        skipToken = (skipToken) ? result.nextPage.split('skipToken=')[1] : skipToken
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
  self.getSession = async (surveyId, sessionId) => {
    return fetch.get(`surveys/${surveyId}/sessions/${sessionId}`)
  }

  /**
   * @param {String} surveyId
   * @param {String} sessionId
   * @returns {Promise}
   */
  self.deleteSession = async (surveyId, sessionId) => {
    return fetch.delete(`surveys/${surveyId}/sessions/${sessionId}`)
  }

  /**
   * Erstellt einen Datenexport und speichert diesen in eine Zip Datei
   * @param {String} surveyId
   * @param {String} outputFile
   * @param {String|Object} format|options
   */
  self.downloadResponseExport = async (surveyId, outputFile, options) => {
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
      const result = await fetch.post(`surveys/${surveyId}/export-responses`, options)
      if (result.progressId) {
        return result.progressId
      } else {
        throw new Error('Missing progressId')
      }
    }
    async function progress (surveyId, progressId) {
      const result = await fetch.get(`surveys/${surveyId}/export-responses/${progressId}`)
      if (result.status && result.status === 'complete') {
        return result.fileId
      } else {
        return null
      }
    }
    async function download (surveyId, fileId, outputFile) {
      return new Promise((resolve, reject) => {
        fetch.getRaw(`surveys/${surveyId}/export-responses/${fileId}/file`)
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
  * Löscht eine Umfrageergebnis
  * @param {String} surveyId
  * @param {String} responseId
  */
  self.deleteSurveyResponse = (surveyId, responseId) => {
    return fetch.delete(`surveys/${surveyId}/responses/${responseId}`, { decrementQuotas: true })
  }

  return self
}

module.exports = Qualtrics
