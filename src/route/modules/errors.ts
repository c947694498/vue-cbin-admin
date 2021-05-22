import { RouteRecordRaw } from 'vue-router';

export const errors:RouteRecordRaw[] = [
  {
    path: '/404',
    name: 'Error404',
    component: () => import('/@/views/errors/error404.vue')
  },
  // 匹配任何未找到的路径到 Error404
  {
    path: '/:pathMatch(.*)*',
    redirect: {name: 'Error404'}
  }
]
