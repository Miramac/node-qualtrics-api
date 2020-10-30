import * as https from 'https'
import { Response } from 'node-fetch'
import { FetchOptions } from './options'
const nodeFetch = require('node-fetch')


export class Fetch {
  headers: object
  baseUrl: string
  agent: any
  constructor(config: FetchOptions) {
    this.headers = {
      'Content-Type': 'application/json',
      'x-api-token': config.apiToken
    }
    this.baseUrl = config.baseUrl
    this.agent = config.agent || new https.Agent()
  }

  /**
   * GET JSON Request Reponse
   *  @path {string} URL
   */
  get(path: string) {
    path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
    return nodeFetch(path, {
      method: 'get',
      headers: this.headers,
      agent: this.agent
    })
      .then((res: Response) => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(json => {
            return Promise.reject(json)
          })
        }
      })
  }

  /**
   * GET Reponse Object
   * @param path 
   */
  getRaw(path: string) {
    path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
    return nodeFetch(path, {
      method: 'get',
      headers: this.headers,
      agent: this.agent
    })
  }

  /**
   * POST Request
   * @param path 
   * @param data 
   */
  post(path: string, data: object) {
    path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
    return nodeFetch(path, {
      method: 'post',
      headers: this.headers,
      body: JSON.stringify(data),
      agent: this.agent
    })
      .then((res: Response) => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(json => {
            return Promise.reject(json)
          })
        }
      })
  }

  /**
   * DELETE Request
   * @param path 
   */
  delete(path: string, data?: object) {
    path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
    return nodeFetch(path, {
      method: 'delete',
      headers: this.headers,
      body: JSON.stringify(data),
      agent: this.agent
    })
      .then((res: Response) => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(json => {
            return Promise.reject(json)
          })
        }
      })
  }

  // PUT Request
  put(path: string, data: object) {
    path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
    return nodeFetch(path, {
      method: 'put',
      headers: this.headers,
      body: JSON.stringify(data),
      agent: this.agent
    })
      .then((res: Response) => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(json => {
            return Promise.reject(json)
          })
        }
      })
  }
}