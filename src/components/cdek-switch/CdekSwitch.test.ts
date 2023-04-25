import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekSwitch from './CdekSwitch.vue';
import builderProp from '@/test/decorators';

interface ExtraMethods {
  setModelValue: (val: boolean) => CdekSwitchBuilder;
  setDisabled: (val: boolean) => CdekSwitchBuilder;
  setSmall: (val: boolean) => CdekSwitchBuilder;
}

interface CdekSwitchBuilder extends ExtraMethods {}

class CdekSwitchBuilder {
  @builderProp
  modelValue = false;

  @builderProp
  disabled = false;

  @builderProp
  small = false;

  build() {
    const wrapper = mount(CdekSwitch, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
        disabled: this.disabled,
        small: this.small,
      },
    });

    return wrapper;
  }
}

describe('Unit: CdekSwitch', () => {
  test('Should mount', () => {
    const wrapper = new CdekSwitchBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Переключает switch на вкл/выкл состояние, когда кликнешь', async () => {
    const wrapper = new CdekSwitchBuilder().build();
    const swtch = wrapper.find('.cdek-switch__bg');
    const circle = wrapper.find('.cdek-switch__circle');

    await swtch.trigger('click');
    expect(swtch.classes('cdek-switch__bg_enabled')).toBe(true);
    expect(circle.classes('cdek-switch__circle_enabled')).toBe(true);

    await swtch.trigger('click');
    expect(swtch.classes('cdek-switch__bg_enabled')).toBe(false);
    expect(circle.classes('cdek-switch__circle_enabled')).toBe(false);
  });

  test('Задает начальное значение switch на основании v-model', () => {
    const wrapper = new CdekSwitchBuilder().setModelValue(true).build();
    const swtch = wrapper.find('.cdek-switch__bg');
    const circle = wrapper.find('.cdek-switch__circle');

    expect(swtch.classes('cdek-switch__bg_enabled')).toBe(true);
    expect(circle.classes('cdek-switch__circle_enabled')).toBe(true);
  });

  test('Меняет внешний вид для состояния disabled', () => {
    const wrapper = new CdekSwitchBuilder().setDisabled(true).build();

    const swtch = wrapper.find('.cdek-switch__bg');
    expect(swtch.attributes('disabled')).toBe('');

    const circle = wrapper.find('.cdek-switch__circle');
    expect(circle.classes('cdek-switch__circle_disabled')).toBe(true);
  });

  test('Эмиттит update:modelValue когда кликаешь на switch', async () => {
    const wrapper = new CdekSwitchBuilder().setModelValue(true).build();

    await wrapper.find('.cdek-switch__bg').trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
  });

  test('Не эмиттит update:modelValue когда кликаешь на disabled switch', async () => {
    const wrapper = new CdekSwitchBuilder()
      .setModelValue(true)
      .setDisabled(true)
      .build();

    await wrapper.find('.cdek-switch__bg').trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  test('Switch должен быть меньше, если small = true', () => {
    const wrapper = new CdekSwitchBuilder().setSmall(true).build();

    const swtch = wrapper.find('.cdek-switch__bg');
    expect(swtch.classes('cdek-switch__bg_small')).toBe(true);

    const circle = wrapper.find('.cdek-switch__circle');
    expect(circle.classes('cdek-switch__circle_small')).toBe(true);
  });
});
