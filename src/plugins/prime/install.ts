import merge from 'lodash/merge';
import { definePreset } from '@primeuix/themes';
import Lara from '@primevue/themes/lara';
import theme from './theme2.0';

// @ts-ignore
const CdekPreset = definePreset(Lara, theme);

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
