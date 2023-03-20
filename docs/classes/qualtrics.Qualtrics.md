[qualtrics-api](../README.md) / [Exports](../modules.md) / [qualtrics](../modules/qualtrics.md) / Qualtrics

# Class: Qualtrics

[qualtrics](../modules/qualtrics.md).Qualtrics

Creates a new Qualtrics instance.

## Table of contents

### Constructors

- [constructor](qualtrics.Qualtrics.md#constructor)

### Properties

- [config](qualtrics.Qualtrics.md#config)
- [fetch](qualtrics.Qualtrics.md#fetch)

### Methods

- [addDistribution](qualtrics.Qualtrics.md#adddistribution)
- [addGroup](qualtrics.Qualtrics.md#addgroup)
- [addGroupMember](qualtrics.Qualtrics.md#addgroupmember)
- [addListContact](qualtrics.Qualtrics.md#addlistcontact)
- [allGroups](qualtrics.Qualtrics.md#allgroups)
- [allUsers](qualtrics.Qualtrics.md#allusers)
- [deleteSession](qualtrics.Qualtrics.md#deletesession)
- [deleteSurveyResponse](qualtrics.Qualtrics.md#deletesurveyresponse)
- [directory](qualtrics.Qualtrics.md#directory)
- [downloadResponseExport](qualtrics.Qualtrics.md#downloadresponseexport)
- [getAllDirectoryContacts](qualtrics.Qualtrics.md#getalldirectorycontacts)
- [getDirectoryContact](qualtrics.Qualtrics.md#getdirectorycontact)
- [getDirectoryContacts](qualtrics.Qualtrics.md#getdirectorycontacts)
- [getDistributionLinks](qualtrics.Qualtrics.md#getdistributionlinks)
- [getDistributions](qualtrics.Qualtrics.md#getdistributions)
- [getGroup](qualtrics.Qualtrics.md#getgroup)
- [getGroups](qualtrics.Qualtrics.md#getgroups)
- [getListContact](qualtrics.Qualtrics.md#getlistcontact)
- [getListContacts](qualtrics.Qualtrics.md#getlistcontacts)
- [getSession](qualtrics.Qualtrics.md#getsession)
- [getUser](qualtrics.Qualtrics.md#getuser)
- [getUsers](qualtrics.Qualtrics.md#getusers)
- [group](qualtrics.Qualtrics.md#group)
- [mailingList](qualtrics.Qualtrics.md#mailinglist)
- [removeDirectoryContact](qualtrics.Qualtrics.md#removedirectorycontact)
- [removeGroupMember](qualtrics.Qualtrics.md#removegroupmember)
- [survey](qualtrics.Qualtrics.md#survey)
- [unsubscribedDirectoryContact](qualtrics.Qualtrics.md#unsubscribeddirectorycontact)
- [updateDirectoryContact](qualtrics.Qualtrics.md#updatedirectorycontact)
- [updateListContact](qualtrics.Qualtrics.md#updatelistcontact)
- [updateUser](qualtrics.Qualtrics.md#updateuser)
- [user](qualtrics.Qualtrics.md#user)
- [whoami](qualtrics.Qualtrics.md#whoami)

## Constructors

### constructor

• **new Qualtrics**(`config`)

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

[qualtrics.ts:34](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L34)

## Properties

### config

• **config**: `QualtricsOptions`

#### Defined in

[qualtrics.ts:19](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L19)

___

### fetch

• **fetch**: [`Fetch`](fetch.Fetch.md)

#### Defined in

[qualtrics.ts:20](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L20)

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

[qualtrics.ts:331](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L331)

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

[qualtrics.ts:153](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L153)

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

[qualtrics.ts:164](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L164)

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

[qualtrics.ts:289](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L289)

___

### allGroups

▸ **allGroups**(): `Promise`<`any`[]\>

Gets list of all groups known to the user account

#### Returns

`Promise`<`any`[]\>

#### Defined in

[qualtrics.ts:123](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L123)

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

[qualtrics.ts:72](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L72)

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

[qualtrics.ts:362](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L362)

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

[qualtrics.ts:382](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L382)

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

[qualtrics.ts:179](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L179)

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

[qualtrics.ts:372](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L372)

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

[qualtrics.ts:199](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L199)

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

[qualtrics.ts:210](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L210)

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

[qualtrics.ts:189](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L189)

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

[qualtrics.ts:342](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L342)

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

[qualtrics.ts:321](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L321)

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

[qualtrics.ts:141](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L141)

___

### getGroups

▸ **getGroups**(): `Promise`<`any`[]\>

Gets list of all groups known to the user account

**`Deprecated`**

#### Returns

`Promise`<`any`[]\>

#### Defined in

[qualtrics.ts:131](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L131)

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

[qualtrics.ts:277](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L277)

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

[qualtrics.ts:265](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L265)

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

[qualtrics.ts:352](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L352)

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

[qualtrics.ts:101](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L101)

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

[qualtrics.ts:90](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L90)

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

[qualtrics.ts:116](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L116)

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

[qualtrics.ts:254](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L254)

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

[qualtrics.ts:233](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L233)

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

[qualtrics.ts:175](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L175)

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

[qualtrics.ts:311](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L311)

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

[qualtrics.ts:244](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L244)

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

[qualtrics.ts:222](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L222)

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

[qualtrics.ts:302](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L302)

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

[qualtrics.ts:112](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L112)

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

[qualtrics.ts:54](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L54)

___

### whoami

▸ **whoami**(): `Promise`<`any`\>

Determine the user ID and other user information associated with an Qualtrics API token

**`Url`**

https://api.qualtrics.com/reference#who-am-i

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:43](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/qualtrics.ts#L43)
