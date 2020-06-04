const https = require('https')
const fetch = require('node-fetch')

function Fetch (config) {
  const self = this
  const headers = {
    'Content-Type': 'application/json',
    'x-api-token': config.apiToken
  }
  const baseUrl = config.baseUrl
  const agent = config.agent || new https.Agent()

  // GET JSON Request Reponse
  self.get = (path) => {
    path = (path.indexOf('https://') !== -1) ? path : baseUrl + path
    return fetch(path, {
      method: 'get',
      headers: headers,
      agent: agent
    })
      .then(res => res.json())
  }

  // GET Reponse Object
  self.getRaw = (path) => {
    path = (path.indexOf('https://') !== -1) ? path : baseUrl + path
    return fetch(path, {
      method: 'get',
      headers: headers,
      agent: agent
    })
  }

  // POST Request
  self.post = (path, data) => {
    path = (path.indexOf('https://') !== -1) ? path : baseUrl + path
    return fetch(path, {
      method: 'post',
      headers: headers,
      body: JSON.stringify(data),
      agent: agent
    })
      .then(res => res.json())
  }

  // DELETE Request
  self.delete = (path, data) => {
    path = (path.indexOf('https://') !== -1) ? path : baseUrl + path
    return fetch(path, {
      method: 'delete',
      headers: headers,
      body: JSON.stringify(data),
      agent: agent
    })
      .then(res => res.json())
  }

  // PUT Request
  self.put = (path, data) => {
    path = (path.indexOf('https://') !== -1) ? path : baseUrl + path
    return fetch(path, {
      method: 'put',
      headers: headers,
      body: JSON.stringify(data),
      agent: agent
    })
      .then(res => res.json())
  }

  // Return this object
  return self
}

module.exports = Fetch
