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
* [getMembers](_group_.group.md#getmembers)
* [removeMember](_group_.group.md#removemember)

## Constructors

### constructor

\+ **new Group**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md), `id?`: undefined \| string): [Group](_group_.group.md)

*Defined in group.ts:7*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md) |
`id?` | undefined \| string |

**Returns:** [Group](_group_.group.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)

*Defined in group.ts:5*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in group.ts:6*

___

### id

•  **id**: string \| undefined

*Defined in group.ts:7*

## Methods

### add

▸ **add**(`name`: string, `type`: string, `divisionId?`: undefined \| string): any

*Defined in group.ts:41*

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

*Defined in group.ts:56*

Add User to Group

#### Parameters:

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** any

___

### get

▸ **get**(): Promise\<any>

*Defined in group.ts:21*

Gets information about a specified group

**Returns:** Promise\<any>

___

### getAll

▸ **getAll**(): Promise\<any>

*Defined in group.ts:30*

Gets all groups

**Returns:** Promise\<any>

___

### getMembers

▸ **getMembers**(): Promise\<any>

*Defined in group.ts:76*

List Users from Group

**Returns:** Promise\<any>

___

### removeMember

▸ **removeMember**(`userId`: string): any

*Defined in group.ts:68*

Remove User from Group

#### Parameters:

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** any
