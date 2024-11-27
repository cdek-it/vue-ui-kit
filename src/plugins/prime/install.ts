import merge from 'lodash/merge';
import Lara from '@primevue/themes/lara';

import type { PrimeVueConfiguration } from 'primevue/config';

const primeConfig: PrimeVueConfiguration = {
  theme: {
    preset: Lara,
  },
};

export type { PrimeVueConfiguration };

export const getPrimeVueConfig = (config?: PrimeVueConfiguration) => {
  return merge(primeConfig, config || {});
};
