[qualtrics-api](../README.md) / [Exports](../modules.md) / [qualtrics](../modules/qualtrics.md) / export=

# Class: export=

[qualtrics](../modules/qualtrics.md).export=

Creates a new Qualtrics instance.

## Table of contents

### Constructors

- [constructor](qualtrics.export_.md#constructor)

### Properties

- [config](qualtrics.export_.md#config)
- [fetch](qualtrics.export_.md#fetch)

### Methods

- [addDistribution](qualtrics.export_.md#adddistribution)
- [addGroup](qualtrics.export_.md#addgroup)
- [addGroupMember](qualtrics.export_.md#addgroupmember)
- [addListContact](qualtrics.export_.md#addlistcontact)
- [allGroups](qualtrics.export_.md#allgroups)
- [allUsers](qualtrics.export_.md#allusers)
- [deleteSession](qualtrics.export_.md#deletesession)
- [deleteSurveyResponse](qualtrics.export_.md#deletesurveyresponse)
- [directory](qualtrics.export_.md#directory)
- [downloadResponseExport](qualtrics.export_.md#downloadresponseexport)
- [getAllDirectoryContacts](qualtrics.export_.md#getalldirectorycontacts)
- [getDirectoryContact](qualtrics.export_.md#getdirectorycontact)
- [getDirectoryContacts](qualtrics.export_.md#getdirectorycontacts)
- [getDistributionLinks](qualtrics.export_.md#getdistributionlinks)
- [getDistributions](qualtrics.export_.md#getdistributions)
- [getGroup](qualtrics.export_.md#getgroup)
- [getGroups](qualtrics.export_.md#getgroups)
- [getListContact](qualtrics.export_.md#getlistcontact)
- [getListContacts](qualtrics.export_.md#getlistcontacts)
- [getSession](qualtrics.export_.md#getsession)
- [getUser](qualtrics.export_.md#getuser)
- [getUsers](qualtrics.export_.md#getusers)
- [group](qualtrics.export_.md#group)
- [mailingList](qualtrics.export_.md#mailinglist)
- [removeDirectoryContact](qualtrics.export_.md#removedirectorycontact)
- [removeGroupMember](qualtrics.export_.md#removegroupmember)
- [survey](qualtrics.export_.md#survey)
- [unsubscribedDirectoryContact](qualtrics.export_.md#unsubscribeddirectorycontact)
- [updateDirectoryContact](qualtrics.export_.md#updatedirectorycontact)
- [updateListContact](qualtrics.export_.md#updatelistcontact)
- [updateUser](qualtrics.export_.md#updateuser)
- [user](qualtrics.export_.md#user)
- [whoami](qualtrics.export_.md#whoami)

## Constructors

### constructor

• **new export=**(`config`)

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

[qualtrics.ts:34](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L34)

## Properties

### config

• **config**: `QualtricsOptions`

#### Defined in

[qualtrics.ts:19](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L19)

___

### fetch

• **fetch**: [`Fetch`](fetch.Fetch.md)

#### Defined in

[qualtrics.ts:20](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L20)

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

[qualtrics.ts:331](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L331)

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

[qualtrics.ts:153](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L153)

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

[qualtrics.ts:164](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L164)

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

[qualtrics.ts:289](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L289)

___

### allGroups

▸ **allGroups**(): `Promise`<`any`\>

Gets list of all groups known to the user account

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:123](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L123)

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

[qualtrics.ts:72](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L72)

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

[qualtrics.ts:362](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L362)

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

[qualtrics.ts:382](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L382)

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

[qualtrics.ts:179](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L179)

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

[qualtrics.ts:372](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L372)

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

[qualtrics.ts:199](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L199)

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

[qualtrics.ts:210](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L210)

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

[qualtrics.ts:189](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L189)

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

[qualtrics.ts:342](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L342)

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

[qualtrics.ts:321](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L321)

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

[qualtrics.ts:141](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L141)

___

### getGroups

▸ **getGroups**(): `Promise`<`any`\>

Gets list of all groups known to the user account

**`Deprecated`**

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:131](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L131)

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

[qualtrics.ts:277](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L277)

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

[qualtrics.ts:265](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L265)

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

[qualtrics.ts:352](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L352)

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

[qualtrics.ts:101](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L101)

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

[qualtrics.ts:90](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L90)

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

[qualtrics.ts:116](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L116)

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

[qualtrics.ts:254](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L254)

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

[qualtrics.ts:233](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L233)

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

[qualtrics.ts:175](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L175)

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

[qualtrics.ts:311](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L311)

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

[qualtrics.ts:244](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L244)

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

[qualtrics.ts:222](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L222)

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

[qualtrics.ts:302](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L302)

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

[qualtrics.ts:112](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L112)

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

[qualtrics.ts:54](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L54)

___

### whoami

▸ **whoami**(): `Promise`<`any`\>

Determine the user ID and other user information associated with an Qualtrics API token

**`Url`**

https://api.qualtrics.com/reference#who-am-i

#### Returns

`Promise`<`any`\>

#### Defined in

[qualtrics.ts:43](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/qualtrics.ts#L43)
