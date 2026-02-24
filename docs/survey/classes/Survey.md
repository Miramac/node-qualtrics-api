[**qualtrics-api**](../../README.md)

***

[qualtrics-api](../../modules.md) / [survey](../README.md) / Survey

# Class: Survey

Defined in: survey.ts:7

## Constructors

### Constructor

> **new Survey**(`config`, `id`, `directory?`): `Survey`

Defined in: survey.ts:13

#### Parameters

##### config

[`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

##### id

`string`

##### directory?

`string`

#### Returns

`Survey`

## Properties

### config

> **config**: [`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

Defined in: survey.ts:8

***

### directory

> **directory**: `string` \| `undefined`

Defined in: survey.ts:10

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

Defined in: survey.ts:9

***

### id

> **id**: `string`

Defined in: survey.ts:11

## Methods

### ~~addDistribution()~~

> **addDistribution**(`mailingListId`, `data?`): `any`

Defined in: survey.ts:44

#### Parameters

##### mailingListId

`string`

##### data?

`any`

#### Returns

`any`

#### Deprecated

Create a new link distribution

***

### createResponseExport()

> **createResponseExport**(`options`): `Promise`\<`any`\>

Defined in: survey.ts:107

#### Parameters

##### options

`object`

#### Returns

`Promise`\<`any`\>

***

### ~~deleteDistribution()~~

> **deleteDistribution**(`distributionId`): `Promise`\<`any`\>

Defined in: survey.ts:52

#### Parameters

##### distributionId

`string`

#### Returns

`Promise`\<`any`\>

#### Deprecated

***

### deleteResponse()

> **deleteResponse**(`responseId`): `any`

Defined in: survey.ts:154

Delete survey response

#### Parameters

##### responseId

`string`

#### Returns

`any`

***

### deleteSession()

> **deleteSession**(`sessionId`): `any`

Defined in: survey.ts:79

#### Parameters

##### sessionId

`string`

#### Returns

`any`

***

### distribution()

> **distribution**(`distributionId?`): [`Distribution`](../../distribution/classes/Distribution.md)

Defined in: survey.ts:34

#### Parameters

##### distributionId?

`string`

#### Returns

[`Distribution`](../../distribution/classes/Distribution.md)

***

### downloadResponseExport()

> **downloadResponseExport**(`outputFile`, `options`): `Promise`\<`void`\>

Defined in: survey.ts:90

Create a Exportfile with the survey response data

#### Parameters

##### outputFile

`string`

##### options

`any`

#### Returns

`Promise`\<`void`\>

***

### fetchResponseExport()

> **fetchResponseExport**(`fileId`, `outputFile`): `Promise`\<`unknown`\>

Defined in: survey.ts:131

#### Parameters

##### fileId

`string`

##### outputFile

`string`

#### Returns

`Promise`\<`unknown`\>

***

### ~~getLinks()~~

> **getLinks**(`distributionId`): `Promise`\<\{ `result`: \{ `contacts`: `any`[]; \}; \}\>

Defined in: survey.ts:62

#### Parameters

##### distributionId

`string`

Distribution-ID (eg. EMD_abdfgfdgh4e64)

#### Returns

`Promise`\<\{ `result`: \{ `contacts`: `any`[]; \}; \}\>

#### Deprecated

get all contacts with survey link for one Distribution

***

### getSession()

> **getSession**(`sessionId`): `Promise`\<`any`\>

Defined in: survey.ts:71

get session data

#### Parameters

##### sessionId

`string`

#### Returns

`Promise`\<`any`\>

***

### listDistribution()

> **listDistribution**(`distributionRequestType?`): `Promise`\<`any`\>

Defined in: survey.ts:25

List all survey distributions

#### Parameters

##### distributionRequestType?

`string`

('GeneratedInvite' for Individual Link Distributions)

#### Returns

`Promise`\<`any`\>

***

### responseExportProgress()

> **responseExportProgress**(`progressId`): `Promise`\<`any`\>

Defined in: survey.ts:118

#### Parameters

##### progressId

`string`

#### Returns

`Promise`\<`any`\>
