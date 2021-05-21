import { App } from '@vue/runtime-core';
import { Button, message } from 'ant-design-vue';

// 装载AntUI
export function setupAntUI(app: App<Element>) {
  app.config.globalProperties.$message = message;
}
