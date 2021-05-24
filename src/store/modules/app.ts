// store app

import { Module } from "vuex";
import { RootState } from "..";

export enum AppTypes {
  
}

export interface AppState {
  version: String,
}

const app:Module<AppState, RootState> = {
  namespaced: true,
  state():AppState {
    return {
      version: '1.0.0',
    };
  },
  mutations: {
    SET_VERSION(state:AppState, playload: AppState["version"]) {
      state.version = playload
    }
  },
  actions: {},
}
export default app

