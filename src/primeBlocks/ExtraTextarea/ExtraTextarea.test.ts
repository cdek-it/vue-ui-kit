import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import PrimeVue from 'primevue/config';
import ExtraTextarea from './ExtraTextarea.vue';

const global = { plugins: [PrimeVue] };

describe('ExtraTextarea float label', () => {
  test('label replaces the placeholder only for float mode', async () => {
    const wrapper = mount(ExtraTextarea, {
      global,
      props: {
        label: 'Label',
        labelPosition: 'float',
        placeholder: 'Placeholder',
      },
    });

    expect(wrapper.get('textarea').attributes('placeholder')).toBeUndefined();
    await wrapper.setProps({ labelPosition: 'default' });
    expect(wrapper.get('textarea').attributes('placeholder')).toBe(
      'Placeholder'
    );
  });

  test('keeps the placeholder if a float label is not provided', () => {
    const wrapper = mount(ExtraTextarea, {
      global,
      props: { labelPosition: 'float', placeholder: 'Placeholder' },
    });

    expect(wrapper.get('textarea').attributes('placeholder')).toBe(
      'Placeholder'
    );
  });
});
