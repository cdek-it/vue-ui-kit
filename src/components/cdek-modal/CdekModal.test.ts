import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekModal from './CdekModal.vue';
import type { IModalProps } from './CdekModal.vue';
import CdekConfirm from './CdekConfirm.vue';
import { markRaw } from 'vue';
import { useModalService } from '@/components/cdek-modal/services/ModalService';

class CdekModalBuilder {
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
    return mount(CdekModal, {
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
  }
}

describe('Unit: CdekModal', () => {
  test('Should mount', () => {
    const wrapper = new CdekModalBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });
  describe('Контент', () => {
    test('Открытие модального окна', async () => {
      const wrapper = new CdekModalBuilder()
        .setProps({
          title: 'Заголовок',
          content: 'Модальное окно',
        })
        .setComponent(markRaw(CdekConfirm))
        .openModal()
        .build();

      const confirm = wrapper.find('.cdek-confirm');
      expect(confirm.exists()).toBeTruthy();
    });
    test('Пропсы прокидываются в компонент', async () => {
      const wrapper = new CdekModalBuilder()
        .setProps({
          title: 'Заголовок',
          content: 'Модальное окно',
        })
        .setComponent(markRaw(CdekConfirm))
        .openModal()
        .build();

      const title = wrapper.find('.cdek-confirm__header__title');
      expect(title.text()).toBe('Заголовок');

      const content = wrapper.find('.cdek-confirm__content');
      expect(content.text()).toBe('Модальное окно');
    });
  });
  describe('Закрытие модального окна', () => {
    test('Клик мимо модального окна', async () => {
      const wrapper = new CdekModalBuilder()
        .setComponent(markRaw(CdekConfirm))
        .openModal()
        .build();
      const outer = wrapper.find('.cdek-modal__wrapper');
      expect(outer.exists()).toBeTruthy();
      await outer.trigger('click');

      const modal = wrapper.find('.cdek-modal');
      expect(modal.exists()).toBeFalsy();
    });
    test('Клик по крестику', async () => {
      const wrapper = new CdekModalBuilder()
        .setComponent(markRaw(CdekConfirm))
        .openModal()
        .build();
      const closeTrigger = wrapper.find('.cdek-modal__box__close-trigger');
      expect(closeTrigger.exists()).toBeTruthy();
      await closeTrigger.trigger('click');

      const modal = wrapper.find('.cdek-modal');
      expect(modal.exists()).toBeFalsy();
    });
  });
  test('Ширина модального окна', async () => {
    const wrapper = new CdekModalBuilder()
      .setComponent(markRaw(CdekConfirm))
      .setSettings({ width: '300px' })
      .openModal()
      .build();

    const content = wrapper.find('.cdek-modal__box');
    const styleAttribute = content.attributes('style');

    expect(styleAttribute).toMatch('--modal-width: 300px;');
  });

  test('Если передано withoutCloseButton, то кнопка закрытия не отображается', async () => {
    const wrapper = new CdekModalBuilder()
      .setComponent(markRaw(CdekConfirm))
      .setSettings({ withoutCloseButton: true })
      .openModal()
      .build();

    const closeTrigger = wrapper.find('.cdek-modal__box__close-trigger');
    expect(closeTrigger.exists()).toBeFalsy();
  });
});
