import type { App } from 'vue';

import type { PluginOptions } from '../../lib';
import * as ownExports from '../../lib';
import {
  globalEventBus,
  toastInjectionKey,
} from '@/plugins/toastification/lib';

export default {
  install: (app: App, options?: PluginOptions) => {
    const inter = ownExports.createToastInterface({
      eventBus: globalEventBus,
      ...options,
    });
    app.provide(toastInjectionKey, inter);
  },
};
