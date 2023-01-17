import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CdekWidget from './CdekWidget.vue';

describe('Unit: CdekWidget', () => {
  test('Отображает слот', () => {
    const wrapper = mount(CdekWidget, {
      slots: {
        default: 'Тест',
      },
    });
    expect(wrapper.text()).toBe('Тест');
  });
});
