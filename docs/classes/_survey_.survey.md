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
* [distribution](_survey_.survey.md#distribution)
* [downloadResponseExport](_survey_.survey.md#downloadresponseexport)
* [fetchResponseExport](_survey_.survey.md#fetchresponseexport)
* [getLinks](_survey_.survey.md#getlinks)
* [getSession](_survey_.survey.md#getsession)
* [listDistribution](_survey_.survey.md#listdistribution)
* [responseExportProgress](_survey_.survey.md#responseexportprogress)

## Constructors

### constructor

\+ **new Survey**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md), `id`: string, `directory?`: undefined \| string): [Survey](_survey_.survey.md)

*Defined in survey.ts:11*

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

*Defined in survey.ts:8*

___

### directory

•  **directory**: string \| undefined

*Defined in survey.ts:10*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in survey.ts:9*

___

### id

•  **id**: string

*Defined in survey.ts:11*

## Methods

### addDistribution

▸ **addDistribution**(`mailingListId`: string, `data?`: any): any

*Defined in survey.ts:44*

**`deprecated`** 
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

*Defined in survey.ts:107*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | object |   |

**Returns:** Promise\<any>

___

### deleteDistribution

▸ **deleteDistribution**(`distributionId`: string): Promise\<any>

*Defined in survey.ts:52*

**`deprecated`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`distributionId` | string |   |

**Returns:** Promise\<any>

___

### deleteResponse

▸ **deleteResponse**(`responseId`: string): any

*Defined in survey.ts:154*

Delete survey response

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`responseId` | string |   |

**Returns:** any

___

### deleteSession

▸ **deleteSession**(`sessionId`: string): any

*Defined in survey.ts:79*

#### Parameters:

Name | Type |
------ | ------ |
`sessionId` | string |

**Returns:** any

___

### distribution

▸ **distribution**(`distributionId?`: undefined \| string): [Distribution](_distribution_.distribution.md)

*Defined in survey.ts:34*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`distributionId?` | undefined \| string |   |

**Returns:** [Distribution](_distribution_.distribution.md)

___

### downloadResponseExport

▸ **downloadResponseExport**(`outputFile`: string, `options`: any): Promise\<void>

*Defined in survey.ts:90*

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

*Defined in survey.ts:131*

#### Parameters:

Name | Type |
------ | ------ |
`fileId` | string |
`outputFile` | string |

**Returns:** Promise\<unknown>

___

### getLinks

▸ **getLinks**(`distributionId`: string): Promise\<{ result: { contacts: any[]  }  }>

*Defined in survey.ts:62*

**`deprecated`** 
get all contacts with survey link for one Distribution

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`distributionId` | string | Distribution-ID (eg. EMD_abdfgfdgh4e64) |

**Returns:** Promise\<{ result: { contacts: any[]  }  }>

___

### getSession

▸ **getSession**(`sessionId`: string): Promise\<any>

*Defined in survey.ts:71*

 get session data

#### Parameters:

Name | Type |
------ | ------ |
`sessionId` | string |

**Returns:** Promise\<any>

___

### listDistribution

▸ **listDistribution**(`distributionRequestType?`: undefined \| string): Promise\<any>

*Defined in survey.ts:25*

List all survey distributions

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`distributionRequestType?` | undefined \| string | ('GeneratedInvite' for Individual Link Distributions) |

**Returns:** Promise\<any>

___

### responseExportProgress

▸ **responseExportProgress**(`progressId`: string): Promise\<any>

*Defined in survey.ts:118*

#### Parameters:

Name | Type |
------ | ------ |
`progressId` | string |

**Returns:** Promise\<any>
