// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('../views/employees/index.vue')
  },
  {
    path: '/help',
    name: 'Help',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
