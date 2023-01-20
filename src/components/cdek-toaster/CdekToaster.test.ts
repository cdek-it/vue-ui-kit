import { shallowMount } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import CdekToaster from './CdekToaster.vue';
import InfoIcon from './svg/info.svg?component';

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
  toggleButtonLoading(loading: boolean) {
    this.setDefaultButton();
    (this.button as any).loading = loading;
    return this;
  }
  setIcon(icon: any) {
    this.icon = icon;
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
      },
    });
  }
}

describe('Unit: CdekToast', () => {
  describe('message.type', () => {
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
  describe('message.content', () => {
    test('Если message.content.title = "Заголовок", то элемент с классом .message-title должен содержать текст "Заголовок"', () => {
      const wrapper = new CdekButtonBuilder().setTitle('Заголовок').build();
      const messageTitleContainer = wrapper.find('.message-title');
      expect(messageTitleContainer.text()).toBe('Заголовок');
    });
    test('Если message.content.text = "Текст сообщения", то элемент с классом .message-text должен содержать текст "Текст сообщения"', () => {
      const wrapper = new CdekButtonBuilder()
        .setText('Текст сообщения')
        .build();
      const messageTextContainer = wrapper.find('.message-text');
      expect(messageTextContainer.text()).toBe('Текст сообщения');
    });
  });
  describe('message.icon', () => {
    test('Если message.icon = компонент иконки, то элемент с классом .message-icon должен существовать', () => {
      const wrapper = new CdekButtonBuilder().setIcon(InfoIcon).build();
      const messageIcon = wrapper.find('.message-icon');
      expect(messageIcon.exists()).toBeTruthy();
    });
    test('Если message.icon = undefined, то элемент с классом .message-icon не должен существовать', () => {
      const wrapper = new CdekButtonBuilder().build();
      const messageIcon = wrapper.find('.message-icon');
      expect(messageIcon.exists()).toBeFalsy();
    });
  });
});
