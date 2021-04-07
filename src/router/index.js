import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/ktv/index.vue'
import MyMenu from '../views/myMenu.vue';


Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: MyMenu,
  children: [
    {
      path: '/',
      redirect: "/index",
    }, {
      path: '/index',
      component: Home
    },
    {
      path: '/about_us',
      component: () => import("../views/ktv/about_us.vue")
    }, {
      path: '/contact_us',
      component: () => import("../views/ktv/contact_us.vue")
    }, {
      path: '/environment_show',
      component: () => import("../views/ktv/environment_show.vue")
    }, {
      path: '/evening_news',
      component: () => import("../views/ktv/evening_news.vue")
    }, {
      path: '/model_shows',
      component: () => import("../views/ktv/model_shows.vue")
    }, {
      path: '/recruitment_requirements',
      component: () => import("../views/ktv/recruitment_requirements.vue")
    },
  ]
},
]

const router = new VueRouter({
  routes
})

export default router