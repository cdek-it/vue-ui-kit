import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekListItem from './CdekListItem.vue';

class CdekListItemBuilder {
  disabled?: boolean;
  selected?: boolean;
  color?: string;
  option?: {
    value: string | number,
    title: string | number
  };

  iconLeft?: string;
  defaultSlot: string = 'Пункт списка';

  toggleDisabled(){
    this.disabled = !this.disabled;
    return this;
  }

  toggleSelected(){
    this.selected = !this.selected;
    return this;
  }

  setColor(color: string) {
    this.color = color;
    return this;
  }

  setIconLeft(icon: string) {
    this.iconLeft = icon;
    return this;
  }

  build() {
    return shallowMount(CdekListItem, {
      props: {
        option: this.option,
        color: this.color,
        disabled: this.disabled,
        selected: this.selected
      },
      slots: {
        'icon-left': '',
        default: this.defaultSlot
      }
    });
  }
}

describe('Unit: CdekListItem', () => {
  test('Отображает слот', () => {
    const wrapper = new CdekListItemBuilder().build();
    expect(wrapper.text()).toBe('Пункт списка');
  });
  test('Если в слот #icon-left передана строка " ", то должен показываться контейнер под иконки слева', () => {
    const wrapper = new CdekListItemBuilder()
      .setIconLeft(' ')
      .build();
    const iconLeft = wrapper.find('.cdek-list-item__left-icon');
    expect(iconLeft.exists()).toBeTruthy();
  });
  test('Если передан disabled, то компонент должен стилизоваться под состояние disabled', () => {
    const wrapper = new CdekListItemBuilder().toggleDisabled().build();
    expect(wrapper.classes('cdek-list-item_disabled')).toBeTruthy();
  });

  describe('selected', () => {
    test('Если передан selected, то компонент должен стилизоваться под состояние selected', () => {
      const wrapper = new CdekListItemBuilder().toggleSelected().build();
      expect(wrapper.classes('cdek-list-item_selected')).toBeTruthy();
    });
    test('Если передан selected, то должна отрендерится галочка', () => {
      const wrapper = new CdekListItemBuilder().toggleSelected().build();
      const checkmark = wrapper.find('.cdek-list-item__checkmark');

      expect(checkmark.exists()).toBeTruthy();
    });
  });

  describe('color', () => {
    test('Если передан color, то компоненту должен добавиться класс cdek-list-item_colored', () => {
      const wrapper = new CdekListItemBuilder().setColor('red').build();
      expect(wrapper.classes('cdek-list-item_colored')).toBeTruthy();
    });
    test('Если передан color, то компоненту должен добавиться атрибут style="--list-item-color: red;"', () => {
      const wrapper = new CdekListItemBuilder().setColor('red').build();
      const styleAttribute = wrapper.attributes('style')
      expect(styleAttribute).toMatch('--list-item-color: red;');
    });
  });
});

