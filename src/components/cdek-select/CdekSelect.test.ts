import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekSelect from './CdekSelect.vue';
import type { IItemValue, Primitive } from '@/components/cdek-dropdown';
import { Listbox } from '@headlessui/vue';
import builderProp from '@/test/decorators';
import type {
  GetTitleFn,
  GetValueFn,
} from '@/components/cdek-select/CdekSelect.vue';

interface ExtraMethods {
  setModelValue: (value: Primitive | Array<Primitive>) => CdekSelectBuilder;
  setLabel: (value: string) => CdekSelectBuilder;
  setValidRes: (value: true | string) => CdekSelectBuilder;
  setHideErrorMessage: (value: boolean) => CdekSelectBuilder;
  setDisabled: (value: boolean) => CdekSelectBuilder;
  setReadonly: (value: boolean) => CdekSelectBuilder;
  setSmall: (value: boolean) => CdekSelectBuilder;
  setMultiple: (value: boolean) => CdekSelectBuilder;
  setTip: (value: string) => CdekSelectBuilder;
  setOption: (value: string) => CdekSelectBuilder;
  setSelectedOption: (value: string) => CdekSelectBuilder;
  setItems: (
    items: Array<IItemValue> | Array<Primitive> | Array<any>
  ) => CdekSelectBuilder;
  setGetValue: (getValue?: GetValueFn) => CdekSelectBuilder;
  setGetTitle: (getTitle?: GetTitleFn) => CdekSelectBuilder;
}

const defaultItems: Array<IItemValue> = [
  { value: 1, title: 'Option 1', disabled: true },
  { value: 2, title: 'Option 2' },
  { value: 3, title: 'Option 3' },
  { value: 4, title: 'Option 4' },
];

interface CdekSelectBuilder extends ExtraMethods {}

class CdekSelectBuilder {
  @builderProp
  modelValue: Primitive | Array<Primitive> = '';

  @builderProp
  items: Array<IItemValue> | Array<Primitive> | Array<any> = defaultItems;

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
  multiple?: boolean;

  @builderProp
  getValue?: GetValueFn;

  @builderProp
  getTitle?: GetTitleFn;

  @builderProp
  option?: string;

  @builderProp
  selectedOption?: string;

  @builderProp
  tip?: string;

  attrs: Record<string, string> = {};

  setAttr(key: string, value: string) {
    this.attrs[key] = value;
    return this;
  }

