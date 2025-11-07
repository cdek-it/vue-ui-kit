import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import BaseSwitch from './BaseSwitch.vue';
import builderProp from '@/test/decorators';

interface ExtraMethods {
  setModelValue: (val: boolean) => BaseSwitchBuilder;
  setDisabled: (val: boolean) => BaseSwitchBuilder;
  setSmall: (val: boolean) => BaseSwitchBuilder;
  setLabel: (val: string) => BaseSwitchBuilder;
  setTip: (val: string) => BaseSwitchBuilder;
  setDefault: (val: string) => BaseSwitchBuilder;
}

interface BaseSwitchBuilder extends ExtraMethods {}

class BaseSwitchBuilder {
  @builderProp
  modelValue = false;

  @builderProp
  disabled = false;

  @builderProp
  small = false;

  @builderProp
  label = '';

  @builderProp
  tip = '';

  @builderProp
  default = '';

  build() {
    const wrapper = mount(BaseSwitch as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
        disabled: this.disabled,
        small: this.small,
        label: this.label,
        tip: this.tip,
      },
      slots: {
        default: this.default,
      },
    });

    return wrapper;
  }
}

describe('Unit: BaseSwitch', () => {
  test('Should mount', () => {
    const wrapper = new BaseSwitchBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Переключает switch на вкл/выкл состояние, когда кликнешь', async () => {
    const wrapper = new BaseSwitchBuilder().build();
    const swtch = wrapper.find('.prefix-switch__bg');
    const circle = wrapper.find('.prefix-switch__circle');

    await swtch.trigger('click');
    expect(swtch.classes('prefix-switch__bg_enabled')).toBe(true);
    expect(circle.classes('prefix-switch__circle_enabled')).toBe(true);

    await swtch.trigger('click');
    expect(swtch.classes('prefix-switch__bg_enabled')).toBe(false);
    expect(circle.classes('prefix-switch__circle_enabled')).toBe(false);
  });

  test('Задает начальное значение switch на основании v-model', () => {
    const wrapper = new BaseSwitchBuilder().setModelValue(true).build();
    const swtch = wrapper.find('.prefix-switch__bg');
    const circle = wrapper.find('.prefix-switch__circle');

    expect(swtch.classes('prefix-switch__bg_enabled')).toBe(true);
    expect(circle.classes('prefix-switch__circle_enabled')).toBe(true);
  });

  test('Меняет внешний вид для состояния disabled', () => {
    const wrapper = new BaseSwitchBuilder().setDisabled(true).build();

    const swtch = wrapper.find('.prefix-switch__bg');
    expect(swtch.attributes('disabled')).toBe('');

    const circle = wrapper.find('.prefix-switch__circle');
    expect(circle.classes('prefix-switch__circle_disabled')).toBe(true);
  });

  test('Эмиттит update:modelValue когда кликаешь на switch', async () => {
    const wrapper = new BaseSwitchBuilder().setModelValue(true).build();

    await wrapper.find('.prefix-switch__bg').trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
  });

  test('Не эмиттит update:modelValue когда кликаешь на disabled switch', async () => {
    const wrapper = new BaseSwitchBuilder()
      .setModelValue(true)
      .setDisabled(true)
      .build();

    await wrapper.find('.prefix-switch__bg').trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  test('Switch должен быть меньше, если small = true', () => {
    const wrapper = new BaseSwitchBuilder()
      .setSmall(true)
      .setLabel('test')
      .build();

    const swtch = wrapper.find('.prefix-switch__bg');
    expect(swtch.classes('prefix-switch__bg_small')).toBe(true);

    const circle = wrapper.find('.prefix-switch__circle');
    expect(circle.classes('prefix-switch__circle_small')).toBe(true);

    const label = wrapper.find('.prefix-switch__label');
    expect(label.classes('prefix-switch__label_small')).toBe(true);
  });

  test('Показывает label, если он передан', () => {
    const wrapper = new BaseSwitchBuilder().setLabel('Test').build();
    const label = wrapper.find('.prefix-switch__label');
    expect(label.text()).toBe('Test');
  });

  test('Показывает label, если он передан в слот', () => {
    const slotValue = '<a>test offer</a>';

    const wrapper = new BaseSwitchBuilder().setDefault(slotValue).build();

    expect(wrapper.html()).toContain(slotValue);
  });

  test('Переключает switch, если нажать по лейблу', async () => {
    const wrapper = new BaseSwitchBuilder().setLabel('Test').build();
    const label = wrapper.find('.prefix-switch__label');
    const swtch = wrapper.find('.prefix-switch__bg');
    const circle = wrapper.find('.prefix-switch__circle');

    await label.trigger('click');

    expect(swtch.classes('prefix-switch__bg_enabled')).toBe(true);
    expect(circle.classes('prefix-switch__circle_enabled')).toBe(true);

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
  });

  test('Показывает подсказку в label, если передать tip', () => {
    const wrapper = new BaseSwitchBuilder()
      .setLabel('Test')
      .setTip('test')
      .build();

    const tip = wrapper.find('.prefix-switch__tip');
    expect(tip.text()).toBe('test');
  });
});
