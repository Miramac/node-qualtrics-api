const https = require('https')
const t = require('tap')
const { Qualtrics } = require('..')

// Load Config
require('dotenv').config()
const config = {
  apiToken: process.env.API_TOKEN,
  baseUrl: process.env.BASE_URL,
  defaultDirectory: process.env.DEFAULT_DIRECTORY,
  agent: new https.Agent({
    rejectUnauthorized: false // self signed certificate
  })
}
const qualtrics = new Qualtrics(config)

t.test('whoami', async t => {
  const result = await qualtrics.whoami()
  // console.log(result)
  t.equal(result.meta.httpStatus, '200 - OK', 'it should return http status 200')
  t.end()
})
t.test('Get all users', async t => {
  const result = await qualtrics.allUsers()
  t.equal(Array.isArray(result.result.elements), true, 'it should be an array')
  t.equal(result.meta.httpStatus, '200 - OK', 'it should return http status 200')
  t.end()
})
t.test('Get all groups', async t => {
  const allGroups = await qualtrics.allGroups()
  t.equal(Array.isArray(allGroups), true, 'it should be an array')
  t.end()
})
