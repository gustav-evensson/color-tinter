import { createApp } from 'vue'
import { useStore } from './VueX/store'
import App from './App.vue'

import './style/App.css'

createApp(App).use(useStore).mount('#app')
