import { defineStore } from 'pinia'
import { getAll } from '@/services/CategoryService'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [],
  }),
  actions: {
    async getAll(searchKey) {
      try {
        const resp = await getAll(searchKey)
        this.categories = resp.data
      } catch (e) {
        console.log(e)
      }
    },
  },
})
