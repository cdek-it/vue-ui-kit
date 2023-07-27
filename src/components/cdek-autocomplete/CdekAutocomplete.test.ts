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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Item, // Используется как тип в комментарии
} from './types';

interface CdekAutocompleteBuilder {
  setModelValue: (value: Value) => CdekAutocompleteBuilder;
  setItems: (items?: ItemsUnion) => CdekAutocompleteBuilder;
  setGetValue: (getValue?: GetValueFn) => CdekAutocompleteBuilder;
  setGetTitle: (getTitle?: GetTitleFn) => CdekAutocompleteBuilder;
  setFetchItems: (fetchItems?: FetchFunction) => CdekAutocompleteBuilder;
  setMinLength: (minLength: number) => CdekAutocompleteBuilder;
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

  @builderProp
  minLength?: number;

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
        minLength: this.minLength,
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

  /**
   * Набор тестов для проверки инициализации с конкретным значением с разными типами items
   *
   * @param {string} itemsDesc - вставляется в название тесте
   * @param {ItemsUnion} items - используется в setItems
   * @param {string} inputValue - значение, которое должно отобразиться в input
   * @param {GetValueFn} [getValue] - передается в setGetValue
   * @param {GetTitleFn} [getTitle] - передается в setGetTitle
   */
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
      expect(input.attributes('model-value')).toBe(inputValue);
    }
  );

  /**
   * Набор тестов для проверки v-model и select с разными типами items и fetchItems
   *
   * @param {string} itemsDesc - вставляется в название теста
   * @param {ItemsUnion} [items] - используется в setItems
   * @param {string} userSearch - строка для поиска, которую пользователь вводит в input
   * @param {Item} dropdownOption - первая отображаемая опция в dropdown (трансформированная)
   * @param {string} newUserSearch - строка, отображаемая в input после выбора первой опции
   * @param {GetValueFn} [getValue] - передается в setGetValue
   * @param {GetTitleFn} [getTitle] - передается в setGetTitle
   * @param {FetchFunction} [fetchItems] - передается в setFetchItems
   * @param {Item | string | object} [selectResult] - то, что должно быть передано в событии select (если не передано, то берется items[0])
   */
  test.each([
    {
      itemsDesc: 'items - массив строк',
      items: ['test'],
      userSearch: 'tes',
      dropdownOption: { title: 'test', value: 'test' },
      newUserSearch: 'test',
    },
    {
      itemsDesc: 'items - массив объектов с value, title',
      items: [{ title: 'Тест', value: 'test' }],
      userSearch: 'тес',
      dropdownOption: { title: 'Тест', value: 'test' },
      newUserSearch: 'Тест',
    },
    {
      itemsDesc: 'items - массив кастомных объектов',
      items: [{ a: 'Тест', b: 'test' }],
      userSearch: 'тес',
      dropdownOption: { title: 'Тест', value: 'test' },
      newUserSearch: 'Тест',
      getValue: (item: any) => item.b,
      getTitle: (item: any) => item.a,
    },
    {
      itemsDesc: 'fetchItems с массивом строк',
      fetchItems: vi.fn(() => Promise.resolve(['test'])),
      userSearch: 'tes',
      dropdownOption: { title: 'test', value: 'test' },
      newUserSearch: 'test',
      selectResult: 'test',
    },
    {
      itemsDesc: 'fetchItems с массивом объектов с value, title',
      fetchItems: vi.fn(() =>
        Promise.resolve([{ title: 'Тест', value: 'test' }])
      ),
      userSearch: 'тес',
      dropdownOption: { title: 'Тест', value: 'test' },
      newUserSearch: 'Тест',
      selectResult: { title: 'Тест', value: 'test' },
    },
    {
      itemsDesc: 'fetchItems с массивом кастомных объектов',
      fetchItems: vi.fn(() => Promise.resolve([{ a: 'Тест', b: 'test' }])),
      userSearch: 'тес',
      dropdownOption: { title: 'Тест', value: 'test' },
      newUserSearch: 'Тест',
      selectResult: { a: 'Тест', b: 'test' },
      getValue: (item: any) => item.b,
      getTitle: (item: any) => item.a,
    },
  ])(
    'При выборе опции должен передать новое значение наверх, $itemsDesc',
    async ({
      fetchItems,
      items,
      userSearch,
      dropdownOption,
      newUserSearch,
      selectResult,
      getValue,
      getTitle,
    }) => {
      const wrapper = new CdekAutocompleteBuilder()
        .setItems(items)
        .setFetchItems(fetchItems)
        .setGetTitle(getTitle)
        .setGetValue(getValue)
        .build();

      // Имитируем пользовательский ввод "tes"
      const input = wrapper.getComponent(dti('cdek-input')) as VueWrapper;
      input.vm.$emit('update:modelValue', userSearch);
      await sleep(400); // Ждем из-за debounce
      expect(input.attributes('model-value')).toBe(userSearch);

      // Имитируем выбор показанной опции "test"
      const item = wrapper.getComponent(
        dti('cdek-dropdown-item')
      ) as VueWrapper;
      item.vm.$emit('select', dropdownOption);
      await flushPromises(); // Ждем пока listeners выполнятся

      // Проверяем, что значение инпута сменилось на новое значение
      expect(input.attributes('model-value')).toBe(newUserSearch);

      // Проверяем v-model
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1);
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([
        dropdownOption.value,
      ]);

      // Проверяем select
      expect(wrapper.emitted('select')?.length).toBe(1);
      expect(wrapper.emitted('select')?.[0]).toEqual([
        selectResult || items?.[0],
      ]);
    }
  );

  /**
   * Набор тестов для проверки задания значения сверху с разными типами items
   *
   * @param {string} itemsDesc - вставляется в название теста
   * @param {ItemsUnion} [items] - используется в setItems
   * @param {string} modelValue - начальное значение v-model
   * @param {string} inputValue - значение, которое должно отобразиться в input
   * @param {GetValueFn} [getValue] - передается в setGetValue
   * @param {GetTitleFn} [getTitle] - передается в setGetTitle
   */
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
      expect(input.attributes('model-value')).toBe(inputValue);
    }
  );

  /**
   * Набор тестов для проверки задания некорректного значения сверху с разными типами items
   *
   * @param {string} itemsDesc - вставляется в название теста
   * @param {string} modelValue - передается в setModelValue (не должно быть 'c')
   * @param {ItemsUnion} items - передается в setItems
   * @param {string} inputValue - значение, которое должно быть в инпуте при инициализации и после некорректного задания v-model
   * @param {GetValueFn} [getValue] - передается в setGetValue
   * @param {GetTitleFn} [setTitle] - передается в setGetTitle
   */
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
    'При смене modelValue на значение, которого нет в items, input value должно остаться таким же, items - $itemsDesc',
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
      expect(input.attributes('model-value')).toBe(inputValue);

      // Заменяем на несуществующую опцию
      wrapper.setProps({ modelValue: 'c' });
      await flushPromises();

      // Проверяем, что значение инпута не сменилось и эмита не происходит
      expect(input.attributes('model-value')).toBe(inputValue);
      expect(wrapper.emitted('update:modelValue')).toBeUndefined();
    }
  );

  /**
   * Набор тестов для проверки minLength
   *
   * @param {number} minLength - передается в setMinLength
   * @param {number} optionsLength - кол-во опций, которые должно быть в списке
   */
  test.each([
    { minLength: 3, optionsLength: 0 },
    { minLength: 1, optionsLength: 2 },
  ])(
    'Должно показаться $optionsLength опций, когда minLength = $minLength',
    async ({ minLength, optionsLength }) => {
      const wrapper = new CdekAutocompleteBuilder()
        .setItems(['abcd', 'abcde'])
        .setMinLength(minLength)
        .build();

      // Вводим значение в инпут
      const input = wrapper.getComponent(dti('cdek-input')) as VueWrapper;
      input.vm.$emit('update:modelValue', 'ab');
      await sleep(300); // Ждем из-за debounce

      // Пытаемся найти опции
      const options = wrapper.findAll(dti('cdek-dropdown-item'));

      expect(options.length).toBe(optionsLength);
    }
  );

  test.todo('Все неизвестные атрибуты передаются на CdekInput');

  test.todo(
    'Атрибут class передается на корневой элемент CdekAutocomplete, а не на CdekInput'
  );
});
