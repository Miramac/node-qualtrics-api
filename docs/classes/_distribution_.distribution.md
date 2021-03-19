**[qualtrics-api](../README.md)**

> [Globals](../globals.md) / ["distribution"](../modules/_distribution_.md) / Distribution

# Class: Distribution

## Hierarchy

* **Distribution**

## Index

### Constructors

* [constructor](_distribution_.distribution.md#constructor)

### Properties

* [config](_distribution_.distribution.md#config)
* [directory](_distribution_.distribution.md#directory)
* [fetch](_distribution_.distribution.md#fetch)
* [id](_distribution_.distribution.md#id)
* [surveyId](_distribution_.distribution.md#surveyid)

### Methods

* [add](_distribution_.distribution.md#add)
* [contacts](_distribution_.distribution.md#contacts)
* [delete](_distribution_.distribution.md#delete)

## Constructors

### constructor

\+ **new Distribution**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md), `surveyId`: string, `id?`: undefined \| string, `directory?`: undefined \| string): [Distribution](_distribution_.distribution.md)

*Defined in distribution.ts:11*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md) |
`surveyId` | string |
`id?` | undefined \| string |
`directory?` | undefined \| string |

**Returns:** [Distribution](_distribution_.distribution.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)

*Defined in distribution.ts:7*

___

### directory

•  **directory**: string \| undefined

*Defined in distribution.ts:9*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in distribution.ts:8*

___

### id

•  **id**: string \| undefined

*Defined in distribution.ts:10*

___

### surveyId

•  **surveyId**: string

*Defined in distribution.ts:11*

## Methods

### add

▸ **add**(`mailingListId`: string, `data?`: any): any

*Defined in distribution.ts:27*

Create a new link distribution

#### Parameters:

Name | Type |
------ | ------ |
`mailingListId` | string |
`data?` | any |

**Returns:** any

___

### contacts

▸ **contacts**(): Promise\<{ result: { contacts: any[]  }  }>

*Defined in distribution.ts:66*

get all contacts with survey link for one Distribution

**Returns:** Promise\<{ result: { contacts: any[]  }  }>

___

### delete

▸ **delete**(): Promise\<any>

*Defined in distribution.ts:57*

**Returns:** Promise\<any>
