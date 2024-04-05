import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import builderProp from '@/test/decorators';
import BaseMaskedInput from './BaseMaskedInput.vue';

interface ExtraMethods {
  setModelValue: (val: string) => BaseMaskedInputBuilder;
  setMask: (val: string | string[]) => BaseMaskedInputBuilder;
  setTokens: (val: string | object) => BaseMaskedInputBuilder;
  setType: (val: string) => BaseMaskedInputBuilder;
}

interface BaseMaskedInputBuilder extends ExtraMethods {}

class BaseMaskedInputBuilder {
  @builderProp modelValue?: string;
  @builderProp mask?: string | string[];
  @builderProp tokens?: string | object;
  @builderProp type?: string;

  build() {
    const wrapper = mount(BaseMaskedInput as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
        mask: this.mask || '',
        tokens: this.tokens,
        type: this.type,
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
    expect(wrapper.emitted('update:unmasked')?.[0]).toEqual(['912']);
    expect(wrapper.emitted('update:completed')?.[0]).toEqual([false]);
  });

  test('Should format input with mask "+7 ### ###-##-##" correctly when user types "9121234567"', async () => {
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

  test('Should format input with mask ["###", "##-##"] correctly when user types "123" it should be "123", and if he types "1234", then it should be "12-34"', async () => {
    const wrapper = new BaseMaskedInputBuilder()
      .setMask(['###', '##-##'])
      .build();

    const inputElement = wrapper.find('input');
    await inputElement.setValue('123');
    expect(inputElement.element.value).toBe('123');
    expect(wrapper.props('modelValue')).toBe('123');
    expect(wrapper.emitted('update:unmasked')?.[0]).toEqual(['123']);
    expect(wrapper.emitted('update:completed')?.[0]).toEqual([false]);

    await inputElement.setValue('1234');
    expect(inputElement.element.value).toBe('12-34');
    expect(wrapper.props('modelValue')).toBe('12-34');
    expect(wrapper.emitted('update:unmasked')?.[1]).toEqual(['1234']);
    expect(wrapper.emitted('update:completed')?.[1]).toEqual([true]);
  });

  test('Should format input with mask "0" and tokens "0:[1]" correctly when user types "2" it should be empty, and if he types "1" then it should be "1"', async () => {
    const wrapper = new BaseMaskedInputBuilder()
      .setMask('0')
      .setTokens('0:[1]')
      .build();

    const inputElement = wrapper.find('input');
    await inputElement.setValue('2');
    expect(inputElement.element.value).toBe('');

    await inputElement.setValue('1');
    expect(inputElement.element.value).toBe('1');
    expect(wrapper.props('modelValue')).toBe('1');
    expect(wrapper.emitted('update:unmasked')?.[0]).toEqual(['1']);
    expect(wrapper.emitted('update:completed')?.[0]).toEqual([true]);
  });

  test('Should format input with mask "A" and tokens `{ A: { pattern: /A/, transform: (c) => c.toUpperCase() } }` correctly when user types "a" it should be "A"', async () => {
    const wrapper = new BaseMaskedInputBuilder()
      .setMask('A')
      .setTokens({
        A: { pattern: /A/, transform: (c: string) => c.toUpperCase() },
      })
      .build();

    const inputElement = wrapper.find('input');
    await inputElement.setValue('a');
    expect(inputElement.element.value).toBe('A');
    expect(wrapper.props('modelValue')).toBe('A');
    expect(wrapper.emitted('update:unmasked')?.[0]).toEqual(['A']);
    expect(wrapper.emitted('update:completed')?.[0]).toEqual([true]);
  });

  test('Should have type="text" and inputmode="numeric" attributes if type="number"', async () => {
    const wrapper = new BaseMaskedInputBuilder().setType('number').build();

    const inputElement = wrapper.find('input');
    expect(inputElement.attributes('type')).toBe('text');
    expect(inputElement.attributes('inputmode')).toBe('numeric');
  });
});
