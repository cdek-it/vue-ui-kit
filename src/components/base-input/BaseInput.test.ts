import { flushPromises, shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import BaseInput from './BaseInput.vue';
import builderProp from '@/test/decorators';

interface ExtraMethods {
  setModelValue: (val: string) => BaseInputBuilder;
  setLabel: (val: string) => BaseInputBuilder;
  setValidRes: (val: true | string) => BaseInputBuilder;
  setHideErrorMessage: (val: boolean) => BaseInputBuilder;
  setDisabled: (val: boolean) => BaseInputBuilder;
  setReadonly: (val: boolean) => BaseInputBuilder;
  setSmall: (val: boolean) => BaseInputBuilder;
  setClearable: (val: boolean) => BaseInputBuilder;
  setTip: (val: string) => BaseInputBuilder;
  setIconRight: (val: string) => BaseInputBuilder;
  setIconLeft: (val: string) => BaseInputBuilder;
}

interface BaseInputBuilder extends ExtraMethods {}

class BaseInputBuilder {
  @builderProp
  modelValue: string = '';

  @builderProp
  label?: string;

  @builderProp
  validRes?: true | string;

  @builderProp
  hideErrorMessage?: boolean;

  @builderProp
  disabled?: boolean;

  @builderProp
  readonly?: boolean;

  @builderProp
  small?: boolean;

  @builderProp
  clearable?: boolean;

  @builderProp
  tip?: string;

  @builderProp
  iconRight?: string;

  @builderProp
  iconLeft?: string;

  attrs: Record<string, string> = {};

  setPlaceholder(placeholder: string) {
    this.attrs.placeholder = placeholder;
    return this;
  }

  setAttr(key: string, value: string) {
    this.attrs[key] = value;
    return this;
  }

  build() {
    const wrapper = shallowMount(BaseInput as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
        label: this.label,
        validRes: this.validRes,
        hideErrorMessage: this.hideErrorMessage,
        disabled: this.disabled,
        readonly: this.readonly,
        small: this.small,
        clearable: this.clearable,
      },
      slots: {
        'icons-left': this.iconLeft || '',
        'icons-right': this.iconRight || '',
        tip: this.tip || '',
      },
      attrs: this.attrs,
    });

    return wrapper;
  }
}

