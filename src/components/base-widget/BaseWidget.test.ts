import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseWidget from './BaseWidget.vue';
import builderProp from '@/test/decorators';

interface ExtraMethods {
  setHeadline: (val: string) => BaseWidgetBuilder;
  setWithoutPaddings: (val: boolean) => BaseWidgetBuilder;
  setDefault: (val: string) => BaseWidgetBuilder;
  setHeader: (val: string) => BaseWidgetBuilder;
  setLoading: (val: boolean) => BaseWidgetBuilder;
  setDisabled: (val: boolean) => BaseWidgetBuilder;
}

interface BaseWidgetBuilder extends ExtraMethods {}

class BaseWidgetBuilder {
  @builderProp
  headline = '';

  @builderProp
  withoutPaddings = false;

  @builderProp
  default = '';

  @builderProp
  header = '';

  @builderProp
  loading = false;

  @builderProp
  disabled = false;

  build() {
    return mount(BaseWidget as any, {
      props: {
        headline: this.headline,
        withoutPaddings: this.withoutPaddings,
        loading: this.loading,
        disabled: this.disabled,
      },
      slots: {
        default: this.default,
        header: this.header,
      },
    });
  }
}

describe('Unit: BaseWidget', () => {
  test('Отображает слот', () => {
    const wrapper = new BaseWidgetBuilder().setDefault('Тест').build();
    expect(wrapper.text()).toBe('Тест');
  });
  test('Если headline передан, то содержимое должно передаваться в заголовок', () => {
    const wrapper = new BaseWidgetBuilder().setHeadline('Заголовок').build();
    const cdekHeadline = wrapper.find('.prefix-widget__title');
    expect(cdekHeadline.text()).toBe('Заголовок');
  });
  test('Если withoutPaddings = true, то у виджета должны отсутствовать внутренние отступы', () => {
    const wrapper = new BaseWidgetBuilder()
      .setHeadline('Заголовок')
      .setWithoutPaddings(true)
      .build();
    expect(wrapper.classes('prefix-widget_without-paddings')).toBeTruthy();
  });
  test('Должен показывать заголовок переданный в слоте', () => {
    const wrapper = new BaseWidgetBuilder().setHeader('<b>test</b>').build();
    const header = wrapper.find('.prefix-widget__title');
    expect(header.exists()).toBe(true);
    expect(header.find('b').html()).toBe('<b>test</b>');
  });
  test('Должен добавлять спиннер и затенять контент, если loading = true', () => {
    const wrapper = new BaseWidgetBuilder().setLoading(true).build();
    expect(wrapper.classes('prefix-widget_loading')).toBeTruthy();
    expect(wrapper.find('.prefix-widget__spinner').exists()).toBeTruthy();
  });
  test('Если disabled = true, должен сделать блок полупрозрачным', () => {
    const wrapper = new BaseWidgetBuilder().setDisabled(true).build();
    expect(wrapper.classes('prefix-widget_disabled')).toBeTruthy();
  });
});
