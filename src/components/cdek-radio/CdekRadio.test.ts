import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekRadio from './CdekRadio.vue';
import builderProp from '@/test/decorators';

interface ExtraMethods {
  setModelValue: (val: string) => CdekRadioBuilder;
  setDisabled: (val: boolean) => CdekRadioBuilder;
  setSmall: (val: boolean) => CdekRadioBuilder;
  setLabel: (val: string) => CdekRadioBuilder;
  setTip: (val: string) => CdekRadioBuilder;
  setValue: (val: string) => CdekRadioBuilder;
}

interface CdekRadioBuilder extends ExtraMethods {}

class CdekRadioBuilder {
  @builderProp
  modelValue = '';

  @builderProp
  disabled = false;

  @builderProp
  small = false;

  @builderProp
  label = '';

  @builderProp
  tip = '';

  @builderProp
  value = '';

  build() {
    const wrapper = mount(CdekRadio as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
        disabled: this.disabled,
        small: this.small,
        label: this.label,
        tip: this.tip,
        value: this.value,
      },
      attachToDocument: true,
    });

    return wrapper;
  }
}

describe('Unit: CdekRadio', () => {
  test('Should mount', () => {
    const wrapper = new CdekRadioBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Задает начальное значение радио кнопки на основании v-model', () => {
    const wrapper = new CdekRadioBuilder()
      .setValue('1')
      .setModelValue('1')
      .build();

    const input = wrapper.find<HTMLInputElement>('.cdek-radio input');

    expect(input.element.checked).toBe(true);
  });

  test('Меняет внешний вид для состояния disabled', () => {
    const wrapper = new CdekRadioBuilder().setDisabled(true).build();

    const input = wrapper.find('.cdek-radio input');
    expect(input.attributes('disabled')).toBe('');

    const checkbox = wrapper.find('.cdek-radio');
    expect(checkbox.classes('cdek-radio--disabled')).toBe(true);
  });

  test('Не обновляет значение инпута если дизейблед', async () => {
    const wrapper = new CdekRadioBuilder()
      .setValue('1')
      .setModelValue('1')
      .setDisabled(true)
      .build();

    const input = wrapper.find<HTMLInputElement>('.cdek-radio input');
    expect(input.element.checked).toBeTruthy();
  });

  test('Радио кнопка должна быть меньше, если small = true', () => {
    const wrapper = new CdekRadioBuilder()
      .setSmall(true)
      .setLabel('test')
      .build();

    const checkbox = wrapper.find('.cdek-radio');
    expect(checkbox.classes('cdek-radio--small')).toBe(true);
  });

  test('Показывает label, если он передан', () => {
    const wrapper = new CdekRadioBuilder().setLabel('Test').build();
    const label = wrapper.find('.cdek-radio__text');
    expect(label.text()).toBe('Test');
  });

  test('Показывает подсказку в label, если передать tip', () => {
    const wrapper = new CdekRadioBuilder()
      .setLabel('Test')
      .setTip('test')
      .build();

    const tip = wrapper.find('.cdek-radio__tip');
    expect(tip.text()).toBe('test');
  });
});
