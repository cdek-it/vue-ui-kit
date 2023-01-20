import { shallowMount } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import CdekToaster from './CdekToaster.vue';

type TypeT = 'info' | 'success' | 'error';

class CdekButtonBuilder {
  type?: TypeT;
  title: string = '';
  text?: string;
  button?: {
    text: string;
    action: () => void;
    loading?: boolean;
  };
  icon?: any;
  withoutIcon?: boolean;

  setType(type: TypeT) {
    this.type = type;
    return this;
  }
  setTitle(title: string) {
    this.title = title;
    return this;
  }
  setText(text: string) {
    this.text = text;
    return this;
  }
  private setDefaultButton() {
    if (!this.button) {
      this.button = {
        text: '',
        action: vi.fn(),
      };
    }
  }
  setButtonText(buttonText: string) {
    this.setDefaultButton();
    (this.button as any).text = buttonText;
    return this;
  }
  setButtonAction(buttonAction: () => void) {
    this.setDefaultButton();
    (this.button as any).action = buttonAction;
    return this;
  }
  toggleButtonLoading() {
    this.setDefaultButton();
    (this.button as any).loading = !(this.button as any).loading;
    return this;
  }
  setIcon(icon: any) {
    this.icon = icon;
    return this;
  }
  toggleWithoutIcon() {
    this.withoutIcon = !this.withoutIcon;
    return this;
  }

  build() {
    return shallowMount(CdekToaster, {
      props: {
        type: this.type,
        title: this.title,
        text: this.text,
        button: this.button,
        icon: this.icon,
        withoutIcon: this.withoutIcon,
      },
    });
  }
}

describe('Unit: CdekToast', () => {
  describe('type', () => {
    test.each([
      { type: undefined, typeClass: 'info' },
      { type: 'info', typeClass: 'info' },
      { type: 'success', typeClass: 'success' },
      { type: 'error', typeClass: 'error' },
    ])(
      'Если type = $type, то должен быть класс .$typeClass',
      ({ type, typeClass }: any) => {
        const wrapper = new CdekButtonBuilder().setType(type).build();
        expect(wrapper.classes(typeClass)).toBe(true);
      }
    );
  });
  test('Если title = "Заголовок", то элемент с классом .toast__title должен содержать текст "Заголовок"', () => {
    const wrapper = new CdekButtonBuilder().setTitle('Заголовок').build();
    const titleContainer = wrapper.find('.toast__title');
    expect(titleContainer.text()).toBe('Заголовок');
  });
  test('Если text = "Текст сообщения", то элемент с классом .toast__text должен содержать текст "Текст сообщения"', () => {
    const wrapper = new CdekButtonBuilder().setText('Текст сообщения').build();
    const textContainer = wrapper.find('.toast__text');
    expect(textContainer.text()).toBe('Текст сообщения');
  });
  // TODO: если нет text, то блока не должно быть
  test('Если withoutIcon = true, то элемент с классом .toast__icon не должен существовать', () => {
    const wrapper = new CdekButtonBuilder().toggleWithoutIcon().build();
    const icon = wrapper.find('.toast__icon');
    expect(icon.exists()).toBeFalsy();
  });
  // TODO: если button не передаем, кнопки не должно быть
  // TODO: если button передаем, должен отрендериться компонент кнопки
  // TODO: при переданном button, должно передаваться название
  // TODO: при переданном button, должен вешаться клик
  // TODO: при переданном button, должен передаваться loading
});
