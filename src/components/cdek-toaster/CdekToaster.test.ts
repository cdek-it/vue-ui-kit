import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekToast from './CdekToaster.vue';
import InfoIcon from './svg/info.svg?component';

const createCdekToast = (message: any) => {
  return shallowMount(CdekToast, {
    props: {
      message,
    },
  });
};

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
        const wrapper = createCdekToast({
          content: {
            title: 'Заголовок сообщения',
            text: 'Текст сообщения',
          },
          type: type,
        });
        expect(wrapper.classes(typeClass)).toBe(true);
      }
    );
  });
  describe('message.content', () => {
    test('Если message.content.title = "Заголовок", то элемент с классом .message-title должен содержать текст "Заголовок"', () => {
      const wrapper = createCdekToast({
        content: {
          title: 'Заголовок',
        },
      });
      const messageTitleContainer = wrapper.find('.message-title');
      expect(messageTitleContainer.text()).toBe('Заголовок');
    });
    test('Если message.content.text = "Текст сообщения", то элемент с классом .message-text должен содержать текст "Текст сообщения"', () => {
      const wrapper = createCdekToast({
        content: {
          title: 'Заголовок',
          text: 'Текст сообщения',
        },
      });
      const messageTextContainer = wrapper.find('.message-text');
      expect(messageTextContainer.text()).toBe('Текст сообщения');
    });
  });
  describe('message.icon', () => {
    test('Если message.icon = компонент иконки, то элемент с классом .message-icon должен существовать', () => {
      const wrapper = createCdekToast({
        content: {
          title: 'Заголовок',
        },
        icon: InfoIcon,
      });
      const messageIcon = wrapper.find('.message-icon');
      expect(messageIcon.exists()).toBeTruthy();
    });
    test('Если message.icon = undefined, то элемент с классом .message-icon не должен существовать', () => {
      const wrapper = createCdekToast({
        content: {
          title: 'Заголовок',
        },
      });
      const messageIcon = wrapper.find('.message-icon');
      expect(messageIcon.exists()).toBeFalsy();
    });
  });
});
