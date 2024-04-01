import { mount } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import BaseFormControl from './BaseFormControl.vue';
import FormService from '../services/FormService';
import { FormServiceKey } from '../services/FormService';
import builderProp from '@/test/decorators'; // Ensure correct path

// Import components that BaseFormControl might render dynamically
import BaseInput from '../../base-input/BaseInput.vue';
import BaseAutocomplete from '../../base-autocomplete/BaseAutocomplete.vue';

interface ExtraMethods {
  setName: (val: string) => BaseFormControlBuilder;
  setRules: (val: any) => BaseFormControlBuilder;
  setType: (val: string) => BaseFormControlBuilder;
  setClassName: (val: string) => BaseFormControlBuilder;
  setInitialValue: (val: string) => BaseFormControlBuilder;
}

interface BaseFormControlBuilder extends ExtraMethods {}

class BaseFormControlBuilder {
  @builderProp name?: string;
  @builderProp rules?: any;
  @builderProp type?: string;
  @builderProp className?: string;
  @builderProp initialValue?: string;

  build() {
    const formService = new FormService();
    vi.spyOn(formService, 'getFieldService');
    vi.spyOn(formService, 'registerField');

    const wrapper = mount(BaseFormControl as any, {
      props: {
        name: this.name,
        rules: this.rules,
        type: this.type,
        className: this.className,
        initialValue: this.initialValue,
      },
      global: {
        provide: {
          [FormServiceKey as symbol]: formService,
        },
      },
    });
    return { wrapper, formService };
  }
}

describe('Unit: BaseFormControl', () => {
  test('component renders with default props', () => {
    const { wrapper } = new BaseFormControlBuilder()
      .setName('testInput')
      .build();
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.findComponent(BaseInput).exists()).toBe(true);
  });

  test('component renders with type number', () => {
    const { wrapper } = new BaseFormControlBuilder()
      .setName('testNumber')
      .setType('number')
      .build();
    expect(wrapper.find('input[type="number"]').exists()).toBe(true);
  });

  test('component renders with type autocomplete', () => {
    const { wrapper } = new BaseFormControlBuilder()
      .setName('testAutocomplete')
      .setType('autocomplete')
      .build();
    expect(wrapper.findComponent(BaseAutocomplete).exists()).toBe(true);
  });

  test('component updates value on input', async () => {
    const { wrapper } = new BaseFormControlBuilder()
      .setName('testInput')
      .build();
    const inputElement = wrapper.findComponent(BaseInput);
    await inputElement.setValue('New Value');
    expect(inputElement.props('modelValue')).toBe('New Value');
  });

  test('component applies custom class', () => {
    const { wrapper } = new BaseFormControlBuilder()
      .setName('testInput')
      .setClassName('custom-class')
      .build();
    expect(wrapper.classes()).toContain('custom-class');
  });

  test('calls getFieldService with correct name and rules', () => {
    const name = 'testField';
    const rules = { required: true };
    const { formService } = new BaseFormControlBuilder()
      .setName(name)
      .setRules(rules)
      .build();

    expect(formService.getFieldService).toHaveBeenCalledWith(name, rules);
  });

  test('calls registerField with proper name and initial value after creation', () => {
    const name = 'testField';
    const initialValue = 'initialValue';
    const { formService } = new BaseFormControlBuilder()
      .setName(name)
      .setInitialValue(initialValue)
      .build();

    expect(formService.registerField).toHaveBeenCalledWith(name, initialValue);
  });

  test('updates validation result in FormService errors after changing rules prop', async () => {
    const name = 'testField';
    const initialValue = '';
    const newRules = { required: true };
    const { wrapper, formService } = new BaseFormControlBuilder()
      .setName(name)
      .setInitialValue(initialValue)
      .setRules({})
      .build();

    expect(formService.errors[name]).toBe(true);

    await wrapper.setProps({ rules: newRules });
    expect(formService.errors[name]).toBe('required');
  });
});
