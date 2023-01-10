[qualtrics-api](../README.md) / [Exports](../modules.md) / [survey](../modules/survey.md) / Survey

# Class: Survey

[survey](../modules/survey.md).Survey

## Table of contents

### Constructors

- [constructor](survey.Survey.md#constructor)

### Properties

- [config](survey.Survey.md#config)
- [directory](survey.Survey.md#directory)
- [fetch](survey.Survey.md#fetch)
- [id](survey.Survey.md#id)

### Methods

- [addDistribution](survey.Survey.md#adddistribution)
- [createResponseExport](survey.Survey.md#createresponseexport)
- [deleteDistribution](survey.Survey.md#deletedistribution)
- [deleteResponse](survey.Survey.md#deleteresponse)
- [deleteSession](survey.Survey.md#deletesession)
- [distribution](survey.Survey.md#distribution)
- [downloadResponseExport](survey.Survey.md#downloadresponseexport)
- [fetchResponseExport](survey.Survey.md#fetchresponseexport)
- [getLinks](survey.Survey.md#getlinks)
- [getSession](survey.Survey.md#getsession)
- [listDistribution](survey.Survey.md#listdistribution)
- [responseExportProgress](survey.Survey.md#responseexportprogress)

## Constructors

### constructor

• **new Survey**(`config`, `id`, `directory?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `QualtricsOptions` |
| `id` | `string` |
| `directory?` | `string` |

#### Defined in

[survey.ts:13](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L13)

## Properties

### config

• **config**: `QualtricsOptions`

#### Defined in

[survey.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L8)

___

### directory

• **directory**: `undefined` \| `string`

#### Defined in

[survey.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L10)

___

### fetch

• **fetch**: [`Fetch`](fetch.Fetch.md)

#### Defined in

[survey.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L9)

___

### id

• **id**: `string`

#### Defined in

[survey.ts:11](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L11)

## Methods

### addDistribution

▸ **addDistribution**(`mailingListId`, `data?`): `any`

**`Deprecated`**

Create a new link distribution

#### Parameters

| Name | Type |
| :------ | :------ |
| `mailingListId` | `string` |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[survey.ts:44](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L44)

___

### createResponseExport

▸ **createResponseExport**(`options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[survey.ts:107](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L107)

___

### deleteDistribution

▸ **deleteDistribution**(`distributionId`): `Promise`<`any`\>

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `distributionId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[survey.ts:52](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L52)

___

### deleteResponse

▸ **deleteResponse**(`responseId`): `any`

Delete survey response

#### Parameters

| Name | Type |
| :------ | :------ |
| `responseId` | `string` |

#### Returns

`any`

#### Defined in

[survey.ts:154](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L154)

___

### deleteSession

▸ **deleteSession**(`sessionId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `string` |

#### Returns

`any`

#### Defined in

[survey.ts:79](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L79)

___

### distribution

▸ **distribution**(`distributionId?`): [`Distribution`](distribution.Distribution.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `distributionId?` | `string` |

#### Returns

[`Distribution`](distribution.Distribution.md)

#### Defined in

[survey.ts:34](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L34)

___

### downloadResponseExport

▸ **downloadResponseExport**(`outputFile`, `options`): `Promise`<`void`\>

Create a Exportfile with the survey response data

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputFile` | `string` |
| `options` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[survey.ts:90](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L90)

___

### fetchResponseExport

▸ **fetchResponseExport**(`fileId`, `outputFile`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `outputFile` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[survey.ts:131](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L131)

___

### getLinks

▸ **getLinks**(`distributionId`): `Promise`<{ `result`: { `contacts`: `any`[]  }  }\>

**`Deprecated`**

get all contacts with survey link for one Distribution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distributionId` | `string` | Distribution-ID (eg. EMD_abdfgfdgh4e64) |

#### Returns

`Promise`<{ `result`: { `contacts`: `any`[]  }  }\>

#### Defined in

[survey.ts:62](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L62)

___

### getSession

▸ **getSession**(`sessionId`): `Promise`<`any`\>

get session data

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[survey.ts:71](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L71)

___

### listDistribution

▸ **listDistribution**(`distributionRequestType?`): `Promise`<`any`\>

List all survey distributions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distributionRequestType?` | `string` | ('GeneratedInvite' for Individual Link Distributions) |

#### Returns

`Promise`<`any`\>

#### Defined in

[survey.ts:25](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L25)

___

### responseExportProgress

▸ **responseExportProgress**(`progressId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressId` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[survey.ts:118](https://github.com/Miramac/node-qualtrics-api/blob/8bb8f77/lib/survey.ts#L118)
