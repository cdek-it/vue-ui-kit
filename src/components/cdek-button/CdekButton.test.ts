import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekButton from './CdekButton.vue';

type ThemeT = 'primary' | 'secondary' | 'outline' | 'ghost';
type WidthT = 'auto' | 'content';

const createCdekButton = (
  theme?: ThemeT,
  width?: WidthT,
  small?: boolean,
  disabled?: boolean,
  loading?: boolean,
  spinnerBefore?: boolean,
  icon?: boolean
) => {
  return mount(CdekButton, {
    props: {
      theme,
      width,
      small,
      disabled,
      loading,
      spinnerBefore,
      icon,
    },
  });
};

describe('Unit: CdekButton', () => {
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
        const wrapper = createCdekButton(theme);
        expect(wrapper.classes(themeClass)).toBe(true);
      }
    );
  });
  describe('width', () => {
    test.todo('Если width = "content", то должен быть класс .inline');
    const wrapper = createCdekButton(undefined, 'content');
    expect(wrapper.classes('inline')).toBe(true);
  });
  describe('disabled', () => {
    test.todo('Если disabled = true, то должен быть атрибут disabled');
    const wrapper = createCdekButton(undefined, undefined, undefined, true);
    // console.log(wrapper.html());
    // expect(wrapper.attributes('disabled')).toBe(true);
  });
  describe('small', () => {
    test.todo('Если small = true, то должен быть класс .small');
    const wrapper = createCdekButton(undefined, undefined, true);
    expect(wrapper.classes('small')).toBe(true);
  });
  describe('icon', () => {
    test.todo('Если icon = true, то должен быть класс .icon');
    const wrapper = createCdekButton(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      true
    );
    expect(wrapper.classes('icon')).toBe(true);
  });
});
