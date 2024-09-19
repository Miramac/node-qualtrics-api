[**qualtrics-api**](../../README.md) • **Docs**

***

[qualtrics-api](../../modules.md) / [qualtrics](../README.md) / default

# Class: default

Creates a new Qualtrics instance.
 Qualtrics

## Constructors

### new default()

> **new default**(`config`): [`default`](default.md)

#### Parameters

• **config**: `QualtricsOptions`

#### Returns

[`default`](default.md)

#### Example

```
 const config = {
   apiToken: '<API_TOKEN>',
   baseUrl: 'https://eu.qualtrics.com/API/v3/',
   defaultDirectory: 'POOL_xxxxxxxx'
 }
 const qualtrics = new Qualtrics(config)
```

#### Defined in

[qualtrics.ts:35](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L35)

## Properties

### config

> **config**: `QualtricsOptions`

#### Defined in

[qualtrics.ts:20](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L20)

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

#### Defined in

[qualtrics.ts:21](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L21)

## Methods

### ~~addDistribution()~~

> **addDistribution**(`surveyId`, `data`): `any`

Liste aller Distributions für ein Projekt

#### Parameters

• **surveyId**: `string`

• **data**: `any`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:332](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L332)

***

### ~~addGroup()~~

> **addGroup**(`name`, `type`, `divisionId`?): `any`

Creates a new group

#### Parameters

• **name**: `string`

• **type**: `string`

• **divisionId?**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:154](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L154)

***

### ~~addGroupMember()~~

> **addGroupMember**(`groupId`, `userId`): `any`

Add User to Group

#### Parameters

• **groupId**: `string`

• **userId**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:165](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L165)

***

### ~~addListContact()~~

> **addListContact**(`listId`, `data`, `directoryId`?): `any`

Add List Contact

#### Parameters

• **listId**: `string`

• **data**: `object`

• **directoryId?**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:290](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L290)

***

### allGroups()

> **allGroups**(): `Promise`\<`any`[]\>

Gets list of all groups known to the user account

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[qualtrics.ts:124](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L124)

***

### allUsers()

> **allUsers**(): `Promise`\<`any`\>

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

#### Defined in

[qualtrics.ts:73](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L73)

***

### ~~deleteSession()~~

> **deleteSession**(`surveyId`, `sessionId`): `any`

#### Parameters

• **surveyId**: `string`

• **sessionId**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:363](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L363)

***

### ~~deleteSurveyResponse()~~

> **deleteSurveyResponse**(`surveyId`, `responseId`): `any`

Delete survey response

#### Parameters

• **surveyId**: `string`

• **responseId**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:383](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L383)

***

### directory()

> **directory**(`directory`?): [`IQDirectory`](../../iq-directory/classes/IQDirectory.md)

#### Parameters

• **directory?**: `string`

#### Returns

[`IQDirectory`](../../iq-directory/classes/IQDirectory.md)

#### Defined in

[qualtrics.ts:180](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L180)

***

### downloadResponseExport()

> **downloadResponseExport**(`surveyId`, `outputFile`, `options`): `Promise`\<`void`\>

Create a Exportfile with the survey response data

#### Parameters

• **surveyId**: `string`

• **outputFile**: `string`

• **options**: `any`

#### Returns

`Promise`\<`void`\>

#### Defined in

[qualtrics.ts:373](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L373)

***

### ~~getAllDirectoryContacts()~~

> **getAllDirectoryContacts**(`directoryId`?): `Promise`\<`any`[]\>

Get all Directory Contacts

#### Parameters

• **directoryId?**: `string`

#### Returns

`Promise`\<`any`[]\>

#### Deprecated

#### Defined in

[qualtrics.ts:200](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L200)

***

### ~~getDirectoryContact()~~

> **getDirectoryContact**(`contactId`, `directoryId`?): `Promise`\<`any`\>

Get data for one Directory Contact

#### Parameters

• **contactId**: `string`

• **directoryId?**: `string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

#### Defined in

[qualtrics.ts:211](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L211)

***

### ~~getDirectoryContacts()~~

> **getDirectoryContacts**(`skipToken`?, `directoryId`?): `Promise`\<`any`\>

Get Directory Contacts. PageSize 100

#### Parameters

• **skipToken?**: `string`

• **directoryId?**: `string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

#### Defined in

[qualtrics.ts:190](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L190)

***

### ~~getDistributionLinks()~~

> **getDistributionLinks**(`surveyId`, `distributionId`): `Promise`\<`object`\>

Liste aller Kontakte einer Distribution

#### Parameters

• **surveyId**: `string`

• **distributionId**: `string`

#### Returns

`Promise`\<`object`\>

##### ~~result~~

> **result**: `object`

##### result.contacts

> **contacts**: `any`[]

#### Deprecated

#### Defined in

[qualtrics.ts:343](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L343)

***

### ~~getDistributions()~~

> **getDistributions**(`surveyId`, `distributionRequestType`?): `Promise`\<`any`\>

Liste aller Distributions für ein Projekt

#### Parameters

• **surveyId**: `string`

