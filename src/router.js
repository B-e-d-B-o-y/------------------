import { createRouter, createWebHashHistory } from "vue-router";
import Login from './components/login.vue'
import Main from './components/main.vue'
import Card from './components/card.vue'
import Help from './components/help.vue'
import Map from './components/map.vue'
import Check from './components/check.vue'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Main, alias: '/'},
        {path: '/card', component: Card},
        {path: '/login', component: Login},
        {path: '/help', component: Help},
        {path: '/map', component: Map},
        {path: '/check', component: Check},
    ]
})