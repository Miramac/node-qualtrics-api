[qualtrics-api](../README.md) / [Exports](../modules.md) / [group](../modules/group.md) / Group

# Class: Group

[group](../modules/group.md).Group

## Table of contents

### Constructors

- [constructor](group.Group.md#constructor)

### Properties

- [config](group.Group.md#config)
- [fetch](group.Group.md#fetch)
- [id](group.Group.md#id)

### Methods

- [add](group.Group.md#add)
- [addMember](group.Group.md#addmember)
- [get](group.Group.md#get)
- [getAll](group.Group.md#getall)
- [getMembers](group.Group.md#getmembers)
- [removeMember](group.Group.md#removemember)

## Constructors

### constructor

• **new Group**(`config`, `id?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `QualtricsOptions` |
| `id?` | `string` |

#### Defined in

[group.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L9)

## Properties

### config

• **config**: `QualtricsOptions`

#### Defined in

[group.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L5)

___

### fetch

• **fetch**: [`Fetch`](fetch.Fetch.md)

#### Defined in

[group.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L6)

___

### id

• **id**: `undefined` \| `string`

#### Defined in

[group.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L7)

## Methods

### add

▸ **add**(`name`, `type`, `divisionId?`): `any`

Creates a new group

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |
| `divisionId?` | `string` |

#### Returns

`any`

#### Defined in

[group.ts:52](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L52)

___

### addMember

▸ **addMember**(`userId`): `any`

Add User to Group

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`any`

#### Defined in

[group.ts:67](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L67)

___

### get

▸ **get**(): `Promise`<`any`\>

Gets information about a specified group

#### Returns

`Promise`<`any`\>

#### Defined in

[group.ts:21](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L21)

___

### getAll

▸ **getAll**(): `Promise`<`any`[]\>

Gets all groups

#### Returns

`Promise`<`any`[]\>

#### Defined in

[group.ts:29](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L29)

___

### getMembers

▸ **getMembers**(): `Promise`<`any`\>

List Users from Group

#### Returns

`Promise`<`any`\>

#### Defined in

[group.ts:87](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L87)

___

### removeMember

▸ **removeMember**(`userId`): `any`

Remove User from Group

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`any`

#### Defined in

[group.ts:79](https://github.com/Miramac/node-qualtrics-api/blob/22d0f86/lib/group.ts#L79)
