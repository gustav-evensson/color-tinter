import { createApp } from 'vue'
import { store } from './VueX/store'
import App from './App.vue'

import './style/css/app.css'

createApp(App).use(store).mount('#app')
