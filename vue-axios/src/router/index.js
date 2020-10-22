import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/axios1',
        name: 'Axios1',
        component: () =>
            import ('../views/Axios1.vue')
    },
    {
        path: '/axios2',
        name: 'Axios2',
        component: () =>
            import ('../views/Axios2.vue')
    },
    {
        path: '/axios3',
        name: 'Axios3',
        component: () =>
            import ('../views/Axios3.vue')
    },
    {
        path: '/axios4',
        name: 'Axios4',
        component: () =>
            import ('../views/Axios4.vue')
    },
    {
        path: '/axios5',
        name: 'Axios5',
        component: () =>
            import ('../views/Axios5.vue')
    },
    {
        path: '/axios6',
        name: 'Axios6',
        component: () =>
            import ('../views/Axios6.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router