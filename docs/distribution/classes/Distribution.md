[**qualtrics-api**](../../README.md)

***

[qualtrics-api](../../modules.md) / [distribution](../README.md) / Distribution

# Class: Distribution

Defined in: distribution.ts:6

## Constructors

### Constructor

> **new Distribution**(`config`, `surveyId`, `id?`, `directory?`): `Distribution`

Defined in: distribution.ts:13

#### Parameters

##### config

[`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

##### surveyId

`string`

##### id?

`string`

##### directory?

`string`

#### Returns

`Distribution`

## Properties

### config

> **config**: [`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

Defined in: distribution.ts:7

***

### directory

> **directory**: `string` \| `undefined`

Defined in: distribution.ts:9

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

Defined in: distribution.ts:8

***

### id

> **id**: `string` \| `undefined`

Defined in: distribution.ts:10

***

### surveyId

> **surveyId**: `string`

Defined in: distribution.ts:11

## Methods

### add()

> **add**(`mailingListId`, `data?`): `any`

Defined in: distribution.ts:27

Create a new link distribution
  *

#### Parameters

##### mailingListId

`string`

*

##### data?

`any`

*

#### Returns

`any`

***

### contacts()

> **contacts**(): `Promise`\<\{ `result`: \{ `contacts`: `any`[]; \}; \}\>

Defined in: distribution.ts:66

get all contacts with survey link for one Distribution

#### Returns

`Promise`\<\{ `result`: \{ `contacts`: `any`[]; \}; \}\>

***

### delete()

> **delete**(): `Promise`\<`any`\>

Defined in: distribution.ts:57

#### Returns

`Promise`\<`any`\>
