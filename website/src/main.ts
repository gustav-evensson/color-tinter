import { createApp } from 'vue'
import { useStore } from './VueX/store'
import App from './App.vue'

import './style/css/app.css'

createApp(App).use(useStore).mount('#app')
