const https = require('https')
const fetch = require('node-fetch')

function Fetch (config) {
  this.headers = {
    'Content-Type': 'application/json',
    'x-api-token': config.apiToken
  }
  this.baseUrl = config.baseUrl
  this.agent = config.agent || new https.Agent({
    rejectUnauthorized: (typeof config.rejectUnauthorizedRequest === 'undefined') ? true : config.rejectUnauthorizedRequest
  })
}

function getResult (res) {
  return new Promise((resolve, reject) => {
    if (res.meta.httpStatus === '200 - OK') {
      resolve(res.result)
    } else {
      reject(res.meta.error)
    }
  })
}
/**
 * GET JSON Request Reponse
 */
Fetch.prototype.get = function (path) {
  console.log('this.baseUrl', this.baseUrl)
  path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
  return fetch(path, {
    method: 'get',
    headers: this.headers,
    agent: this.agent
  })
    .then(res => res.json())
    .then(getResult)
}

/**
 * GET raw Reponse Object
 */
Fetch.prototype.getRaw = function (path) {
  path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
  return fetch(path, {
    method: 'get',
    headers: this.headers,
    agent: this.agent
  })
}

/**
 * POST Request
 */
Fetch.prototype.post = function (path, data) {
  path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
  return fetch(path, {
    method: 'post',
    headers: this.headers,
    body: JSON.stringify(data),
    agent: this.agent
  })
    .then(res => res.json())
    .then(getResult)
}

/**
 * DELETE Request
 */
Fetch.prototype.delete = function (path, data) {
  path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
  return fetch(path, {
    method: 'delete',
    headers: this.headers,
    body: JSON.stringify(data),
    agent: this.agent
  })
    .then(res => res.json())
    .then(getResult)
}

/**
 * PUT Request
 */
Fetch.prototype.put = function (path, data) {
  path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
  return fetch(path, {
    method: 'put',
    headers: this.headers,
    body: JSON.stringify(data),
    agent: this.agent
  })
    .then(res => res.json())
    .then(getResult)
}

module.exports = Fetch
