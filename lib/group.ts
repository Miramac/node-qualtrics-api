import { QualtricsOptions } from './interfaces/options'
import { Fetch } from './fetch'

export class Group {
  config: QualtricsOptions
  fetch: Fetch
  id: string | undefined

  constructor(config: QualtricsOptions, id?: string) {
    this.config = config
    this.id = id
    
    this.fetch = new Fetch(config)
  }

 /**
     * Gets information about a specified group
     * @param {String} groupId
     * @returns {Promise}
     */
    get() {
      return this.fetch.get(`groups/${this.id}`)
    }

  /**
     * Gets all groups
     * @param {String} groupId
     * @returns {Promise}
     */
    async getAll() {
      let groups: any[] = []
      let offset = null
      do {
        try {
          const res:any = await this.fetch.get(`groups?offset=${offset || 0}`)
          groups = groups.concat(res.result.elements)
          offset = res.result.nextPage
          offset = (offset) ? res.result.nextPage.split('offset=')[1] : offset
        } catch(e) {
          return Promise.reject(e)
        }
      } while (offset)
      return groups
    }
  
    /**
       * Creates a new group
       * @param {String} name
       * @param {String} type
       * @param {String} divisionId
       * @returns {Promise}
       */
    add(name: string, type: string, divisionId?: string) {
      const data = {
        type: type,
        name: name,
        divisionId: divisionId || null
      }
      return this.fetch.post('groups', data)
    }
  
    /**
       * Add User to Group
       * @param {String} groupId
       * @param {String} userId
       * @returns {Promise}
       */
    addMember(userId: string) {
      const data = {
        userId: userId
      }
      return this.fetch.post(`groups/${this.id}/members`, data)
    }
  
    /**
       * Remove User from Group
       * @param {String} userId
       * @returns {Promise}
       */
    removeMember(userId: string) {
      return this.fetch.delete(`groups/${this.id}/members/${userId}`)
    }

    /**
       * List Users from Group
       * @returns {Promise}
       */
      getMembers() {
        return this.fetch.get(`groups/${this.id}/members/`)
      }  
}
