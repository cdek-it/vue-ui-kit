import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import builderProp from '@/test/decorators';
import BaseMaskedInput from './BaseMaskedInput.vue';

interface ExtraMethods {
  setModelValue: (val: string) => BaseMaskedInputBuilder;
  setMask: (val: string) => BaseMaskedInputBuilder;
}

interface BaseMaskedInputBuilder extends ExtraMethods {}

class BaseMaskedInputBuilder {
  @builderProp modelValue?: string;
  @builderProp unmasked?: string;
  @builderProp mask?: string;

  build() {
    const wrapper = mount(BaseMaskedInput as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
        unmasked: this.unmasked,
        'onUpdate:unmasked': (e: string) => wrapper.setProps({ unmasked: e }),
        mask: this.mask || '',
      },
    });

    return wrapper;
  }
}

describe('Unit: BaseMaskedInput', () => {
  test('Should mount', () => {
    const wrapper = new BaseMaskedInputBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Should format input with mask "+7 ### ###-##-##" correctly when user types "912"', async () => {
    const wrapper = new BaseMaskedInputBuilder()
      .setMask('+7 ### ###-##-##')
      .build();

    const inputElement = wrapper.find('input');
    await inputElement.setValue('912');
    expect(inputElement.element.value).toBe('+7 912');
    expect(wrapper.props('modelValue')).toBe('+7 912');
    expect(wrapper.props('unmasked')).toBe('912');
  });
});
