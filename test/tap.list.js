const https = require('https')
const t = require('tap')
const Qualtrics = require('..')
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
const qualtrincsIds = {
   testGroupId: process.env.TEST_GROUP_ID,
   testUserId: process.env.TEST_USER_ID,
   testMailingListId: process.env.TEST_MAILINGLIST_ID
 }
const qualtrics = new Qualtrics(config)

t.test('Get mailing list contacts', async t => {
  const contacts = await qualtrics.mailingList(qualtrincsIds.testMailingListId).getContacts()
  t.equal(contacts.meta.httpStatus, '200 - OK', 'it should return http status 200')
  t.equal(Array.isArray(contacts.result.elements), true, 'it should be an array')
  t.equal(contacts.result.elements.length, 50, 'it should return 50 contacts')
  t.end()
})

t.test('Get 100 mailing list contacts', async t => {
  const contacts = await qualtrics.mailingList(qualtrincsIds.testMailingListId).getAllContacts()
  t.equal(Array.isArray(contacts), true, 'it should be an array')
  t.equal(contacts.length, 100, 'it should return 100 contacts')
  t.end()
})

t.test('Get 200 mailing list contacts', async t => {
  const contacts = await qualtrics.mailingList(qualtrincsIds.testMailingListId).getAllContacts(200)
  t.equal(Array.isArray(contacts), true, 'it should be an array')
  t.equal(contacts.length, 200, 'it should return 200 contacts')
  t.end()
})