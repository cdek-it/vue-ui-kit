import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CdekWidget from './CdekWidget.vue';
import builderProp from '@/test/decorators';

interface ExtraMethods {
  setHeadline: (val: string) => CdekWidgetBuilder;
  setWithoutPaddings: (val: boolean) => CdekWidgetBuilder;
  setDefault: (val: string) => CdekWidgetBuilder;
  setHeader: (val: string) => CdekWidgetBuilder;
  setLoading: (val: boolean) => CdekWidgetBuilder;
}

interface CdekWidgetBuilder extends ExtraMethods {}

class CdekWidgetBuilder {
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

  build() {
    return mount(CdekWidget, {
      props: {
        headline: this.headline,
        withoutPaddings: this.withoutPaddings,
        loading: this.loading,
      },
      slots: {
        default: this.default,
        header: this.header,
      },
    });
  }
}

describe('Unit: CdekWidget', () => {
  test('Отображает слот', () => {
    const wrapper = new CdekWidgetBuilder().setDefault('Тест').build();
    expect(wrapper.text()).toBe('Тест');
  });
  test('Если headline передан, то содержимое должно передаваться в заголовок', () => {
    const wrapper = new CdekWidgetBuilder().setHeadline('Заголовок').build();
    const cdekHeadline = wrapper.find('.cdek-widget__title');
    expect(cdekHeadline.text()).toBe('Заголовок');
  });
  test('Если withoutPaddings = true, то у виджета должны отсутствовать внутренние отступы', () => {
    const wrapper = new CdekWidgetBuilder()
      .setHeadline('Заголовок')
      .setWithoutPaddings(true)
      .build();
    expect(wrapper.classes('cdek-widget_without-paddings')).toBeTruthy();
  });
  test('Должен показывать заголовок переданный в слоте', () => {
    const wrapper = new CdekWidgetBuilder().setHeader('<b>test</b>').build();
    const header = wrapper.find('.cdek-widget__title');
    expect(header.exists()).toBe(true);
    expect(header.find('b').html()).toBe('<b>test</b>');
  });
  test('Должен добавлять спиннер и затенять контент, если loading = true', () => {
    const wrapper = new CdekWidgetBuilder().setLoading(true).build();
    expect(wrapper.classes('cdek-widget_loading')).toBeTruthy();
    expect(wrapper.find('.cdek-widget__spinner').exists()).toBeTruthy();
  });
});
