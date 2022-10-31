import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '@/views/AppHome.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome,
    },
        
    {
        path: '/characters',
        name: 'back',
        component: () =>
            import('../components/AppCharacters.vue'),
    },

    {
        path: '/character/:id',
        name: 'character',
        component: () =>
            import('../components/AppCharacter.vue'),
    },
        
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,

});

export default router;

