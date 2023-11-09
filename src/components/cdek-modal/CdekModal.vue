<script lang="ts" setup>
import type { Component } from 'vue';
import { watchEffect, ref, computed } from 'vue';
import { useModalService } from './services/ModalService';
import CrossIcon from './svg/cross.svg?component';

export interface IModalProps<T = Record<string, any>> {
  /**
   * Компонент, который отобразиться в модальном окне
   */
  component: Component & {};
  /**
   * Пропсы компонента
   */
  props?: T;
  /**
   * Настройки модального окна
   */
  settings?: {
    /**
     * ширина модального окна. Если передали ширину, большую, чем viewPort, то ширина будет равна `viewport - падинги`
     *
     * по умолчанию приравнивается к ширине контент
     */
    width?: string;
    withoutCloseButton?: boolean;
    wrapperWithoutPaddings?: boolean;
  };
}

const modalService = useModalService();
const boxElement = ref<HTMLDivElement>();

const close = () => {
  modalService.closeModal();
};

const onOutsideClick = (event: MouseEvent) => {
  if (!boxElement.value?.contains(event.target as HTMLElement)) {
    close();
  }
};

const onKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close();
  }
};

const modalWidth = computed(() => ({
  '--modal-width': modalService.modalData?.settings?.width,
}));

const disableCloseButton = computed(() => {
  return modalService.modalData?.settings?.withoutCloseButton || false;
});

const disablePadding = computed(() => {
  return modalService.modalData?.settings?.wrapperWithoutPaddings || false;
});

watchEffect(() => {
  document.body.style.overflow = modalService.modalData?.component
    ? 'hidden'
    : '';
  if (modalService.isOpen) {
    document.addEventListener('keyup', onKeyPress);
  } else {
    document.removeEventListener('keyup', onKeyPress);
  }
});
</script>

<template>
  <Transition>
    <div class="cdek-modal" v-if="modalService.isOpen">
      <div
        class="cdek-modal__wrapper"
        @click="onOutsideClick"
        :class="{ 'cdek-modal__wrapper_disable-padding': disablePadding }"
      >
        <div class="cdek-modal__box" ref="boxElement" :style="modalWidth">
          <component
            :is="modalService.modalData?.component"
            v-bind="modalService.modalData?.props || {}"
          />
          <CrossIcon
            v-if="!disableCloseButton"
            class="cdek-modal__box__close-trigger"
            @click="close"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.cdek-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;

  &__wrapper {
    display: flex;
    justify-content: center;
    padding: 40px 40px 56px;
    background: $Bottom_50;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    align-items: center;

    @include media-sm {
      padding: 20px;
    }

    &__disable-padding {
      padding: 0;

      @include media-sm {
        padding: 0;
      }
    }
  }

  &__box {
    @include body-1;

    background: $Peak;
    border-radius: 12px;
    margin: auto;

    max-width: 100%;
    box-shadow: 0px 20px 40px -5px rgba(0, 0, 0, 0.2);
    position: relative;
    width: var(--modal-width);

    &__close-trigger {
      position: absolute;
      right: 32px;
      top: 32px;
      cursor: pointer;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
