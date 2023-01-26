import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CdekWidget from './CdekWidget.vue';

const createCdekWidget = (
  headline?: string,
  withoutPaddings?: boolean,
  slot?: string
) => {
  return mount(CdekWidget, {
    props: {
      headline,
      withoutPaddings,
    },
    slots: {
      default: slot || '',
    },
  });
};

describe('Unit: CdekWidget', () => {
  test('Отображает слот', () => {
    const wrapper = createCdekWidget(undefined, undefined, 'Тест');
    expect(wrapper.text()).toBe('Тест');
  });
  test('Если headline = "Заголовок", то элемент .cdek-widget__title должен содержать "Заголовок"', () => {
    const wrapper = createCdekWidget('Заголовок');
    const cdekHeadline = wrapper.find('.cdek-widget__title');
    expect(cdekHeadline.text()).toBe('Заголовок');
  });
  test('Если withoutPaddings = true, то у элемента .cdek-widget должен присутствовать класс "cdek-widget_without-paddings"', () => {
    const wrapper = createCdekWidget('Заголовок', true);
    expect(wrapper.classes('cdek-widget_without-paddings')).toBeTruthy();
  });
});
