import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import State from '@/views/State.vue'
import Mutations from '@/views/Mutations'
import Getters from '@/views/Getters'
import Actions from '@/views/Actions'
import Modules from '@/views/Modules'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
	path:'/state',
	name:'State',
	component:State
  },
  {
	path:'/mutations',
	name:'Mutations',
	component:Mutations
  },
  {
	path:'/getters',
	name:'getters',
	component:Getters
  },
  {
	path:'/actions',
	name:'Actions',
	component:Actions
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
