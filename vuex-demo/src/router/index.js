import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import State from '@/views/State.vue'
import Mutations from '@/views/Mutations'
import Getters from '@/views/Getters'

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
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
