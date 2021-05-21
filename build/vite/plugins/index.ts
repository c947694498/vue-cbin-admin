import { resolve } from 'path';
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import { importAntDesignVue } from "./importAntDesignVue";

// 创建vite 插件
export function createVitePlugins() {
  const plugins = [
    // vue
    vue(),
    // jsx 
    vueJsx(),
  ];

  // 导入ant design vue样式
  plugins.push(importAntDesignVue());

  return plugins;
}
