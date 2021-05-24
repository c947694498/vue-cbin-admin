import { Module, StoreOptions } from "vuex";

interface ModuleMaps {
  [key: string]: Module<any, any>;
}

/**
 * @description 模块maps
 */
export const moduleMaps: ModuleMaps = {};

/**
 * @description 获取模块
 */
export function getModules<S>(storeOptions: StoreOptions<S>) {
  return storeOptions.modules;
}

interface EachFn<S> {
  (storeOptions: StoreOptions<S>, namespace: string): any;
}

/**
 * @description 模块树转maps
 */
export function moduleEach<S>(
  storeOptions: StoreOptions<S>,
  fn: EachFn<S>,
  namespace: string = ""
) {
  fn && fn(storeOptions, namespace);
  const modules = getModules(storeOptions);
  if (modules) {
    Object.entries(modules).forEach(([namespace, module]) => {
      moduleEach(module, fn, namespace);
    });
  }
}

/**
 * @description 使用模块maps
 */
export function useModuleMaps() {
  return moduleMaps;
}
