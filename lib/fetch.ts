import * as https from 'https'
const nodeFetch = require('node-fetch')

interface Options { apiToken: string; baseUrl: string, agent: any } // eslint-disable-line

export class Fetch {
  headers: object
  baseUrl: string
  agent: any
  constructor(config: Options) {
    this.headers = {
      'Content-Type': 'application/json',
      'x-api-token': config.apiToken
    }
    this.baseUrl = config.baseUrl
    this.agent = config.agent || new https.Agent()
  }

  // interface Fetch {
  //     distanceFromOrigin(point: Point): number;
  // }
  // GET JSON Request Reponse
  get(path: string) {
    path = (path.indexOf('https://') !== -1) ? path : this.baseUrl + path
    return nodeFetch(path, {
      method: 'get',
      headers: this.headers,
      agent: this.agent
    })
      .then((res: any) => res.json())
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
      .then((res: any) => res.json())
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
      .then((res: any) => res.json())
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
      .then((res: any) => res.json())
  }
}