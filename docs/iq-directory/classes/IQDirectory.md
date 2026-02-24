[**qualtrics-api**](../../README.md)

***

[qualtrics-api](../../modules.md) / [iq-directory](../README.md) / IQDirectory

# Class: IQDirectory

Defined in: iq-directory.ts:4

## Constructors

### Constructor

> **new IQDirectory**(`config`, `directory?`): `IQDirectory`

Defined in: iq-directory.ts:9

#### Parameters

##### config

[`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

##### directory?

`string`

#### Returns

`IQDirectory`

## Properties

### config

> **config**: [`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

Defined in: iq-directory.ts:5

***

### directory

> **directory**: `string` \| `undefined`

Defined in: iq-directory.ts:7

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

Defined in: iq-directory.ts:6

## Methods

### getAllContacts()

> **getAllContacts**(): `Promise`\<`any`[]\>

Defined in: iq-directory.ts:33

Get all Directory Contacts

#### Returns

`Promise`\<`any`[]\>

***

### getAllOptedOutContacts()

> **getAllOptedOutContacts**(): `Promise`\<`any`[]\>

Defined in: iq-directory.ts:69

Retrieve all the contacts in a directory who have opted out.

#### Returns

`Promise`\<`any`[]\>

***

### getContact()

> **getContact**(`id`): `Promise`\<`any`\>

Defined in: iq-directory.ts:93

Get data for one Directory Contact

#### Parameters

##### id

`string`

Contact ID

#### Returns

`Promise`\<`any`\>

***

### getContacts()

> **getContacts**(`nextPage?`): `Promise`\<`any`\>

Defined in: iq-directory.ts:22

Get Directory Contacts. PageSize 100

#### Parameters

##### nextPage?

`string` | `null`

#### Returns

`Promise`\<`any`\>

***

### getOptedOutContacts()

> **getOptedOutContacts**(`nextPage?`): `Promise`\<`any`\>

Defined in: iq-directory.ts:57

Retrieve the contacts in a directory who have opted out.

#### Parameters

##### nextPage?

`string` | `null`

#### Returns

`Promise`\<`any`\>

***

### removeContact()

> **removeContact**(`id`): `any`

Defined in: iq-directory.ts:113

Delete Directory Contact

#### Parameters

##### id

`string`

Contact ID

#### Returns

`any`

***

### unsubscribedContact()

> **unsubscribedContact**(`id`): `any`

Defined in: iq-directory.ts:123

Unsubscribed Contact im Directory aus

#### Parameters

##### id

`string`

#### Returns

`any`

***

### updateContact()

> **updateContact**(`id`, `data`): `any`

Defined in: iq-directory.ts:104

Update Directory Contact

#### Parameters

##### id

`string`

Contact ID

##### data

`object`

#### Returns

`any`
