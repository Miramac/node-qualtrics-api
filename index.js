const Fetch = require('./lib/fetch')
const Qualtrics = require('./lib/qualtrics')
let fetch = null
let qualtrics = null

// Load Config
require('dotenv').config()
const config = {
  apiToken: process.env.API_TOKEN,
  baseUrl: process.env.BASE_URL,
  DefaultDirectory: process.env.DEFAULT_DIRECTORY,
  rejectUnauthorizedRequest: !(process.env.UNAUTHORIZED_REQUEST === 'false') // set 'false' for self signed certificate
}

if (config.apiToken && config.baseUrl) {
  fetch = new Fetch(config)
  qualtrics = new Qualtrics(config)
}

module.exports = {
  Fetch: Fetch,
  Qualtrics: Qualtrics,
  fetch: fetch,
  qualtrics: qualtrics
}
