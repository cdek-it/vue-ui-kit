import type { Component } from 'vue';
import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import BaseDropdownItem from './BaseDropdownItem.vue';
import type { IItemValue } from './BaseDropdown.types';
import FileDescriptionIcon from './svg/file-description.svg?component';

class BaseDropdownItemBuilder {
  selected?: boolean;
  value: IItemValue = {
    value: 'value',
    title: 'Пункт списка',
  };
  defaultSlot: string = 'Пункт списка';

  toggleDisabled() {
    this.value.disabled = !this.value.disabled;
    return this;
  }

  toggleSelected() {
    this.selected = !this.selected;
    return this;
  }

  setColor(color: string) {
    this.value.color = color;
    return this;
  }

  setIconLeft(icon?: Component) {
    this.value.icon = icon;
    return this;
  }

  build() {
    return shallowMount(BaseDropdownItem as any, {
      props: {
        value: this.value,
        selected: this.selected,
      },
      slots: {
        default: this.defaultSlot,
      },
    });
  }
}

describe('Unit: BaseDropdownItem', () => {
  test('Отображает слот', () => {
    const wrapper = new BaseDropdownItemBuilder().build();
    expect(wrapper.text()).toBe('Пункт списка');
  });
  test('Если в слот #icon-left передана строка " ", то должен показываться контейнер под иконки слева', () => {
    const wrapper = new BaseDropdownItemBuilder()
      .setIconLeft(FileDescriptionIcon)
      .build();
    const iconLeft = wrapper.find('.prefix-dropdown-item__left-icon');
    expect(iconLeft.exists()).toBeTruthy();
  });
  test('Если передан disabled, то компонент должен стилизоваться под состояние disabled', () => {
    const wrapper = new BaseDropdownItemBuilder().toggleDisabled().build();
    expect(wrapper.classes('prefix-dropdown-item_disabled')).toBeTruthy();
  });

  describe('selected', () => {
    test('Если передан selected, то компонент должен стилизоваться под состояние selected', () => {
      const wrapper = new BaseDropdownItemBuilder().toggleSelected().build();
      expect(wrapper.classes('prefix-dropdown-item_selected')).toBeTruthy();
    });
    test('Если передан selected, то должна отрендерится галочка', () => {
      const wrapper = new BaseDropdownItemBuilder().toggleSelected().build();
      const checkmark = wrapper.find('.prefix-dropdown-item__checkmark');

      expect(checkmark.exists()).toBeTruthy();
    });
  });

  describe('color', () => {
    test('Если передан color, то компоненту должен добавиться класс prefix-dropdown-item_colored', () => {
      const wrapper = new BaseDropdownItemBuilder().setColor('red').build();
      expect(wrapper.classes('prefix-dropdown-item_colored')).toBeTruthy();
    });
    test('Если передан color, то компоненту должен добавиться атрибут style="--list-item-color: red;"', () => {
      const wrapper = new BaseDropdownItemBuilder().setColor('red').build();
      const styleAttribute = wrapper.attributes('style');
      expect(styleAttribute).toMatch('--list-item-color: red;');
    });
  });
});
