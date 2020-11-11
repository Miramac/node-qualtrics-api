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

* [addDistribution](_qualtrics_.qualtrics.md#adddistribution)
* [addGroup](_qualtrics_.qualtrics.md#addgroup)
* [addGroupMember](_qualtrics_.qualtrics.md#addgroupmember)
* [addListContact](_qualtrics_.qualtrics.md#addlistcontact)
* [allGroups](_qualtrics_.qualtrics.md#allgroups)
* [allUsers](_qualtrics_.qualtrics.md#allusers)
* [deleteSession](_qualtrics_.qualtrics.md#deletesession)
* [deleteSurveyResponse](_qualtrics_.qualtrics.md#deletesurveyresponse)
* [directory](_qualtrics_.qualtrics.md#directory)
* [downloadResponseExport](_qualtrics_.qualtrics.md#downloadresponseexport)
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
* [group](_qualtrics_.qualtrics.md#group)
* [mailingList](_qualtrics_.qualtrics.md#mailinglist)
* [removeDirectoryContact](_qualtrics_.qualtrics.md#removedirectorycontact)
* [removeGroupMember](_qualtrics_.qualtrics.md#removegroupmember)
* [survey](_qualtrics_.qualtrics.md#survey)
* [unsubscribedDirectoryContact](_qualtrics_.qualtrics.md#unsubscribeddirectorycontact)
* [updateDirectoryContact](_qualtrics_.qualtrics.md#updatedirectorycontact)
* [updateListContact](_qualtrics_.qualtrics.md#updatelistcontact)
* [updateUser](_qualtrics_.qualtrics.md#updateuser)
* [user](_qualtrics_.qualtrics.md#user)
* [whoami](_qualtrics_.qualtrics.md#whoami)

## Constructors

### constructor

\+ **new Qualtrics**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)): [Qualtrics](_qualtrics_.qualtrics.md)

*Defined in [qualtrics.ts:20](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L20)*

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
`config` | [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md) |

**Returns:** [Qualtrics](_qualtrics_.qualtrics.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)

*Defined in [qualtrics.ts:19](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L19)*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in [qualtrics.ts:20](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L20)*

## Methods

### addDistribution

▸ **addDistribution**(`surveyId`: string, `data`: any): any

*Defined in [qualtrics.ts:331](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L331)*

Liste aller Distributions für ein Projekt

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`data` | any |

**Returns:** any

___

### addGroup

▸ **addGroup**(`name`: string, `type`: string, `divisionId?`: undefined \| string): any

*Defined in [qualtrics.ts:153](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L153)*

Creates a new group

**`deprecated`** 

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

*Defined in [qualtrics.ts:164](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L164)*

Add User to Group

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`groupId` | string |
`userId` | string |

**Returns:** any

___

### addListContact

▸ **addListContact**(`listId`: string, `data`: object, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:289](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L289)*

Add List Contact

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`listId` | string |
`data` | object |
`directoryId?` | undefined \| string |

**Returns:** any

___

### allGroups

▸ **allGroups**(): Promise\<any>

*Defined in [qualtrics.ts:123](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L123)*

Gets list of all groups known to the user account

**Returns:** Promise\<any>

___

### allUsers

▸ **allUsers**(): Promise\<any>

*Defined in [qualtrics.ts:72](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L72)*

Gets all users in the collection

**`url`** https://api.qualtrics.com/reference#list-users

**`example`** 
```
 qualtrics.allUsers()
 .then(users => {
   console.log(users.length)
 }).catch(e => {
   console.error(e)
 })
```

**Returns:** Promise\<any>

___

### deleteSession

▸ **deleteSession**(`surveyId`: string, `sessionId`: string): any

*Defined in [qualtrics.ts:362](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L362)*

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`sessionId` | string |

**Returns:** any

___

### deleteSurveyResponse

▸ **deleteSurveyResponse**(`surveyId`: string, `responseId`: string): any

*Defined in [qualtrics.ts:382](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L382)*

Delete survey response

**`deprecated`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`surveyId` | string |  |
`responseId` | string |   |

**Returns:** any

___

### directory

▸ **directory**(`directory?`: undefined \| string): [IQDirectory](_iq_directory_.iqdirectory.md)

*Defined in [qualtrics.ts:179](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L179)*

#### Parameters:

Name | Type |
------ | ------ |
`directory?` | undefined \| string |

**Returns:** [IQDirectory](_iq_directory_.iqdirectory.md)

___

### downloadResponseExport

▸ **downloadResponseExport**(`surveyId`: string, `outputFile`: string, `options`: any): Promise\<void>

*Defined in [qualtrics.ts:372](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L372)*

Create a Exportfile with the survey response data

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`outputFile` | string |
`options` | any |

**Returns:** Promise\<void>

___

### getAllDirectoryContacts

▸ **getAllDirectoryContacts**(`directoryId?`: undefined \| string): Promise\<any[]>

*Defined in [qualtrics.ts:199](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L199)*

Get all Directory Contacts

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`directoryId?` | undefined \| string |

**Returns:** Promise\<any[]>

___

### getDirectoryContact

▸ **getDirectoryContact**(`contactId`: string, `directoryId?`: undefined \| string): Promise\<any>

*Defined in [qualtrics.ts:210](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L210)*

Get data for one Directory Contact

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |
`directoryId?` | undefined \| string |

**Returns:** Promise\<any>

___

### getDirectoryContacts

▸ **getDirectoryContacts**(`skipToken?`: undefined \| string, `directoryId?`: undefined \| string): Promise\<any>

*Defined in [qualtrics.ts:189](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L189)*

Get Directory Contacts. PageSize 100

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`skipToken?` | undefined \| string |
`directoryId?` | undefined \| string |

**Returns:** Promise\<any>

___

### getDistributionLinks

▸ **getDistributionLinks**(`surveyId`: string, `distributionId`: string): Promise\<any[]>

*Defined in [qualtrics.ts:342](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L342)*

Liste aller Kontakte einer Distribution

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`distributionId` | string |

**Returns:** Promise\<any[]>

___

### getDistributions

▸ **getDistributions**(`surveyId`: string, `distributionRequestType?`: undefined \| string): Promise\<any>

*Defined in [qualtrics.ts:321](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L321)*

Liste aller Distributions für ein Projekt

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`distributionRequestType?` | undefined \| string |

**Returns:** Promise\<any>

___

### getGroup

▸ **getGroup**(`groupId`: string): Promise\<any>

*Defined in [qualtrics.ts:141](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L141)*

Gets information about a specified group

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`groupId` | string |

**Returns:** Promise\<any>

___

### getGroups

▸ **getGroups**(): Promise\<any>

*Defined in [qualtrics.ts:131](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L131)*

Gets list of all groups known to the user account

**`deprecated`** 

**Returns:** Promise\<any>

___

### getListContact

▸ **getListContact**(`listId`: string, `contactId`: string, `directoryId?`: undefined \| string): Promise\<any>

*Defined in [qualtrics.ts:277](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L277)*

Get contact from mailinglists

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`listId` | string |
`contactId` | string |
`directoryId?` | undefined \| string |

**Returns:** Promise\<any>

___

### getListContacts

▸ **getListContacts**(`listId`: string, `directoryId?`: undefined \| string): Promise\<any>

*Defined in [qualtrics.ts:265](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L265)*

Get all mailinglists contacts

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`listId` | string |
`directoryId?` | undefined \| string |

**Returns:** Promise\<any>

___

### getSession

▸ **getSession**(`surveyId`: string, `sessionId`: string): Promise\<any>

*Defined in [qualtrics.ts:352](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L352)*

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`surveyId` | string |
`sessionId` | string |

**Returns:** Promise\<any>

___

### getUser

▸ **getUser**(`userId`: string): Promise\<any>

*Defined in [qualtrics.ts:101](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L101)*

Gets general information about a user

**`deprecated`** Use: user('id').get()

**`url`** https://api.qualtrics.com/reference#get-user

#### Parameters:

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** Promise\<any>

___

### getUsers

▸ **getUsers**(): Promise\<any>

*Defined in [qualtrics.ts:90](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L90)*

Gets all users in the collection

**`deprecated`** Use: allUsers()

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

**Returns:** Promise\<any>

___

### group

▸ **group**(`id`: string): [Group](_group_.group.md)

*Defined in [qualtrics.ts:116](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L116)*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |

**Returns:** [Group](_group_.group.md)

___

### mailingList

▸ **mailingList**(`id`: string, `directoryId?`: undefined \| string): [MailingList](_mailing_list_.mailinglist.md)

*Defined in [qualtrics.ts:254](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L254)*

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |
`directoryId?` | undefined \| string |

**Returns:** [MailingList](_mailing_list_.mailinglist.md)

MailingList

___

### removeDirectoryContact

▸ **removeDirectoryContact**(`contactId`: string, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:233](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L233)*

Delete Directory Contact

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |
`directoryId?` | undefined \| string |

**Returns:** any

___

### removeGroupMember

▸ **removeGroupMember**(`groupId`: string, `userId`: string): any

*Defined in [qualtrics.ts:175](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L175)*

Remove User from Group

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`groupId` | string |
`userId` | string |

**Returns:** any

___

### survey

▸ **survey**(`id`: string): [Survey](_survey_.survey.md)

*Defined in [qualtrics.ts:311](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L311)*

Returns a new survey distribution object

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | SurveyId |

**Returns:** [Survey](_survey_.survey.md)

___

### unsubscribedDirectoryContact

▸ **unsubscribedDirectoryContact**(`contactId`: string, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:244](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L244)*

Unsubscribed Contact im Directory aus

**`deprecated`** 

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |
`directoryId?` | undefined \| string |

**Returns:** any

___

### updateDirectoryContact

▸ **updateDirectoryContact**(`contactId`: string, `data`: object, `directoryId?`: undefined \| string): any

*Defined in [qualtrics.ts:222](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L222)*

Update Directory Contact

**`deprecated`** 

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

*Defined in [qualtrics.ts:302](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L302)*

Update Daten eines List Contact

**`deprecated`** 

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

*Defined in [qualtrics.ts:112](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L112)*

Updates user information

**`deprecated`** Use: user('id').update({data})

#### Parameters:

Name | Type |
------ | ------ |
`userId` | string |
`data` | object |

**Returns:** any

___

### user

▸ **user**(`id`: string): [User](_user_.user.md)

*Defined in [qualtrics.ts:54](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L54)*

**`example`** 
```
const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | User ID |

**Returns:** [User](_user_.user.md)

___

### whoami

▸ **whoami**(): Promise\<any>

*Defined in [qualtrics.ts:43](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/qualtrics.ts#L43)*

Determine the user ID and other user information associated with an Qualtrics API token

**`url`** https://api.qualtrics.com/reference#who-am-i

**Returns:** Promise\<any>
