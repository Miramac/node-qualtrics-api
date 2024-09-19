[**qualtrics-api**](../../README.md) • **Docs**

***

[qualtrics-api](../../modules.md) / [distribution](../README.md) / Distribution

# Class: Distribution

## Constructors

### new Distribution()

> **new Distribution**(`config`, `surveyId`, `id`?, `directory`?): [`Distribution`](Distribution.md)

#### Parameters

• **config**: `QualtricsOptions`

• **surveyId**: `string`

• **id?**: `string`

• **directory?**: `string`

#### Returns

[`Distribution`](Distribution.md)

#### Defined in

[distribution.ts:13](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/distribution.ts#L13)

## Properties

### config

> **config**: `QualtricsOptions`

#### Defined in

[distribution.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/distribution.ts#L7)

***

### directory

> **directory**: `undefined` \| `string`

#### Defined in

[distribution.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/distribution.ts#L9)

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

#### Defined in

[distribution.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/distribution.ts#L8)

***

### id

> **id**: `undefined` \| `string`

#### Defined in

[distribution.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/distribution.ts#L10)

***

### surveyId

> **surveyId**: `string`

#### Defined in

[distribution.ts:11](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/distribution.ts#L11)

## Methods

### add()

> **add**(`mailingListId`, `data`?): `any`

Create a new link distribution
  *

#### Parameters

• **mailingListId**: `string`

*

• **data?**: `any`

*

#### Returns

`any`

#### Defined in

[distribution.ts:27](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/distribution.ts#L27)

***

### contacts()

> **contacts**(): `Promise`\<`object`\>

get all contacts with survey link for one Distribution

#### Returns

`Promise`\<`object`\>

##### result

> **result**: `object`

##### result.contacts

> **contacts**: `any`[]

#### Defined in

[distribution.ts:66](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/distribution.ts#L66)

***

### delete()

> **delete**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

[distribution.ts:57](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/distribution.ts#L57)
