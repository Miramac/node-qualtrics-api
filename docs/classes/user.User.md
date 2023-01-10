[qualtrics-api](../README.md) / [Exports](../modules.md) / [user](../modules/user.md) / User

# Class: User

[user](../modules/user.md).User

## Table of contents

### Constructors

- [constructor](user.User.md#constructor)

### Properties

- [config](user.User.md#config)
- [fetch](user.User.md#fetch)
- [id](user.User.md#id)

### Methods

- [get](user.User.md#get)
- [update](user.User.md#update)

## Constructors

### constructor

• **new User**(`config`, `id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `QualtricsOptions` |
| `id` | `string` |

#### Defined in

[user.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/user.ts#L9)

## Properties

### config

• **config**: `QualtricsOptions`

#### Defined in

[user.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/user.ts#L5)

___

### fetch

• **fetch**: [`Fetch`](fetch.Fetch.md)

#### Defined in

[user.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/user.ts#L6)

___

### id

• **id**: `string`

#### Defined in

[user.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/user.ts#L7)

## Methods

### get

▸ **get**(): `Promise`<`any`\>

Gets general information about the user

**`Url`**

https://api.qualtrics.com/api-reference/reference/users.json/paths/~1users~1%7BuserId%7D/get

**`Example`**

```
const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)
user.get()
.then(res => {
  console.log(res)
})
.catch(e => {
  console.error(e)
})

#### Returns

`Promise`<`any`\>

#### Defined in

[user.ts:31](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/user.ts#L31)

___

### update

▸ **update**(`data`): `any`

Updates user information

**`Url`**

https://api.qualtrics.com/api-reference/reference/users.json/paths/~1users~1%7BuserId%7D/put

**`Example`**

```
const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)
user.update( {
  firstName: 'Jane',
  lastName: 'Doe'
})
.then(res => {
  console.log(res)
})
.catch(e => {
  console.error(e)
})

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`any`

#### Defined in

[user.ts:54](https://github.com/Miramac/node-qualtrics-api/blob/b367d7f/lib/user.ts#L54)
