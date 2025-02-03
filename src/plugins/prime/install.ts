import merge from 'lodash/merge';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import theme from './theme';

import type { PrimeVueConfiguration } from 'primevue/config';

const CdekPreset = definePreset(Aura, theme);

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
