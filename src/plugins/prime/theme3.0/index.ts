import type { Preset } from '@primeuix/themes/types';
import semantic from './semantic';
import primitive from './primitive';
import components from './components';

const preset: Preset = {
  primitive,
  semantic,
  components,
  extend: {
    colorScheme: {
      light: {
      },
      dark: {
      },
    },
  },
};

export default preset;