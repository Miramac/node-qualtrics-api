[qualtrics-api](../README.md) / [Exports](../modules.md) / [fetch](../modules/fetch.md) / Fetch

# Class: Fetch

[fetch](../modules/fetch.md).Fetch

## Table of contents

### Constructors

- [constructor](fetch.Fetch.md#constructor)

### Properties

- [agent](fetch.Fetch.md#agent)
- [baseUrl](fetch.Fetch.md#baseurl)
- [headers](fetch.Fetch.md#headers)

### Methods

- [delete](fetch.Fetch.md#delete)
- [get](fetch.Fetch.md#get)
- [getRaw](fetch.Fetch.md#getraw)
- [post](fetch.Fetch.md#post)
- [put](fetch.Fetch.md#put)

## Constructors

### constructor

• **new Fetch**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `FetchOptions` |

#### Defined in

[fetch.ts:11](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/fetch.ts#L11)

## Properties

### agent

• **agent**: `any`

#### Defined in

[fetch.ts:10](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/fetch.ts#L10)

___

### baseUrl

• **baseUrl**: `string`

#### Defined in

[fetch.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/fetch.ts#L9)

___

### headers

• **headers**: `object`

#### Defined in

[fetch.ts:8](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/fetch.ts#L8)

## Methods

### delete

▸ **delete**(`path`, `data?`): `any`

DELETE Request

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data?` | `object` |

#### Returns

`any`

#### Defined in

[fetch.ts:83](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/fetch.ts#L83)

___

### get

▸ **get**(`path`): `Promise`<`any`\>

GET JSON Request Reponse

**`Path`**

URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[fetch.ts:24](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/fetch.ts#L24)

___

### getRaw

▸ **getRaw**(`path`): `Promise`<`Response`\>

GET Reponse Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[fetch.ts:46](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/fetch.ts#L46)

___

### post

▸ **post**(`path`, `data`): `any`

POST Request

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `object` |

#### Returns

`any`

#### Defined in

[fetch.ts:60](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/fetch.ts#L60)

___

### put

▸ **put**(`path`, `data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `object` |

#### Returns

`any`

#### Defined in

[fetch.ts:103](https://github.com/Miramac/node-qualtrics-api/blob/ab5e8d0/lib/fetch.ts#L103)
