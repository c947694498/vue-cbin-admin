import { App } from "vue"
import { createStore } from "vuex"
import user from './modules/user'
import app from './modules/app'

const store = createStore({
  modules: {
    app,
    user
  }
})

export const setupStore = (app: App<Element>) => {
  app.use(store)
}