import { resolve } from 'path'
import { ConfigEnv, defineConfig } from 'vite'
import { createVitePlugins } from './build/vite/plugins'
import { readEnv } from './build/vite/utils/readEnv';

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@": pathResolve("src"),
  // 解决开发环境下的警告 You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
  // "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
};

// https://vitejs.dev/config/
export default (({command, mode}: ConfigEnv) => {
  const env = readEnv(mode);
  
  return defineConfig({
    base: env.VITE_BASE,
    resolve: {
      alias,
    },
    plugins: createVitePlugins(),
  })
})

