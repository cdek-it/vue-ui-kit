import { reactive } from 'vue';
import type { UnwrapNestedRefs } from 'vue';

export default function useServiceFactory<T extends { init?: () => void }>(
  getInstance: () => T,
  Service: any
) {
  return () => {
    let instance: T | UnwrapNestedRefs<T> = getInstance();

    if (!Service.isReactive) {
      instance = reactive(instance);
      Service.instance = instance;
      Service.isReactive = true;
      instance.init?.();
    }

    return instance as UnwrapNestedRefs<T>;
  };
}
