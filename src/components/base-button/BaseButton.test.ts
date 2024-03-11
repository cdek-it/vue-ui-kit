import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import builderProp from '@/test/decorators';
import BaseButton from './BaseButton.vue';

type ThemeT = 'primary' | 'secondary' | 'outline' | 'ghost' | 'toaster';
type WidthT = 'auto' | 'content';

interface BaseButtonBuilder {
  setTheme: (theme: ThemeT) => BaseButtonBuilder;
  setWidth: (width: WidthT) => BaseButtonBuilder;
  setSmall: (small: boolean) => BaseButtonBuilder;
  setDisabled: (disabled: boolean) => BaseButtonBuilder;
  setLoading: (loading: boolean) => BaseButtonBuilder;
  setSpinnerBefore: (spinnerBefore: boolean) => BaseButtonBuilder;
  setIcon: (icon: boolean) => BaseButtonBuilder;
  setAs: (as: string) => BaseButtonBuilder;
}

class BaseButtonBuilder {
  @builderProp
  theme?: ThemeT;

  @builderProp
  width?: WidthT;

  @builderProp
  small?: boolean;

  @builderProp
  disabled?: boolean;

  @builderProp
  loading?: boolean;

  @builderProp
  spinnerBefore?: boolean;

  @builderProp
  icon?: boolean;

  @builderProp
  as?: string;

  build() {
    return shallowMount(BaseButton as any, {
      props: {
        theme: this.theme,
        width: this.width,
        small: this.small,
        disabled: this.disabled,
        loading: this.loading,
        spinnerBefore: this.spinnerBefore,
        icon: this.icon,
        as: this.as,
      },
      slots: {
        default: 'Подтвердить',
      },
    });
  }
}

describe('Unit: BaseButton', () => {
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
        const wrapper = new BaseButtonBuilder().setTheme(theme).build();
        expect(wrapper.classes(themeClass)).toBeTruthy();
      }
    );
  });

  test('Если width = "content", то должен быть класс .inline', () => {
    const wrapper = new BaseButtonBuilder().setWidth('content').build();
    expect(wrapper.classes('inline')).toBeTruthy();
  });

  test('Если disabled = true, то должен быть класс .disabled', () => {
    const wrapper = new BaseButtonBuilder().setDisabled(true).build();
    expect(wrapper.classes('disabled')).toBeTruthy();
  });

  test('Если small = true, то должен быть класс .small', () => {
    const wrapper = new BaseButtonBuilder().setSmall(true).build();
    expect(wrapper.classes('small')).toBe(true);
  });

  test('Если icon = true, то должен быть класс .icon', () => {
    const wrapper = new BaseButtonBuilder().setIcon(true).build();
    expect(wrapper.classes('icon')).toBe(true);
  });

  describe('as', () => {
    test('Если as не передан, то тег должен быть button', () => {
      const wrapper = new BaseButtonBuilder().build();
      expect(wrapper.vm.$el.tagName).toBe('BUTTON');
    });
    test('Если as = div, то тег должен быть div', () => {
      const wrapper = new BaseButtonBuilder().setAs('div').build();
      expect(wrapper.vm.$el.tagName).toBe('DIV');
    });
  });

  describe('Loading', () => {
    test('Если loading = false, то спиннера не должно быть', () => {
      const wrapper = new BaseButtonBuilder().build();
      expect(wrapper.find('cdek-spinner-stub').exists()).toBeFalsy();
    });
    test('Если loading = true, то должен показаться спиннер', () => {
      const wrapper = new BaseButtonBuilder().setLoading(true).build();
      expect(wrapper.find('cdek-spinner-stub').exists()).toBeTruthy();
    });
    test('Если loading = true и spinnerBefore = false, то контент должен пропасть', () => {
      const wrapper = new BaseButtonBuilder().setLoading(true).build();
      expect(wrapper.text()).toBe('');
    });
    test('Если loading = true и spinnerBefore = true, то должен показаться и спиннер, и контент', () => {
      const wrapper = new BaseButtonBuilder()
        .setLoading(true)
        .setSpinnerBefore(true)
        .build();
      expect(wrapper.find('cdek-spinner-stub').exists()).toBeTruthy();
      expect(wrapper.text()).toBe('Подтвердить');
    });
  });

  describe('Цвет спиннера', () => {
    test('Если theme = "primary", то цвет спиннера - белый', () => {
      const wrapper = new BaseButtonBuilder().setLoading(true).build();
      expect(wrapper.find('cdek-spinner-stub').attributes('color')).toBe(
        'white'
      );
    });
    test('Если theme = "secondary", то цвет спиннера - зеленый', () => {
      const wrapper = new BaseButtonBuilder()
        .setTheme('secondary')
        .setLoading(true)
        .build();
      expect(wrapper.find('cdek-spinner-stub').attributes('color')).toBe(
        'green'
      );
    });
    test('Если disabled = "true", то цвет спиннера - белый', () => {
      const wrapper = new BaseButtonBuilder()
        .setLoading(true)
        .setDisabled(true)
        .build();
      expect(wrapper.find('cdek-spinner-stub').attributes('color')).toBe(
        'white'
      );
    });
  });
});
