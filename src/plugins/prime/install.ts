import merge from 'lodash/merge';
import { definePreset } from '@primeuix/themes';
import Aura from '@primevue/themes/aura';
import theme from './theme3.0';

// @ts-ignore
const CdekPreset = definePreset(Aura, theme);

const primeConfig = {
  theme: {
    preset: CdekPreset,
    options: {
      darkModeSelector: false,
      cssLayer: false,
    },
  },
};

export const getPrimeVueConfig = (config?: Record<string, unknown>) => {
  return merge(primeConfig, config || {});
};
