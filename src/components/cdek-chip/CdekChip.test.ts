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

class CdekChipBuilder {
  @builderProp
  modelValue = false;

  @builderProp
  label = '';

  @builderProp
  amount = undefined;

  @builderProp
  disabled = false;

  @builderProp
  small = false;

  @builderProp
  icon = '';

  build() {
    const slots = this.icon ? { icon: this.icon } : {};

    return shallowMount(CdekChip as any, {
      props: {
        modelValue: this.modelValue,
        label: this.label,
        amount: this.amount,
        disabled: this.disabled,
        small: this.small,
      } as any,
      slots: slots as any,
    });
  }
}

describe('Unit: CdekChip', () => {
  test('Should mount', () => {
    const wrapper = new CdekChipBuilder().build();

    expect(wrapper.exists()).toBeTruthy();
  });

  describe('Установка свойств', () => {
    test('Если label = "Chip", то лейбл должен содержать "Chip"', () => {
      const text = 'Chip';

      const wrapper = new CdekChipBuilder().setLabel(text).build();
      const label = wrapper.find('.cdek-chip__text');

      expect(label.text()).toBe(text);
    });

    test('Если amount = 99, то должно выводиться "99"', () => {
      const wrapper = new CdekChipBuilder().setAmount(99).build();
      const label = wrapper.find('.cdek-chip__amount');

      expect(label.text()).toBe('99');
    });

    test('Если small = true, то должен быть класс cdek-chip_small', () => {
      const wrapper = new CdekChipBuilder().setSmall(true).build();
      const chip = wrapper.find('.cdek-chip');

      expect(chip.classes('cdek-chip_small')).toBeTruthy();
    });

    test('Установка картинки', () => {
      const wrapper = new CdekChipBuilder().setIcon('test').build();
      const iconWrapper = wrapper.find('.cdek-chip__icon__wrapper');

      expect(iconWrapper.exists()).toBeTruthy();
    });
  });

  describe('v-model', () => {
    test('Если v-model = true, то кнопка должна быть активной', () => {
      const wrapper = new CdekChipBuilder().setModelValue(true).build();
      const chip = wrapper.find('.cdek-chip');

      expect(chip.classes('cdek-chip_selected')).toBeTruthy();
    });

    test('Если v-model был установлен в true после маунта компонента, то кнопка должна быть активной', async () => {
      const wrapper = new CdekChipBuilder().build();
      const chip = wrapper.find('.cdek-chip');

      expect(chip.classes('cdek-chip_selected')).toBeFalsy();

      await wrapper.setProps({ modelValue: true });

      expect(chip.classes('cdek-chip_selected')).toBeTruthy();
    });
  });

  describe('disabled', () => {
    test('Если disabled = true, то должен быть атрибут disabled', () => {
      const wrapper = new CdekChipBuilder().setDisabled(true).build();

      expect(wrapper.attributes('disabled')).toBeDefined();
    });

    test('Если disabled = true, то должен быть класс .cdek-chip_disabled', () => {
      const wrapper = new CdekChipBuilder().setDisabled(true).build();
      const chip = wrapper.find('.cdek-chip');

      expect(chip.classes('cdek-chip_disabled')).toBeTruthy();
    });

    test('Класс .cdek-chip_selected должен сниматься, когда disabled становится true', async () => {
      const wrapper = new CdekChipBuilder().setModelValue(true).build();
      const chip = wrapper.find('.cdek-chip');

      expect(chip.classes('cdek-chip_selected')).toBeTruthy();

      await wrapper.setProps({ disabled: true });

      expect(chip.classes('cdek-chip_selected')).toBeFalsy();
    });
  });

  describe('click', () => {
    test('Если кликнуть по компоненту, то он должен быть активен', async () => {
      const wrapper = new CdekChipBuilder().build();

      await wrapper.trigger('click');

      expect(wrapper.classes('cdek-chip_selected')).toBeTruthy();
    });

    test('Если кликнуть по компоненту, то должен сгенерироваться эмит update:modelValue', async () => {
      const wrapper = new CdekChipBuilder().build();

      await wrapper.trigger('click');

      expect(wrapper.emitted()['update:modelValue']).toHaveLength(1);
    });

    test('Если кликнуть по компоненту c disabled true, то кнопка не должна отправлять эмит', async () => {
      const wrapper = new CdekChipBuilder().setDisabled(true).build();

      await wrapper.trigger('click');

      expect(wrapper.emitted()['update:modelValue']).toBeUndefined();

      expect(wrapper.classes('cdek-chip_selected')).toBeFalsy();
    });

    test('Если кликнуть по компоненту c v-model true, то он должен перестать быть активным', async () => {
      const wrapper = new CdekChipBuilder().setModelValue(true).build();

      expect(wrapper.classes('cdek-chip_selected')).toBeTruthy();

      await wrapper.trigger('click');

      expect(wrapper.classes('cdek-chip_selected')).toBeFalsy();
    });
  });
});
