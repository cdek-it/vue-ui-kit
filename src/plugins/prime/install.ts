import merge from 'lodash/merge';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

import type { PrimeVueConfiguration } from 'primevue/config';

const CdekPreset = definePreset(Aura, {
  //Your customizations, see the following sections for examples
});

const primeConfig: PrimeVueConfiguration = {
  theme: {
    preset: CdekPreset,
    options: {
      darkModeSelector: false,
      cssLayer: false,
    },
  },
};

export type { PrimeVueConfiguration };

export const getPrimeVueConfig = (config?: PrimeVueConfiguration) => {
  return merge(primeConfig, config || {});
};
