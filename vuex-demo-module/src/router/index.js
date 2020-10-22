import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Modules from '@/views/Modules'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
	path:'/modules',
	name:'Modules',
	component:Modules
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