  build() {
    const wrapper = mount(CdekSelect as any, {
      props: {
        modelValue: this.modelValue,
        items: this.items,
        'onUpdate:modelValue': (e: Primitive | Array<Primitive>) =>
          wrapper.setProps({ modelValue: e }),
        label: this.label,
        validRes: this.validRes,
        hideErrorMessage: this.hideErrorMessage,
        disabled: this.disabled,
        readonly: this.readonly,
        small: this.small,
        multiple: this.multiple,
        getValue: this.getValue,
        getTitle: this.getTitle,
      },
      slots: {
        tip: this.tip || '',
        option: this.option || '',
        selectedOption: this.selectedOption || '',
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
        .setMultiple(true)
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
      const option = wrapper.find(`.prefix-dropdown-item:nth-of-type(2)`);
      await option.trigger('click');
      const value = wrapper.find('.cdek-select__value');
      expect(value.text()).toBe('Option 2');
    });
    test('Значение с полем disabled = true не сетится в modelValue', async () => {
      const Select = new CdekSelectBuilder();
      const wrapper = Select.build();
      const control = wrapper.find('.cdek-select__control');
      await control.trigger('click');
      const option = wrapper.find(`.prefix-dropdown-item:nth-of-type(1)`);
      await option.trigger('click');
      const value = wrapper.find('.cdek-select__value');
      expect(value.text()).toBe('');
    });
    test('Если multiple = true в modelValue сетится несколько выбранных значений', async () => {
      const Select = new CdekSelectBuilder();
      const wrapper = Select.setMultiple(true).setModelValue([]).build();
      const control = wrapper.find('.cdek-select__control');
      await control.trigger('click');
      let option = wrapper.find(`.prefix-dropdown-item:nth-of-type(2)`);
      await option.trigger('click');
      option = wrapper.find(`.prefix-dropdown-item:nth-of-type(3)`);
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
    test('Если modelValue содержит значение и передан label, то лейбл должен сохранить верхнее положение', () => {
      const wrapper = new CdekSelectBuilder()
        .setLabel('Вариант действия')
        .setModelValue(1)
        .build();
      const label = wrapper.find('.cdek-select__label');
      expect(label.classes('cdek-select__label_filled')).toBeTruthy();
    });
    test('Если modelValue не содержит значение и передан label, то лейбл должен быть посередине', () => {
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
        .setValidRes('Ошибка')
        .build();
      const control = wrapper.find('.cdek-select__control');
      expect(control.classes('cdek-select__control_error')).toBeTruthy();
      const label = wrapper.find('.cdek-select__label');
      expect(label.classes('cdek-select__label_error')).toBeTruthy();
    });

    test('Если validRes = "Ошибка", то должен показываться текст "Ошибка"', () => {
      const wrapper = new CdekSelectBuilder().setValidRes('Ошибка').build();
      const error = wrapper.find('.error');
      expect(error.text()).toBe('Ошибка');
    });

    test('Если validRes = "Ошибка" и hideErrorMessage = true, то текст "Ошибка" не должен показываться', () => {
      const wrapper = new CdekSelectBuilder()
        .setValidRes('Ошибка')
        .setHideErrorMessage(true)
        .build();
      const error = wrapper.find('.error');
      expect(error.text()).toBe('Ошибка');
      expect(error.attributes('style')).toBe('display: none;');
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
      const wrapper = new CdekSelectBuilder().setDisabled(true).build();
      const control = wrapper.find('.cdek-select__control');
      expect(control.classes('cdek-select__control_disabled')).toBeTruthy();
    });
    test('Если передан disabled, то в Listbox должен прокидываться пропс "disabled"', () => {
      const wrapper = new CdekSelectBuilder().setDisabled(true).build();
      const listbox = wrapper.findComponent(Listbox);
      expect(listbox.props('disabled')).toBe(true);
    });
  });

  describe('readonly', () => {
    test('Если передан readonly, то компонент должен стилизоваться под состояние readonly', () => {
      const wrapper = new CdekSelectBuilder().setReadonly(true).build();
      const control = wrapper.find('.cdek-select__control');
      expect(control.classes('cdek-select__control_readonly')).toBeTruthy();
    });
    test('Если передан readonly, то цвет текста селекта должен стать черным', () => {
      const wrapper = new CdekSelectBuilder().setReadonly(true).build();
      const value = wrapper.find('.cdek-select__value');
      expect(value.classes('cdek-select__value_readonly')).toBeTruthy();
    });
    test('Если передан readonly, то в Listbox должен прокидываться пропс "disabled"', () => {
      const wrapper = new CdekSelectBuilder().setReadonly(true).build();
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
      .setSmall(true)
      .build();
    const control = wrapper.find('.cdek-select__control');
    expect(control.classes('cdek-select__control_small')).toBeTruthy();
    const label = wrapper.find('.cdek-select__label');
    expect(label.classes('cdek-select__label_small')).toBeTruthy();
    const input = wrapper.find('.cdek-select__value');
    expect(input.classes('cdek-select__value_small')).toBeTruthy();
  });

  describe('scopedSlots', () => {
    test('Если слот option передан, то вид опции изменяется ', async () => {
      const wrapper = new CdekSelectBuilder()
        .setOption('<div class="some-class">{{ params.option.value}}</div>')
        .build();

      const control = wrapper.find('.cdek-select__control');
      await control.trigger('click');

      const options = wrapper.findAll('.prefix-dropdown-box > div');

      expect(options.length).toBe(4);

      expect(options[0].text()).toBe('1');
    });

    test('Если слот selectedOption передан, то на название применяется пераданный шаблон', async () => {
      const wrapper = new CdekSelectBuilder()
        .setLabel('Вариант действия')
        .setModelValue(1)
        .setSelectedOption(
          '<div v-if="params?.value?.title">Вы выбрали: {{ params.value.title }}</div>'
        )
        .build();

      const control = wrapper.find('.cdek-select__control');

      expect(control.html()).toMatch('Вы выбрали: Option 1');
    });
  });

  test('Если GetTitle установлен, то переданный массив опций преобразуется в соотв. с функцией', async () => {
    const customItems = [
      {
        value: 1,
        titleData: {
          title: 'Option 1',
        },
      },
      {
        value: 2,
        titleData: {
          title: 'Option 2',
        },
      },
    ];

    const getTitle = (item: any) => item.titleData.title;

    const wrapper = new CdekSelectBuilder()
      .setItems(customItems)
      .setGetTitle(getTitle)
      .build();

    const control = wrapper.find('.cdek-select__control');
    await control.trigger('click');
    const options = wrapper.findAll(`.prefix-dropdown-item`);

    expect(options[0].text()).toBe('Option 1');
    expect(options[1].text()).toBe('Option 2');
  });

  test('Если GetValue установлен, то при выборе опции - v-model должен получить значение в соотв с функцией', async () => {
    const customItems = [
      {
        valueData: {
          value: 1,
        },
        title: 'Option 1',
      },
      {
        valueData: {
          value: 2,
        },
        title: 'Option 2',
      },
    ];

    const getValue = (item: any) => {
      return item.valueData.value;
    };

    const wrapper = new CdekSelectBuilder()
      .setItems(customItems)
      .setGetValue(getValue)
      .build();

    const control = wrapper.find('.cdek-select__control');
    await control.trigger('click');
    const options = wrapper.findAll(`.prefix-dropdown-item`);

    await options[1].trigger('click');

    expect(wrapper.props('modelValue')).toBe(2);
  });
});
