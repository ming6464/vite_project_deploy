// Composables
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/vue1',
        component: () => import('../views/vue1.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router
