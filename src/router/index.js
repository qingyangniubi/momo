import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  },
  {
    path: '/',
    name: 'about',
    component: () => import("../views/about_us.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router