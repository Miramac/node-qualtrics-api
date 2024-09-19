[**qualtrics-api**](../../README.md) • **Docs**

***

[qualtrics-api](../../modules.md) / [fetch](../README.md) / Fetch

# Class: Fetch

## Constructors

### new Fetch()

> **new Fetch**(`config`): [`Fetch`](Fetch.md)

#### Parameters

• **config**: `FetchOptions`

#### Returns

[`Fetch`](Fetch.md)

#### Defined in

[fetch.ts:11](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/fetch.ts#L11)

## Properties

### agent

> **agent**: `any`

#### Defined in

[fetch.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/fetch.ts#L10)

***

### baseUrl

> **baseUrl**: `string`

#### Defined in

[fetch.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/fetch.ts#L9)

***

### headers

> **headers**: `object`

#### Defined in

[fetch.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/fetch.ts#L8)

## Methods

### delete()

> **delete**(`path`, `data`?): `any`

DELETE Request

#### Parameters

• **path**: `string`

• **data?**: `object`

#### Returns

`any`

#### Defined in

[fetch.ts:83](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/fetch.ts#L83)

***

### get()

> **get**(`path`): `Promise`\<`any`\>

GET JSON Request Reponse

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`any`\>

#### Path

URL

#### Defined in

[fetch.ts:24](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/fetch.ts#L24)

***

### getRaw()

> **getRaw**(`path`): `Promise`\<`Response`\>

GET Reponse Object

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`Response`\>

#### Defined in

[fetch.ts:46](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/fetch.ts#L46)

***

### post()

> **post**(`path`, `data`): `any`

POST Request

#### Parameters

• **path**: `string`

• **data**: `object`

#### Returns

`any`

#### Defined in

[fetch.ts:60](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/fetch.ts#L60)

***

### put()

> **put**(`path`, `data`): `any`

#### Parameters

• **path**: `string`

• **data**: `object`

#### Returns

`any`

#### Defined in

[fetch.ts:103](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/fetch.ts#L103)
