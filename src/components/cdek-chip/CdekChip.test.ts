import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import builderProp from '@/test/decorators';
import CdekChip from './CdekChip.vue';

interface CdekChipBuilder {
  setLabel: (label: string) => CdekChipBuilder;
  setAmount: (amount: number) => CdekChipBuilder;
  setDisabled: (disabled: boolean) => CdekChipBuilder;
  setSmall: (small: boolean) => CdekChipBuilder;
  setModelValue: (value: boolean) => CdekChipBuilder;
  setIcon: (icon: string) => CdekChipBuilder;
}

// Поправить v-model, он сейчас однонаправленный

class CdekChipBuilder {
  @builderProp
  modelValue = false;

  @builderProp
  label = '';

  @builderProp
  amount = 0;

  @builderProp
  disabled = false;

  @builderProp
  small = false;

  @builderProp
  icon = '';

  build() {
    const slots = this.icon ? { icon: this.icon } : {};

    return shallowMount(CdekChip, {
      props: {
        modelValue: this.modelValue,
        label: this.label,
        amount: this.amount,
        disabled: this.disabled,
        small: this.small,
      },
      slots,
    });
  }
}

describe('Unit: CdekChip', () => {
  test('Should mount', () => {
    const wrapper = new CdekChipBuilder().build();

    expect(wrapper.exists()).toBeTruthy();
  });
});
