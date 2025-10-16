import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import AddPost from '@/views/posts/AddPost.vue'
import Posts from '@/views/posts/Posts.vue'
import UpdatePost from '@/views/posts/UpdatePost.vue'
import Categories from '@/views/categories/Categories.vue'
import NotFound from '@/views/errors/NotFound.vue'
import InternalServerError from '@/views/errors/InternalServerError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/Posts', component: Posts },
    { path: '/AddPost', component: AddPost },
    { path: '/UpdatePost/:id', component: UpdatePost },
    { path: '/Categories', component: Categories },
    { path: '/NotFound', component: NotFound, meta: { layout: 'ErrorLayout' } },
    {
      path: '/InternalServerError',
      component: InternalServerError,
      meta: { layout: 'ErrorLayout' },
    },
  ],
})

export default router
