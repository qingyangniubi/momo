import Vue from 'vue'
import VueRouter from 'vue-router'
import MyMenu from '../views/myMenu.vue';


Vue.use(VueRouter)
import main from './qq_main';
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