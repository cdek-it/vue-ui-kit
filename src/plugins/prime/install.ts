import PrimeVue, { type PrimeVueConfiguration } from 'primevue/config';
import Lara from '@primevue/themes/lara';
import merge from 'lodash/merge';

import type { App } from 'vue';

const primeConfig: PrimeVueConfiguration = {
  theme: {
    preset: Lara,
  },
};

export type { PrimeVueConfiguration };

export const usePrimeVue = (app: App, config?: PrimeVueConfiguration) => {
  app.use(PrimeVue, merge(primeConfig, config || {}));
};
