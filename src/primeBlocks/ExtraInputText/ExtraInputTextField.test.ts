import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import PrimeVue from 'primevue/config';
import ExtraInputTextField from './ExtraInputTextField.vue';
import ExtraInputText from './ExtraInputText.vue';

const global = { plugins: [PrimeVue] };

describe('ExtraInputText visual states', () => {
  test.each(['disabled', 'readonly'] as const)(
    'does not expose clear for %s fields',
    (state) => {
      const wrapper = mount(ExtraInputTextField, {
        global,
        props: { modelValue: 'Value', clearable: true, [state]: true },
      });

      expect(wrapper.find('button').exists()).toBe(false);
      expect(wrapper.find('input').attributes(state)).toBeDefined();
    }
  );

  test('clear is an accessible button and emits an empty value', async () => {
    const wrapper = mount(ExtraInputTextField, {
      global,
      props: { modelValue: 'Value', clearable: true },
    });

    const button = wrapper.get('button');
    expect(button.attributes('aria-label')).toBe('Очистить поле');
    expect(button.attributes('type')).toBe('button');
    await button.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toEqual([['']]);
    expect(wrapper.emitted('value-change')).toEqual([['']]);
  });

  test('empty fields do not reserve a hidden clear icon', () => {
    const wrapper = mount(ExtraInputTextField, {
      global,
      props: { modelValue: '', clearable: true },
    });

    expect(wrapper.find('.extra-inputtext__icon').exists()).toBe(false);
  });

  test('float label replaces the placeholder without blocking default labels', async () => {
    const wrapper = mount(ExtraInputText, {
      global,
      props: {
        label: 'Label',
        labelPosition: 'float',
        placeholder: 'Placeholder',
      },
    });

    expect(wrapper.get('input').attributes('placeholder')).toBeUndefined();
    await wrapper.setProps({ labelPosition: 'default' });
    expect(wrapper.get('input').attributes('placeholder')).toBe('Placeholder');
    const label = wrapper.get('label');
    expect(label.text()).toBe('Label');
    expect(label.attributes('for')).toBe(wrapper.get('input').attributes('id'));
  });
});
