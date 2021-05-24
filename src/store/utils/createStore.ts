import { createStore as baseCreateStore, Store, StoreOptions } from 'vuex';
import { moduleEach } from './moduleEach';
import { setupUseCommit } from './setupUseCommit';
import { setupUseDispatch } from './setupUseDispatch';

/**
 * @description 创建store，在原有基础上进行扩展
 */
export function createStore<S>(storeOptions: StoreOptions<S>): Store<S> {
  moduleEach(storeOptions, function (_storeOptions, namespace) {
    setupUseCommit(_storeOptions, namespace)
    setupUseDispatch(_storeOptions, namespace)
  })
  
  return baseCreateStore(storeOptions)
}
