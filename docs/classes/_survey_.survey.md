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
* [deleteDistribution](_survey_.survey.md#deletedistribution)
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

*Defined in [survey.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L10)*

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

*Defined in [survey.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L7)*

___

### directory

•  **directory**: string \| undefined

*Defined in [survey.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L9)*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in [survey.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L8)*

___

### id

•  **id**: string

*Defined in [survey.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L10)*

## Methods

### addDistribution

▸ **addDistribution**(`mailingListId`: string, `data?`: any): any

*Defined in [survey.ts:35](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L35)*

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

*Defined in [survey.ts:135](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L135)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | object |   |

**Returns:** Promise\<any>

___

### deleteDistribution

▸ **deleteDistribution**(`distributionId`: string): Promise\<any>

*Defined in [survey.ts:64](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L64)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`distributionId` | string |   |

**Returns:** Promise\<any>

___

### deleteResponse

▸ **deleteResponse**(`responseId`: string): any

*Defined in [survey.ts:182](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L182)*

Delete survey response

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`responseId` | string |   |

**Returns:** any

___

### deleteSession

▸ **deleteSession**(`sessionId`: string): any

*Defined in [survey.ts:107](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L107)*

#### Parameters:

Name | Type |
------ | ------ |
`sessionId` | string |

**Returns:** any

___

### downloadResponseExport

▸ **downloadResponseExport**(`outputFile`: string, `options`: any): Promise\<void>

*Defined in [survey.ts:118](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L118)*

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

*Defined in [survey.ts:159](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L159)*

#### Parameters:

Name | Type |
------ | ------ |
`fileId` | string |
`outputFile` | string |

**Returns:** Promise\<unknown>

___

### getAll

▸ **getAll**(`distributionRequestType?`: undefined \| string): Promise\<any>

*Defined in [survey.ts:24](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L24)*

List all survey distributions

#### Parameters:

Name | Type |
------ | ------ |
`distributionRequestType?` | undefined \| string |

**Returns:** Promise\<any>

___

### getLinks

▸ **getLinks**(`distributionId`: string): Promise\<any[]>

*Defined in [survey.ts:73](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L73)*

get all contacts with survey link for one Distribution

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`distributionId` | string | Distribution-ID (eg. EMD_abdfgfdgh4e64) |

**Returns:** Promise\<any[]>

___

### getSession

▸ **getSession**(`sessionId`: string): Promise\<any>

*Defined in [survey.ts:99](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L99)*

 get session data

#### Parameters:

Name | Type |
------ | ------ |
`sessionId` | string |

**Returns:** Promise\<any>

___

### responseExportProgress

▸ **responseExportProgress**(`progressId`: string): Promise\<any>

*Defined in [survey.ts:146](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/survey.ts#L146)*

#### Parameters:

Name | Type |
------ | ------ |
`progressId` | string |

**Returns:** Promise\<any>
