import {createRouter, createWebHashHistory} from "vue-router";

let router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        name: 'home',
        path: '/',
        component: () => import('../components/Home.vue')
    }]
})

export default router
