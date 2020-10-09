# node-qualtrics-api
A NodeJS package for Qualtrics REST API https://api.qualtrics.com/reference

## Install
````
npm install qualtrics-api
````

## Basic usage

````js
const Qualtrics = require('qualtrics-api')

const config = {
  apiToken: '<API_TOKEN>',
  baseUrl: 'https://eu.qualtrics.com/API/v3/',
  DefaultDirectory: 'POOL_xxxxxxxx'
}

const qualtrics = new Qualtrics(config)
qualtrics.whoami()
  .then(result => {
    console.log(result)
  })
  .catch(console.error)

````
