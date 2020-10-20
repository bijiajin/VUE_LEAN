import Vue from 'vue'
import VueRouter from 'vue-router'//引入vueRouter 路由组件
import Home from '@/views/Home.vue'
import params from '@/views/params'
import Index from '@/views/Index'
import Error404 from '@/views/Error404'
//蒋vueRouter 应用到VUe 实例中
Vue.use(VueRouter)

//定义路由
const routes = [
  {
    path: '/',//路由地址
    name: 'Home',//路由名称
    component:Home//路由组件
  },
  {
    path: '/params/:newId/:newTitle',//路由地址,使用Url 传参
    name: 'params',//路由名称
    component:params
  },
  {
    path: '/paramsReg/:newId(\\d+)/:newTitle',//路由地址,使用Url 传参
    name: 'params',//路由名称
    component:params
  },
  {
	path: '/goBack',
	name: 'goBack',
	redirect: '/'
  },
  {
	path: '/goBackParam/:newId(\\d+)/:newTitle',
	name: 'goBackParam',
	redirect: '/params/:newId(\\d+)/:newTitle'
  },
  {
	path:	'/index',
	name:	'index',
	component: Index,
	alias: '/goIndex'
  },
  {
	path:'*',
	name:'Error404',
	component:Error404
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

//导出路由
export default router
