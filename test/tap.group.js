const https = require('https')
const t = require('tap')
const { Qualtrics } = require('..')

// Load Config
require('dotenv').config()
const config = {
  apiToken: process.env.API_TOKEN,
  baseUrl: process.env.BASE_URL,
  defaultDirectory: process.env.DEFAULT_DIRECTORY
}

const qualtrincsIds = {
   testGroupId: process.env.TEST_GROUP_ID,
   testUserId: process.env.TEST_USER_ID
 }
const qualtrics = new Qualtrics(config)

t.test('Get all groups', async t => {
  const result = await qualtrics.allGroups()
  t.equal(Array.isArray(result), true, 'it should be an array')
  t.end()
})
t.test('Get a group', async t => {
  const result = await qualtrics.group(qualtrincsIds.testGroupId).get()
  t.equal(result.result.id, qualtrincsIds.testGroupId, 'it should the user id')
  t.equal(result.meta.httpStatus, '200 - OK', 'it should return http status 200')
  t.end()
})

t.test('Add, count and remove group member', async t => {
  const group = qualtrics.group(qualtrincsIds.testGroupId)
  // Add User to group
  const result1 = await group.addMember(qualtrincsIds.testUserId)
  t.equal(result1.meta.httpStatus, '200 - OK', 'it should return http status 200')
  // Get group members
  const result2 = await group.getMembers()
  t.equal(result2.meta.httpStatus, '200 - OK', 'it should return http status 200')
  t.equal(Array.isArray(result2.result.elements), true, 'it should be an array')
  // remove group member
  const result3 = await group.removeMember(qualtrincsIds.testUserId)
  t.equal(result3.meta.httpStatus, '200 - OK', 'it should return http status 200')
  t.end()
})