• **distributionRequestType?**: `string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

#### Defined in

[qualtrics.ts:322](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L322)

***

### ~~getGroup()~~

> **getGroup**(`groupId`): `Promise`\<`any`\>

Gets information about a specified group

#### Parameters

• **groupId**: `string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

#### Defined in

[qualtrics.ts:142](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L142)

***

### ~~getGroups()~~

> **getGroups**(): `Promise`\<`any`[]\>

Gets list of all groups known to the user account

#### Returns

`Promise`\<`any`[]\>

#### Deprecated

#### Defined in

[qualtrics.ts:132](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L132)

***

### ~~getListContact()~~

> **getListContact**(`listId`, `contactId`, `directoryId`?): `Promise`\<`any`\>

Get contact from mailinglists

#### Parameters

• **listId**: `string`

• **contactId**: `string`

• **directoryId?**: `string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

#### Defined in

[qualtrics.ts:278](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L278)

***

### ~~getListContacts()~~

> **getListContacts**(`listId`, `directoryId`?): `Promise`\<`any`\>

Get all mailinglists contacts

#### Parameters

• **listId**: `string`

• **directoryId?**: `string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

#### Defined in

[qualtrics.ts:266](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L266)

***

### ~~getSession()~~

> **getSession**(`surveyId`, `sessionId`): `Promise`\<`any`\>

#### Parameters

• **surveyId**: `string`

• **sessionId**: `string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

#### Defined in

[qualtrics.ts:353](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L353)

***

### ~~getUser()~~

> **getUser**(`userId`): `Promise`\<`any`\>

Gets general information about a user

#### Parameters

• **userId**: `string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

Use: user('id').get()

#### Url

https://api.qualtrics.com/reference#get-user

#### Defined in

[qualtrics.ts:102](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L102)

***

### ~~getUsers()~~

> **getUsers**(): `Promise`\<`any`\>

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

#### Defined in

[qualtrics.ts:91](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L91)

***

### group()

> **group**(`id`): [`Group`](../../group/classes/Group.md)

#### Parameters

• **id**: `string`

#### Returns

[`Group`](../../group/classes/Group.md)

#### Defined in

[qualtrics.ts:117](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L117)

***

### mailingList()

> **mailingList**(`id`, `directoryId`?): [`MailingList`](../../mailing-list/classes/MailingList.md)

#### Parameters

• **id**: `string`

• **directoryId?**: `string`

#### Returns

[`MailingList`](../../mailing-list/classes/MailingList.md)

MailingList

#### Defined in

[qualtrics.ts:255](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L255)

***

### ~~removeDirectoryContact()~~

> **removeDirectoryContact**(`contactId`, `directoryId`?): `any`

Delete Directory Contact

#### Parameters

• **contactId**: `string`

• **directoryId?**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:234](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L234)

***

### ~~removeGroupMember()~~

> **removeGroupMember**(`groupId`, `userId`): `any`

Remove User from Group

#### Parameters

• **groupId**: `string`

• **userId**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:176](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L176)

***

### survey()

> **survey**(`id`): [`Survey`](../../survey/classes/Survey.md)

Returns a new survey distribution object

#### Parameters

• **id**: `string`

SurveyId

#### Returns

[`Survey`](../../survey/classes/Survey.md)

#### Defined in

[qualtrics.ts:312](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L312)

***

### ~~unsubscribedDirectoryContact()~~

> **unsubscribedDirectoryContact**(`contactId`, `directoryId`?): `any`

Unsubscribed Contact im Directory aus

#### Parameters

• **contactId**: `string`

• **directoryId?**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:245](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L245)

***

### ~~updateDirectoryContact()~~

> **updateDirectoryContact**(`contactId`, `data`, `directoryId`?): `any`

Update Directory Contact

#### Parameters

• **contactId**: `string`

• **data**: `object`

• **directoryId?**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:223](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L223)

***

### ~~updateListContact()~~

> **updateListContact**(`listId`, `contactId`, `data`, `directoryId`?): `any`

Update Daten eines List Contact

#### Parameters

• **listId**: `string`

• **contactId**: `string`

• **data**: `object`

• **directoryId?**: `string`

#### Returns

`any`

#### Deprecated

#### Defined in

[qualtrics.ts:303](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L303)

***

### ~~updateUser()~~

> **updateUser**(`userId`, `data`): `any`

Updates user information

#### Parameters

• **userId**: `string`

• **data**: `object`

#### Returns

`any`

#### Deprecated

Use: user('id').update({data})

#### Defined in

[qualtrics.ts:113](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L113)

***

### user()

> **user**(`id`): [`User`](../../user/classes/User.md)

#### Parameters

• **id**: `string`

{String} User ID

#### Returns

[`User`](../../user/classes/User.md)

#### Example

```
const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)

#### Defined in

[qualtrics.ts:55](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L55)

***

### whoami()

> **whoami**(): `Promise`\<`any`\>

Determine the user ID and other user information associated with an Qualtrics API token

#### Returns

`Promise`\<`any`\>

#### Url

https://api.qualtrics.com/reference#who-am-i

#### Defined in

[qualtrics.ts:44](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/qualtrics.ts#L44)
