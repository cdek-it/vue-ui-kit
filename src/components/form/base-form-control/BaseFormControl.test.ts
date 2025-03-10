import { mount } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import BaseFormControl from './BaseFormControl.vue';
import FormService from '../services/FormService';
import { FormServiceKey } from '../services/FormService';
import builderProp from '@/test/decorators';
import { dti } from '@/test/helpers';
import type { RulesT } from '@/components/form/services/types';

// Import components that BaseFormControl might render dynamically
import BaseInput from '../../base-input/BaseInput.vue';
import BaseAutocomplete from '../../base-autocomplete/BaseAutocomplete.vue';

interface ExtraMethods {
  setName: (val: string) => BaseFormControlBuilder;
  setRules: (val: any) => BaseFormControlBuilder;
  setType: (val: string) => BaseFormControlBuilder;
  setClassName: (val: string) => BaseFormControlBuilder;
  setInitialValue: (val: string) => BaseFormControlBuilder;
  setDefaultSlot: (slot: string) => BaseFormControlBuilder;
  setDeferredValidation: (val: boolean) => BaseFormControlBuilder;
}

interface BaseFormControlBuilder extends ExtraMethods {}

class BaseFormControlBuilder {
  @builderProp name?: string;
  @builderProp rules?: any;
  @builderProp type?: 'text' | 'number' | 'autocomplete' | 'slot';
  @builderProp className?: string;
  @builderProp initialValue?: string;
  @builderProp defaultSlot?: string;
  @builderProp deferredValidation?: boolean;

  build() {
    const formService = new FormService();
    vi.spyOn(formService, 'getFieldService');
    vi.spyOn(formService, 'registerField');

    const wrapper = mount<typeof BaseFormControl>(BaseFormControl as any, {
      props: {
        name: this.name as string,
        rules: this.rules,
        type: this.type,
        className: this.className,
        initialValue: this.initialValue,
        deferredValidation: this.deferredValidation,
      },
      global: {
        provide: {
          [FormServiceKey as symbol]: formService,
        },
      },
      slots: this.defaultSlot ? { default: this.defaultSlot } : {},
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
    const newRules = { required: true } as RulesT;
    const { wrapper, formService } = new BaseFormControlBuilder()
      .setName(name)
      .setInitialValue(initialValue)
      .setRules({})
      .build();

    expect(formService.errors[name]).toBe(true);

    await (wrapper as any).setProps({ rules: newRules });
    await wrapper.setProps({ rules: newRules });
    expect(formService.errors[name]).toBe('required');
  });

  test('changeValue method updates the field value', async () => {
    const { wrapper } = new BaseFormControlBuilder()
      .setName('testChangeValue')
      .build();
    const inputElement = wrapper.findComponent(BaseInput);
    const newValue = 'Updated Value';
    await wrapper.vm.changeValue(newValue);
    expect(inputElement.props('modelValue')).toBe(newValue);
  });

  test('default slot functionality is used when type is slot', async () => {
    const slotContent = '<div class="custom-slot-content">Custom Content</div>';
    const { wrapper } = new BaseFormControlBuilder()
      .setName('testSlot')
      .setType('slot')
      .setDefaultSlot(slotContent)
      .build();

    expect(wrapper.html()).toContain(slotContent);
  });

  test('custom component in default slot receives value prop', async () => {
    const value = 'Initial Value';

    const { wrapper } = new BaseFormControlBuilder()
      .setName('testSlotValue')
      .setType('slot')
      .setInitialValue(value)
      .setDefaultSlot('value = {{ params.value }}')
      .build();

    expect(wrapper.html()).toContain(`value = ${value}`);
  });

  test('custom component in default slot can call changeValue to update value', async () => {
    const updatedValue = 'Updated Value';
    const { wrapper } = new BaseFormControlBuilder()
      .setName('testSlotChangeValue')
      .setType('slot')
      .setInitialValue('Initial Value')
      .setDefaultSlot(
        `value = {{ params.value }} <button data-test-id="change-value" @click="params.changeValue('${updatedValue}')" />`
      )
      .build();

    await wrapper.find(dti('change-value')).trigger('click');
    expect(wrapper.html()).toContain(`value = ${updatedValue}`);
  });

  test('custom component in default slot receives validRes prop', async () => {
    const { wrapper } = new BaseFormControlBuilder()
      .setName('testSlotValidRes')
      .setType('slot')
      .setRules('required')
      .setInitialValue('a')
      .setDefaultSlot(`validRes = {{ params.validRes }}`)
      .build();

    await wrapper.vm.changeValue(''); // нужно чтобы показалось сообщение об ошибке
    expect(wrapper.html()).toContain(`validRes = Обязательное поле`);
  });

  test('component receives deferred validation prop', () => {
    const { wrapper } = new BaseFormControlBuilder()
      .setName('name')
      .setDeferredValidation(true)
      .build();

    expect((wrapper as any).props('deferredValidation')).toBeTruthy();
  });

  test('component with a deferred validation prop skips validation once', async () => {
    const name = 'email';
    const rule = 'email';
    const emailIncorrectValue = 'wrong email type';
    const emailIncorrectValue2 = 'wrong@email';
    const emailCorrectValue = 'test@test.test';

    const { wrapper, formService } = new BaseFormControlBuilder()
      .setName(name)
      .setInitialValue('')
      .setRules(rule)
      .setDeferredValidation(true)
      .build();

    const inputElement = wrapper.findComponent(BaseInput);

    await inputElement.setValue(emailIncorrectValue);
    expect(formService.getIsFormValid()).toBeTruthy();

    await inputElement.find('input').trigger('blur');
    expect(formService.getIsFormValid()).toBeFalsy();

    await inputElement.setValue(emailIncorrectValue2);
    expect(formService.getIsFormValid()).toBeFalsy();

    await inputElement.setValue(emailCorrectValue);
    expect(formService.getIsFormValid()).toBeTruthy();
  });
});
