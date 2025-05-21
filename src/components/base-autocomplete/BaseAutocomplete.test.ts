import { shallowMount, flushPromises, mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import BaseAutocomplete from './BaseAutocomplete.vue';
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
import { KeyboardKeys } from '@/components/base-autocomplete/helpers';
import BaseInput from '../base-input/BaseInput.vue';

interface BaseAutocompleteBuilder {
  setModelValue: (value: Value) => BaseAutocompleteBuilder;
  setItems: (items?: ItemsUnion) => BaseAutocompleteBuilder;
  setGetValue: (getValue?: GetValueFn) => BaseAutocompleteBuilder;
  setGetTitle: (getTitle?: GetTitleFn) => BaseAutocompleteBuilder;
  setFetchItems: (fetchItems?: FetchFunction) => BaseAutocompleteBuilder;
  setMinLength: (minLength: number) => BaseAutocompleteBuilder;
  setAttrs: (attrs?: any) => BaseAutocompleteBuilder;
  setEnabledAccentQuery: (v: boolean) => BaseAutocompleteBuilder;
  setShowAllOnFocus: (v: boolean) => BaseAutocompleteBuilder;
}

class BaseAutocompleteBuilder {
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

  @builderProp
  attrs?: any;

  @builderProp
  enabledAccentQuery?: boolean;

  @builderProp
  showAllOnFocus?: boolean;

  shallowBuild() {
    const wrapper = shallowMount(BaseAutocomplete as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: Value) =>
          wrapper.setProps({ modelValue: e }),
        items: this.items,
        getValue: this.getValue,
        getTitle: this.getTitle,
        fetchItems: this.fetchItems,
        minLength: this.minLength,
        enabledAccentQuery: this.enabledAccentQuery,
        showAllOnFocus: this.showAllOnFocus,
      },
      attrs: this.attrs,
      global: {
        renderStubDefaultSlot: true,
        stubs: {
          BaseInput: {
            template: '<div data-test-id="base-input" />',
            methods: {
              getControl() {
                return {
                  addEventListener: vi.fn(),
                };
              },
            },
          },
          BaseDropdownItem: {
            template: '<div data-test-id="base-dropdown-item" />',
          },
        },
      },
    });

    return wrapper;
  }

  build() {
    const wrapper = mount(BaseAutocomplete as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: Value) =>
          wrapper.setProps({ modelValue: e }),
        items: this.items,
        getValue: this.getValue,
        getTitle: this.getTitle,
        fetchItems: this.fetchItems,
        minLength: this.minLength,
        enabledAccentQuery: this.enabledAccentQuery,
        showAllOnFocus: this.showAllOnFocus,
      },
      attrs: this.attrs,
      global: {
        renderStubDefaultSlot: true,
      },
    });

    return wrapper;
  }
}

