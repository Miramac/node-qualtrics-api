[qualtrics-api](../README.md) / [Exports](../modules.md) / [iq-directory](../modules/iq_directory.md) / IQDirectory

# Class: IQDirectory

[iq-directory](../modules/iq_directory.md).IQDirectory

## Table of contents

### Constructors

- [constructor](iq_directory.IQDirectory.md#constructor)

### Properties

- [config](iq_directory.IQDirectory.md#config)
- [directory](iq_directory.IQDirectory.md#directory)
- [fetch](iq_directory.IQDirectory.md#fetch)

### Methods

- [getAllContacts](iq_directory.IQDirectory.md#getallcontacts)
- [getContact](iq_directory.IQDirectory.md#getcontact)
- [getContacts](iq_directory.IQDirectory.md#getcontacts)
- [removeContact](iq_directory.IQDirectory.md#removecontact)
- [unsubscribedContact](iq_directory.IQDirectory.md#unsubscribedcontact)
- [updateContact](iq_directory.IQDirectory.md#updatecontact)

## Constructors

### constructor

• **new IQDirectory**(`config`, `directory?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `QualtricsOptions` |
| `directory?` | `string` |

#### Defined in

[iq-directory.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L9)

## Properties

### config

• **config**: `QualtricsOptions`

#### Defined in

[iq-directory.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L5)

___

### directory

• **directory**: `undefined` \| `string`

#### Defined in

[iq-directory.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L7)

___

### fetch

• **fetch**: [`Fetch`](fetch.Fetch.md)

#### Defined in

[iq-directory.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L6)

## Methods

### getAllContacts

▸ **getAllContacts**(): `Promise`<`any`[]\>

Get all Directory Contacts

#### Returns

`Promise`<`any`[]\>

#### Defined in

[iq-directory.ts:30](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L30)

___

### getContact

▸ **getContact**(`id`): `Promise`<`any`\>

Get data for one Directory Contact

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Contact ID |

#### Returns

`Promise`<`any`\>

#### Defined in

[iq-directory.ts:55](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L55)

___

### getContacts

▸ **getContacts**(`skipToken?`): `Promise`<`any`\>

Get Directory Contacts. PageSize 100

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipToken?` | ``null`` \| `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[iq-directory.ts:22](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L22)

___

### removeContact

▸ **removeContact**(`id`): `any`

Delete Directory Contact

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Contact ID |

#### Returns

`any`

#### Defined in

[iq-directory.ts:75](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L75)

___

### unsubscribedContact

▸ **unsubscribedContact**(`id`): `any`

Unsubscribed Contact im Directory aus

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`any`

#### Defined in

[iq-directory.ts:85](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L85)

___

### updateContact

▸ **updateContact**(`id`, `data`): `any`

Update Directory Contact

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Contact ID |
| `data` | `object` |  |

#### Returns

`any`

#### Defined in

[iq-directory.ts:66](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/iq-directory.ts#L66)
