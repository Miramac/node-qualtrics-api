import { assert, expect, test } from 'vitest'
import Qualtrics from '../lib/qualtrics'

import https from 'https'
import dotenv from 'dotenv'

// // Load Config
dotenv.config()
const config = {
  apiToken: process.env.API_TOKEN || '',
  apiUrl: process.env.API_URL || '',
  defaultDirectory: process.env.DEFAULT_DIRECTORY || '',
  agent: new https.Agent({
    rejectUnauthorized: false // self signed certificate
  })
}
const qualtrics = new Qualtrics(config)


// test('Qualtrics: survey', async () => {
//   const survey = qualtrics.survey(process.env.SURVEY_ID)
//   const distributions = await survey.getAllDistributions()
//   console.log(distributions.length)
//   for (let i = 0; i < distributions.length; i++) {
//     const contacts = await survey.distribution(distributions[i].id).contacts()
//     console.log(distributions[i].id, contacts.contacts.length)
//   }

 // expect(JSON.stringify(distributions[0]), 'it should return survey id').toBe(process.env.SURVEY_ID)
// })

// // EMD_5DRRIhe6LZtsjns
// test ('Qualtrics: dist', async () => {
//   const dist = qualtrics.survey(process.env.SURVEY_ID).distribution('EMD_MToDFkyY4kuQXYP')
//   const contacts = await dist.contacts()
//   expect(contacts.contacts.length, 'it should return survey id').toBe(process.env.SURVEY_ID)
// })

// test ('Qualtrics: dist', async () => {
//   const dist = qualtrics.survey(process.env.SURVEY_ID).distribution('EMD_Xti4AxCaigAgYSq')
//   const result = await dist.get()
//   expect(result.result.recipients, 'it should return survey id').toBe(process.env.SURVEY_ID)
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
