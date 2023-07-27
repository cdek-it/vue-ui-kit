import { shallowMount, flushPromises } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import CdekAutocomplete from './CdekAutocomplete.vue';
import builderProp from '@/test/decorators';
import { dti, sleep } from '@/test/helpers';
import type {
  Value,
  ItemsUnion,
  GetValueFn,
  GetTitleFn,
  FetchFunction,
} from './types';

interface CdekAutocompleteBuilder {
  setModelValue: (value: Value) => CdekAutocompleteBuilder;
  setItems: (items: ItemsUnion) => CdekAutocompleteBuilder;
  setGetValue: (getValue?: GetValueFn) => CdekAutocompleteBuilder;
  setGetTitle: (getTitle?: GetTitleFn) => CdekAutocompleteBuilder;
  setFetchItems: (fetchItems?: FetchFunction) => CdekAutocompleteBuilder;
}

class CdekAutocompleteBuilder {
  @builderProp
  modelValue: Value = '';

  @builderProp
  items?: ItemsUnion;

  @builderProp
  getValue?: GetValueFn;

  @builderProp
  getTitle?: GetTitleFn;

  @builderProp
  fetchItems?: FetchFunction;

  build() {
    const wrapper = shallowMount(CdekAutocomplete as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: Value) =>
          wrapper.setProps({ modelValue: e }),
        items: this.items,
        getValue: this.getValue,
        getTitle: this.getTitle,
        fetchItems: this.fetchItems,
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

  // Набор тестов для проверки инициализации с конкретным значением с разными типами items
  test.each([
    { itemsDesc: 'массив строк', items: ['test'], inputValue: 'test' },
    {
      itemsDesc: 'массив объектов с value, title',
      items: [{ value: 'test', title: 'Тест' }],
      inputValue: 'Тест',
    },
    {
      itemsDesc: 'массив кастомных объектов',
      items: [{ a: 'Тест', b: 'test' }],
      inputValue: 'Тест',
      getValue: (item: any) => item.b,
      getTitle: (item: any) => item.a,
    },
  ])(
    'Должен передать название выбранной опции при инициализации в CdekInput, items - $itemsDesc',
    ({ items, inputValue, getValue, getTitle }) => {
      const wrapper = new CdekAutocompleteBuilder()
        .setModelValue('test')
        .setItems(items)
        .setGetTitle(getTitle)
        .setGetValue(getValue)
        .build();
      const input = wrapper.find(dti('cdek-input'));
      expect(input.attributes('modelvalue')).toBe(inputValue);
    }
  );

  // Набор тестов для проверки v-model и select с разными типами items
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
    {
      itemsDesc: 'массив кастомных объектов',
      items: [{ a: 'Тест', b: 'test' }],
      userSearch: 'тес',
      dropdownOption: { title: 'Тест', value: 'test' },
      newUserSearch: 'Тест',
      getValue: (item: any) => item.b,
      getTitle: (item: any) => item.a,
    },
  ])(
    'При выборе опции должен передать новое значение наверх, items - $itemsDesc',
    async ({
      items,
      userSearch,
      dropdownOption,
      newUserSearch,
      getValue,
      getTitle,
    }) => {
      const wrapper = new CdekAutocompleteBuilder()
        .setItems(items)
        .setGetTitle(getTitle)
        .setGetValue(getValue)
        .build();

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

  // Набор тестов для проверки задания значения сверху с разными типами items
  test.each([
    {
      itemsDesc: 'массив строк',
      items: ['a', 'b'],
      modelValue: 'a',
      inputValue: 'a',
    },
    {
      itemsDesc: 'массив объектов с value, title',
      items: [
        { value: 'a', title: 'А' },
        { value: 'b', title: 'Б' },
      ],
      modelValue: 'a',
      inputValue: 'А',
    },
    {
      itemsDesc: 'массив кастомных объектов',
      items: [
        { a: 'a', b: 'А' },
        { a: 'b', b: 'Б' },
      ],
      modelValue: 'a',
      inputValue: 'А',
      getValue: (item: any) => item.a,
      getTitle: (item: any) => item.b,
    },
  ])(
    'При смене modelValue сверху должен выбрать этот элемент, items - $itemsDesc',
    async ({ items, modelValue, inputValue, getValue, getTitle }) => {
      const wrapper = new CdekAutocompleteBuilder()
        .setItems(items)
        .setGetValue(getValue)
        .setGetTitle(getTitle)
        .build();

      // Имитируем передачу нового значения сверху
      wrapper.setProps({ modelValue });
      await flushPromises();

      const input = wrapper.getComponent(dti('cdek-input')) as VueWrapper;
      expect(input.attributes('modelvalue')).toBe(inputValue);
    }
  );

  // Набор тестов для проверки задания некорректного значения сверху с разными типами items
  test.each([
    {
      itemsDesc: 'массив строк',
      modelValue: 'a',
      items: ['a', 'b'],
      inputValue: 'a',
    },
    {
      itemsDesc: 'массив объектов с value, title',
      modelValue: 'a',
      items: [
        { value: 'a', title: 'А' },
        { value: 'b', title: 'Б' },
      ],
      inputValue: 'А',
    },
    {
      itemsDesc: 'массив кастомных объектов',
      modelValue: 'a',
      items: [
        { a: 'a', b: 'А' },
        { a: 'b', b: 'Б' },
      ],
      inputValue: 'А',
      getValue: (item: any) => item.a,
      getTitle: (item: any) => item.b,
    },
  ])(
    'При смене modelValue на некорректное значение, оно должно сменяться на пустое, items - $itemsDesc',
    async ({ items, modelValue, inputValue, getValue, getTitle }) => {
      const wrapper = new CdekAutocompleteBuilder()
        // Инициализируем с корректным значением modelValue
        .setModelValue(modelValue)
        .setItems(items)
        .setGetValue(getValue)
        .setGetTitle(getTitle)
        .build();

      // Проверяем, что текущее значение инпута не пустое и корректное
      const input = wrapper.getComponent(dti('cdek-input')) as VueWrapper;
      expect(input.attributes('modelvalue')).toBe(inputValue);

      // Заменяем на несуществующую опцию
      wrapper.setProps({ modelValue: 'c' });
      await flushPromises();

      // Проверяем, что значение инпута сменилось на пустое и произошел emit для смены значения
      expect(input.attributes('modelvalue')).toBe('');
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1);
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['']);
    }
  );

  // Могут быть разные типы ответа у fetchItems
  test.todo(
    'Если передана fetchItems, то она должна использоваться для поиска элементов'
  );
});
