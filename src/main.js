import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import "bootstrap/scss/bootstrap";


import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(bootstrap)

app.mount('#app')
