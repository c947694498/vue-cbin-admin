import { App, InjectionKey } from "vue"
import { Store, useStore as baseUseStore } from "vuex"
import user, { userState } from './modules/user'
import app, { AppState } from './modules/app'
import { createStore } from "./utils/createStore"

export interface RootState {}
export interface State {
  app: AppState
  user: userState
}

export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
  modules: {
    app,
    user
  }
})

export const setupStore = (app: App<Element>) => {
  app.use(store, key)
}

export function useStore() {
  return baseUseStore(key)
}