describe('Unit: BaseAutocomplete', () => {
  test('Should mount', () => {
    const wrapper = new BaseAutocompleteBuilder().shallowBuild();
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
    'Должен передать название выбранной опции при инициализации в BaseInput, items - $itemsDesc',
    ({ items, inputValue, getValue, getTitle }) => {
      const wrapper = new BaseAutocompleteBuilder()
        .setModelValue('test')
        .setItems(items)
        .setGetTitle(getTitle)
        .setGetValue(getValue)
        .shallowBuild();
      const input = wrapper.find(dti('base-input'));
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
      const wrapper = new BaseAutocompleteBuilder()
        .setItems(items)
        .setFetchItems(fetchItems)
        .setGetTitle(getTitle)
        .setGetValue(getValue)
        .shallowBuild();

      // Имитируем пользовательский ввод "tes"
      const input = wrapper.getComponent(dti('base-input')) as VueWrapper;

      await input.trigger('focus');

      input.vm.$emit('update:modelValue', userSearch);
      await sleep(400); // Ждем из-за debounce
      expect(input.attributes('model-value')).toBe(userSearch);

      // Имитируем выбор показанной опции "test"
      const item = wrapper.getComponent(
        dti('base-dropdown-item')
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
      const wrapper = new BaseAutocompleteBuilder()
        .setItems(items)
        .setGetValue(getValue)
        .setGetTitle(getTitle)
        .shallowBuild();

      // Имитируем передачу нового значения сверху
      wrapper.setProps({ modelValue });
      await flushPromises();

      const input = wrapper.getComponent(dti('base-input')) as VueWrapper;
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
      const wrapper = new BaseAutocompleteBuilder()
        // Инициализируем с корректным значением modelValue
        .setModelValue(modelValue)
        .setItems(items)
        .setGetValue(getValue)
        .setGetTitle(getTitle)
        .shallowBuild();

      // Проверяем, что текущее значение инпута не пустое и корректное
      const input = wrapper.getComponent(dti('base-input')) as VueWrapper;
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
      const wrapper = new BaseAutocompleteBuilder()
        .setItems(['abcd', 'abcde'])
        .setMinLength(minLength)
        .shallowBuild();

      // Вводим значение в инпут
      const input = wrapper.getComponent(dti('base-input')) as VueWrapper;

      await input.trigger('focus');

      input.vm.$emit('update:modelValue', 'ab');
      await sleep(300); // Ждем из-за debounce

      // Пытаемся найти опции
      const options = wrapper.findAll(dti('base-dropdown-item'));

      expect(options.length).toBe(optionsLength);
    }
  );

  test('При включенном enabled-accent-query подсвечивать введенную строку в найденных значениях', async () => {
    const items = [
      { title: 'Тест', value: 1 },
      { title: 'Тест2', value: 2 },
      { title: 'Тест3', value: 3 },
    ];
    const userSearch = 'Тес';

    const wrapper = new BaseAutocompleteBuilder()
      .setItems(items)
      .setEnabledAccentQuery(true)
      .build();
    const input = wrapper.getComponent(BaseInput) as unknown as VueWrapper;

    const domInput = input.find('.prefix-input__input');
    await domInput.trigger('focus');
    input.vm.$emit('update:modelValue', userSearch);

    await sleep(400); // Ждем из-за debounce
    await flushPromises();

    const dropdownItems = wrapper.findAll('.prefix-dropdown-item');
    dropdownItems.forEach((item) => {
      const el = item.find('.accent-query');
      expect(el.exists()).toBeTruthy();
      expect(el.text()).toBe(userSearch);
    });
  });

  test('При выключенном enabled-accent-query не подсвечиывать введенную строку в найденных значениях', async () => {
    const items = [
      { title: 'Тест', value: 1 },
      { title: 'Тест2', value: 2 },
      { title: 'Тест3', value: 3 },
    ];
    const userSearch = 'Тес';

    const wrapper = new BaseAutocompleteBuilder().setItems(items).build();
    const input = wrapper.getComponent(BaseInput) as unknown as VueWrapper;

    const domInput = input.find('.prefix-input__input');
    await domInput.trigger('focus');
    input.vm.$emit('update:modelValue', userSearch);

    await sleep(400); // Ждем из-за debounce
    await flushPromises();

    const dropdownItems = wrapper.findAll('.prefix-dropdown-item');
    dropdownItems.forEach((item) => {
      expect(item.find('.accent-query').exists()).toBeFalsy();
    });
  });

  test('Все неизвестные атрибуты должны передаваться на BaseInput', () => {
    const wrapper = new BaseAutocompleteBuilder()
      .setAttrs({ label: 'Название', clearable: true })
      .shallowBuild();
    const input = wrapper.find(dti('base-input'));

    expect(input.attributes('label')).toBe('Название');
    expect(input.attributes('clearable')).toBe('true');
  });

  test('Атрибут class должен быть на корневом элементе CdekAutocomplete, а не на BaseInput', () => {
    const wrapper = new BaseAutocompleteBuilder()
      .setAttrs({ class: 'test' })
      .shallowBuild();
    expect(wrapper.classes()).toContain('test');
    const input = wrapper.find(dti('base-input'));
    expect(input.classes()).not.toContain('test');
  });

  test('Опции не должны выводиться, если нет фокуса на инпуте', async () => {
    const resolvePromise = vi.fn(() => {
      return Promise.resolve(['test', 'test2', 'test3', 'test4']);
    });

    const resolvePromiseWithDelay = vi.fn(async () => {
      await sleep(1000);
      return resolvePromise();
    });

    const userSearch = 'tes';

    const wrapper = new BaseAutocompleteBuilder()
      .setFetchItems(resolvePromiseWithDelay)
      .shallowBuild();

    // Вводим значение в инпут
    const input = wrapper.getComponent(dti('base-input')) as VueWrapper;

    await input.trigger('focus');

    input.vm.$emit('update:modelValue', userSearch);

    await sleep(400); // Ждем из-за debounce
    expect(input.attributes('model-value')).toBe(userSearch);

    await input.trigger('blur');

    await sleep(1300); // Ждем когда фетч зарелозвится

    // Пытаемся найти опции
    const options = wrapper.findAll(dti('base-dropdown-item'));

    expect(options.length).toBe(0);
  });

  test('При нажатии на Enter, если опция не была выбрана - выбираем первую', async () => {
    const items = [
      { title: 'Тест', value: 1 },
      { title: 'Тест2', value: 2 },
      { title: 'Тест3', value: 3 },
    ];
    const userSearch = 'Тес';

    const wrapper = new BaseAutocompleteBuilder().setItems(items).build();

    // Вводим значение в инпут
    const input = wrapper.getComponent(BaseInput) as unknown as VueWrapper;

    const domInput = input.find('.prefix-input__input');

    await domInput.trigger('focus');

    input.vm.$emit('update:modelValue', userSearch);

    await sleep(400); // Ждем из-за debounce

    await flushPromises();

    await domInput.trigger('keydown', { key: KeyboardKeys.Enter });

    expect(wrapper.emitted('select')?.length).toBe(1);

    expect(wrapper.emitted('select')?.[0]).toEqual([
      { title: 'Тест', value: 1 },
    ]);
  });

  test('При навигации стрелочкой вниз должна подсвечиваться опция, также при навигации вверх', async () => {
    const items = [
      { title: 'Тест', value: 1 },
      { title: 'Тест2', value: 2 },
      { title: 'Тест3', value: 3 },
    ];
    const userSearch = 'Тес';

    const wrapper = new BaseAutocompleteBuilder().setItems(items).build();

    // Вводим значение в инпут
    const input = wrapper.getComponent(BaseInput) as unknown as VueWrapper;

    const domInput = input.find('.prefix-input__input');

    await domInput.trigger('focus');

    input.vm.$emit('update:modelValue', userSearch);

    await sleep(400); // Ждем из-за debounce

    await flushPromises();

    const dropDown = wrapper.find('.prefix-dropdown-box');

    expect(dropDown.exists()).toBeTruthy();

    const checkActive = dropDown.find('.prefix-dropdown-item_active');

    expect(checkActive.exists()).toBeFalsy();

    await domInput.trigger('keydown', { key: KeyboardKeys.ArrowDown });

    const active = dropDown.find('.prefix-dropdown-item_active');

    expect(active.exists()).toBeTruthy();

    expect(active.text()).toBe('Тест');

    await domInput.trigger('keydown', { key: KeyboardKeys.ArrowDown });

    const activeSecondCheck = dropDown.find('.prefix-dropdown-item_active');

    expect(activeSecondCheck.text()).toBe('Тест2');

    await domInput.trigger('keydown', { key: KeyboardKeys.ArrowUp });

    const activeThirdCheck = dropDown.find('.prefix-dropdown-item_active');

    expect(activeThirdCheck.text()).toBe('Тест');
  });

  test('Если задан showAllOnFocus, то при фокусе выводим все опции ', async () => {
    const items = [
      { title: 'Тест', value: 1 },
      { title: 'Тест2', value: 2 },
      { title: 'Тест3', value: 3 },
    ];

    const wrapper = new BaseAutocompleteBuilder()
      .setItems(items)
      .setShowAllOnFocus(true)
      .build();

    const input = wrapper.getComponent(BaseInput) as unknown as VueWrapper;

    const domInput = input.find('.prefix-input__input');

    await domInput.trigger('focus');

    await sleep(400); // Ждем из-за debounce

    await flushPromises();

    // Пытаемся найти опции
    const options = wrapper.findAll('.prefix-dropdown-item');

    expect(options.length).toBe(items.length);
  });

  test('Если не задан showAllOnFocus, то при фокусе не выводим все опции ', async () => {
    const items = [
      { title: 'Тест', value: 1 },
      { title: 'Тест2', value: 2 },
      { title: 'Тест3', value: 3 },
    ];

    const wrapper = new BaseAutocompleteBuilder()
      .setItems(items)
      .setShowAllOnFocus(false)
      .build();

    const input = wrapper.getComponent(BaseInput) as unknown as VueWrapper;

    const domInput = input.find('.prefix-input__input');

    await domInput.trigger('focus');

    await sleep(400); // Ждем из-за debounce

    await flushPromises();

    // Пытаемся найти опции
    const options = wrapper.findAll('.prefix-dropdown-item');

    expect(options.length).toBe(0);
  });

  // TODO: Дописать тесты на логику с клавиатурой
  // TODO: Написать тесты на открытие / закрытие дропдауна
});
