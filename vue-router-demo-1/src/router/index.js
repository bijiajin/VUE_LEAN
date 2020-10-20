import Vue from 'vue'
import VueRouter from 'vue-router'//引入vueRouter 路由组件
import Home from '@/views/Home.vue'
import HomeLeft from '@/views/Home-left'
import HomeRight from '@/views/Home-right'

//蒋vueRouter 应用到VUe 实例中
Vue.use(VueRouter)

//定义路由
const routes = [
  {
    path: '/',//路由地址
    name: 'Home',//路由名称
    components: {
		default:Home,
		left:HomeLeft,
		right:HomeRight
	}//路由组件
  },
  {
    path: '/2',//路由地址
    name: 'Home',//路由名称
    components: {
		default:Home,
		left:HomeRight,
		right:HomeLeft
		}
  }
]

const router = new VueRouter({
  routes
})

//导出路由
export default router
