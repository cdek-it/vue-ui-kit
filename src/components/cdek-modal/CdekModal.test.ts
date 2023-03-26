import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import type { Component } from 'vue';
import CdekModal from './CdekModal.vue';
import CdekConfirm from './CdekConfirm.vue';
import { markRaw } from 'vue';
import { useModalService } from '@/components/cdek-modal/services/ModalService';

class CdekModalBuilder {
  content?: string | Record<string, any>;
  contentProps?: Record<string, any>;
  width?: string;

  setContent(content: string | Component) {
    this.content = content;
    return this;
  }

  setContentProps(contentProps: Record<string, any>) {
    this.contentProps = contentProps;
    return this;
  }

  setWidth(width: string) {
    this.width = width;
    return this;
  }

  openModal() {
    const useModal = useModalService();
    useModal.openModal({
      content: this.content,
      contentProps: this.contentProps,
      width: this.width,
    });
    return this;
  }

  build() {
    return mount(CdekModal, {
      props: {
        content: this.content,
        contentProps: this.contentProps,
        width: this.width,
      },
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
    test('Строка в пропс content', async () => {
      const wrapper = new CdekModalBuilder()
        .setContent('Модальное окно')
        .openModal()
        .build();

      const box = wrapper.find('.cdek-modal__box p');
      expect(box.text()).toBe('Модальное окно');
    });
    test('Компонент в пропс content', async () => {
      const wrapper = new CdekModalBuilder()
        .setContentProps({
          title: 'Заголовок',
          content: 'Модальное окно',
        })
        .setContent(markRaw(CdekConfirm))
        .openModal()
        .build();

      const confirm = wrapper.find('.cdek-confirm');
      expect(confirm.exists()).toBeTruthy();
    });
    test('ContentProps прокидываются в компонент', async () => {
      const wrapper = new CdekModalBuilder()
        .setContentProps({
          title: 'Заголовок',
          content: 'Модальное окно',
        })
        .setContent(markRaw(CdekConfirm))
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
        .setContent('Модальное окно')
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
        .setContent('Модальное окно')
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
      .setContent('Модальное окно')
      .setWidth('300px')
      .openModal()
      .build();

    const content = wrapper.find('.cdek-modal__box');
    const styleAttribute = content.attributes('style');

    expect(styleAttribute).toMatch('--modal-width: 300px;');
  });
});
