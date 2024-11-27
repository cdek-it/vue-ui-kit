import { reactive } from 'vue';
import type { UnwrapNestedRefs } from 'vue';

export default function useServiceFactory<T extends { init?: () => void }>(
  getInstance: () => T,
  Service: any
) {
  return () => {
    if (!Service.instance) {
      Service.isReactive = false;
    }

    let instance: T | UnwrapNestedRefs<T> = getInstance();

    if (!Service.isReactive) {
      instance = reactive(instance);
      Service.instance = instance;
      Service.isReactive = true;
      instance.init?.();

      const prototype = Object.getPrototypeOf(instance);
      Object.getOwnPropertyNames(prototype).forEach((key) => {
        const value = prototype[key];
        if (typeof value === 'function' && key !== 'constructor') {
          (instance as Record<string, unknown>)[key] = value.bind(instance);
        }
      });
    }

    return instance as UnwrapNestedRefs<T>;
  };
}
