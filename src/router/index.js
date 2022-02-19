// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
// import app from './app'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'init',
    component: () => import('../App.vue')

  },
  {
    path: '/app',
    name: 'home',
    component: () => import('../layouts/AppHome.vue'),
    children: [
      {
        path: "employee",
        name: "employee",
        component: () => import("../views/employees/index.vue"),
      },
      {
        path: "help",
        name: "help",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Help.vue"),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/Register.vue')
  },

]

const router = createRouter({
  mode: 'history',
  
  history: createWebHashHistory(),
  
  routes
})

export default router
