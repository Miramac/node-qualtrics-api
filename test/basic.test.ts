import { assert, expect, test } from 'vitest'
import Qualtrics from '../lib/qualtrics'

import https from 'https'
import dotenv from 'dotenv'

// // Load Config
dotenv.config({path :__dirname + '/.env' })
const config = {
  apiToken: process.env.API_TOKEN || '',
  apiUrl: process.env.API_URL || '',
  defaultDirectory: process.env.DEFAULT_DIRECTORY || '',
  agent: new https.Agent({
    rejectUnauthorized: false // self signed certificate
  })
}
const qualtrics = new Qualtrics(config)

test('Config: apiUrl', () => {
  expect(process.env.API_URL).toBe('https://eu.qualtrics.com/API/v3/')
})

// test('Qualtrics: whoami', async () => {
//   const result = await qualtrics.whoami()
//   expect(result.meta.httpStatus, 'it should return http status 200').toBe('200 - OK')
// })

// test('Qualtrics: Get all users', async () => {
//   const result = await qualtrics.allUsers()
//   expect(Array.isArray(result.result.elements), 'it should be an array').toBeTruthy()
//   expect(result.meta.httpStatus, 'it should return http status 200').toBe('200 - OK')
// })
// t.test('Qualtrics: Get all groups', async t => {
//   const allGroups = await qualtrics.allGroups()
//   t.equal(Array.isArray(allGroups), true, 'it should be an array')
//   t.end()
// })




// ;(async () => {
//   await qualtrics.survey(process.env.SURVEY_ID).downloadResponseExport('tmpZipFile.zip', { format: 'csv', includeDisplayOrder: false, useLabels: false }) // , { format: 'json', questionIds: ['QID4'], surveyMetadataIds: ['userLanguage', 'status', '_recordId'], useLabels: false })
// })()
