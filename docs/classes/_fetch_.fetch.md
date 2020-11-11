**[qualtrics-api](../README.md)**

> [Globals](../globals.md) / ["fetch"](../modules/_fetch_.md) / Fetch

# Class: Fetch

## Hierarchy

* **Fetch**

## Index

### Constructors

* [constructor](_fetch_.fetch.md#constructor)

### Properties

* [agent](_fetch_.fetch.md#agent)
* [baseUrl](_fetch_.fetch.md#baseurl)
* [headers](_fetch_.fetch.md#headers)

### Methods

* [delete](_fetch_.fetch.md#delete)
* [get](_fetch_.fetch.md#get)
* [getRaw](_fetch_.fetch.md#getraw)
* [post](_fetch_.fetch.md#post)
* [put](_fetch_.fetch.md#put)

## Constructors

### constructor

\+ **new Fetch**(`config`: [FetchOptions](../interfaces/_interfaces_options_.fetchoptions.md)): [Fetch](_fetch_.fetch.md)

*Defined in fetch.ts:10*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [FetchOptions](../interfaces/_interfaces_options_.fetchoptions.md) |

**Returns:** [Fetch](_fetch_.fetch.md)

## Properties

### agent

•  **agent**: any

*Defined in fetch.ts:10*

___

### baseUrl

•  **baseUrl**: string

*Defined in fetch.ts:9*

___

### headers

•  **headers**: object

*Defined in fetch.ts:8*

## Methods

### delete

▸ **delete**(`path`: string, `data?`: undefined \| object): any

*Defined in fetch.ts:83*

DELETE Request

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`path` | string |   |
`data?` | undefined \| object | - |

**Returns:** any

___

### get

▸ **get**(`path`: string): Promise\<any>

*Defined in fetch.ts:24*

GET JSON Request Reponse

**`path`** {string} URL

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |

**Returns:** Promise\<any>

___

### getRaw

▸ **getRaw**(`path`: string): Promise\<Response>

*Defined in fetch.ts:46*

GET Reponse Object

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`path` | string |   |

**Returns:** Promise\<Response>

___

### post

▸ **post**(`path`: string, `data`: object): any

*Defined in fetch.ts:60*

POST Request

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`path` | string |  |
`data` | object |   |

**Returns:** any

___

### put

▸ **put**(`path`: string, `data`: object): any

*Defined in fetch.ts:103*

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |
`data` | object |

**Returns:** any
