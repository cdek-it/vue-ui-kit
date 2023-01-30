import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekInput from './CdekInput.vue';

class CdekInputBuilder {
  modelValue: string = '';
  label?: string;
  error?: true | string;
  disabled?: boolean;
  readonly?: boolean;

  placeholder?: string;

  tip?: string;

  attrs: Record<string, string> = {};

  setModelValue(modelValue: string) {
    this.modelValue = modelValue;
    return this;
  }
  setLabel(label: string) {
    this.label = label;
    return this;
  }
  setError(error: true | string) {
    this.error = error;
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

  setPlaceholder(placeholder: string) {
    this.placeholder = placeholder;
    return this;
  }

  setTip(tip: string) {
    this.tip = tip;
    return this;
  }

  setAttr(key: string, value: string) {
    this.attrs[key] = value;
    return this;
  }

  build() {
    const wrapper = shallowMount(CdekInput, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
        label: this.label,
        error: this.error,
        disabled: this.disabled,
        readonly: this.readonly,
        // TODO: передавать placeholder через attrs
        placeholder: this.placeholder,
      },
      slots: {
        'icons-left': '',
        'icons-right': '',
        tip: this.tip || '',
      },
      attrs: this.attrs,
    });

    return wrapper;
  }
}

describe('Unit: CdekInput', () => {
  test('Компонент поддерживает v-model', async () => {
    const wrapper = new CdekInputBuilder().setModelValue('initialText').build();
    await wrapper.find('input').setValue('test');
    expect(wrapper.props('modelValue')).toBe('test');
  });

  describe('label', () => {
    test('Если label = "Серия и номер паспорта", то элемент .cdek-input__label должен содержать "Серия и номер паспорта"', () => {
      const wrapper = new CdekInputBuilder()
        .setLabel('Серия и номер паспорта')
        .build();
      const label = wrapper.find('.cdek-input__label');
      expect(label.text()).toBe('Серия и номер паспорта');
    });
    test('Если label не передан, то элемент .cdek-input__label должен отсутствовать', () => {
      const wrapper = new CdekInputBuilder().build();
      const label = wrapper.find('.cdek-input__label');
      expect(label.exists()).toBeFalsy();
    });
    test('Если modelValue содержит значение и передан label, то элементу .cdek-input__label должен присвоиться класс "cdek-input__label_filled"', async () => {
      const wrapper = new CdekInputBuilder()
        .setLabel('Серия и номер паспорта')
        .build();
      await wrapper.find('input').setValue('test');
      const label = wrapper.find('.cdek-input__label');
      expect(label.classes('cdek-input__label_filled')).toBeTruthy();
    });
    test('Если modelValue не содержит значение и передан label, то у элемента .cdek-input__label должен отсутствовать класс "cdek-input__label_filled"', async () => {
      const wrapper = new CdekInputBuilder()
        .setLabel('Серия и номер паспорта')
        .setModelValue('initialText')
        .build();
      const label = wrapper.find('.cdek-input__label');
      await wrapper.find('input').setValue('');
      expect(label.classes('cdek-input__label_filled')).toBeFalsy();
    });
    test.todo(
      'Если label не передан, то на инпуте должен быть класс cdek-input__input_no-label'
    );
  });

  describe('error', () => {
    test.todo(
      'Если error - строка, то должны добавляться классы-модификаторы на элементы'
    );

    test('Если error = "Ошибка", то элемент .error должен содержать "Ошибка"', () => {
      const wrapper = new CdekInputBuilder().setError('Ошибка').build();
      const error = wrapper.find('.error');
      // TODO: Проверить иконку
      expect(error.text()).toBe('Ошибка');
    });
  });

  describe('placeholder', () => {
    test('Если placeholder = "Серия и номер паспорта", то атрибут placeholder элемента .cdek-input__input должен содержать "Серия и номер паспорта"', () => {
      const wrapper = new CdekInputBuilder()
        .setPlaceholder('Серия и номер паспорта')
        .build();
      const input = wrapper.find('.cdek-input__input');
      expect(input.attributes('placeholder')).toBe('Серия и номер паспорта');
    });
    test('Если передан placeholder, то у элемента .cdek-input должен отсутствовать атрибут placeholder', () => {
      const wrapper = new CdekInputBuilder()
        .setPlaceholder('Серия и номер паспорта')
        .build();
      expect(wrapper.attributes('placeholder')).toBeFalsy();
    });
  });

  test('Если maxlength = "3", то атрибут maxlength элемента .cdek-input__input должен содержать "3"', () => {
    const wrapper = new CdekInputBuilder().setAttr('maxlength', '3').build();
    const input = wrapper.find('.cdek-input__input');
    expect(input.attributes('maxlength')).toBe('3');
  });

  test('Если в слот #tip передана строка "Пояснение или помощь", то элемент .cdek-input__tip должен содержать "Пояснение или помощь"', () => {
    const wrapper = new CdekInputBuilder()
      .setTip('Пояснение или помощь')
      .build();
    const tip = wrapper.find('.cdek-input__tip');
    expect(tip.text()).toBe('Пояснение или помощь');
  });

  describe('disabled', () => {
    test('Если передан disabled, то элементу .cdek-input__control должен присвоиться класс "cdek-input__control_disabled"', () => {
      const wrapper = new CdekInputBuilder().toggleDisabled().build();
      const inputContainer = wrapper.find('.cdek-input__control');
      expect(
        inputContainer.classes('cdek-input__control_disabled')
      ).toBeTruthy();
    });
    test('Если передан disabled, то элементу .cdek-input__input должен присвоиться атрибут "disabled"', () => {
      const wrapper = new CdekInputBuilder().toggleDisabled().build();
      const input = wrapper.find('.cdek-input__input');
      expect(input.attributes('disabled')).toBe('');
    });
    test.todo(
      'Если передан disabled, то на иконки справа должен добавиться класс cdek-input__right-icon_grey'
    );
  });

  describe('readonly', () => {
    test('Если передан readonly, то элементу .cdek-input__control должен присвоиться класс "readonly"', () => {
      const wrapper = new CdekInputBuilder().toggleReadonly().build();
      const inputContainer = wrapper.find('.cdek-input__control');
      expect(
        inputContainer.classes('cdek-input__control_readonly')
      ).toBeTruthy();
    });
    // TODO: проверить все классы
    test.todo('Если передан readonly, то input должен быть disabled');
    test.todo(
      'Если передан readonly, то на иконки справа должен добавиться класс cdek-input__right-icon_grey'
    );
  });

  test.todo(
    'Если нет disabled и нет readonly то на лейбле должен быть класс cdek-input__control_user-event'
  );

  describe('small', () => {
    // TODO
  });
});
