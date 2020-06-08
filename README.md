# node-qualtrics-api
A NodeJS package for Qualtrics REST API https://api.qualtrics.com/reference

## Install
````
npm install qualtrics-api
````

## Basic usage

````js
const Qualtrics = require('qualtrics-api')

const config = {
  apiToken: '<API_TOKEN>',
  baseUrl: 'https://eu.qualtrics.com/API/v3/',
  DefaultDirectory: 'POOL_xxxxxxxx'
}

const qualtrics = new Qualtrics(config)
qualtrics.whoami()
  .then(result => {
    console.log(result)
  })
  .catch(console.error)

````

# API

<a name="Qualtrics"></a>
## Qualtrics
**Kind**: global class  

* [Qualtrics](#Qualtrics)
    * [new Qualtrics(config)](#new_Qualtrics_new)
    * [.whoami()](#Qualtrics+whoami) ⇒ <code>Promise</code>
    * [.getUsers()](#Qualtrics+getUsers) ⇒ <code>Promise</code>
    * [.getUser(userId)](#Qualtrics+getUser) ⇒ <code>Promise</code>
    * [.updateUser(userId, data)](#Qualtrics+updateUser) ⇒ <code>Promise</code>
    * [.getGroups()](#Qualtrics+getGroups) ⇒ <code>Promise</code>
    * [.getGroup(groupId)](#Qualtrics+getGroup) ⇒ <code>Promise</code>
    * [.addGroup(name, type, divisionId)](#Qualtrics+addGroup) ⇒ <code>Promise</code>
    * [.addGroupMember(groupId, userId)](#Qualtrics+addGroupMember) ⇒ <code>Promise</code>
    * [.removeGroupMember(groupId, userId)](#Qualtrics+removeGroupMember) ⇒ <code>Promise</code>
    * [.getDirectoryContacts(skipToken, directoryId)](#Qualtrics+getDirectoryContacts) ⇒ <code>Promise</code>
    * [.getAllDirectoryContacts(directoryId)](#Qualtrics+getAllDirectoryContacts) ⇒ <code>Promise</code>
    * [.getDirectoryContact(contactId, directoryId)](#Qualtrics+getDirectoryContact) ⇒ <code>Promise</code>
    * [.updateDirectoryContact(contactId, data, directoryId)](#Qualtrics+updateDirectoryContact) ⇒ <code>Promise</code>
    * [.removeDirectoryContact(contactId, data, directoryId)](#Qualtrics+removeDirectoryContact) ⇒ <code>Promise</code>
    * [.unsubscribedDirectoryContact(contactId, directoryId)](#Qualtrics+unsubscribedDirectoryContact) ⇒ <code>Promise</code>
    * [.getListContacts(listId, directoryId)](#Qualtrics+getListContacts) ⇒ <code>Promise</code>
    * [.getListContact(directoryId, contactId, directoryId)](#Qualtrics+getListContact) ⇒ <code>Promise</code>
    * [.updateListContact(listId, contactId, data, directoryId)](#Qualtrics+updateListContact) ⇒ <code>Promise</code>
    * [.getDistributions(surveyId, distributionRequestType)](#Qualtrics+getDistributions) ⇒ <code>Promise</code>
    * [.getDistributionLinks(surveyId, distributionRequestType)](#Qualtrics+getDistributionLinks) ⇒ <code>Promise</code>
    * [.getSession(surveyId, sessionId)](#Qualtrics+getSession) ⇒ <code>Promise</code>
    * [.deleteSession(surveyId, sessionId)](#Qualtrics+deleteSession) ⇒ <code>Promise</code>
    * [.downloadResponseExport(surveyId, outputFile, format|options)](#Qualtrics+downloadResponseExport)
    * [.deleteSurveyResponse(surveyId, responseId)](#Qualtrics+deleteSurveyResponse)

<a name="new_Qualtrics_new"></a>

### new Qualtrics(config)
Qualtrics


| Param | Type |
| --- | --- |
| config | <code>object</code> |

<a name="Qualtrics+whoami"></a>

### qualtrics.whoami() ⇒ <code>Promise</code>
Determine the user ID and other user information associated with an Qualtrics API token

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  
<a name="Qualtrics+getUsers"></a>

### qualtrics.getUsers() ⇒ <code>Promise</code>
Gets list of all users

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  
<a name="Qualtrics+getUser"></a>

### qualtrics.getUser(userId) ⇒ <code>Promise</code>
Gets general information about a user

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| userId | <code>String</code> |

<a name="Qualtrics+updateUser"></a>

### qualtrics.updateUser(userId, data) ⇒ <code>Promise</code>
Updates user information

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| userId | <code>String</code> |
| data | <code>object</code> |

<a name="Qualtrics+getGroups"></a>

### qualtrics.getGroups() ⇒ <code>Promise</code>
Gets list of all groups known to the user account

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  
<a name="Qualtrics+getGroup"></a>

### qualtrics.getGroup(groupId) ⇒ <code>Promise</code>
Gets information about a specified group

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| groupId | <code>String</code> |

<a name="Qualtrics+addGroup"></a>

### qualtrics.addGroup(name, type, divisionId) ⇒ <code>Promise</code>
Creates a new group

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| name | <code>String</code> |
| type | <code>String</code> |
| divisionId | <code>String</code> |

<a name="Qualtrics+addGroupMember"></a>

### qualtrics.addGroupMember(groupId, userId) ⇒ <code>Promise</code>
Add User to Group

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| groupId | <code>String</code> |
| userId | <code>String</code> |

<a name="Qualtrics+removeGroupMember"></a>

### qualtrics.removeGroupMember(groupId, userId) ⇒ <code>Promise</code>
Remove User from Group

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| groupId | <code>String</code> |
| userId | <code>String</code> |

<a name="Qualtrics+getDirectoryContacts"></a>

### qualtrics.getDirectoryContacts(skipToken, directoryId) ⇒ <code>Promise</code>
Get Directory Contacts. PageSize 100

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| skipToken | <code>String</code> |
| directoryId | <code>String</code> |

<a name="Qualtrics+getAllDirectoryContacts"></a>

### qualtrics.getAllDirectoryContacts(directoryId) ⇒ <code>Promise</code>
Get all Directory Contacts

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| directoryId | <code>String</code> |

<a name="Qualtrics+getDirectoryContact"></a>

### qualtrics.getDirectoryContact(contactId, directoryId) ⇒ <code>Promise</code>
Get data for one Directory Contact

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| contactId | <code>String</code> |
| directoryId | <code>String</code> |

<a name="Qualtrics+updateDirectoryContact"></a>

### qualtrics.updateDirectoryContact(contactId, data, directoryId) ⇒ <code>Promise</code>
Update Directory Contact

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| contactId | <code>String</code> |
| data | <code>Object</code> |
| directoryId | <code>String</code> |

<a name="Qualtrics+removeDirectoryContact"></a>

### qualtrics.removeDirectoryContact(contactId, data, directoryId) ⇒ <code>Promise</code>
delete Directory Contact

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| contactId | <code>String</code> |
| data | <code>Object</code> |
| directoryId | <code>String</code> |

<a name="Qualtrics+unsubscribedDirectoryContact"></a>

### qualtrics.unsubscribedDirectoryContact(contactId, directoryId) ⇒ <code>Promise</code>
Unsubscribed Contact im Directory aus

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| contactId | <code>String</code> |
| directoryId | <code>String</code> |

<a name="Qualtrics+getListContacts"></a>

### qualtrics.getListContacts(listId, directoryId) ⇒ <code>Promise</code>
Liste aller Kontakte einer Mailingliste

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| listId | <code>String</code> |
| directoryId | <code>String</code> |

<a name="Qualtrics+getListContact"></a>

### qualtrics.getListContact(directoryId, contactId, directoryId) ⇒ <code>Promise</code>
Liste aller Kontakte einer Mailingliste

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| directoryId | <code>String</code> |
| contactId | <code>String</code> |
| directoryId | <code>String</code> |

<a name="Qualtrics+updateListContact"></a>

### qualtrics.updateListContact(listId, contactId, data, directoryId) ⇒ <code>Promise</code>
Update Daten eines List Contact

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| listId | <code>String</code> |
| contactId | <code>String</code> |
| data | <code>Object</code> |
| directoryId | <code>String</code> |

<a name="Qualtrics+getDistributions"></a>

### qualtrics.getDistributions(surveyId, distributionRequestType) ⇒ <code>Promise</code>
Liste aller Distributions für ein Projekt

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| surveyId | <code>String</code> |
| distributionRequestType | <code>String</code> |

<a name="Qualtrics+getDistributionLinks"></a>

### qualtrics.getDistributionLinks(surveyId, distributionRequestType) ⇒ <code>Promise</code>
Liste aller Kontakte einer Distribution

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| surveyId | <code>String</code> |
| distributionRequestType | <code>String</code> |

<a name="Qualtrics+getSession"></a>

### qualtrics.getSession(surveyId, sessionId) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| surveyId | <code>String</code> |
| sessionId | <code>String</code> |

<a name="Qualtrics+deleteSession"></a>

### qualtrics.deleteSession(surveyId, sessionId) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| surveyId | <code>String</code> |
| sessionId | <code>String</code> |

<a name="Qualtrics+downloadResponseExport"></a>

### qualtrics.downloadResponseExport(surveyId, outputFile, format|options)
Erstellt einen Datenexport und speichert diesen in eine Zip Datei

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| surveyId | <code>String</code> |
| outputFile | <code>String</code> |
| format|options | <code>String</code> \| <code>Object</code> |

<a name="Qualtrics+deleteSurveyResponse"></a>

### qualtrics.deleteSurveyResponse(surveyId, responseId)
Löscht Umfrageergebnisse

**Kind**: instance method of [<code>Qualtrics</code>](#Qualtrics)  

| Param | Type |
| --- | --- |
| surveyId | <code>String</code> |
| responseId | <code>String</code> |
