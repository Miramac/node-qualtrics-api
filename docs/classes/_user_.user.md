**[qualtrics-api](../README.md)**

> [Globals](../globals.md) / ["user"](../modules/_user_.md) / User

# Class: User

## Hierarchy

* **User**

## Index

### Constructors

* [constructor](_user_.user.md#constructor)

### Properties

* [config](_user_.user.md#config)
* [fetch](_user_.user.md#fetch)
* [id](_user_.user.md#id)

### Methods

* [get](_user_.user.md#get)
* [update](_user_.user.md#update)

## Constructors

### constructor

\+ **new User**(`config`: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md), `id`: string): [User](_user_.user.md)

*Defined in [user.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/user.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md) |
`id` | string |

**Returns:** [User](_user_.user.md)

## Properties

### config

•  **config**: [QualtricsOptions](../interfaces/_interfaces_options_.qualtricsoptions.md)

*Defined in [user.ts:5](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/user.ts#L5)*

___

### fetch

•  **fetch**: [Fetch](_fetch_.fetch.md)

*Defined in [user.ts:6](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/user.ts#L6)*

___

### id

•  **id**: string

*Defined in [user.ts:7](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/user.ts#L7)*

## Methods

### get

▸ **get**(): Promise\<any>

*Defined in [user.ts:31](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/user.ts#L31)*

Gets general information about the user

**`url`** https://api.qualtrics.com/api-reference/reference/users.json/paths/~1users~1%7BuserId%7D/get

**`example`** 
```
const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)
user.get()
.then(res => {
  console.log(res)
})
.catch(e => {
  console.error(e)
})

**Returns:** Promise\<any>

___

### update

▸ **update**(`data`: object): any

*Defined in [user.ts:54](https://github.com/Miramac/node-qualtrics-api/blob/92e1f71/lib/user.ts#L54)*

Updates user information

**`url`** https://api.qualtrics.com/api-reference/reference/users.json/paths/~1users~1%7BuserId%7D/put

**`example`** 
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

#### Parameters:

Name | Type |
------ | ------ |
`data` | object |

**Returns:** any
