**[qualtrics-api](../README.md)**

> [Globals](../globals.md) / ["qualtrics"](../modules/_qualtrics_.md) / Qualtrics

# Class: Qualtrics

Creates a new Qualtrics instance.

## Hierarchy

* **Qualtrics**

## Index

### Constructors

* [constructor](_qualtrics_.qualtrics.md#constructor)

### Properties

* [config](_qualtrics_.qualtrics.md#config)
* [fetch](_qualtrics_.qualtrics.md#fetch)

### Methods

* [addGroup](_qualtrics_.qualtrics.md#addgroup)
* [addGroupMember](_qualtrics_.qualtrics.md#addgroupmember)
* [createResponseExport](_qualtrics_.qualtrics.md#createresponseexport)
* [deleteSession](_qualtrics_.qualtrics.md#deletesession)
* [deleteSurveyResponse](_qualtrics_.qualtrics.md#deletesurveyresponse)
* [downloadResponseExport](_qualtrics_.qualtrics.md#downloadresponseexport)
* [fetchResponseExport](_qualtrics_.qualtrics.md#fetchresponseexport)
* [getAllDirectoryContacts](_qualtrics_.qualtrics.md#getalldirectorycontacts)
* [getDirectoryContact](_qualtrics_.qualtrics.md#getdirectorycontact)
* [getDirectoryContacts](_qualtrics_.qualtrics.md#getdirectorycontacts)
* [getDistributionLinks](_qualtrics_.qualtrics.md#getdistributionlinks)
* [getDistributions](_qualtrics_.qualtrics.md#getdistributions)
* [getGroup](_qualtrics_.qualtrics.md#getgroup)
* [getGroups](_qualtrics_.qualtrics.md#getgroups)
* [getListContact](_qualtrics_.qualtrics.md#getlistcontact)
* [getListContacts](_qualtrics_.qualtrics.md#getlistcontacts)
* [getSession](_qualtrics_.qualtrics.md#getsession)
* [getUser](_qualtrics_.qualtrics.md#getuser)
* [getUsers](_qualtrics_.qualtrics.md#getusers)
* [removeDirectoryContact](_qualtrics_.qualtrics.md#removedirectorycontact)
* [removeGroupMember](_qualtrics_.qualtrics.md#removegroupmember)
* [responseExportProgress](_qualtrics_.qualtrics.md#responseexportprogress)
* [unsubscribedDirectoryContact](_qualtrics_.qualtrics.md#unsubscribeddirectorycontact)
* [updateDirectoryContact](_qualtrics_.qualtrics.md#updatedirectorycontact)
* [updateListContact](_qualtrics_.qualtrics.md#updatelistcontact)
* [updateUser](_qualtrics_.qualtrics.md#updateuser)
* [whoami](_qualtrics_.qualtrics.md#whoami)

## Constructors

### constructor

\+ **new Qualtrics**(`config`: [QualtricsOptions](../interfaces/_qualtrics_.qualtricsoptions.md)): [Qualtrics](_qualtrics_.qualtrics.md)

*Defined in [qualtrics.ts:17](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L17)*

**`example`** 
```
 const config = {
   apiToken: '<API_TOKEN>',
   baseUrl: 'https://eu.qualtrics.com/API/v3/',
   defaultDirectory: 'POOL_xxxxxxxx'
 }
 const qualtrics = new Qualtrics(config)
```

#### Parameters:

Name | Type |
------ | ------ |
`config` | [QualtricsOptions](../interfaces/_qualtrics_.qualtricsoptions.md) |

**Returns:** [Qualtrics](_qualtrics_.qualtrics.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_qualtrics_.qualtricsoptions.md)

*Defined in [qualtrics.ts:16](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L16)*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in [qualtrics.ts:17](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L17)*

## Methods

### addGroup

▸ **addGroup**(`name`: string, `type`: string, `divisionId?`: undefined \| string): any

*Defined in [qualtrics.ts:106](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L106)*

Creates a new group

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`type` | string |
`divisionId?` | undefined \| string |

**Returns:** any

___

### addGroupMember

▸ **addGroupMember**(`groupId`: string, `userId`: string): any

*Defined in [qualtrics.ts:121](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L121)*

Add User to Group

#### Parameters:

Name | Type |
------ | ------ |
`groupId` | string |
`userId` | string |

**Returns:** any

___

### createResponseExport

▸ **createResponseExport**(`surveyId`: string, `options`: object): Promise\<any>

*Defined in [qualtrics.ts:329](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L329)*

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`options` | object |

**Returns:** Promise\<any>

___

### deleteSession

▸ **deleteSession**(`surveyId`: string, `sessionId`: string): any

*Defined in [qualtrics.ts:305](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L305)*

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`sessionId` | string |

**Returns:** any

___

### deleteSurveyResponse

▸ **deleteSurveyResponse**(`surveyId`: string, `responseId`: string): any

*Defined in [qualtrics.ts:376](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L376)*

Delete survey response

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`surveyId` | string |  |
`responseId` | string |   |

**Returns:** any

___

### downloadResponseExport

▸ **downloadResponseExport**(`surveyId`: string, `outputFile`: string, `options`: any): Promise\<void>

*Defined in [qualtrics.ts:315](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L315)*

Create a Exportfile with the survey response data

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`outputFile` | string |
`options` | any |

**Returns:** Promise\<void>

___

### fetchResponseExport

▸ **fetchResponseExport**(`surveyId`: string, `fileId`: string, `outputFile`: string): Promise\<unknown>

*Defined in [qualtrics.ts:353](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L353)*

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`fileId` | string |
`outputFile` | string |

**Returns:** Promise\<unknown>

___

### getAllDirectoryContacts

▸ **getAllDirectoryContacts**(`directoryId?`: undefined \| string): Promise\<any[]>

*Defined in [qualtrics.ts:154](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L154)*

Get all Directory Contacts

#### Parameters:

Name | Type |
------ | ------ |
`directoryId?` | undefined \| string |

**Returns:** Promise\<any[]>

___

### getDirectoryContact

▸ **getDirectoryContact**(`contactId`: string, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:179](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L179)*

Get data for one Directory Contact

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |
`directoryId?` | undefined \| string |

**Returns:** any

___

### getDirectoryContacts

▸ **getDirectoryContacts**(`skipToken`: string \| null, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:144](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L144)*

Get Directory Contacts. PageSize 100

#### Parameters:

Name | Type |
------ | ------ |
`skipToken` | string \| null |
`directoryId?` | undefined \| string |

**Returns:** any

___

### getDistributionLinks

▸ **getDistributionLinks**(`surveyId`: string, `distributionId`: string): Promise\<any[]>

*Defined in [qualtrics.ts:270](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L270)*

Liste aller Kontakte einer Distribution

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`distributionId` | string |

**Returns:** Promise\<any[]>

___

### getDistributions

▸ **getDistributions**(`surveyId`: string, `distributionRequestType?`: undefined \| string): any

*Defined in [qualtrics.ts:259](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L259)*

Liste aller Distributions für ein Projekt

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`distributionRequestType?` | undefined \| string |

**Returns:** any

___

### getGroup

▸ **getGroup**(`groupId`: string): any

*Defined in [qualtrics.ts:95](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L95)*

Gets information about a specified group

#### Parameters:

Name | Type |
------ | ------ |
`groupId` | string |

**Returns:** any

___

### getGroups

▸ **getGroups**(): any

*Defined in [qualtrics.ts:86](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L86)*

Gets list of all groups known to the user account

**Returns:** any

___

### getListContact

▸ **getListContact**(`listId`: string, `contactId`: string, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:235](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L235)*

Get contact from mailinglists

#### Parameters:

Name | Type |
------ | ------ |
`listId` | string |
`contactId` | string |
`directoryId?` | undefined \| string |

**Returns:** any

___

### getListContacts

▸ **getListContacts**(`listId`: string, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:223](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L223)*

Get all mailinglists contacts

#### Parameters:

Name | Type |
------ | ------ |
`listId` | string |
`directoryId?` | undefined \| string |

**Returns:** any

___

### getSession

▸ **getSession**(`surveyId`: string, `sessionId`: string): any

*Defined in [qualtrics.ts:296](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L296)*

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`sessionId` | string |

**Returns:** any

___

### getUser

▸ **getUser**(`userId`: string): any

*Defined in [qualtrics.ts:68](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L68)*

Gets general information about a user

**`url`** https://api.qualtrics.com/reference#get-user

#### Parameters:

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** any

___

### getUsers

▸ **getUsers**(): any

*Defined in [qualtrics.ts:58](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L58)*

Gets all users in the collection

**`url`** https://api.qualtrics.com/reference#list-users

**`example`** 
```
 qualtrics.getUsers()
 .then(users => {
   console.log(users.length)
 }).catch(e => {
   console.error(e)
 })
```

**Returns:** any

___

### removeDirectoryContact

▸ **removeDirectoryContact**(`contactId`: string, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:202](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L202)*

Delete Directory Contact

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |
`directoryId?` | undefined \| string |

**Returns:** any

___

### removeGroupMember

▸ **removeGroupMember**(`groupId`: string, `userId`: string): any

*Defined in [qualtrics.ts:134](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L134)*

Remove User from Group

#### Parameters:

Name | Type |
------ | ------ |
`groupId` | string |
`userId` | string |

**Returns:** any

___

### responseExportProgress

▸ **responseExportProgress**(`surveyId`: string, `progressId`: string): Promise\<any>

*Defined in [qualtrics.ts:340](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L340)*

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`progressId` | string |

**Returns:** Promise\<any>

___

### unsubscribedDirectoryContact

▸ **unsubscribedDirectoryContact**(`contactId`: string, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:213](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L213)*

Unsubscribed Contact im Directory aus

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |
`directoryId?` | undefined \| string |

**Returns:** any

___

### updateDirectoryContact

▸ **updateDirectoryContact**(`contactId`: string, `data`: object, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:191](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L191)*

Update Directory Contact

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |
`data` | object |
`directoryId?` | undefined \| string |

**Returns:** any

___

### updateListContact

▸ **updateListContact**(`listId`: string, `contactId`: string, `data`: object, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:248](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L248)*

Update Daten eines List Contact

#### Parameters:

Name | Type |
------ | ------ |
`listId` | string |
`contactId` | string |
`data` | object |
`directoryId?` | undefined \| string |

**Returns:** any

___

### updateUser

▸ **updateUser**(`userId`: string, `data`: object): any

*Defined in [qualtrics.ts:78](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L78)*

Updates user information

#### Parameters:

Name | Type |
------ | ------ |
`userId` | string |
`data` | object |

**Returns:** any

___

### whoami

▸ **whoami**(): any

*Defined in [qualtrics.ts:40](https://github.com/Miramac/node-qualtrics-api/blob/cec54d9/lib/qualtrics.ts#L40)*

Determine the user ID and other user information associated with an Qualtrics API token

**`url`** https://api.qualtrics.com/reference#who-am-i

**Returns:** any
