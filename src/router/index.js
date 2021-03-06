import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Introduction',
    name: 'Introduction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Introduction.vue')
  },
  {
    path: '/Setup',
    name: 'setup',
    component: () => import('../views/Setup.vue')
  },
  {
    path: '/Games',
    name: 'Setup',
    component: () => import('../views/Games.vue')
  },
  {
    path: '/Components/:element',
    name: 'Components',
    component: () => import('../views/Components.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
