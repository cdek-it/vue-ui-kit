import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekSelect from './CdekSelect.vue';
import type {
  IItemValue,
  Primitive,
} from '../cdek-dropdown/CdekDropdown.types';
import { Listbox } from '@headlessui/vue';

class CdekSelectBuilder {
  modelValue: Primitive | Array<Primitive> = '';
  label?: string;
  validRes?: true | string;
  disabled?: boolean;
  readonly?: boolean;
  small?: boolean;
  multiple?: boolean;
  items: Array<IItemValue> = [
    { value: 1, title: 'Option 1', disabled: true },
    { value: 2, title: 'Option 2' },
    { value: 3, title: 'Option 3' },
    { value: 4, title: 'Option 4' },
  ];

  tip?: string;

  attrs: Record<string, string> = {};

  setModelValue(modelValue: Primitive | Array<Primitive>) {
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
  toggleMultiple() {
    this.multiple = !this.multiple;
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
    const wrapper = mount(CdekSelect, {
      props: {
        modelValue: this.modelValue,
        items: this.items,
        'onUpdate:modelValue': (e: Primitive | Array<Primitive>) =>
          wrapper.setProps({ modelValue: e }),
        label: this.label,
        validRes: this.validRes,
        disabled: this.disabled,
        readonly: this.readonly,
        small: this.small,
        multiple: this.multiple,
      },
      slots: {
        tip: this.tip || '',
      },
      attrs: this.attrs,
    });

    return wrapper;
  }
}

describe('Unit: CdekSelect', () => {
  describe('Отображение value', () => {
    test('Если modelValue содержит значение, которое есть в items, то выводится value, соответствующего item', async () => {
      const wrapper = new CdekSelectBuilder().setModelValue(1).build();
      const value = wrapper.find('.cdek-select__value');
      expect(value.text()).toBe('Option 1');
    });
    test('Если multiple = true и modelValue содержит значения, которые есть в items, то выводятся все выбранные варианты', async () => {
      const wrapper = new CdekSelectBuilder()
        .toggleMultiple()
        .setModelValue([1, 2])
        .build();
      const value = wrapper.find('.cdek-select__value');
      expect(value.text()).toBe('Option 1, Option 2');
    });
  });

  describe('Выбор варианта из списка', () => {
    test('Выбранное значение сетится в modelValue', async () => {
      const wrapper = new CdekSelectBuilder().build();
      const control = wrapper.find('.cdek-select__control');
      await control.trigger('click');
      const option = wrapper.find(`.cdek-dropdown-item:nth-of-type(2)`);
      await option.trigger('click');
      const value = wrapper.find('.cdek-select__value');
      expect(value.text()).toBe('Option 2');
    });
    test('Значение с полем disabled = true не сетится в modelValue', async () => {
      const Select = new CdekSelectBuilder();
      const wrapper = Select.build();
      const control = wrapper.find('.cdek-select__control');
      await control.trigger('click');
      const option = wrapper.find(`.cdek-dropdown-item:nth-of-type(1)`);
      await option.trigger('click');
      const value = wrapper.find('.cdek-select__value');
      expect(value.text()).toBe('');
    });
    test('Если multiple = true в modelValue сетится несколько выбранных значений', async () => {
      const Select = new CdekSelectBuilder();
      const wrapper = Select.toggleMultiple().setModelValue([]).build();
      const control = wrapper.find('.cdek-select__control');
      await control.trigger('click');
      let option = wrapper.find(`.cdek-dropdown-item:nth-of-type(2)`);
      await option.trigger('click');
      option = wrapper.find(`.cdek-dropdown-item:nth-of-type(3)`);
      await option.trigger('click');
      const value = wrapper.find('.cdek-select__value');
      expect(value.text()).toBe('Option 2, Option 3');
    });
  });

  describe('label', () => {
    test('Если label = "Вариант действия", то лейбл должен содержать "Вариант действия"', () => {
      const wrapper = new CdekSelectBuilder()
        .setLabel('Вариант действия')
        .build();
      const label = wrapper.find('.cdek-select__label');
      expect(label.text()).toBe('Вариант действия');
    });
    test('Если label не передан, то лейбл должен отсутствовать', () => {
      const wrapper = new CdekSelectBuilder().build();
      const label = wrapper.find('.cdek-select__label');
      expect(label.exists()).toBeFalsy();
    });
    test('Если modelValue содержит значение и передан label, то лейбл должен сохранить верхнее положение', async () => {
      const wrapper = new CdekSelectBuilder()
        .setLabel('Вариант действия')
        .setModelValue(1)
        .build();
      const label = wrapper.find('.cdek-select__label');
      expect(label.classes('cdek-select__label_filled')).toBeTruthy();
    });
    test('Если modelValue не содержит значение и передан label, то лейбл должен быть посередине', async () => {
      const wrapper = new CdekSelectBuilder()
        .setLabel('Вариант действия')
        .build();
      const label = wrapper.find('.cdek-select__label');
      expect(label.classes('cdek-select__label_filled')).toBeFalsy();
    });
  });

  describe('validRes', () => {
    test('Если validRes - строка, то должны добавляться стили для состояния ошибки', () => {
      const wrapper = new CdekSelectBuilder()
        .setLabel('Вариант действия')
        .setError('Ошибка')
        .build();
      const control = wrapper.find('.cdek-select__control');
      expect(control.classes('cdek-select__control_error')).toBeTruthy();
      const label = wrapper.find('.cdek-select__label');
      expect(label.classes('cdek-select__label_error')).toBeTruthy();
    });

    test('Если validRes = "Ошибка", то должен показываться текст "Ошибка"', () => {
      const wrapper = new CdekSelectBuilder().setError('Ошибка').build();
      const error = wrapper.find('.error');
      expect(error.text()).toBe('Ошибка');
    });
  });

  test('Если в слот #tip передана строка "Пояснение или помощь", то должна показываться подсказка с текстом "Пояснение или помощь"', () => {
    const wrapper = new CdekSelectBuilder()
      .setTip('Пояснение или помощь')
      .build();
    const tip = wrapper.find('.cdek-select__tip');
    expect(tip.text()).toBe('Пояснение или помощь');
  });

  describe('disabled', () => {
    test('Если передан disabled, то компонент должен стилизоваться под состояние disabled', () => {
      const wrapper = new CdekSelectBuilder().toggleDisabled().build();
      const control = wrapper.find('.cdek-select__control');
      expect(control.classes('cdek-select__control_disabled')).toBeTruthy();
    });
    test('Если передан disabled, то в Listbox должен прокидываться пропс "disabled"', () => {
      const wrapper = new CdekSelectBuilder().toggleDisabled().build();
      const listbox = wrapper.findComponent(Listbox);
      expect(listbox.props('disabled')).toBe(true);
    });
  });

  describe('readonly', () => {
    test('Если передан readonly, то компонент должен стилизоваться под состояние readonly', () => {
      const wrapper = new CdekSelectBuilder().toggleReadonly().build();
      const control = wrapper.find('.cdek-select__control');
      expect(control.classes('cdek-select__control_readonly')).toBeTruthy();
    });
    test('Если передан readonly, то цвет текста селекта должен стать черным', () => {
      const wrapper = new CdekSelectBuilder().toggleReadonly().build();
      const value = wrapper.find('.cdek-select__value');
      expect(value.classes('cdek-select__value_readonly')).toBeTruthy();
    });
    test('Если передан readonly, то в Listbox должен прокидываться пропс "disabled"', () => {
      const wrapper = new CdekSelectBuilder().toggleReadonly().build();
      const listbox = wrapper.findComponent(Listbox);
      expect(listbox.props('disabled')).toBe(true);
    });
  });

  test('Если нет disabled и нет readonly то при клике откроется список опций', async () => {
    const Select = new CdekSelectBuilder();
    const wrapper = Select.setLabel('Вариант действия').build();
    const control = wrapper.find('.cdek-select__control');
    await control.trigger('click');
    expect(control.classes('cdek-select__control_open')).toBeTruthy();
  });

  test('Если small = true, то должны добавляться классы-модификаторы на элементы', () => {
    const wrapper = new CdekSelectBuilder()
      .setLabel('Вариант действия')
      .toggleSmall()
      .build();
    const control = wrapper.find('.cdek-select__control');
    expect(control.classes('cdek-select__control_small')).toBeTruthy();
    const label = wrapper.find('.cdek-select__label');
    expect(label.classes('cdek-select__label_small')).toBeTruthy();
    const input = wrapper.find('.cdek-select__value');
    expect(input.classes('cdek-select__value_small')).toBeTruthy();
  });
});
