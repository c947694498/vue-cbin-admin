import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'

(async () => {
  const app = createApp(App)
  app.mount('#app')
})()