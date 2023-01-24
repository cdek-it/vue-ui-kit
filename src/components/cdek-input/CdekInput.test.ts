import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekInput from './CdekInput.vue';

class CdekInputBuilder {
  modelValue: string = '';
  label?: string;
  tip?: string;
  disabled?: boolean;
  readonly?: boolean;
  errorMessage?: string;
  small?: boolean;

  setModelValue(modelValue: string) {
    this.modelValue = modelValue;
    return this;
  }
  setLabel(label: string) {
    this.label = label;
    return this;
  }
  setTip(tip: string) {
    this.tip = tip;
    return this;
  }
  setErrorMessage(errorMessage: string) {
    this.errorMessage = errorMessage;
    return this;
  }
  toggleDisabled() {
    this.disabled = !this.disabled;
    return this;
  }
  toggleReadonly() {
    this.readonly = !this.readonly;
    return this;
  }
  toggleSmall() {
    this.small = !this.small;
    return this;
  }

  build() {
    return shallowMount(CdekInput, {
      props: {
        modelValue: this.modelValue,
        label: this.label,
        tip: this.tip,
        disabled: this.disabled,
        readonly: this.readonly,
        errorMessage: this.errorMessage,
        small: this.small,
      },
    });
  }
}

describe('Unit: CdekInput', () => {
  describe('label', () => {
    test('Если label = "Серия и номер паспорта", то элемент .cdek-input__label должен содержать "Серия и номер паспорта"', () => {
      const wrapper = new CdekInputBuilder()
        .setLabel('Серия и номер паспорта')
        .build();
      const label = wrapper.find('.cdek-input__label');
      expect(label.text()).toBe('Серия и номер паспорта');
    });
    test('Если modelValue содержит значение, то элементу .cdek-input должен присвоиться класс "filled"', () => {
      const wrapper = new CdekInputBuilder()
        .setModelValue('1234 567891')
        .build();
      const inputContainer = wrapper.find('.cdek-input');
      expect(inputContainer.classes('filled')).toBeTruthy();
    });
    test('Если modelValue не содержит значение, то у элемента .cdek-input должен отсутствовать класс "filled"', () => {
      const wrapper = new CdekInputBuilder().build();
      expect(wrapper.classes('filled')).toBeFalsy();
    });
  });
  describe('disabled', () => {
    test('Если передан disabled, то элементу .cdek-input должен присвоиться класс "disabled"', () => {
      const wrapper = new CdekInputBuilder().toggleDisabled().build();
      const inputContainer = wrapper.find('.cdek-input');
      expect(inputContainer.classes('disabled')).toBeTruthy();
    });
    test('Если передан disabled, то элементу .cdek-input__input должен присвоиться атрибут "disabled"', () => {
      const wrapper = new CdekInputBuilder().toggleDisabled().build();
      const input = wrapper.find('.cdek-input__input');
      expect(input.attributes('disabled')).toBe('');
    });
  });
  describe('readonly', () => {
    test('Если передан readonly, то элементу .cdek-input должен присвоиться класс "readonly"', () => {
      const wrapper = new CdekInputBuilder().toggleReadonly().build();
      const inputContainer = wrapper.find('.cdek-input');
      expect(inputContainer.classes('readonly')).toBeTruthy();
    });
  });
  describe('small', () => {
    test('Если передан small, то элементу .cdek-input должен присвоиться класс "small"', () => {
      const wrapper = new CdekInputBuilder().toggleSmall().build();
      const inputContainer = wrapper.find('.cdek-input');
      expect(inputContainer.classes('small')).toBeTruthy();
    });
  });
});
