import { defineStore } from 'pinia'
import { getAll } from '@/services/TagService'

export const useTagStore = defineStore('tag', {
  state: () => ({
    tags: [],
  }),
  actions: {
    async getAll(searchKey) {
      try {
        const resp = await getAll(searchKey)
        this.tags = resp.data
      } catch (e) {
        console.log(e)
      }
    },
  },
})
