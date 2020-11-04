**[qualtrics-api](../README.md)**

> [Globals](../globals.md) / ["survey"](../modules/_survey_.md) / Survey

# Class: Survey

## Hierarchy

* **Survey**

## Index

### Constructors

* [constructor](_survey_.survey.md#constructor)

### Properties

* [config](_survey_.survey.md#config)
* [directory](_survey_.survey.md#directory)
* [fetch](_survey_.survey.md#fetch)
* [id](_survey_.survey.md#id)

### Methods

* [addDistribution](_survey_.survey.md#adddistribution)
* [createResponseExport](_survey_.survey.md#createresponseexport)
* [deleteResponse](_survey_.survey.md#deleteresponse)
* [deleteSession](_survey_.survey.md#deletesession)
* [downloadResponseExport](_survey_.survey.md#downloadresponseexport)
* [fetchResponseExport](_survey_.survey.md#fetchresponseexport)
* [getAll](_survey_.survey.md#getall)
* [getLinks](_survey_.survey.md#getlinks)
* [getSession](_survey_.survey.md#getsession)
* [responseExportProgress](_survey_.survey.md#responseexportprogress)

## Constructors

### constructor

\+ **new Survey**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md), `id`: string, `directory?`: undefined \| string): [Survey](_survey_.survey.md)

*Defined in [survey.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md) |
`id` | string |
`directory?` | undefined \| string |

**Returns:** [Survey](_survey_.survey.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)

*Defined in [survey.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L7)*

___

### directory

•  **directory**: string \| undefined

*Defined in [survey.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L9)*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in [survey.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L8)*

___

### id

•  **id**: string

*Defined in [survey.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L10)*

## Methods

### addDistribution

▸ **addDistribution**(`mailingListId`: string, `data?`: any): any

*Defined in [survey.ts:35](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L35)*

Create a new link distribution

#### Parameters:

Name | Type |
------ | ------ |
`mailingListId` | string |
`data?` | any |

**Returns:** any

___

### createResponseExport

▸ **createResponseExport**(`options`: object): Promise\<any>

*Defined in [survey.ts:128](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L128)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | object |   |

**Returns:** Promise\<any>

___

### deleteResponse

▸ **deleteResponse**(`responseId`: string): any

*Defined in [survey.ts:175](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L175)*

Delete survey response

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`responseId` | string |   |

**Returns:** any

___

### deleteSession

▸ **deleteSession**(`sessionId`: string): any

*Defined in [survey.ts:100](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L100)*

#### Parameters:

Name | Type |
------ | ------ |
`sessionId` | string |

**Returns:** any

___

### downloadResponseExport

▸ **downloadResponseExport**(`outputFile`: string, `options`: any): Promise\<void>

*Defined in [survey.ts:111](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L111)*

Create a Exportfile with the survey response data

#### Parameters:

Name | Type |
------ | ------ |
`outputFile` | string |
`options` | any |

**Returns:** Promise\<void>

___

### fetchResponseExport

▸ **fetchResponseExport**(`fileId`: string, `outputFile`: string): Promise\<unknown>

*Defined in [survey.ts:152](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L152)*

#### Parameters:

Name | Type |
------ | ------ |
`fileId` | string |
`outputFile` | string |

**Returns:** Promise\<unknown>

___

### getAll

▸ **getAll**(`distributionRequestType?`: undefined \| string): Promise\<any>

*Defined in [survey.ts:24](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L24)*

List all survey distributions

#### Parameters:

Name | Type |
------ | ------ |
`distributionRequestType?` | undefined \| string |

**Returns:** Promise\<any>

___

### getLinks

▸ **getLinks**(`distribution`: string): Promise\<any[]>

*Defined in [survey.ts:66](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L66)*

get all contacts with survey link for one Distribution

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`distribution` | string | Distribution-ID (eg. EMD_abdfgfdgh4e64) |

**Returns:** Promise\<any[]>

___

### getSession

▸ **getSession**(`sessionId`: string): Promise\<any>

*Defined in [survey.ts:92](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L92)*

 get session data

#### Parameters:

Name | Type |
------ | ------ |
`sessionId` | string |

**Returns:** Promise\<any>

___

### responseExportProgress

▸ **responseExportProgress**(`progressId`: string): Promise\<any>

*Defined in [survey.ts:139](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/survey.ts#L139)*

#### Parameters:

Name | Type |
------ | ------ |
`progressId` | string |

**Returns:** Promise\<any>
