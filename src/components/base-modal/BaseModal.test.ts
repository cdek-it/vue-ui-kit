import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import BaseModal from './BaseModal.vue';
import type { IModalProps } from './BaseModal.vue';
import BaseConfirm from './BaseConfirm.vue';
import { markRaw } from 'vue';
import { useModalService } from '@/components/base-modal/services/ModalService';

class BaseModalBuilder {
  component?: IModalProps['component'];
  props?: IModalProps['props'] = { content: 'Модальное окно' };
  settings?: IModalProps['settings'];

  setComponent(component: IModalProps['component']) {
    this.component = component;
    return this;
  }

  setProps(props: IModalProps['props']) {
    this.props = props;
    return this;
  }

  setSettings(settings: IModalProps['settings']) {
    this.settings = settings;
    return this;
  }

  openModal() {
    const useModal = useModalService();
    if (this.component) {
      useModal.openModal(this.component, {
        props: this.props,
        settings: this.settings,
      });
    }

    return this;
  }

  build() {
    return mount(BaseModal, {
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
  }
}

describe('Unit: BaseModal', () => {
  test('Should mount', () => {
    const wrapper = new BaseModalBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });
  describe('Контент', () => {
    test('Открытие модального окна', async () => {
      const wrapper = new BaseModalBuilder()
        .setProps({
          title: 'Заголовок',
          content: 'Модальное окно',
        })
        .setComponent(markRaw(BaseConfirm))
        .openModal()
        .build();

      const confirm = wrapper.find('.prefix-confirm');
      expect(confirm.exists()).toBeTruthy();
    });
    test('Пропсы прокидываются в компонент', async () => {
      const wrapper = new BaseModalBuilder()
        .setProps({
          title: 'Заголовок',
          content: 'Модальное окно',
        })
        .setComponent(markRaw(BaseConfirm))
        .openModal()
        .build();

      const title = wrapper.find('.prefix-confirm__header__title');
      expect(title.text()).toBe('Заголовок');

      const content = wrapper.find('.prefix-confirm__content');
      expect(content.text()).toBe('Модальное окно');
    });
  });
  describe('Закрытие модального окна', () => {
    test('Клик мимо модального окна', async () => {
      const wrapper = new BaseModalBuilder()
        .setComponent(markRaw(BaseConfirm))
        .openModal()
        .build();
      const outer = wrapper.find('.prefix-modal__wrapper');
      expect(outer.exists()).toBeTruthy();
      await outer.trigger('click');

      const modal = wrapper.find('.prefix-modal');
      expect(modal.exists()).toBeFalsy();
    });
    test('Клик по крестику', async () => {
      const wrapper = new BaseModalBuilder()
        .setComponent(markRaw(BaseConfirm))
        .openModal()
        .build();
      const closeTrigger = wrapper.find('.prefix-modal__box__close-trigger');
      expect(closeTrigger.exists()).toBeTruthy();
      await closeTrigger.trigger('click');

      const modal = wrapper.find('.prefix-modal');
      expect(modal.exists()).toBeFalsy();
    });
  });
  test('Ширина модального окна', async () => {
    const wrapper = new BaseModalBuilder()
      .setComponent(markRaw(BaseConfirm))
      .setSettings({ width: '300px' })
      .openModal()
      .build();

    const content = wrapper.find('.prefix-modal__box');
    const styleAttribute = content.attributes('style');

    expect(styleAttribute).toMatch('--modal-width: 300px;');
  });

  test('Если передано withoutCloseButton, то кнопка закрытия не отображается', async () => {
    const wrapper = new BaseModalBuilder()
      .setComponent(markRaw(BaseConfirm))
      .setSettings({ withoutCloseButton: true })
      .openModal()
      .build();

    const closeTrigger = wrapper.find('.prefix-modal__box__close-trigger');
    expect(closeTrigger.exists()).toBeFalsy();
  });
});
