[qualtrics-api](../README.md) / [Exports](../modules.md) / [distribution](../modules/distribution.md) / Distribution

# Class: Distribution

[distribution](../modules/distribution.md).Distribution

## Table of contents

### Constructors

- [constructor](distribution.Distribution.md#constructor)

### Properties

- [config](distribution.Distribution.md#config)
- [directory](distribution.Distribution.md#directory)
- [fetch](distribution.Distribution.md#fetch)
- [id](distribution.Distribution.md#id)
- [surveyId](distribution.Distribution.md#surveyid)

### Methods

- [add](distribution.Distribution.md#add)
- [contacts](distribution.Distribution.md#contacts)
- [delete](distribution.Distribution.md#delete)

## Constructors

### constructor

• **new Distribution**(`config`, `surveyId`, `id?`, `directory?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `QualtricsOptions` |
| `surveyId` | `string` |
| `id?` | `string` |
| `directory?` | `string` |

#### Defined in

[distribution.ts:13](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/distribution.ts#L13)

## Properties

### config

• **config**: `QualtricsOptions`

#### Defined in

[distribution.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/distribution.ts#L7)

___

### directory

• **directory**: `undefined` \| `string`

#### Defined in

[distribution.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/distribution.ts#L9)

___

### fetch

• **fetch**: [`Fetch`](fetch.Fetch.md)

#### Defined in

[distribution.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/distribution.ts#L8)

___

### id

• **id**: `undefined` \| `string`

#### Defined in

[distribution.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/distribution.ts#L10)

___

### surveyId

• **surveyId**: `string`

#### Defined in

[distribution.ts:11](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/distribution.ts#L11)

## Methods

### add

▸ **add**(`mailingListId`, `data?`): `any`

Create a new link distribution
  *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mailingListId` | `string` | * |
| `data?` | `any` | * |

#### Returns

`any`

#### Defined in

[distribution.ts:27](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/distribution.ts#L27)

___

### contacts

▸ **contacts**(): `Promise`<{ `result`: { `contacts`: `any`[]  }  }\>

get all contacts with survey link for one Distribution

#### Returns

`Promise`<{ `result`: { `contacts`: `any`[]  }  }\>

#### Defined in

[distribution.ts:66](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/distribution.ts#L66)

___

### delete

▸ **delete**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[distribution.ts:57](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/distribution.ts#L57)
