import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from "vue3-google-login"
import VueTheMask from 'vue-the-mask'

import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(VueTheMask)
app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_CLIENT_ID
})

app.mount('#app')
