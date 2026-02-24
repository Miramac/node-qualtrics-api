[**qualtrics-api**](../../README.md)

***

[qualtrics-api](../../modules.md) / [qualtrics](../README.md) / default

# Class: default

Defined in: qualtrics.ts:19

Creates a new Qualtrics instance.
 Qualtrics

## Constructors

### Constructor

> **new default**(`config`): `Qualtrics`

Defined in: qualtrics.ts:35

#### Parameters

##### config

[`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

#### Returns

`Qualtrics`

#### Example

```
 const config = {
   apiToken: '<API_TOKEN>',
   baseUrl: 'https://eu.qualtrics.com/API/v3/',
   defaultDirectory: 'POOL_xxxxxxxx'
 }
 const qualtrics = new Qualtrics(config)
```

## Properties

### config

> **config**: [`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

Defined in: qualtrics.ts:20

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

Defined in: qualtrics.ts:21

## Methods

### ~~addDistribution()~~

> **addDistribution**(`surveyId`, `data`): `any`

Defined in: qualtrics.ts:332

Liste aller Distributions für ein Projekt

#### Parameters

##### surveyId

`string`

##### data

`any`

#### Returns

`any`

#### Deprecated

***

### ~~addGroup()~~

> **addGroup**(`name`, `type`, `divisionId?`): `any`

Defined in: qualtrics.ts:154

Creates a new group

#### Parameters

##### name

`string`

##### type

`string`

##### divisionId?

`string`

#### Returns

`any`

#### Deprecated

***

### ~~addGroupMember()~~

> **addGroupMember**(`groupId`, `userId`): `any`

Defined in: qualtrics.ts:165

Add User to Group

#### Parameters

##### groupId

`string`

##### userId

`string`

#### Returns

`any`

#### Deprecated

***

### ~~addListContact()~~

> **addListContact**(`listId`, `data`, `directoryId?`): `any`

Defined in: qualtrics.ts:290

Add List Contact

#### Parameters

##### listId

`string`

##### data

`object`

##### directoryId?

`string`

#### Returns

`any`

#### Deprecated

***

### allGroups()

> **allGroups**(): `Promise`\<`any`[]\>

Defined in: qualtrics.ts:124

Gets list of all groups known to the user account

#### Returns

`Promise`\<`any`[]\>

***

### allUsers()

> **allUsers**(): `Promise`\<`any`\>

Defined in: qualtrics.ts:73

Gets all users in the collection

#### Returns

`Promise`\<`any`\>

#### Url

https://api.qualtrics.com/reference#list-users

#### Example

```
 qualtrics.allUsers()
 .then(users => {
   console.log(users.length)
 }).catch(e => {
   console.error(e)
 })
```

***

### ~~deleteSession()~~

> **deleteSession**(`surveyId`, `sessionId`): `any`

Defined in: qualtrics.ts:363

#### Parameters

##### surveyId

`string`

##### sessionId

`string`

#### Returns

`any`

#### Deprecated

***

### ~~deleteSurveyResponse()~~

> **deleteSurveyResponse**(`surveyId`, `responseId`): `any`

Defined in: qualtrics.ts:383

Delete survey response

#### Parameters

##### surveyId

`string`

##### responseId

`string`

#### Returns

`any`

#### Deprecated

***

### directory()

> **directory**(`directory?`): [`IQDirectory`](../../iq-directory/classes/IQDirectory.md)

Defined in: qualtrics.ts:180

#### Parameters

##### directory?

`string`

#### Returns

[`IQDirectory`](../../iq-directory/classes/IQDirectory.md)

***

### downloadResponseExport()

> **downloadResponseExport**(`surveyId`, `outputFile`, `options`): `Promise`\<`void`\>

Defined in: qualtrics.ts:373

Create a Exportfile with the survey response data

#### Parameters

##### surveyId

`string`

##### outputFile

`string`

##### options

`any`

#### Returns

`Promise`\<`void`\>

***

### ~~getAllDirectoryContacts()~~

> **getAllDirectoryContacts**(`directoryId?`): `Promise`\<`any`[]\>

Defined in: qualtrics.ts:200

Get all Directory Contacts

#### Parameters

##### directoryId?

`string`

#### Returns

`Promise`\<`any`[]\>

#### Deprecated

***

### ~~getDirectoryContact()~~

> **getDirectoryContact**(`contactId`, `directoryId?`): `Promise`\<`any`\>

Defined in: qualtrics.ts:211

Get data for one Directory Contact

#### Parameters

##### contactId

`string`

##### directoryId?

`string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

***

### ~~getDirectoryContacts()~~

> **getDirectoryContacts**(`skipToken?`, `directoryId?`): `Promise`\<`any`\>

Defined in: qualtrics.ts:190

Get Directory Contacts. PageSize 100

#### Parameters

##### skipToken?

`string`

##### directoryId?

`string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

***

### ~~getDistributionLinks()~~

> **getDistributionLinks**(`surveyId`, `distributionId`): `Promise`\<\{ `result`: \{ `contacts`: `any`[]; \}; \}\>

Defined in: qualtrics.ts:343

Liste aller Kontakte einer Distribution

#### Parameters

##### surveyId

`string`

##### distributionId

`string`

#### Returns

`Promise`\<\{ `result`: \{ `contacts`: `any`[]; \}; \}\>

#### Deprecated

***

### ~~getDistributions()~~

> **getDistributions**(`surveyId`, `distributionRequestType?`): `Promise`\<`any`\>

Defined in: qualtrics.ts:322

Liste aller Distributions für ein Projekt

#### Parameters

##### surveyId

`string`

##### distributionRequestType?

`string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

***

### ~~getGroup()~~

> **getGroup**(`groupId`): `Promise`\<`any`\>

Defined in: qualtrics.ts:142

Gets information about a specified group

#### Parameters

##### groupId

`string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

***

### ~~getGroups()~~

> **getGroups**(): `Promise`\<`any`[]\>

Defined in: qualtrics.ts:132

Gets list of all groups known to the user account

#### Returns

`Promise`\<`any`[]\>

#### Deprecated

***

### ~~getListContact()~~

> **getListContact**(`listId`, `contactId`, `directoryId?`): `Promise`\<`any`\>

Defined in: qualtrics.ts:278

Get contact from mailinglists

#### Parameters

##### listId

`string`

##### contactId

`string`

##### directoryId?

`string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

***

### ~~getListContacts()~~

> **getListContacts**(`listId`, `directoryId?`): `Promise`\<`any`\>

Defined in: qualtrics.ts:266

Get all mailinglists contacts

#### Parameters

##### listId

`string`

##### directoryId?

`string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

***

### ~~getSession()~~

> **getSession**(`surveyId`, `sessionId`): `Promise`\<`any`\>

Defined in: qualtrics.ts:353

#### Parameters

##### surveyId

`string`

##### sessionId

`string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

***

### ~~getUser()~~

> **getUser**(`userId`): `Promise`\<`any`\>

Defined in: qualtrics.ts:102

Gets general information about a user

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

Use: user('id').get()

#### Url

https://api.qualtrics.com/reference#get-user

***

### ~~getUsers()~~

> **getUsers**(): `Promise`\<`any`\>

Defined in: qualtrics.ts:91

Gets all users in the collection

#### Returns

`Promise`\<`any`\>

#### Deprecated

Use: allUsers()

#### Url

https://api.qualtrics.com/reference#list-users

#### Example

```
 qualtrics.getUsers()
 .then(users => {
   console.log(users.length)
 }).catch(e => {
   console.error(e)
 })
```

***

### group()

> **group**(`id`): [`Group`](../../group/classes/Group.md)

Defined in: qualtrics.ts:117

#### Parameters

##### id

`string`

#### Returns

[`Group`](../../group/classes/Group.md)

***

### mailingList()

> **mailingList**(`id`, `directoryId?`): [`MailingList`](../../mailing-list/classes/MailingList.md)

Defined in: qualtrics.ts:255

#### Parameters

##### id

`string`

##### directoryId?

`string`

#### Returns

[`MailingList`](../../mailing-list/classes/MailingList.md)

MailingList

***

### ~~removeDirectoryContact()~~

> **removeDirectoryContact**(`contactId`, `directoryId?`): `any`

Defined in: qualtrics.ts:234

Delete Directory Contact

#### Parameters

##### contactId

`string`

##### directoryId?

`string`

#### Returns

`any`

#### Deprecated

***

### ~~removeGroupMember()~~

> **removeGroupMember**(`groupId`, `userId`): `any`

Defined in: qualtrics.ts:176

Remove User from Group

#### Parameters

##### groupId

`string`

##### userId

`string`

#### Returns

`any`

#### Deprecated

***

### survey()

> **survey**(`id`): [`Survey`](../../survey/classes/Survey.md)

Defined in: qualtrics.ts:312

Returns a new survey distribution object

#### Parameters

##### id

`string`

SurveyId

#### Returns

[`Survey`](../../survey/classes/Survey.md)

***

### ~~unsubscribedDirectoryContact()~~

> **unsubscribedDirectoryContact**(`contactId`, `directoryId?`): `any`

Defined in: qualtrics.ts:245

Unsubscribed Contact im Directory aus

#### Parameters

##### contactId

`string`

##### directoryId?

`string`

#### Returns

`any`

#### Deprecated

***

### ~~updateDirectoryContact()~~

> **updateDirectoryContact**(`contactId`, `data`, `directoryId?`): `any`

Defined in: qualtrics.ts:223

Update Directory Contact

#### Parameters

##### contactId

`string`

##### data

`object`

##### directoryId?

`string`

#### Returns

`any`

#### Deprecated

***

### ~~updateListContact()~~

> **updateListContact**(`listId`, `contactId`, `data`, `directoryId?`): `any`

Defined in: qualtrics.ts:303

Update Daten eines List Contact

#### Parameters

##### listId

`string`

##### contactId

`string`

##### data

`object`

##### directoryId?

`string`

#### Returns

`any`

#### Deprecated

***

### ~~updateUser()~~

> **updateUser**(`userId`, `data`): `any`

Defined in: qualtrics.ts:113

Updates user information

#### Parameters

##### userId

`string`

##### data

`object`

#### Returns

`any`

#### Deprecated

Use: user('id').update({data})

***

### user()

> **user**(`id`): [`User`](../../user/classes/User.md)

Defined in: qualtrics.ts:55

#### Parameters

##### id

`string`

{String} User ID

#### Returns

[`User`](../../user/classes/User.md)

#### Example

```
const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)

***

### whoami()

> **whoami**(): `Promise`\<`any`\>

Defined in: qualtrics.ts:44

Determine the user ID and other user information associated with an Qualtrics API token

#### Returns

`Promise`\<`any`\>

#### Url

https://api.qualtrics.com/reference#who-am-i
