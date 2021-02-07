import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/Episodes/:page?',
        alias: "/",
        name: 'Episodes',
        component: () => import('../views/Episodes.vue')
    },
    {
        path: '/Locations',
        name: 'Locations',
        component: () => import('../views/Locations.vue')
    },
    {
        path: '/Characters',
        name: 'Characters',
        component: () => import('../views/Characters.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
