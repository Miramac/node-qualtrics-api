[qualtrics-api](../README.md) / [Exports](../modules.md) / [qualtrics](../modules/qualtrics.md) / default

# Class: default

[qualtrics](../modules/qualtrics.md).default

Creates a new Qualtrics instance.

## Table of contents

### Constructors

- [constructor](qualtrics.default.md#constructor)

### Properties

- [config](qualtrics.default.md#config)
- [fetch](qualtrics.default.md#fetch)

### Methods

- [addDistribution](qualtrics.default.md#adddistribution)
- [addGroup](qualtrics.default.md#addgroup)
- [addGroupMember](qualtrics.default.md#addgroupmember)
- [addListContact](qualtrics.default.md#addlistcontact)
- [allGroups](qualtrics.default.md#allgroups)
- [allUsers](qualtrics.default.md#allusers)
- [deleteSession](qualtrics.default.md#deletesession)
- [deleteSurveyResponse](qualtrics.default.md#deletesurveyresponse)
- [directory](qualtrics.default.md#directory)
- [downloadResponseExport](qualtrics.default.md#downloadresponseexport)
- [getAllDirectoryContacts](qualtrics.default.md#getalldirectorycontacts)
- [getDirectoryContact](qualtrics.default.md#getdirectorycontact)
- [getDirectoryContacts](qualtrics.default.md#getdirectorycontacts)
- [getDistributionLinks](qualtrics.default.md#getdistributionlinks)
- [getDistributions](qualtrics.default.md#getdistributions)
- [getGroup](qualtrics.default.md#getgroup)
- [getGroups](qualtrics.default.md#getgroups)
- [getListContact](qualtrics.default.md#getlistcontact)
- [getListContacts](qualtrics.default.md#getlistcontacts)
- [getSession](qualtrics.default.md#getsession)
- [getUser](qualtrics.default.md#getuser)
- [getUsers](qualtrics.default.md#getusers)
- [group](qualtrics.default.md#group)
- [mailingList](qualtrics.default.md#mailinglist)
- [removeDirectoryContact](qualtrics.default.md#removedirectorycontact)
- [removeGroupMember](qualtrics.default.md#removegroupmember)
- [survey](qualtrics.default.md#survey)
- [unsubscribedDirectoryContact](qualtrics.default.md#unsubscribeddirectorycontact)
- [updateDirectoryContact](qualtrics.default.md#updatedirectorycontact)
- [updateListContact](qualtrics.default.md#updatelistcontact)
- [updateUser](qualtrics.default.md#updateuser)
- [user](qualtrics.default.md#user)
- [whoami](qualtrics.default.md#whoami)

## Constructors

### constructor

• **new default**(`config`)

**`Example`**

```
 const config = {
   apiToken: '<API_TOKEN>',
   baseUrl: 'https://eu.qualtrics.com/API/v3/',
   defaultDirectory: 'POOL_xxxxxxxx'
 }
 const qualtrics = new Qualtrics(config)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `QualtricsOptions` |

#### Defined in

[qualtrics.ts:35](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L35)

## Properties

### config

• **config**: `QualtricsOptions`

#### Defined in

[qualtrics.ts:20](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L20)

___

### fetch

• **fetch**: [`Fetch`](fetch.Fetch.md)

#### Defined in

[qualtrics.ts:21](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L21)

## Methods

### addDistribution

▸ **addDistribution**(`surveyId`, `data`): `any`

Liste aller Distributions für ein Projekt

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `surveyId` | `string` |
| `data` | `any` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:332](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L332)

___

### addGroup

▸ **addGroup**(`name`, `type`, `divisionId?`): `any`

Creates a new group

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |
| `divisionId?` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:154](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L154)

___

### addGroupMember

▸ **addGroupMember**(`groupId`, `userId`): `any`

Add User to Group

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` |
| `userId` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:165](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L165)

___

### addListContact

▸ **addListContact**(`listId`, `data`, `directoryId?`): `any`

Add List Contact

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `listId` | `string` |
| `data` | `object` |
| `directoryId?` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:290](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L290)

___

### allGroups

▸ **allGroups**(): `Promise`<`any`[]\>

Gets list of all groups known to the user account

#### Returns

`Promise`<`any`[]\>

#### Defined in

[qualtrics.ts:124](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L124)

___

### allUsers

▸ **allUsers**(): `Promise`<`any`\>

Gets all users in the collection

**`Url`**

https://api.qualtrics.com/reference#list-users

**`Example`**

```
 qualtrics.allUsers()
 .then(users => {
   console.log(users.length)
 }).catch(e => {
   console.error(e)
 })
```

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:73](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L73)

___

### deleteSession

▸ **deleteSession**(`surveyId`, `sessionId`): `any`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `surveyId` | `string` |
| `sessionId` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:363](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L363)

___

### deleteSurveyResponse

▸ **deleteSurveyResponse**(`surveyId`, `responseId`): `any`

Delete survey response

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `surveyId` | `string` |
| `responseId` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:383](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L383)

___

### directory

▸ **directory**(`directory?`): [`IQDirectory`](iq_directory.IQDirectory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory?` | `string` |

#### Returns

[`IQDirectory`](iq_directory.IQDirectory.md)

#### Defined in

[qualtrics.ts:180](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L180)

___

### downloadResponseExport

▸ **downloadResponseExport**(`surveyId`, `outputFile`, `options`): `Promise`<`void`\>

Create a Exportfile with the survey response data

#### Parameters

| Name | Type |
| :------ | :------ |
| `surveyId` | `string` |
| `outputFile` | `string` |
| `options` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[qualtrics.ts:373](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L373)

___

### getAllDirectoryContacts

▸ **getAllDirectoryContacts**(`directoryId?`): `Promise`<`any`[]\>

Get all Directory Contacts

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `directoryId?` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[qualtrics.ts:200](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L200)

___

### getDirectoryContact

▸ **getDirectoryContact**(`contactId`, `directoryId?`): `Promise`<`any`\>

Get data for one Directory Contact

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `directoryId?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:211](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L211)

___

### getDirectoryContacts

▸ **getDirectoryContacts**(`skipToken?`, `directoryId?`): `Promise`<`any`\>

Get Directory Contacts. PageSize 100

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipToken?` | `string` |
| `directoryId?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:190](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L190)

___

### getDistributionLinks

▸ **getDistributionLinks**(`surveyId`, `distributionId`): `Promise`<{ `result`: { `contacts`: `any`[]  }  }\>

Liste aller Kontakte einer Distribution

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `surveyId` | `string` |
| `distributionId` | `string` |

#### Returns

`Promise`<{ `result`: { `contacts`: `any`[]  }  }\>

#### Defined in

[qualtrics.ts:343](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L343)

___

### getDistributions

▸ **getDistributions**(`surveyId`, `distributionRequestType?`): `Promise`<`any`\>

Liste aller Distributions für ein Projekt

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `surveyId` | `string` |
| `distributionRequestType?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:322](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L322)

___

### getGroup

▸ **getGroup**(`groupId`): `Promise`<`any`\>

Gets information about a specified group

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:142](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L142)

___

### getGroups

▸ **getGroups**(): `Promise`<`any`[]\>

Gets list of all groups known to the user account

**`Deprecated`**

#### Returns

`Promise`<`any`[]\>

#### Defined in

[qualtrics.ts:132](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L132)

___

### getListContact

▸ **getListContact**(`listId`, `contactId`, `directoryId?`): `Promise`<`any`\>

Get contact from mailinglists

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `listId` | `string` |
| `contactId` | `string` |
| `directoryId?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:278](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L278)

___

### getListContacts

▸ **getListContacts**(`listId`, `directoryId?`): `Promise`<`any`\>

Get all mailinglists contacts

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `listId` | `string` |
| `directoryId?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:266](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L266)

___

### getSession

▸ **getSession**(`surveyId`, `sessionId`): `Promise`<`any`\>

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `surveyId` | `string` |
| `sessionId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:353](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L353)

___

### getUser

▸ **getUser**(`userId`): `Promise`<`any`\>

Gets general information about a user

**`Deprecated`**

Use: user('id').get()

**`Url`**

https://api.qualtrics.com/reference#get-user

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:102](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L102)

___

### getUsers

▸ **getUsers**(): `Promise`<`any`\>

Gets all users in the collection

**`Deprecated`**

Use: allUsers()

**`Url`**

https://api.qualtrics.com/reference#list-users

**`Example`**

```
 qualtrics.getUsers()
 .then(users => {
   console.log(users.length)
 }).catch(e => {
   console.error(e)
 })
```

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:91](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L91)

___

### group

▸ **group**(`id`): [`Group`](group.Group.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Group`](group.Group.md)

#### Defined in

[qualtrics.ts:117](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L117)

___

### mailingList

▸ **mailingList**(`id`, `directoryId?`): [`MailingList`](mailing_list.MailingList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `directoryId?` | `string` |

#### Returns

[`MailingList`](mailing_list.MailingList.md)

MailingList

#### Defined in

[qualtrics.ts:255](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L255)

___

### removeDirectoryContact

▸ **removeDirectoryContact**(`contactId`, `directoryId?`): `any`

Delete Directory Contact

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `directoryId?` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:234](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L234)

___

### removeGroupMember

▸ **removeGroupMember**(`groupId`, `userId`): `any`

Remove User from Group

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` |
| `userId` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:176](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L176)

___

### survey

▸ **survey**(`id`): [`Survey`](survey.Survey.md)

Returns a new survey distribution object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | SurveyId |

#### Returns

[`Survey`](survey.Survey.md)

#### Defined in

[qualtrics.ts:312](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L312)

___

### unsubscribedDirectoryContact

▸ **unsubscribedDirectoryContact**(`contactId`, `directoryId?`): `any`

Unsubscribed Contact im Directory aus

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `directoryId?` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:245](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L245)

___

### updateDirectoryContact

▸ **updateDirectoryContact**(`contactId`, `data`, `directoryId?`): `any`

Update Directory Contact

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `data` | `object` |
| `directoryId?` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:223](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L223)

___

### updateListContact

▸ **updateListContact**(`listId`, `contactId`, `data`, `directoryId?`): `any`

Update Daten eines List Contact

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `listId` | `string` |
| `contactId` | `string` |
| `data` | `object` |
| `directoryId?` | `string` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:303](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L303)

___

### updateUser

▸ **updateUser**(`userId`, `data`): `any`

Updates user information

**`Deprecated`**

Use: user('id').update({data})

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `data` | `object` |

#### Returns

`any`

#### Defined in

[qualtrics.ts:113](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L113)

___

### user

▸ **user**(`id`): [`User`](user.User.md)

**`Example`**

```
const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | {String} User ID |

#### Returns

[`User`](user.User.md)

#### Defined in

[qualtrics.ts:55](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L55)

___

### whoami

▸ **whoami**(): `Promise`<`any`\>

Determine the user ID and other user information associated with an Qualtrics API token

**`Url`**

https://api.qualtrics.com/reference#who-am-i

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:44](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/qualtrics.ts#L44)
