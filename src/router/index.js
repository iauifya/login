import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: LoginPage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/welcome',
        name: 'welcome',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/WelcomePage.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'error',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ErrorPage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router