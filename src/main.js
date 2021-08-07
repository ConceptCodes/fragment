import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import './assets/scss/theme.scss'
import '@popperjs/core'

createApp(App)
    .use(store)
    .use(router)
        .mount('#app')
