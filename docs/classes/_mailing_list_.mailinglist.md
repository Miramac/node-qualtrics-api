**[qualtrics-api](../README.md)**

> [Globals](../globals.md) / ["mailing-list"](../modules/_mailing_list_.md) / MailingList

# Class: MailingList

## Hierarchy

* **MailingList**

## Index

### Constructors

* [constructor](_mailing_list_.mailinglist.md#constructor)

### Properties

* [config](_mailing_list_.mailinglist.md#config)
* [directory](_mailing_list_.mailinglist.md#directory)
* [fetch](_mailing_list_.mailinglist.md#fetch)
* [id](_mailing_list_.mailinglist.md#id)

### Methods

* [addContact](_mailing_list_.mailinglist.md#addcontact)
* [getContact](_mailing_list_.mailinglist.md#getcontact)
* [getContacts](_mailing_list_.mailinglist.md#getcontacts)
* [updateContact](_mailing_list_.mailinglist.md#updatecontact)

## Constructors

### constructor

\+ **new MailingList**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md), `id`: string, `directory?`: undefined \| string): [MailingList](_mailing_list_.mailinglist.md)

*Defined in [mailing-list.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/mailing-list.ts#L8)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md) |
`id` | string |
`directory?` | undefined \| string |

**Returns:** [MailingList](_mailing_list_.mailinglist.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)

*Defined in [mailing-list.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/mailing-list.ts#L5)*

___

### directory

•  **directory**: string \| undefined

*Defined in [mailing-list.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/mailing-list.ts#L7)*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in [mailing-list.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/mailing-list.ts#L6)*

___

### id

•  **id**: string

*Defined in [mailing-list.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/mailing-list.ts#L8)*

## Methods

### addContact

▸ **addContact**(`data`: object): any

*Defined in [mailing-list.ts:41](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/mailing-list.ts#L41)*

Add List Contact

#### Parameters:

Name | Type |
------ | ------ |
`data` | object |

**Returns:** any

___

### getContact

▸ **getContact**(`contactId`: string): Promise\<any>

*Defined in [mailing-list.ts:32](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/mailing-list.ts#L32)*

Get contact from mailinglists

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |

**Returns:** Promise\<any>

___

### getContacts

▸ **getContacts**(): Promise\<any>

*Defined in [mailing-list.ts:23](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/mailing-list.ts#L23)*

Get all mailinglists contacts

**Returns:** Promise\<any>

___

### updateContact

▸ **updateContact**(`contactId`: string, `data`: object): any

*Defined in [mailing-list.ts:52](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/mailing-list.ts#L52)*

Update Daten eines List Contact

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |
`data` | object |

**Returns:** any