describe('Unit: BaseInput', () => {
  test('Компонент поддерживает v-model', async () => {
    const wrapper = new BaseInputBuilder().setModelValue('initialText').build();
    await wrapper.find('input').setValue('test');
    expect(wrapper.props('modelValue')).toBe('test');
  });

  describe('label', () => {
    test('Если label = "Серия и номер паспорта", то лейбл должен содержать "Серия и номер паспорта"', () => {
      const wrapper = new BaseInputBuilder()
        .setLabel('Серия и номер паспорта')
        .build();
      const label = wrapper.find('.prefix-input__label');
      expect(label.text()).toBe('Серия и номер паспорта');
    });
    test('Если label не передан, то лейбл должен отсутствовать', () => {
      const wrapper = new BaseInputBuilder().build();
      const label = wrapper.find('.prefix-input__label');
      expect(label.exists()).toBeFalsy();
    });
    test('Если modelValue содержит значение и передан label, то лейбл должен сохранить верхнее положение', async () => {
      const wrapper = new BaseInputBuilder()
        .setLabel('Серия и номер паспорта')
        .build();
      await wrapper.find('input').setValue('test');
      const label = wrapper.find('.prefix-input__label');
      expect(label.classes('prefix-input__label_filled')).toBeTruthy();
    });
    test('Если modelValue не содержит значение и передан label, то лейбл должен быть посередине', async () => {
      const wrapper = new BaseInputBuilder()
        .setLabel('Серия и номер паспорта')
        .setModelValue('initialText')
        .build();
      const label = wrapper.find('.prefix-input__label');
      await wrapper.find('input').setValue('');
      expect(label.classes('prefix-input__label_filled')).toBeFalsy();
    });
    test('Если label не передан, то placeholder всегда виден', () => {
      const wrapper = new BaseInputBuilder().build();
      const input = wrapper.find('.prefix-input__input');
      expect(input.classes('prefix-input__input_no-label')).toBeTruthy();
    });
  });

  describe('validRes', () => {
    test('Если validRes - строка, то должны добавляться стили для состояния ошибки', () => {
      const wrapper = new BaseInputBuilder()
        .setLabel('Лейбл')
        .setValidRes('Ошибка')
        .build();
      const control = wrapper.find('.prefix-input__control');
      expect(control.classes('prefix-input__control_error')).toBeTruthy();
      const label = wrapper.find('.prefix-input__label');
      expect(label.classes('prefix-input__label_error')).toBeTruthy();
      const input = wrapper.find('.prefix-input__input');
      expect(input.classes('prefix-input__input_error')).toBeTruthy();
      const rightIcon = wrapper.find('.prefix-input__right-icon');
      expect(rightIcon.classes('prefix-input__right-icon_red')).toBeTruthy();
    });

    test('Если validRes = "Ошибка", то должен показываться текст "Ошибка"', () => {
      const wrapper = new BaseInputBuilder().setValidRes('Ошибка').build();
      const error = wrapper.find('.error');
      expect(error.text()).toBe('Ошибка');
    });

    test('Если validRes = "Ошибка" и hideErrorMessage = true то текст "Ошибка" не должен показываться', () => {
      const wrapper = new BaseInputBuilder()
        .setValidRes('Ошибка')
        .setHideErrorMessage(true)
        .build();
      const error = wrapper.find('.error');
      expect(error.text()).toBe('Ошибка');
      expect(error.attributes('style')).toBe('display: none;');
    });

    test('Если validRes - html, то блоки вставляются как html', () => {
      const wrapper = new BaseInputBuilder()
        .setLabel('Лейбл')
        .setValidRes('<p> Тестовый html </p>')
        .build();

      const error = wrapper.find('.error');

      expect(error.html()).toMatch('<p> Тестовый html </p>');

      expect(error.text()).toBe('Тестовый html');
    });
  });

  describe('placeholder', () => {
    test('Если placeholder = "Серия и номер паспорта", то этот placeholder должен быть передан на input', () => {
      const wrapper = new BaseInputBuilder()
        .setPlaceholder('Серия и номер паспорта')
        .build();
      const input = wrapper.find('.prefix-input__input');
      expect(input.attributes('placeholder')).toBe('Серия и номер паспорта');
    });
    test('Если передан placeholder, то у корневого элемента не должно быть атрибута placeholder', () => {
      const wrapper = new BaseInputBuilder()
        .setPlaceholder('Серия и номер паспорта')
        .build();
      expect(wrapper.attributes('placeholder')).toBeFalsy();
    });
  });

  test('Если maxlength = "3", то атрибут maxlength должен быть передан на input', () => {
    const wrapper = new BaseInputBuilder().setAttr('maxlength', '3').build();
    const input = wrapper.find('.prefix-input__input');
    expect(input.attributes('maxlength')).toBe('3');
  });

  test('Если в слот #tip передана строка "Пояснение или помощь", то должна показываться подсказка с текстом "Пояснение или помощь"', () => {
    const wrapper = new BaseInputBuilder()
      .setTip('Пояснение или помощь')
      .build();
    const tip = wrapper.find('.prefix-input__tip');
    expect(tip.text()).toBe('Пояснение или помощь');
  });

  test('Если в слот #icons-left что-то передано, то должен показываться контейнер под иконки слева', () => {
    const wrapper = new BaseInputBuilder()
      .setIconLeft('Пояснение или помощь')
      .build();
    const iconLeft = wrapper.find('.prefix-input__left-icon');
    expect(iconLeft.exists()).toBeTruthy();
  });

  test('Если в слот #icons-right что-то передано, то должен показываться контейнер под иконки справа', () => {
    const wrapper = new BaseInputBuilder()
      .setIconRight('Пояснение или помощь')
      .build();
    const iconRight = wrapper.find('.prefix-input__right-icon');
    expect(iconRight.exists()).toBeTruthy();
  });

  describe('disabled', () => {
    test('Если передан disabled, то компонент должен стилизоваться под состояние disabled', () => {
      const wrapper = new BaseInputBuilder().setDisabled(true).build();
      const inputContainer = wrapper.find('.prefix-input__control');
      expect(
        inputContainer.classes('prefix-input__control_disabled')
      ).toBeTruthy();
    });
    test('Если передан disabled, то на input должен добавиться атрибут "disabled"', () => {
      const wrapper = new BaseInputBuilder().setDisabled(true).build();
      const input = wrapper.find('.prefix-input__input');
      expect(input.attributes('disabled')).toBe('');
    });
    test('Если передан disabled, то иконка справа должна стать серой', () => {
      const wrapper = new BaseInputBuilder().setDisabled(true).build();
      const rightIcon = wrapper.find('.prefix-input__right-icon');
      expect(rightIcon.classes('prefix-input__right-icon_grey')).toBeTruthy();
    });
  });

  describe('readonly', () => {
    test('Если передан readonly, то компонент должен стилизоваться под состояние readonly', () => {
      const wrapper = new BaseInputBuilder().setReadonly(true).build();
      const inputContainer = wrapper.find('.prefix-input__control');
      expect(
        inputContainer.classes('prefix-input__control_readonly')
      ).toBeTruthy();
    });
    test('Если передан readonly, то цвет текста в input должен стать черным', () => {
      const wrapper = new BaseInputBuilder().setReadonly(true).build();
      const input = wrapper.find('.prefix-input__input');
      expect(input.classes('prefix-input__input_readonly')).toBeTruthy();
    });
    test('Если передан readonly, то на input должен быть аргумент disabled', () => {
      const wrapper = new BaseInputBuilder().setReadonly(true).build();
      const input = wrapper.find('.prefix-input__input');
      expect(input.attributes('disabled')).toBe('');
    });
    test('Если передан readonly, то иконки справа должны стать серыми', () => {
      const wrapper = new BaseInputBuilder().setReadonly(true).build();
      const rightIcon = wrapper.find('.prefix-input__right-icon');
      expect(rightIcon.classes('prefix-input__right-icon_grey')).toBeTruthy();
    });
  });

  test('Если нет disabled и нет readonly то лейбл отслеживает hover и focus эффект', () => {
    const wrapper = new BaseInputBuilder().setLabel('Лейбл').build();
    const inputContainer = wrapper.find('.prefix-input__control');
    expect(
      inputContainer.classes('prefix-input__control_user-event')
    ).toBeTruthy();
  });

  test('Если small = true, то должны добавляться классы-модификаторы на элементы', () => {
    const wrapper = new BaseInputBuilder()
      .setLabel('Лейбл')
      .setSmall(true)
      .build();
    const control = wrapper.find('.prefix-input__control');
    expect(control.classes('prefix-input__control_small')).toBeTruthy();
    const label = wrapper.find('.prefix-input__label');
    expect(label.classes('prefix-input__label_small')).toBeTruthy();
    const input = wrapper.find('.prefix-input__input');
    expect(input.classes('prefix-input__input_small')).toBeTruthy();
  });

  describe('clearable', () => {
    test('Если clearable = true и есть modelValue, то должна появиться кнопка с крестиком', () => {
      const wrapper = new BaseInputBuilder()
        .setClearable(true)
        .setModelValue('тест')
        .build();
      const button = wrapper.find('.prefix-input__clear');
      expect(button.exists()).toBeTruthy();
    });
    test('При нажатии на кнопку, поле должно очиститься', async () => {
      const wrapper = new BaseInputBuilder()
        .setClearable(true)
        .setModelValue('тест')
        .build();
      const button = wrapper.find('.prefix-input__clear');
      button.trigger('click');
      await flushPromises();
      const input = wrapper.find('input');
      expect(input.element.value).toBe('');
    });
  });
});
