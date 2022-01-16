import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user/:userId',
        name: 'UserProfile',
        component: UserProfile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router