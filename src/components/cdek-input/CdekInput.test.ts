import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekInput from './CdekInput.vue';

type ThemeT = 'primary' | 'secondary' | 'outline' | 'ghost';
type WidthT = 'auto' | 'content';

class CdekInputBuilder {
  theme?: ThemeT;
  width?: WidthT;
  small?: boolean;
  disabled?: boolean;
  loading?: boolean;
  spinnerBefore?: boolean;
  icon?: boolean;

  setTheme(theme: ThemeT) {
    this.theme = theme;
    return this;
  }
  toggleIcon() {
    this.icon = !this.icon;
    return this;
  }

  build() {
    return shallowMount(CdekInput, {
      props: {
        theme: this.theme,
        width: this.width,
        small: this.small,
        disabled: this.disabled,
        loading: this.loading,
        spinnerBefore: this.spinnerBefore,
        icon: this.icon,
      },
      slots: {
        default: '',
      },
    });
  }
}

describe('Unit: CdekInput', () => {
  describe('theme', () => {
    test.each([
      { theme: undefined, themeClass: 'primary' },
      { theme: 'primary', themeClass: 'primary' },
      { theme: 'secondary', themeClass: 'secondary' },
      { theme: 'outline', themeClass: 'outline' },
      { theme: 'ghost', themeClass: 'ghost' },
    ])(
      'Если theme = $theme, то должен быть класс $themeClass',
      ({ theme, themeClass }: any) => {
        const wrapper = new CdekInputBuilder().setTheme(theme).build();
        expect(wrapper.classes(themeClass)).toBeTruthy();
      }
    );
  });

  describe('Loading', () => {
    test('Если loading = false, то спиннера не должно быть', () => {
      const wrapper = new CdekInputBuilder().build();
      expect(wrapper.find('cdek-spinner-stub').exists()).toBeFalsy();
    });
  });
});
