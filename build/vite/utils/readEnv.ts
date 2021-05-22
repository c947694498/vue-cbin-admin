import { loadEnv } from 'vite';

/**
 * @description 加载环境变量
 */
export function readEnv(mode: string): ImportMetaEnv{
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return env as ImportMetaEnv
}
