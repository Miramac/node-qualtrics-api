[**qualtrics-api**](../../README.md)

***

[qualtrics-api](../../modules.md) / [fetch](../README.md) / Fetch

# Class: Fetch

Defined in: fetch.ts:7

## Constructors

### Constructor

> **new Fetch**(`config`): `Fetch`

Defined in: fetch.ts:11

#### Parameters

##### config

[`FetchOptions`](../../interfaces/options/interfaces/FetchOptions.md)

#### Returns

`Fetch`

## Properties

### agent

> **agent**: `any`

Defined in: fetch.ts:10

***

### baseUrl

> **baseUrl**: `string`

Defined in: fetch.ts:9

***

### headers

> **headers**: `object`

Defined in: fetch.ts:8

## Methods

### delete()

> **delete**(`path`, `data?`): `any`

Defined in: fetch.ts:83

DELETE Request

#### Parameters

##### path

`string`

##### data?

`object`

#### Returns

`any`

***

### get()

> **get**(`path`): `Promise`\<`any`\>

Defined in: fetch.ts:24

GET JSON Request Reponse

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`any`\>

#### Path

URL

***

### getRaw()

> **getRaw**(`path`): `Promise`\<`Response`\>

Defined in: fetch.ts:46

GET Reponse Object

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`Response`\>

***

### post()

> **post**(`path`, `data`): `any`

Defined in: fetch.ts:60

POST Request

#### Parameters

##### path

`string`

##### data

`object`

#### Returns

`any`

***

### put()

> **put**(`path`, `data`): `any`

Defined in: fetch.ts:103

#### Parameters

##### path

`string`

##### data

`object`

#### Returns

`any`
