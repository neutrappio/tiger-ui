import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import store from './state/store'
import * as components from "@heroicons/vue/outline";

/**
 * Plugins/+Styles
 */
import './assets/css/tailwind.css'

/**
 * Vue Instance
 */
const vueApp = createApp(App)
    .use(store)
    .use(router)

/**
 * HeroIcons
 */
Object.keys(components).forEach(cpm => {
    vueApp.component(cpm, components[cpm])
})


/**
 * Mount the vue app
 */
vueApp.mount('#app')
