import merge from 'lodash/merge';
import { CdekPreset } from './theme3.0/CdekPreset';

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
