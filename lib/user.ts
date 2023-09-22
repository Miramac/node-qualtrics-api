import { QualtricsOptions } from './interfaces/options'
import { Fetch } from './fetch'

export class User {
  config: QualtricsOptions
  fetch: Fetch
  id: string

  constructor(config: QualtricsOptions, id: string) {
    this.config = config
    this.id = id
    
    this.fetch = new Fetch(config)
  }

  /**
   * Gets general information about the user
   * @returns {Promise}
   * @Url https://api.qualtrics.com/api-reference/reference/users.json/paths/~1users~1%7BuserId%7D/get
   * @example
   * ```
   * const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)
   * user.get()
   * .then(res => {
   *   console.log(res)
   * })
   * .catch(e => {
   *   console.error(e)
   * })
   */
  get() {
    return this.fetch.get(`users/${this.id}`)
  }

  /**
   * Get all Users
   * @returns {Promise}
   */
  async getAll() {
    let users: any[] = []
    let offset = null
    do {
      try {
        const res:any = await this.fetch.get(`users?offset=${offset || 0}`)
        users = users.concat(res.result.elements)
        offset = res.result.nextPage
        offset = (offset) ? res.result.nextPage.split('offset=')[1] : offset
      } catch(e) {
        return Promise.reject(e)
      }
    } while (offset)
    return users
  }
  
  /**
   * Updates user information
   * @param {object} data
   * @returns {Promise}
   * @Url https://api.qualtrics.com/api-reference/reference/users.json/paths/~1users~1%7BuserId%7D/put
   * @example
   * ```
   * const user = qualtrics.user('UR_1A2B3C4d5E6F7G8)
   * user.update( {
   *   firstName: 'Jane',
   *   lastName: 'Doe'
   * })
   * .then(res => {
   *   console.log(res)
   * })
   * .catch(e => {
   *   console.error(e)
   * })
   */
  update(data: object) {
    return this.fetch.put(`users/${this.id}`, data)
  }
}
