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
        test: 'red',
      },
      dark: {
        test: 'black',
      },
    },
  },
};

export default preset;
