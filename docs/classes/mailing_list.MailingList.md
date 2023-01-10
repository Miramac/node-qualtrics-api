[qualtrics-api](../README.md) / [Exports](../modules.md) / [mailing-list](../modules/mailing_list.md) / MailingList

# Class: MailingList

[mailing-list](../modules/mailing_list.md).MailingList

## Table of contents

### Constructors

- [constructor](mailing_list.MailingList.md#constructor)

### Properties

- [config](mailing_list.MailingList.md#config)
- [directory](mailing_list.MailingList.md#directory)
- [fetch](mailing_list.MailingList.md#fetch)
- [id](mailing_list.MailingList.md#id)

### Methods

- [add](mailing_list.MailingList.md#add)
- [addContact](mailing_list.MailingList.md#addcontact)
- [addContacts](mailing_list.MailingList.md#addcontacts)
- [delete](mailing_list.MailingList.md#delete)
- [getContact](mailing_list.MailingList.md#getcontact)
- [getContacts](mailing_list.MailingList.md#getcontacts)
- [removeContact](mailing_list.MailingList.md#removecontact)
- [updateContact](mailing_list.MailingList.md#updatecontact)

## Constructors

### constructor

• **new MailingList**(`config`, `id?`, `directory?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `QualtricsOptions` |
| `id?` | `string` |
| `directory?` | `string` |

#### Defined in

[mailing-list.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L10)

## Properties

### config

• **config**: `QualtricsOptions`

#### Defined in

[mailing-list.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L5)

___

### directory

• **directory**: `undefined` \| `string`

#### Defined in

[mailing-list.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L7)

___

### fetch

• **fetch**: [`Fetch`](fetch.Fetch.md)

#### Defined in

[mailing-list.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L6)

___

### id

• **id**: `undefined` \| `string`

#### Defined in

[mailing-list.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L8)

## Methods

### add

▸ **add**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`any`

#### Defined in

[mailing-list.ts:89](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L89)

___

### addContact

▸ **addContact**(`contact`): `any`

Add List Contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `contact` | `object` |

#### Returns

`any`

#### Defined in

[mailing-list.ts:41](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L41)

___

### addContacts

▸ **addContacts**(`contacts`): `Promise`<`unknown`\>

Add List Contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `contacts` | `object`[] |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[mailing-list.ts:49](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L49)

___

### delete

▸ **delete**(): `any`

Update mteh Mailinglist

#### Returns

`any`

#### Defined in

[mailing-list.ts:99](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L99)

___

### getContact

▸ **getContact**(`contactId`): `Promise`<`any`\>

Get contact from mailinglists

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[mailing-list.ts:32](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L32)

___

### getContacts

▸ **getContacts**(): `Promise`<`any`\>

Get all mailinglists contacts

#### Returns

`Promise`<`any`\>

#### Defined in

[mailing-list.ts:23](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L23)

___

### removeContact

▸ **removeContact**(`contactId`): `any`

Update Daten eines List Contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `String` |

#### Returns

`any`

#### Defined in

[mailing-list.ts:81](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L81)

___

### updateContact

▸ **updateContact**(`contactId`, `data`): `any`

Update Daten eines List Contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `data` | `object` |

#### Returns

`any`

#### Defined in

[mailing-list.ts:70](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/mailing-list.ts#L70)
