import Vue from 'vue'
import VueRouter from 'vue-router'
import MyMenu from '../views/myMenu.vue';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
import main from './main';
const routes = [{
  path: '/',
  component: MyMenu,
  children: main,
},
]

const router = new VueRouter({
  routes
})

export default router