[**qualtrics-api**](../../README.md)

***

[qualtrics-api](../../modules.md) / [mailing-list](../README.md) / MailingList

# Class: MailingList

Defined in: mailing-list.ts:4

## Constructors

### Constructor

> **new MailingList**(`config`, `id?`, `directory?`): `MailingList`

Defined in: mailing-list.ts:10

#### Parameters

##### config

[`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

##### id?

`string`

##### directory?

`string`

#### Returns

`MailingList`

## Properties

### config

> **config**: [`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

Defined in: mailing-list.ts:5

***

### directory

> **directory**: `string` \| `undefined`

Defined in: mailing-list.ts:7

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

Defined in: mailing-list.ts:6

***

### id

> **id**: `string` \| `undefined`

Defined in: mailing-list.ts:8

## Methods

### add()

> **add**(`data`): `any`

Defined in: mailing-list.ts:111

#### Parameters

##### data

`object`

#### Returns

`any`

***

### addContact()

> **addContact**(`contact`): `any`

Defined in: mailing-list.ts:63

Add List Contact

#### Parameters

##### contact

`object`

#### Returns

`any`

***

### addContacts()

> **addContacts**(`contacts`): `Promise`\<`unknown`\>

Defined in: mailing-list.ts:71

Add List Contact

#### Parameters

##### contacts

`object`[]

#### Returns

`Promise`\<`unknown`\>

***

### delete()

> **delete**(): `any`

Defined in: mailing-list.ts:121

Update mteh Mailinglist

#### Returns

`any`

***

### getAllContacts()

> **getAllContacts**(`limit?`): `Promise`\<`any`[]\>

Defined in: mailing-list.ts:32

Get all mailinglists contacts

#### Parameters

##### limit?

`number` = `100`

#### Returns

`Promise`\<`any`[]\>

***

### getContact()

> **getContact**(`contactId`): `Promise`\<`any`\>

Defined in: mailing-list.ts:54

Get contact from mailinglists

#### Parameters

##### contactId

`string`

#### Returns

`Promise`\<`any`\>

***

### getContacts()

> **getContacts**(`skipToken?`): `Promise`\<`any`\>

Defined in: mailing-list.ts:23

Get 50 mailinglists contacts

#### Parameters

##### skipToken?

(optional)

`string` | `null`

#### Returns

`Promise`\<`any`\>

***

### removeContact()

> **removeContact**(`contactId`): `any`

Defined in: mailing-list.ts:103

Update Daten eines List Contact

#### Parameters

##### contactId

`String`

#### Returns

`any`

***

### updateContact()

> **updateContact**(`contactId`, `data`): `any`

Defined in: mailing-list.ts:92

Update Daten eines List Contact

#### Parameters

##### contactId

`string`

##### data

`object`

#### Returns

`any`
