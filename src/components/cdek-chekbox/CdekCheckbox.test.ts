import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekCheckbox from './CdekCheckbox.vue';
import builderProp from '@/test/decorators';

interface ExtraMethods {
  setModelValue: (val: boolean) => CdekCheckboxBuilder;
  setDisabled: (val: boolean) => CdekCheckboxBuilder;
  setSmall: (val: boolean) => CdekCheckboxBuilder;
  setLabel: (val: string) => CdekCheckboxBuilder;
  setTip: (val: string) => CdekCheckboxBuilder;
}

interface CdekCheckboxBuilder extends ExtraMethods {}

class CdekCheckboxBuilder {
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

  build() {
    const wrapper = mount(CdekCheckbox as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
        disabled: this.disabled,
        small: this.small,
        label: this.label,
        tip: this.tip,
      },
      attachToDocument: true,
    });

    return wrapper;
  }
}

describe('Unit: CdekCheckbox', () => {
  test('Should mount', () => {
    const wrapper = new CdekCheckboxBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Задает начальное значение чекбокса на основании v-model', () => {
    const wrapper = new CdekCheckboxBuilder().setModelValue(true).build();
    const input = wrapper.find<HTMLInputElement>('.cdek-checkbox input');

    expect(input.element.checked).toBe(true);
  });

  test('Меняет внешний вид для состояния disabled', () => {
    const wrapper = new CdekCheckboxBuilder().setDisabled(true).build();

    const input = wrapper.find('.cdek-checkbox input');
    expect(input.attributes('disabled')).toBe('');

    const checkbox = wrapper.find('.cdek-checkbox');
    expect(checkbox.classes('cdek-checkbox--disabled')).toBe(true);
  });

  test('Не обновляет значение инпута если дизейблед', async () => {
    const wrapper = new CdekCheckboxBuilder()
      .setModelValue(true)
      .setDisabled(true)
      .build();

    const input = wrapper.find<HTMLInputElement>('.cdek-checkbox input');
    expect(input.element.checked).toBeTruthy();
  });

  test('Чекбокс должен быть меньше, если small = true', () => {
    const wrapper = new CdekCheckboxBuilder()
      .setSmall(true)
      .setLabel('test')
      .build();

    const checkbox = wrapper.find('.cdek-checkbox');
    expect(checkbox.classes('cdek-checkbox--small')).toBe(true);
  });

  test('Показывает label, если он передан', () => {
    const wrapper = new CdekCheckboxBuilder().setLabel('Test').build();
    const label = wrapper.find('.cdek-checkbox__text');
    expect(label.text()).toBe('Test');
  });

  test('Показывает подсказку в label, если передать tip', () => {
    const wrapper = new CdekCheckboxBuilder()
      .setLabel('Test')
      .setTip('test')
      .build();

    const tip = wrapper.find('.cdek-checkbox__tip');
    expect(tip.text()).toBe('test');
  });
});
