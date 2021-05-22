import { RouteRecordRaw } from "vue-router";

export const home: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "Home" },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("/@/views/home/index.vue"),
  },
];
