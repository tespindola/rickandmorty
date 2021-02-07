import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/Episodes/:page?',
        alias: "/:page?",
        name: 'Episodes',
        component: () => import('../views/Episodes.vue')
    },
    {
        path: '/Locations/:page?',
        name: 'Locations',
        component: () => import('../views/Locations.vue')
    },
    {
        path: '/Characters/:page?',
        name: 'Characters',
        component: () => import('../views/Characters.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
