[**qualtrics-api**](../../README.md) • **Docs**

***

[qualtrics-api](../../modules.md) / [user](../README.md) / User

# Class: User

## Constructors

### new User()

> **new User**(`config`, `id`): [`User`](User.md)

#### Parameters

• **config**: `QualtricsOptions`

• **id**: `string`

#### Returns

[`User`](User.md)

#### Defined in

[user.ts:9](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/user.ts#L9)

## Properties

### config

> **config**: `QualtricsOptions`

#### Defined in

[user.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/user.ts#L5)

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

#### Defined in

[user.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/user.ts#L6)

***

### id

> **id**: `string`

#### Defined in

[user.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/user.ts#L7)

## Methods

### get()

> **get**(): `Promise`\<`any`\>

Gets general information about the user

#### Returns

`Promise`\<`any`\>

#### Url

https://api.qualtrics.com/api-reference/reference/users.json/paths/~1users~1%7BuserId%7D/get

#### Example

```
const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)
user.get()
.then(res => {
  console.log(res)
})
.catch(e => {
  console.error(e)
})

#### Defined in

[user.ts:31](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/user.ts#L31)

***

### getAll()

> **getAll**(): `Promise`\<`any`[]\>

Get all Users

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[user.ts:39](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/user.ts#L39)

***

### update()

> **update**(`data`): `any`

Updates user information

#### Parameters

• **data**: `object`

#### Returns

`any`

#### Url

https://api.qualtrics.com/api-reference/reference/users.json/paths/~1users~1%7BuserId%7D/put

#### Example

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

#### Defined in

[user.ts:74](https://github.com/Miramac/node-qualtrics-api/blob/5890b9dbf6c7781386acd8091ac08d947416f0d2/lib/user.ts#L74)
