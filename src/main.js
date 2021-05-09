import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './globalStyling.scss'
import particles from 'particles.vue3' 

createApp(App).use(store).use(router).use(particles).mount('#app')
