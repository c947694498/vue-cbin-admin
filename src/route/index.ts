import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { errors } from './modules/errors';
import { home } from "./modules/home";
import { login } from './modules/login';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 错误
    ...errors,
    // 登录
    ...login,
    // 主页
    ...home
  ],
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}