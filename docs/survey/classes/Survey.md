[**qualtrics-api**](../../README.md) • **Docs**

***

[qualtrics-api](../../modules.md) / [survey](../README.md) / Survey

# Class: Survey

## Constructors

### new Survey()

> **new Survey**(`config`, `id`, `directory`?): [`Survey`](Survey.md)

#### Parameters

• **config**: `QualtricsOptions`

• **id**: `string`

• **directory?**: `string`

#### Returns

[`Survey`](Survey.md)

#### Defined in

[survey.ts:13](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L13)

## Properties

### config

> **config**: `QualtricsOptions`

#### Defined in

[survey.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L8)

***

### directory

> **directory**: `undefined` \| `string`

#### Defined in

[survey.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L10)

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

#### Defined in

[survey.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L9)

***

### id

> **id**: `string`

#### Defined in

[survey.ts:11](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L11)

## Methods

### ~~addDistribution()~~

> **addDistribution**(`mailingListId`, `data`?): `any`

#### Parameters

• **mailingListId**: `string`

• **data?**: `any`

#### Returns

`any`

#### Deprecated

Create a new link distribution

#### Defined in

[survey.ts:44](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L44)

***

### createResponseExport()

> **createResponseExport**(`options`): `Promise`\<`any`\>

#### Parameters

• **options**: `object`

#### Returns

`Promise`\<`any`\>

#### Defined in

[survey.ts:107](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L107)

***

### ~~deleteDistribution()~~

> **deleteDistribution**(`distributionId`): `Promise`\<`any`\>

#### Parameters

• **distributionId**: `string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

#### Defined in

[survey.ts:52](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L52)

***

### deleteResponse()

> **deleteResponse**(`responseId`): `any`

Delete survey response

#### Parameters

• **responseId**: `string`

#### Returns

`any`

#### Defined in

[survey.ts:154](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L154)

***

### deleteSession()

> **deleteSession**(`sessionId`): `any`

#### Parameters

• **sessionId**: `string`

#### Returns

`any`

#### Defined in

[survey.ts:79](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L79)

***

### distribution()

> **distribution**(`distributionId`?): [`Distribution`](../../distribution/classes/Distribution.md)

#### Parameters

• **distributionId?**: `string`

#### Returns

[`Distribution`](../../distribution/classes/Distribution.md)

#### Defined in

[survey.ts:34](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L34)

***

### downloadResponseExport()

> **downloadResponseExport**(`outputFile`, `options`): `Promise`\<`void`\>

Create a Exportfile with the survey response data

#### Parameters

• **outputFile**: `string`

• **options**: `any`

#### Returns

`Promise`\<`void`\>

#### Defined in

[survey.ts:90](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L90)

***

### fetchResponseExport()

> **fetchResponseExport**(`fileId`, `outputFile`): `Promise`\<`unknown`\>

#### Parameters

• **fileId**: `string`

• **outputFile**: `string`

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[survey.ts:131](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L131)

***

### ~~getLinks()~~

> **getLinks**(`distributionId`): `Promise`\<`object`\>

#### Parameters

• **distributionId**: `string`

Distribution-ID (eg. EMD_abdfgfdgh4e64)

#### Returns

`Promise`\<`object`\>

##### ~~result~~

> **result**: `object`

##### result.contacts

> **contacts**: `any`[]

#### Deprecated

get all contacts with survey link for one Distribution

#### Defined in

[survey.ts:62](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L62)

***

### getSession()

> **getSession**(`sessionId`): `Promise`\<`any`\>

get session data

#### Parameters

• **sessionId**: `string`

#### Returns

`Promise`\<`any`\>

#### Defined in

[survey.ts:71](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L71)

***

### listDistribution()

> **listDistribution**(`distributionRequestType`?): `Promise`\<`any`\>

List all survey distributions

#### Parameters

• **distributionRequestType?**: `string`

('GeneratedInvite' for Individual Link Distributions)

#### Returns

`Promise`\<`any`\>

#### Defined in

[survey.ts:25](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L25)

***

### responseExportProgress()

> **responseExportProgress**(`progressId`): `Promise`\<`any`\>

#### Parameters

• **progressId**: `string`

#### Returns

`Promise`\<`any`\>

#### Defined in

[survey.ts:118](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/survey.ts#L118)
