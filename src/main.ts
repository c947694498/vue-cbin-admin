import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './route';
import { setupAntUI } from '/@/setup/setupAntUI';
import { setupStore } from '/@/store/index';
import '/@/styles/index.scss';

(async () => {
  const app = createApp(App)

  setupStore(app)
  setupRouter(app)
  setupAntUI(app)
  
  app.mount('#app')
})()