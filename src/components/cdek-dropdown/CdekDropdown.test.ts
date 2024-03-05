import type { Component } from 'vue';
import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekDropdownItem from './CdekDropdownItem.vue';
import type { IItemValue } from './CdekDropdown.types';
import FileDescriptionIcon from './svg/file-description.svg?component';

class CdekDropdownItemBuilder {
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
    return shallowMount(CdekDropdownItem as any, {
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

describe('Unit: CdekDropdownItem', () => {
  test('Отображает слот', () => {
    const wrapper = new CdekDropdownItemBuilder().build();
    expect(wrapper.text()).toBe('Пункт списка');
  });
  test('Если в слот #icon-left передана строка " ", то должен показываться контейнер под иконки слева', () => {
    const wrapper = new CdekDropdownItemBuilder()
      .setIconLeft(FileDescriptionIcon)
      .build();
    const iconLeft = wrapper.find('.cdek-dropdown-item__left-icon');
    expect(iconLeft.exists()).toBeTruthy();
  });
  test('Если передан disabled, то компонент должен стилизоваться под состояние disabled', () => {
    const wrapper = new CdekDropdownItemBuilder().toggleDisabled().build();
    expect(wrapper.classes('cdek-dropdown-item_disabled')).toBeTruthy();
  });

  describe('selected', () => {
    test('Если передан selected, то компонент должен стилизоваться под состояние selected', () => {
      const wrapper = new CdekDropdownItemBuilder().toggleSelected().build();
      expect(wrapper.classes('cdek-dropdown-item_selected')).toBeTruthy();
    });
    test('Если передан selected, то должна отрендерится галочка', () => {
      const wrapper = new CdekDropdownItemBuilder().toggleSelected().build();
      const checkmark = wrapper.find('.cdek-dropdown-item__checkmark');

      expect(checkmark.exists()).toBeTruthy();
    });
  });

  describe('color', () => {
    test('Если передан color, то компоненту должен добавиться класс cdek-dropdown-item_colored', () => {
      const wrapper = new CdekDropdownItemBuilder().setColor('red').build();
      expect(wrapper.classes('cdek-dropdown-item_colored')).toBeTruthy();
    });
    test('Если передан color, то компоненту должен добавиться атрибут style="--list-item-color: red;"', () => {
      const wrapper = new CdekDropdownItemBuilder().setColor('red').build();
      const styleAttribute = wrapper.attributes('style');
      expect(styleAttribute).toMatch('--list-item-color: red;');
    });
  });
});
