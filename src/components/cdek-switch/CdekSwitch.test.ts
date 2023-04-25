import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekSwitch from './CdekSwitch.vue';

class CdekSwitchBuilder {
  build() {
    return mount(CdekSwitch, {});
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

  test('sets default switch button state based on prop', () => {});
});
