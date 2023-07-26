import { shallowMount, flushPromises } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import CdekAutocomplete from './CdekAutocomplete.vue';
import builderProp from '@/test/decorators';
import { dti, sleep } from '@/test/helpers';
import type { Value, ItemsUnion } from './types';

interface CdekAutocompleteBuilder {
  setModelValue: (value: Value) => CdekAutocompleteBuilder;
  setItems: (items: ItemsUnion) => CdekAutocompleteBuilder;
}

class CdekAutocompleteBuilder {
  @builderProp
  modelValue: Value = '';
  @builderProp
  items: ItemsUnion = [];

  build() {
    const wrapper = shallowMount(CdekAutocomplete as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: Value) =>
          wrapper.setProps({ modelValue: e }),
        items: this.items,
      },
      global: {
        renderStubDefaultSlot: true,
        stubs: {
          CdekInput: {
            template: '<div data-test-id="cdek-input" />',
            methods: {
              getControl() {
                return {
                  addEventListener: vi.fn(),
                };
              },
            },
          },
          CdekDropdownItem: {
            template: '<div data-test-id="cdek-dropdown-item" />',
          },
        },
      },
    });

    return wrapper;
  }
}

describe('Unit: CdekAutocomplete', () => {
  test('Should mount', () => {
    const wrapper = new CdekAutocompleteBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });
  test('Должен передать название выбранной опции при инициализации в CdekInput', () => {
    const wrapper = new CdekAutocompleteBuilder()
      .setModelValue('test')
      .setItems(['test'])
      .build();
    const input = wrapper.find(dti('cdek-input'));
    expect(input.attributes('modelvalue')).toBe('test');
  });

  test.each([
    {
      itemsDesc: 'массив строк',
      items: ['test'],
      userSearch: 'tes',
      dropdownOption: { title: 'test', value: 'test' },
      newUserSearch: 'test',
    },
    {
      itemsDesc: 'массив объектов с value, title',
      items: [{ title: 'Тест', value: 'test' }],
      userSearch: 'тес',
      dropdownOption: { title: 'Тест', value: 'test' },
      newUserSearch: 'Тест',
    },
  ])(
    'При выборе опции должен передать новое значение наверх, items - $itemsDesc',
    async ({ items, userSearch, dropdownOption, newUserSearch }) => {
      const wrapper = new CdekAutocompleteBuilder().setItems(items).build();

      // Имитируем пользовательский ввод "tes"
      const input = wrapper.getComponent(dti('cdek-input')) as VueWrapper;
      input.vm.$emit('update:modelValue', userSearch);
      await sleep(300); // Ждем из-за debounce
      expect(input.attributes('modelvalue')).toBe(userSearch);

      // Имитируем выбор показанной опции "test"
      const item = wrapper.getComponent(
        dti('cdek-dropdown-item')
      ) as VueWrapper;
      item.vm.$emit('select', dropdownOption);
      await flushPromises(); // Ждем пока listeners выполнятся

      // Проверяем, что значение инпута сменилось на новое значение
      expect(input.attributes('modelvalue')).toBe(newUserSearch);

      // Проверяем v-model
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1);
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
        dropdownOption.value,
      ]);

      // Проверяем select
      expect(wrapper.emitted('select')?.length).toBe(1);
      expect(wrapper.emitted('select')?.[0]).toEqual([items[0]]);
    }
  );
});
