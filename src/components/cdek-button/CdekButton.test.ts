import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekButton from './CdekButton.vue';

type ThemeT = 'primary' | 'secondary' | 'outline' | 'ghost';
type WidthT = 'auto' | 'content';

const createCdekButton = (
  theme?: ThemeT,
  width?: WidthT,
  disabled?: boolean,
  loading?: boolean,
  small?: boolean
) => {
  return mount(CdekButton, {
    props: {
      theme,
      width,
      disabled,
      loading,
      small,
    },
  });
};

describe('Unit: CdekButton', () => {
  describe('theme', () => {
    test.each([
      { theme: undefined, backgroundColor: '#1AB248', textColor: '#FFFFFF' },
      {
        theme: 'secondary',
        backgroundColor: 'rgba(#1AB248, 10%)',
        textColor: '#1AB248',
      },
      {
        theme: 'outline',
        backgroundColor: 'transparent',
        textColor: '#1AB248',
      },
      { theme: 'ghost', backgroundColor: 'transparent', textColor: '#1AB248' },
    ])(
      'Если theme = $theme, то цвет фона должен быть $backgroundColor',
      ({ theme, backgroundColor, textColor }: any) => {
        const wrapper = createCdekButton(theme);

        const button = wrapper.find('.cdek-button');
      }
    );
  });
});
