[**qualtrics-api**](../../README.md)

***

[qualtrics-api](../../modules.md) / [group](../README.md) / Group

# Class: Group

Defined in: group.ts:4

## Constructors

### Constructor

> **new Group**(`config`, `id?`): `Group`

Defined in: group.ts:9

#### Parameters

##### config

[`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

##### id?

`string`

#### Returns

`Group`

## Properties

### config

> **config**: [`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

Defined in: group.ts:5

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

Defined in: group.ts:6

***

### id

> **id**: `string` \| `undefined`

Defined in: group.ts:7

## Methods

### add()

> **add**(`name`, `type`, `divisionId?`): `any`

Defined in: group.ts:52

Creates a new group

#### Parameters

##### name

`string`

##### type

`string`

##### divisionId?

`string`

#### Returns

`any`

***

### addMember()

> **addMember**(`userId`): `any`

Defined in: group.ts:67

Add User to Group

#### Parameters

##### userId

`string`

#### Returns

`any`

***

### get()

> **get**(): `Promise`\<`any`\>

Defined in: group.ts:21

Gets information about a specified group

#### Returns

`Promise`\<`any`\>

***

### getAll()

> **getAll**(): `Promise`\<`any`[]\>

Defined in: group.ts:29

Gets all groups

#### Returns

`Promise`\<`any`[]\>

***

### getMembers()

> **getMembers**(): `Promise`\<`any`\>

Defined in: group.ts:87

List Users from Group

#### Returns

`Promise`\<`any`\>

***

### removeMember()

> **removeMember**(`userId`): `any`

Defined in: group.ts:79

Remove User from Group

#### Parameters

##### userId

`string`

#### Returns

`any`
