import { defineStore } from 'pinia'
import { getAll, addPost, updatePost, deletePost } from '@/services/PostService'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
  }),
  actions: {
    async getAll() {
      try {
        const resp = await getAll()
        this.posts = resp.data
      } catch (e) {
        console.log(e.message)
      }
    },
    async addPost(title, paragraph) {
      try {
        await addPost(title, paragraph)
        toast.success('Added successfully !')
      } catch (e) {
        console.log(e.message)
      }
    },
    async updatePost(id, title, paragraph, created) {
      try {
        await updatePost(id, title, paragraph, created)
        toast.success('Updated successfully !')
      } catch (e) {
        console.log(e.message)
      }
    },
    async deletePost(id) {
      if (!confirm('Delete this Post ?')) return
      try {
        await deletePost(id)
        this.posts = await this.posts.filter((p) => p.id !== id)
        toast.success('Deleted successfully !')
      } catch (e) {
        console.log(e.message)
      }
    },
  },
})
