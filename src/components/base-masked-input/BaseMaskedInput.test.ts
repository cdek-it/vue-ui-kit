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
  @builderProp mask?: string;

  build() {
    const wrapper = mount(BaseMaskedInput as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
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

  test('Should format input with mask "+7 ### ###-##-##" correctly when user types "912" and provides correct values with v-model', async () => {
    const wrapper = new BaseMaskedInputBuilder()
      .setMask('+7 ### ###-##-##')
      .build();

    const inputElement = wrapper.find('input');
    await inputElement.setValue('912');
    expect(inputElement.element.value).toBe('+7 912');
    expect(wrapper.props('modelValue')).toBe('+7 912');
    expect(wrapper.emitted('update:unmasked')?.[0]).toEqual(['912']);
    expect(wrapper.emitted('update:completed')?.[0]).toEqual([false]);
  });

  test('Should format input with mask "+7 ### ###-##-##" correctly when user types "9121234567" and provides correct values with v-model', async () => {
    const wrapper = new BaseMaskedInputBuilder()
      .setMask('+7 ### ###-##-##')
      .build();

    const inputElement = wrapper.find('input');
    await inputElement.setValue('9121234567');
    expect(inputElement.element.value).toBe('+7 912 123-45-67');
    expect(wrapper.props('modelValue')).toBe('+7 912 123-45-67');
    expect(wrapper.emitted('update:unmasked')?.[0]).toEqual(['9121234567']);
    expect(wrapper.emitted('update:completed')?.[0]).toEqual([true]);
  });
});
