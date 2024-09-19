[**qualtrics-api**](../../README.md) • **Docs**

***

[qualtrics-api](../../modules.md) / [iq-directory](../README.md) / IQDirectory

# Class: IQDirectory

## Constructors

### new IQDirectory()

> **new IQDirectory**(`config`, `directory`?): [`IQDirectory`](IQDirectory.md)

#### Parameters

• **config**: `QualtricsOptions`

• **directory?**: `string`

#### Returns

[`IQDirectory`](IQDirectory.md)

#### Defined in

[iq-directory.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L9)

## Properties

### config

> **config**: `QualtricsOptions`

#### Defined in

[iq-directory.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L5)

***

### directory

> **directory**: `undefined` \| `string`

#### Defined in

[iq-directory.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L7)

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

#### Defined in

[iq-directory.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L6)

## Methods

### getAllContacts()

> **getAllContacts**(): `Promise`\<`any`[]\>

Get all Directory Contacts

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[iq-directory.ts:33](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L33)

***

### getAllOptedOutContacts()

> **getAllOptedOutContacts**(): `Promise`\<`any`[]\>

Retrieve all the contacts in a directory who have opted out.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[iq-directory.ts:69](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L69)

***

### getContact()

> **getContact**(`id`): `Promise`\<`any`\>

Get data for one Directory Contact

#### Parameters

• **id**: `string`

Contact ID

#### Returns

`Promise`\<`any`\>

#### Defined in

[iq-directory.ts:93](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L93)

***

### getContacts()

> **getContacts**(`nextPage`?): `Promise`\<`any`\>

Get Directory Contacts. PageSize 100

#### Parameters

• **nextPage?**: `null` \| `string`

#### Returns

`Promise`\<`any`\>

#### Defined in

[iq-directory.ts:22](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L22)

***

### getOptedOutContacts()

> **getOptedOutContacts**(`nextPage`?): `Promise`\<`any`\>

Retrieve the contacts in a directory who have opted out.

#### Parameters

• **nextPage?**: `null` \| `string`

#### Returns

`Promise`\<`any`\>

#### Defined in

[iq-directory.ts:57](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L57)

***

### removeContact()

> **removeContact**(`id`): `any`

Delete Directory Contact

#### Parameters

• **id**: `string`

Contact ID

#### Returns

`any`

#### Defined in

[iq-directory.ts:113](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L113)

***

### unsubscribedContact()

> **unsubscribedContact**(`id`): `any`

Unsubscribed Contact im Directory aus

#### Parameters

• **id**: `string`

#### Returns

`any`

#### Defined in

[iq-directory.ts:123](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L123)

***

### updateContact()

> **updateContact**(`id`, `data`): `any`

Update Directory Contact

#### Parameters

• **id**: `string`

Contact ID

• **data**: `object`

#### Returns

`any`

#### Defined in

[iq-directory.ts:104](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/iq-directory.ts#L104)
