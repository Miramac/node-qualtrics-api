[**qualtrics-api**](../../README.md) • **Docs**

***

[qualtrics-api](../../modules.md) / [mailing-list](../README.md) / MailingList

# Class: MailingList

## Constructors

### new MailingList()

> **new MailingList**(`config`, `id`?, `directory`?): [`MailingList`](MailingList.md)

#### Parameters

• **config**: `QualtricsOptions`

• **id?**: `string`

• **directory?**: `string`

#### Returns

[`MailingList`](MailingList.md)

#### Defined in

[mailing-list.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L10)

## Properties

### config

> **config**: `QualtricsOptions`

#### Defined in

[mailing-list.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L5)

***

### directory

> **directory**: `undefined` \| `string`

#### Defined in

[mailing-list.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L7)

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

#### Defined in

[mailing-list.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L6)

***

### id

> **id**: `undefined` \| `string`

#### Defined in

[mailing-list.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L8)

## Methods

### add()

> **add**(`data`): `any`

#### Parameters

• **data**: `object`

#### Returns

`any`

#### Defined in

[mailing-list.ts:111](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L111)

***

### addContact()

> **addContact**(`contact`): `any`

Add List Contact

#### Parameters

• **contact**: `object`

#### Returns

`any`

#### Defined in

[mailing-list.ts:63](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L63)

***

### addContacts()

> **addContacts**(`contacts`): `Promise`\<`unknown`\>

Add List Contact

#### Parameters

• **contacts**: `object`[]

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[mailing-list.ts:71](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L71)

***

### delete()

> **delete**(): `any`

Update mteh Mailinglist

#### Returns

`any`

#### Defined in

[mailing-list.ts:121](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L121)

***

### getAllContacts()

> **getAllContacts**(`limit`): `Promise`\<`any`[]\>

Get all mailinglists contacts

#### Parameters

• **limit**: `number` = `100`

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[mailing-list.ts:32](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L32)

***

### getContact()

> **getContact**(`contactId`): `Promise`\<`any`\>

Get contact from mailinglists

#### Parameters

• **contactId**: `string`

#### Returns

`Promise`\<`any`\>

#### Defined in

[mailing-list.ts:54](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L54)

***

### getContacts()

> **getContacts**(`skipToken`?): `Promise`\<`any`\>

Get 50 mailinglists contacts

#### Parameters

• **skipToken?**: `null` \| `string`

(optional)

#### Returns

`Promise`\<`any`\>

#### Defined in

[mailing-list.ts:23](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L23)

***

### removeContact()

> **removeContact**(`contactId`): `any`

Update Daten eines List Contact

#### Parameters

• **contactId**: `String`

#### Returns

`any`

#### Defined in

[mailing-list.ts:103](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L103)

***

### updateContact()

> **updateContact**(`contactId`, `data`): `any`

Update Daten eines List Contact

#### Parameters

• **contactId**: `string`

• **data**: `object`

#### Returns

`any`

#### Defined in

[mailing-list.ts:92](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/mailing-list.ts#L92)
