import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekSwitch from './CdekSwitch.vue';

class CdekSwitchBuilder {
  modelValue = false;

  setModelValue(val: boolean) {
    this.modelValue = val;
    return this;
  }

  build() {
    const wrapper = mount(CdekSwitch, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
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
});
