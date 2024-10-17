import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import vueitfy from './plugins/vueitfy'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueitfy)

app.mount('#app')
