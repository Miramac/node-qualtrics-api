[**qualtrics-api**](../../README.md)

***

[qualtrics-api](../../modules.md) / [user](../README.md) / User

# Class: User

Defined in: user.ts:4

## Constructors

### Constructor

> **new User**(`config`, `id`): `User`

Defined in: user.ts:9

#### Parameters

##### config

[`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

##### id

`string`

#### Returns

`User`

## Properties

### config

> **config**: [`QualtricsOptions`](../../interfaces/options/interfaces/QualtricsOptions.md)

Defined in: user.ts:5

***

### fetch

> **fetch**: [`Fetch`](../../fetch/classes/Fetch.md)

Defined in: user.ts:6

***

### id

> **id**: `string`

Defined in: user.ts:7

## Methods

### get()

> **get**(): `Promise`\<`any`\>

Defined in: user.ts:31

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

***

### getAll()

> **getAll**(): `Promise`\<`any`[]\>

Defined in: user.ts:39

Get all Users

#### Returns

`Promise`\<`any`[]\>

***

### update()

> **update**(`data`): `any`

Defined in: user.ts:74

Updates user information

#### Parameters

##### data

`object`

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
