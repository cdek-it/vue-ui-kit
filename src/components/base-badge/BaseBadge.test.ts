import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import BaseBadge from './BaseBadge.vue';
import builderProp from '@/test/decorators';

interface ExtraMethods {
  setType: (val: string) => BaseBadgeBuilder;
  setVariant: (val: string) => BaseBadgeBuilder;
  setText: (val: string) => BaseBadgeBuilder;
  setDefault: (val: string) => BaseBadgeBuilder;
}

interface BaseBadgeBuilder extends ExtraMethods {}

class BaseBadgeBuilder {
  @builderProp
  type = '';

  @builderProp
  variant = '';

  @builderProp
  text = '';

  @builderProp
  default = '';

  build() {
    return mount(BaseBadge as any, {
      props: {
        type: this.type,
        variant: this.variant,
        text: this.text,
      },
      slots: {
        default: this.default,
      },
    });
  }
}

describe('Unit: BaseBadge', () => {
  describe('type', () => {
    test.each([
      { type: undefined, typeClass: 'info' },
      { type: 'positive', typeClass: 'positive' },
      { type: 'negative', typeClass: 'negative' },
      { type: 'process', typeClass: 'process' },
      { type: 'info', typeClass: 'info' },
      { type: 'deactive', typeClass: 'deactive' },
      { type: 'neutral', typeClass: 'neutral' },
    ])(
      'Если type = $type, то должен быть класс $typeClass',
      ({ type, typeClass }: any) => {
        const wrapper = new BaseBadgeBuilder()
          .setText('Status')
          .setType(type)
          .build();
        expect(wrapper.classes(typeClass)).toBeTruthy();
      }
    );
  });
  describe('variant', () => {
    test.each([
      { variant: undefined, variantClass: 'light' },
      { variant: 'light', variantClass: 'light' },
      { variant: 'dark', variantClass: 'dark' },
    ])(
      'Если variant = $variant, то должен быть класс $variantClass',
      ({ variant, variantClass }: any) => {
        const wrapper = new BaseBadgeBuilder()
          .setText('Status')
          .setVariant(variant)
          .build();
        expect(wrapper.classes(variantClass)).toBeTruthy();
      }
    );
  });

  test('Если передан слот, то его нужно отобразить', () => {
    const wrapper = new BaseBadgeBuilder().setDefault('<b>test</b>').build();

    expect(wrapper.html()).toMatch('<b>test</b>');
  });

  test('Если передан текст, то его нужно отобразить', () => {
    const wrapper = new BaseBadgeBuilder().setText('Status').build();

    expect(wrapper.text()).toBe('Status');
  });
});
