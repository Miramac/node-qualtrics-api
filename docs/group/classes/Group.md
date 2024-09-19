[**qualtrics-api**](../../README.md) • **Docs**

***

[qualtrics-api](../../modules.md) / [group](../README.md) / Group

# Class: Group

## Constructors

### new Group()

> **new Group**(`config`, `id`?): [`Group`](Group.md)

#### Parameters

• **config**: `QualtricsOptions`

• **id?**: `string`

#### Returns

[`Group`](Group.md)

#### Defined in

[group.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L9)

## Properties

### config

> **config**: `QualtricsOptions`

#### Defined in

[group.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L5)

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

#### Defined in

[group.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L6)

***

### id

> **id**: `undefined` \| `string`

#### Defined in

[group.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L7)

## Methods

### add()

> **add**(`name`, `type`, `divisionId`?): `any`

Creates a new group

#### Parameters

• **name**: `string`

• **type**: `string`

• **divisionId?**: `string`

#### Returns

`any`

#### Defined in

[group.ts:52](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L52)

***

### addMember()

> **addMember**(`userId`): `any`

Add User to Group

#### Parameters

• **userId**: `string`

#### Returns

`any`

#### Defined in

[group.ts:67](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L67)

***

### get()

> **get**(): `Promise`\<`any`\>

Gets information about a specified group

#### Returns

`Promise`\<`any`\>

#### Defined in

[group.ts:21](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L21)

***

### getAll()

> **getAll**(): `Promise`\<`any`[]\>

Gets all groups

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[group.ts:29](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L29)

***

### getMembers()

> **getMembers**(): `Promise`\<`any`\>

List Users from Group

#### Returns

`Promise`\<`any`\>

#### Defined in

[group.ts:87](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L87)

***

### removeMember()

> **removeMember**(`userId`): `any`

Remove User from Group

#### Parameters

• **userId**: `string`

#### Returns

`any`

#### Defined in

[group.ts:79](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/group.ts#L79)
