import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekAutocomplete from './CdekAutocomplete.vue';
import type { Primitive } from './CdekAutocomplete.vue';
import type { IItemValue } from '../cdek-dropdown/CdekDropdownItem.vue';
import { sleep } from '@/test/helpers';

class CdekAutocompleteBuilder {
  modelValue: Primitive = '';
  label?: string;
  validRes?: true | string;
  disabled?: boolean;
  readonly?: boolean;
  small?: boolean;
  multiple?: boolean;
  items?: Array<IItemValue> = [
    { value: 1, title: 'Option 1' },
    { value: 2, title: 'Option 2' },
    { value: 3, title: 'Option 3' },
    { value: 4, title: 'Option 4' },
    { value: 5, title: 'Item 5' },
  ];
  fetchItems?: (query: string) => Promise<Array<IItemValue> | Array<string>>;
  minLength?: number = 3;
  debounce?: number = 0;

  notFound?: string;

  attrs: Record<string, string> = {};

  setModelValue(modelValue: Primitive) {
    this.modelValue = modelValue;
    return this;
  }

  setNotFound(message: string) {
    this.notFound = message;
    return this;
  }

  setMinLength(minLength: number) {
    this.minLength = minLength;
    return this;
  }

  setFetchItems(fetchFunction: (query: string) => Promise<Array<IItemValue>>) {
    this.fetchItems = fetchFunction;
    return this;
  }

  setAttr(key: string, value: string) {
    this.attrs[key] = value;
    return this;
  }

  build() {
    const wrapper = mount(CdekAutocomplete, {
      props: {
        modelValue: this.modelValue,
        items: this.items,
        'onUpdate:modelValue': (e: Primitive) =>
          wrapper.setProps({ modelValue: e }),
        label: this.label,
        fetchItems: this.fetchItems,
        debounce: this.debounce,
        minLength: this.minLength,
        validRes: this.validRes,
        disabled: this.disabled,
        readonly: this.readonly,
        small: this.small,
        multiple: this.multiple,
      },
      slots: {
        'not-found': this.notFound || '',
      },
      attrs: this.attrs,
    });

    return wrapper;
  }
}

describe('Unit: CdekAutocomplete', () => {
  test('Should mount', () => {
    const wrapper = new CdekAutocompleteBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });

  describe('Отображение value', () => {
    test('Если modelValue содержит значение, которое есть в items, то выводится value, соответствующего item', async () => {
      const wrapper = new CdekAutocompleteBuilder().setModelValue(1).build();
      const input = wrapper.find('input');
      expect(input.element.value).toBe('Option 1');
    });
  });

  test('Выбранное значение сетится в modelValue', async () => {
    const wrapper = new CdekAutocompleteBuilder().build();
    const control = wrapper.find('input');
    await control.setValue('option');
    await sleep(500);

    const options = wrapper.findAll('.cdek-dropdown-item');
    await options[2].trigger('click');

    expect(wrapper.props('modelValue')).toBe(3);
    const input = wrapper.find('input');
    expect(input.element.value).toBe('Option 3');
  });

  describe('Фильтрация/поиск при вводе', () => {
    test('Фильтрация списка items при вводе в инпут', async () => {
      const wrapper = new CdekAutocompleteBuilder().build();
      const control = wrapper.find('input');
      await control.setValue('item');
      await sleep(500);

      const dropdownBox = wrapper.find('.cdek-dropdown-box');
      expect(dropdownBox.isVisible()).toBeTruthy();

      const items = wrapper.findAll('.cdek-dropdown-item');
      expect(items.length).toBe(1);
    });
    test('Получение списка с помощью функции fetchItems', async () => {
      const fetchFunction = (query: string) =>
        Promise.resolve(
          [
            { value: 6, title: 'Fetched 6' },
            { value: 7, title: 'Fetched 7' },
            { value: 8, title: 'Fetched 8' },
            { value: 9, title: 'Fetched 9' },
            { value: 10, title: 'Other 10' },
          ].filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          )
        );
      const wrapper = new CdekAutocompleteBuilder()
        .setFetchItems(fetchFunction)
        .build();

      const control = wrapper.find('input');
      await control.setValue('item');
      await sleep(500);

      let items = wrapper.findAll('.cdek-dropdown-item');
      expect(items.length).toBe(0);

      await control.setValue('fetch');
      await sleep(500);

      const dropdownBox = wrapper.find('.cdek-dropdown-box');
      expect(dropdownBox.isVisible()).toBeTruthy();

      items = wrapper.findAll('.cdek-dropdown-item');
      expect(items.length).toBe(4);
    });
    test('Сообщение, в случае, если ничего не нашлось', async () => {
      const wrapper = new CdekAutocompleteBuilder()
        .setNotFound('Ничего не нашлось')
        .build();
      const control = wrapper.find('input');
      await control.setValue('no items with this text');
      await sleep(500);

      const notFoundSlot = wrapper.find('.cdek-autocomplete__not-found');
      expect(notFoundSlot.isVisible()).toBeTruthy();
    });
    test('Дропдаун с результатами показывается только когда value в инпуте длиннее minLength', async () => {
      const wrapper = new CdekAutocompleteBuilder().setMinLength(5).build();

      const control = wrapper.find('input');
      await control.setValue('opt');
      await sleep(500);

      let dropdownBox = wrapper.find('.cdek-dropdown-box');
      expect(dropdownBox.exists()).toBeFalsy();

      await control.setValue('option');
      await sleep(500);
      dropdownBox = wrapper.find('.cdek-dropdown-box');
      expect(dropdownBox.isVisible()).toBeTruthy();
    });
  });
});
