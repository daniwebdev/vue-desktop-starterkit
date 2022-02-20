import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'

import './assets/scss/index.scss'

import appstore from './store';
import router from './router'


const app = createApp(App)

app.use(appstore)
app.use(router)

app.mount('#app')