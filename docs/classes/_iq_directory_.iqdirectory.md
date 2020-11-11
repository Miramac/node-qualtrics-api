**[qualtrics-api](../README.md)**

> [Globals](../globals.md) / ["iq-directory"](../modules/_iq_directory_.md) / IQDirectory

# Class: IQDirectory

## Hierarchy

* **IQDirectory**

## Index

### Constructors

* [constructor](_iq_directory_.iqdirectory.md#constructor)

### Properties

* [config](_iq_directory_.iqdirectory.md#config)
* [directory](_iq_directory_.iqdirectory.md#directory)
* [fetch](_iq_directory_.iqdirectory.md#fetch)

### Methods

* [getAllContacts](_iq_directory_.iqdirectory.md#getallcontacts)
* [getContact](_iq_directory_.iqdirectory.md#getcontact)
* [getContacts](_iq_directory_.iqdirectory.md#getcontacts)
* [removeContact](_iq_directory_.iqdirectory.md#removecontact)
* [unsubscribedContact](_iq_directory_.iqdirectory.md#unsubscribedcontact)
* [updateContact](_iq_directory_.iqdirectory.md#updatecontact)

## Constructors

### constructor

\+ **new IQDirectory**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md), `directory?`: undefined \| string): [IQDirectory](_iq_directory_.iqdirectory.md)

*Defined in iq-directory.ts:7*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md) |
`directory?` | undefined \| string |

**Returns:** [IQDirectory](_iq_directory_.iqdirectory.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)

*Defined in iq-directory.ts:5*

___

### directory

•  **directory**: string \| undefined

*Defined in iq-directory.ts:7*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in iq-directory.ts:6*

## Methods

### getAllContacts

▸ **getAllContacts**(): Promise\<any[]>

*Defined in iq-directory.ts:30*

Get all Directory Contacts

**Returns:** Promise\<any[]>

___

### getContact

▸ **getContact**(`id`: string): Promise\<any>

*Defined in iq-directory.ts:55*

Get data for one Directory Contact

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Contact ID |

**Returns:** Promise\<any>

___

### getContacts

▸ **getContacts**(`skipToken?`: string \| null): Promise\<any>

*Defined in iq-directory.ts:22*

Get Directory Contacts. PageSize 100

#### Parameters:

Name | Type |
------ | ------ |
`skipToken?` | string \| null |

**Returns:** Promise\<any>

___

### removeContact

▸ **removeContact**(`id`: string): any

*Defined in iq-directory.ts:75*

Delete Directory Contact

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Contact ID |

**Returns:** any

___

### unsubscribedContact

▸ **unsubscribedContact**(`id`: string): any

*Defined in iq-directory.ts:85*

Unsubscribed Contact im Directory aus

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |

**Returns:** any

___

### updateContact

▸ **updateContact**(`id`: string, `data`: object): any

*Defined in iq-directory.ts:66*

Update Directory Contact

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Contact ID |
`data` | object |  |

**Returns:** any
