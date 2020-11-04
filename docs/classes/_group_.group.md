**[qualtrics-api](../README.md)**

> [Globals](../globals.md) / ["group"](../modules/_group_.md) / Group

# Class: Group

## Hierarchy

* **Group**

## Index

### Constructors

* [constructor](_group_.group.md#constructor)

### Properties

* [config](_group_.group.md#config)
* [fetch](_group_.group.md#fetch)
* [id](_group_.group.md#id)

### Methods

* [add](_group_.group.md#add)
* [addMember](_group_.group.md#addmember)
* [get](_group_.group.md#get)
* [getAll](_group_.group.md#getall)
* [removeMember](_group_.group.md#removemember)

## Constructors

### constructor

\+ **new Group**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md), `id?`: undefined \| string): [Group](_group_.group.md)

*Defined in [group.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/group.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md) |
`id?` | undefined \| string |

**Returns:** [Group](_group_.group.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)

*Defined in [group.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/group.ts#L5)*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in [group.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/group.ts#L6)*

___

### id

•  **id**: string \| undefined

*Defined in [group.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/group.ts#L7)*

## Methods

### add

▸ **add**(`name`: string, `type`: string, `divisionId?`: undefined \| string): any

*Defined in [group.ts:41](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/group.ts#L41)*

Creates a new group

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`type` | string |
`divisionId?` | undefined \| string |

**Returns:** any

___

### addMember

▸ **addMember**(`userId`: string): any

*Defined in [group.ts:56](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/group.ts#L56)*

Add User to Group

#### Parameters:

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** any

___

### get

▸ **get**(): Promise\<any>

*Defined in [group.ts:21](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/group.ts#L21)*

Gets information about a specified group

**Returns:** Promise\<any>

___

### getAll

▸ **getAll**(): Promise\<any>

*Defined in [group.ts:30](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/group.ts#L30)*

Gets all groups

**Returns:** Promise\<any>

___

### removeMember

▸ **removeMember**(`userId`: string): any

*Defined in [group.ts:68](https://github.com/Miramac/node-qualtrics-api/blob/22a7b18/lib/group.ts#L68)*

Remove User from Group

#### Parameters:

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** any
