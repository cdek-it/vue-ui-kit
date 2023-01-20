import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekButton from './CdekButton.vue';

type ThemeT = 'primary' | 'secondary' | 'outline' | 'ghost' | 'toaster';
type WidthT = 'auto' | 'content';

class CdekButtonBuilder {
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
  setWidth(width: WidthT) {
    this.width = width;
    return this;
  }
  toggleSmall() {
    this.small = !this.small;
    return this;
  }
  toggleDisabled() {
    this.disabled = !this.disabled;
    return this;
  }
  toggleLoading() {
    this.loading = !this.loading;
    return this;
  }
  toggleSpinnerBefore() {
    this.spinnerBefore = !this.spinnerBefore;
    return this;
  }
  toggleIcon() {
    this.icon = !this.icon;
    return this;
  }

  build() {
    return shallowMount(CdekButton, {
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
        default: 'Подтвердить',
      },
    });
  }
}

describe('Unit: CdekButton', () => {
  describe('theme', () => {
    test.each([
      { theme: undefined, themeClass: 'primary' },
      { theme: 'primary', themeClass: 'primary' },
      { theme: 'secondary', themeClass: 'secondary' },
      { theme: 'outline', themeClass: 'outline' },
      { theme: 'ghost', themeClass: 'ghost' },
      { theme: 'toaster', themeClass: 'toaster' },
    ])(
      'Если theme = $theme, то должен быть класс $themeClass',
      ({ theme, themeClass }: any) => {
        const wrapper = new CdekButtonBuilder().setTheme(theme).build();
        expect(wrapper.classes(themeClass)).toBeTruthy();
      }
    );
  });

  test('Если width = "content", то должен быть класс .inline', () => {
    const wrapper = new CdekButtonBuilder().setWidth('content').build();
    expect(wrapper.classes('inline')).toBeTruthy();
  });

  test('Если disabled = true, то должен быть атрибут disabled', () => {
    const wrapper = new CdekButtonBuilder().toggleDisabled().build();
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  test('Если small = true, то должен быть класс .small', () => {
    const wrapper = new CdekButtonBuilder().toggleSmall().build();
    expect(wrapper.classes('small')).toBe(true);
  });

  test('Если icon = true, то должен быть класс .icon', () => {
    const wrapper = new CdekButtonBuilder().toggleIcon().build();
    expect(wrapper.classes('icon')).toBe(true);
  });

  describe('Loading', () => {
    test('Если loading = false, то спиннера не должно быть', () => {
      const wrapper = new CdekButtonBuilder().build();
      expect(wrapper.find('cdek-spinner-stub').exists()).toBeFalsy();
    });
    test('Если loading = true, то должен показаться спиннер', () => {
      const wrapper = new CdekButtonBuilder().toggleLoading().build();
      expect(wrapper.find('cdek-spinner-stub').exists()).toBeTruthy();
    });
    test('Если loading = true и spinnerBefore = false, то контент должен пропасть', () => {
      const wrapper = new CdekButtonBuilder().toggleLoading().build();
      expect(wrapper.text()).toBe('');
    });
    test('Если loading = true и spinnerBefore = true, то должен показаться и спиннер, и контент', () => {
      const wrapper = new CdekButtonBuilder()
        .toggleLoading()
        .toggleSpinnerBefore()
        .build();
      expect(wrapper.find('cdek-spinner-stub').exists()).toBeTruthy();
      expect(wrapper.text()).toBe('Подтвердить');
    });
  });

  describe('Цвет спиннера', () => {
    test('Если theme = "primary", то цвет спиннера - белый', () => {
      const wrapper = new CdekButtonBuilder().toggleLoading().build();
      expect(wrapper.find('cdek-spinner-stub').attributes('color')).toBe(
        'white'
      );
    });
    test('Если theme = "secondary", то цвет спиннера - зеленый', () => {
      const wrapper = new CdekButtonBuilder()
        .setTheme('secondary')
        .toggleLoading()
        .build();
      expect(wrapper.find('cdek-spinner-stub').attributes('color')).toBe(
        'green'
      );
    });
    test('Если disabled = "true", то цвет спиннера - белый', () => {
      const wrapper = new CdekButtonBuilder()
        .toggleLoading()
        .toggleDisabled()
        .build();
      expect(wrapper.find('cdek-spinner-stub').attributes('color')).toBe(
        'white'
      );
    });
  });
});
