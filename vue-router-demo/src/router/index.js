import Vue from 'vue'
import VueRouter from 'vue-router'//引入vueRouter 路由组件
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import About1 from '@/views/About1.vue'
import About2 from '@/views/About2.vue'

//蒋vueRouter 应用到VUe 实例中
Vue.use(VueRouter)

//定义路由
const routes = [
  {
    path: '/',//路由地址
    name: 'Home',//路由名称
    component: Home//路由组件
  },
  {
    path: '/about',
    component: About,
	children: [
		{path:'/',component:About,name: 'About'},
		{path:'about1',component:About1,name: 'About1'},
		{path:'about2',component:About2,name: 'About2'}
	]
	
  }
]

const router = new VueRouter({
  routes
})

//导出路由
export default router
