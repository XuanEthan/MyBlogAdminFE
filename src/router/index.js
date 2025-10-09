import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import AddPost from '@/views/posts/AddPost.vue'
import Posts from '@/views/posts/Posts.vue'
import UpdatePost from '@/views/posts/UpdatePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/Posts', component: Posts },
    { path: '/AddPost', component: AddPost },
    { path: '/UpdatePost/:id', component: UpdatePost },
  ],
})

export default router
