import { dti } from '@/test/helpers';
import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekInput from './CdekInput.vue';

class CdekInputBuilder {
  modelValue: string = '';
  label?: string;
  validRes?: true | string;
  disabled?: boolean;
  readonly?: boolean;
  small?: boolean;
  clearable?: boolean;

  tip?: string;
  iconRight?: string;
  iconLeft?: string;

  attrs: Record<string, string> = {};

  setModelValue(modelValue: string) {
    this.modelValue = modelValue;
    return this;
  }
  setLabel(label: string) {
    this.label = label;
    return this;
  }
  setError(validRes: true | string) {
    this.validRes = validRes;
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
  toggleClearable() {
    this.clearable = !this.clearable;
    return this;
  }

  setPlaceholder(placeholder: string) {
    this.attrs.placeholder = placeholder;
    return this;
  }

  setTip(tip: string) {
    this.tip = tip;
    return this;
  }
  setIconRight(icon: string) {
    this.iconRight = icon;
    return this;
  }
  setIconLeft(icon: string) {
    this.iconLeft = icon;
    return this;
  }

  setAttr(key: string, value: string) {
    this.attrs[key] = value;
    return this;
  }

  banIconStub = {
    template: `<ban-icon data-test-id="ban-icon" />`,
  };

  build() {
    const wrapper = shallowMount(CdekInput, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
        label: this.label,
        validRes: this.validRes,
        disabled: this.disabled,
        readonly: this.readonly,
        small: this.small,
        clearable: this.clearable,
      },
      slots: {
        'icons-left': '',
        'icons-right': '',
        tip: this.tip || '',
      },
      attrs: this.attrs,
      global: {
        stubs: {
          BanIcon: this.banIconStub,
        },
      },
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
    test('Если label не передан, то на инпуте должен быть класс cdek-input__input_no-label', () => {
      const wrapper = new CdekInputBuilder().build();
      const input = wrapper.find('.cdek-input__input');
      expect(input.classes('cdek-input__input_no-label')).toBeTruthy();
    });
  });

  describe('validRes', () => {
    test('Если validRes - строка, то должны добавляться классы-модификаторы на элементы', () => {
      const wrapper = new CdekInputBuilder().setLabel('Лейбл').setError('Ошибка').build();
      const control = wrapper.find('.cdek-input__control');
      expect(control.classes('cdek-input__control_error')).toBeTruthy();
      const label = wrapper.find('.cdek-input__label');
      expect(label.classes('cdek-input__label_error')).toBeTruthy();
      const input = wrapper.find('.cdek-input__input');
      expect(input.classes('cdek-input__input_error')).toBeTruthy();
      const rightIcon = wrapper.find('.cdek-input__right-icon');
      expect(rightIcon.classes('cdek-input__right-icon_red')).toBeTruthy();
    });

    test('Если validRes = "Ошибка", то элемент .error должен содержать "Ошибка"', () => {
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

  test('Если в слот #icons-left передана строка " ", то элемент .cdek-input__left-icon должен существовать', () => {
    const wrapper = new CdekInputBuilder()
      .setIconLeft('Пояснение или помощь')
      .build();
    const iconLeft = wrapper.find('.cdek-input__left-icon');
    expect(iconLeft.exists()).toBeTruthy();
  });

  test('Если в слот #icons-right передана строка " ", то элемент .cdek-input__right-icon должен существовать', () => {
    const wrapper = new CdekInputBuilder()
      .setIconRight('Пояснение или помощь')
      .build();
    const iconRight = wrapper.find('.cdek-input__right-icon');
    expect(iconRight.exists()).toBeTruthy();
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
    test('Если передан disabled, то на иконке справа должен добавиться класс cdek-input__right-icon_grey', () => {
      const wrapper = new CdekInputBuilder().toggleDisabled().build();
      const rightIcon = wrapper.find('.cdek-input__right-icon');
      expect(
        rightIcon.classes('cdek-input__right-icon_grey')
      ).toBeTruthy();
    });
  });

  describe('readonly', () => {
    test('Если передан readonly, то элементу .cdek-input__control должен присвоиться класс "cdek-input__control_readonly"', () => {
      const wrapper = new CdekInputBuilder().toggleReadonly().build();
      const inputContainer = wrapper.find('.cdek-input__control');
      expect(
        inputContainer.classes('cdek-input__control_readonly')
      ).toBeTruthy();
    });
    test('Если передан readonly, то элементу .cdek-input__input должен присвоиться класс "cdek-input__input_readonly"', () => {
      const wrapper = new CdekInputBuilder().toggleReadonly().build();
      const input = wrapper.find('.cdek-input__input');
      expect(
        input.classes('cdek-input__input_readonly')
      ).toBeTruthy();
    });
    test('Если передан readonly, то то input должен быть disabled', () => {
      const wrapper = new CdekInputBuilder().toggleReadonly().build();
      const input = wrapper.find('.cdek-input__input');
      expect(
        input.attributes('disabled')
      ).toBe('');
    });
    test(
      'Если передан readonly, то на иконки справа должен добавиться класс cdek-input__right-icon_grey', () => {
        const wrapper = new CdekInputBuilder().toggleReadonly().build();
        const rightIcon = wrapper.find('.cdek-input__right-icon');
        expect(
          rightIcon.classes('cdek-input__right-icon_grey')
        ).toBeTruthy();
      }
    );
  });

  test(
    'Если нет disabled и нет readonly то на лейбле должен быть класс cdek-input__control_user-event', () => {
      const wrapper = new CdekInputBuilder().setLabel('Лейбл').build();
      const inputContainer = wrapper.find('.cdek-input__control');
      expect(
        inputContainer.classes('cdek-input__control_user-event')
      ).toBeTruthy();
    }
  );

  describe('small', () => {
    test(
      'Если small = true, то должны добавляться классы-модификаторы на элементы', () => {
        const wrapper = new CdekInputBuilder().setLabel('Лейбл').toggleSmall().build();
        const control = wrapper.find('.cdek-input__control');
        expect(control.classes('cdek-input__control_small')).toBeTruthy();
        const label = wrapper.find('.cdek-input__label');
        expect(label.classes('cdek-input__label_small')).toBeTruthy();
        const input = wrapper.find('.cdek-input__input');
        expect(input.classes('cdek-input__input_small')).toBeTruthy();
      }
    );
  });

  describe('clearable', () => {
    test(
      'Если small = true, то должны добавляться классы-модификаторы на элементы', () => {
        const wrapper = new CdekInputBuilder().setLabel('Лейбл').toggleSmall().build();
        const control = wrapper.find('.cdek-input__control');
        expect(control.classes('cdek-input__control_small')).toBeTruthy();
      }
    );
  });
});
