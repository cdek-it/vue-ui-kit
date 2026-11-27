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

describe('ExtraTextarea clearable', () => {
  test('clears through both model events and hides the button when empty', async () => {
    const wrapper = mount(ExtraTextarea, {
      global,
      props: { clearable: true, modelValue: 'Text' },
    });
    await wrapper.get('button').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toEqual([['']]);
    expect(wrapper.emitted('value-change')).toEqual([['']]);
    await wrapper.setProps({ modelValue: '' });
    expect(wrapper.find('button').exists()).toBe(false);
    expect(wrapper.classes()).toContain('extra-textarea--clearable');
  });

  test.each([{ disabled: true }, { readonly: true }, { clearable: false }])(
    'does not offer clearing for %o',
    (state) => {
      const wrapper = mount(ExtraTextarea, {
        global,
        props: { clearable: true, modelValue: 'Text', ...state },
      });
      expect(wrapper.find('button').exists()).toBe(false);
    }
  );

  test('supports a custom clear icon', () => {
    const wrapper = mount(ExtraTextarea, {
      global,
      props: { clearable: true, modelValue: 'Text' },
      slots: { 'clear-icon': '<span data-clear-icon>×</span>' },
    });
    expect(wrapper.get('button [data-clear-icon]').text()).toBe('×');
  });
});
