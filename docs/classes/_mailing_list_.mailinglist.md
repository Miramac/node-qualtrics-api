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

* [add](_mailing_list_.mailinglist.md#add)
* [addContact](_mailing_list_.mailinglist.md#addcontact)
* [delete](_mailing_list_.mailinglist.md#delete)
* [getContact](_mailing_list_.mailinglist.md#getcontact)
* [getContacts](_mailing_list_.mailinglist.md#getcontacts)
* [removeContact](_mailing_list_.mailinglist.md#removecontact)
* [updateContact](_mailing_list_.mailinglist.md#updatecontact)

## Constructors

### constructor

\+ **new MailingList**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md), `id?`: undefined \| string, `directory?`: undefined \| string): [MailingList](_mailing_list_.mailinglist.md)

*Defined in [mailing-list.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md) |
`id?` | undefined \| string |
`directory?` | undefined \| string |

**Returns:** [MailingList](_mailing_list_.mailinglist.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)

*Defined in [mailing-list.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L6)*

___

### directory

•  **directory**: string \| undefined

*Defined in [mailing-list.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L8)*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in [mailing-list.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L7)*

___

### id

•  **id**: string \| undefined

*Defined in [mailing-list.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L9)*

## Methods

### add

▸ **add**(`data`: object): any

*Defined in [mailing-list.ts:72](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L72)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | object |

**Returns:** any

___

### addContact

▸ **addContact**(`data`: object): any

*Defined in [mailing-list.ts:42](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L42)*

Add List Contact

#### Parameters:

Name | Type |
------ | ------ |
`data` | object |

**Returns:** any

___

### delete

▸ **delete**(): any

*Defined in [mailing-list.ts:82](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L82)*

Update mteh Mailinglist

**Returns:** any

___

### getContact

▸ **getContact**(`contactId`: string): Promise\<any>

*Defined in [mailing-list.ts:33](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L33)*

Get contact from mailinglists

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |

**Returns:** Promise\<any>

___

### getContacts

▸ **getContacts**(): Promise\<any>

*Defined in [mailing-list.ts:24](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L24)*

Get all mailinglists contacts

**Returns:** Promise\<any>

___

### removeContact

▸ **removeContact**(`contactId`: String): any

*Defined in [mailing-list.ts:64](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L64)*

Update Daten eines List Contact

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | String |

**Returns:** any

___

### updateContact

▸ **updateContact**(`contactId`: string, `data`: object): any

*Defined in [mailing-list.ts:53](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/mailing-list.ts#L53)*

Update Daten eines List Contact

#### Parameters:

Name | Type |
------ | ------ |
`contactId` | string |
`data` | object |

**Returns:** any
