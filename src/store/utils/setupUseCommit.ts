import { ModuleTree, MutationTree, StoreOptions, useStore } from "vuex";
import { useModuleMaps } from "./moduleEach";

let commitTree:MutationTree<any> = {
    
}

/**
 * @description 安装useCommit
 * @example useCommit().app.appAction() or useCommit().app.menu.menuAction
 */
export function setupUseCommit<S>(storeOptions: StoreOptions<S>, namespace:string) {
  if(!namespace) {
    commitTree = Object.assign(commitTree, storeOptions.actions)
  }else {
    if(!commitTree[namespace]) {
    }
  }
  commitTree[namespace] = Object.assign(commitTree[namespace], storeOptions.actions)
}

