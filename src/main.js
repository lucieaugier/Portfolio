import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import CombimacProject from './components/projects/CombimacProject.vue'
import KeycubeProject from './components/projects/KeycubeProject.vue'
import MikiiProject from './components/projects/MikiiProject.vue'
import RickAndMortyProject from './components/projects/RickAndMortyProject.vue'
import HacktivistsProject from './components/projects/HacktivistsProject.vue'
import SchoolMouvProject from './components/projects/SchoolMouvProject.vue'
import ThePasswordGameProject from './components/projects/ThePasswordGameProject.vue'


const routes = [
    { path: '/about', component: AboutPage},
    { path: '/Combimac', component: CombimacProject},
    { path: '/Keycube', component: KeycubeProject},
    { path: '/Mikii', component: MikiiProject},
    { path: '/Rick and Morty API', component: RickAndMortyProject},
    {path: '/Rick%20and%20Morty%20API', component: RickAndMortyProject},
    { path: '/Hacktivists', component: HacktivistsProject},
    {path: '/SchoolMouv', component: SchoolMouvProject},
    {path : '/The%20Password%20Game%202.0', component: ThePasswordGameProject},
    {path : '/The Password Game 2.0', component: ThePasswordGameProject},
    { path: '/' , component: HomePage },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App).use(router).mount('#app');
