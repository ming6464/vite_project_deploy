// Composables
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/vite_project_deploy/',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/vite_project_deploy/vue1',
        component: () => import('../views/vue1.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router
