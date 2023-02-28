<script lang="ts" setup>
import { computed, useSlots, ref, onMounted, onUnmounted } from "vue";
import AlertTriangleIcon from './svg/alert-triangle.svg?component';
import BanIcon from './svg/ban.svg?component';
import CircleCheckIcon from './svg/circle-check.svg?component';
import InfoCircleIcon from './svg/info-circle.svg?component';
import ChevronUpIcon from './svg/chevron-up.svg?component';

interface ISelectValue {
  value: string | number,
  title: string | number,
  [props: string]: any
}

const props = withDefaults(
  defineProps<{
    /**
     * v-model
     */
    modelValue: ISelectValue;
    label?: string;
    /**
     * `true` - валидация пройдена, ошибку показывать не надо
     *
     * `string` - текст ошибки, ошибка показывается
     */
    validRes?: true | string;
    disabled?: boolean;
    readonly?: boolean;
    small?: boolean;
  }>(),
  {}
);

const labelRef = ref();
const onOutsideClick = (event:MouseEvent) => {
  if(!labelRef.value.contains(event.target)){
    toggleIsOpen(false)
  }
}

onMounted(() => {
  document.addEventListener('click', onOutsideClick)
});

onUnmounted(() => {
  document.removeEventListener('click', onOutsideClick)
})


const isError = computed(() => typeof props.validRes === 'string');

const isUserEvent = computed(() => !props.disabled && !props.readonly);

const emit = defineEmits<{
  /**
   * v-model
   */
  (e: 'update:modelValue', value: string | number): void;
}>();

const value = computed({
  get() {
    return props.modelValue?.title;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});

const slots = useSlots();
const hasRightIcon = computed(() => Boolean(slots['icons-right']));

const isOpen = ref(false);
const toggleIsOpen = (value = !isOpen.value) => {
  if(isUserEvent.value) {
    isOpen.value = value;
  }
}

const onControlClick = () => {
  toggleIsOpen();
}

</script>

<template>
  <div
    class="cdek-select"
    :class="{
      'cdek-select_small': small && label,
    }"
  >
    <label
      class="cdek-select__control"
      :class="{
        'cdek-select__control_error': isError,
        'cdek-select__control_user-event': isUserEvent,
        'cdek-select__control_disabled': disabled,
        'cdek-select__control_readonly': readonly,
        'cdek-select__control_right-icon': hasRightIcon,
        'cdek-select__control_small': small,
        'cdek-select__control_open': isOpen,
      }"
      ref="labelRef"
      @click="onControlClick"
    >
      <div
        v-if="label"
        class="cdek-select__label"
        :class="{
          'cdek-select__label_filled': value,
          'cdek-select__label_error': isError,
          'cdek-select__label_readonly': readonly,
          'cdek-select__label_small': small,
          'cdek-select__label_open': isOpen,
        }"
      >
        {{ label }}
      </div>

      <div
        class="cdek-select__value"
        :class="{
          'cdek-select__value_error': isError,
          'cdek-select__value_readonly': readonly,
          'cdek-select__value_no-label': !label,
          'cdek-select__value_small': small,
          'cdek-select__value_open': isOpen,
        }"
      >
        {{ value }}
      </div>
      <ChevronUpIcon
        class="cdek-select__arrow"
        :class="{
          'cdek-select__arrow_red': isError,
          'cdek-select__arrow_grey': disabled || readonly,
          'cdek-select__arrow_open': isOpen,
        }"
      />
      <div
        class="cdek-select__right-icon"
        :class="{
          'cdek-select__right-icon_red': isError,
          'cdek-select__right-icon_grey': disabled || readonly,
          'cdek-select__right-icon_white': isOpen,
        }"
        v-if="hasRightIcon"
      >
        <!-- @slot Прописаны стандартные стили для `button > svg`, у них будет выставлен размер и будут меняться цвета -->
        <slot name="icons-right" >
        </slot>
      </div>
    </label>
    <div class="cdek-select__tip">
      <template v-if="isError">
        <BanIcon />
        <span class="error">{{ validRes }}</span>
      </template>

      <!-- @slot Предоставлены классы и стандартные иконки, примеры в историях -->
      <slot
        v-else
        name="tip"
        :alert="AlertTriangleIcon"
        :ban="BanIcon"
        :circle="CircleCheckIcon"
        :info="InfoCircleIcon"
      />
    </div>
    <Transition>
      <div v-if="isOpen" class="cdek-select__options">
        <slot />
      </div>
    </Transition>

  </div>
</template>

<style lang="scss" scoped>
@mixin slotted-svg-color($color) {
  :slotted(svg) {
    path {
      stroke: $color;
    }
  }
}

.cdek-select {
  $padding-left: 16px;
  position: relative;

  &_small {
    padding-top: 20px;
  }

  &__control {
    $this: &;
    $outline-width: 2px;

    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    height: 56px;

    outline: solid $outline-width transparent;
    padding-inline: calc(#{$padding-left} - #{$outline-width});
    padding-block: 6px;

    box-sizing: border-box;
    background: $Surface_Neutral;
    box-shadow: inset 0px 1px 2px rgba(0, 33, 52, 0.05);
    border-radius: 8px;
    transition: background-color 0.3s ease, outline-color 0.3s ease;

    &_user-event {
      @include media-hover {
        background: $Primary_10;
      }

      &#{$this}_error {
        @include media-hover {
          background: $Error_10;
        }
      }

      &#{$this}_open {
        background: $Primary;
      }
    }

    &_error {
      background: $Error_5;
    }

    &_disabled {
      background: $Input_Disable;
    }

    &_readonly {
      background: transparent;
      box-shadow: unset;
    }

    &_right-icon {
      padding-right: 8px;
    }

    &_small {
      height: 36px;
      padding-right: 0;
      padding-block: 0;
    }
  }

  &__value {
    @include body-1;

    background: unset;
    border: unset;
    outline: unset;
    flex-grow: 1;
    color: $Bottom;
    caret-color: $Primary;
    align-self: flex-end;
    transition: color 0.3s ease;

    &_error {
      caret-color: $Error;
    }

    &[disabled] {
      color: $Bottom_66;
    }

    &_readonly,
    &_readonly[disabled] {
      color: $Bottom;
    }

    &_open {
      color: $Peak;
    }

    &_no-label {
      align-self: center;
    }

    &:not(&_no-label) {
      &::placeholder {
        transition: color 0.2s ease;
        color: transparent;
      }

      &:focus {
        &::placeholder {
          color: $Button_Disable;
        }
      }
    }

    &_small {
      align-self: center;
      padding-block: 6px;
    }
  }

  &__label {
    $this: &;

    @include body-1;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: $Bottom_60;
    transition: all 0.3s ease;

    &_filled,
    .cdek-select__control:focus-within:not(.cdek-select__control_disabled) & {
      @include caption-1;

      top: 8px;
      transform: translateY(0);
    }

    .cdek-select__control:not(:focus-within) &_error#{$this}_filled {
      color: $Error;
    }

    &_open:not(&_small) {
      color: $Peak;
    }

    &_small {
      @include body-1;

      &.cdek-select__label_filled,
      .cdek-select__control:focus-within:not(.cdek-select__control_disabled) & {
        @include caption-1;

        top: -22px;
        transform: translateX(-17px);

        &#{$this}_readonly {
          top: -11px;
          transform: translateX(0);
        }

        &#{$this}_error {
          color: $Error;
        }
      }
    }
  }

  &__tip {
    @include caption-1;

    padding-left: $padding-left;
    margin-top: 4px;
    color: $Bottom_66;

    min-height: 16px;

    :slotted(.tertiary) {
      color: $Tertiary;
    }

    :slotted(.attention) {
      color: $Attention;
    }

    .error,
    :slotted(.error) {
      color: $Error;
    }

    :slotted(.success) {
      color: $Success;
    }

    svg,
    :slotted(svg) {
      vertical-align: text-bottom;
      margin-right: 4px;
    }
  }

  @mixin right-icon {
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    padding: 6px;
    outline: none;
    cursor: pointer;
  }

  &__arrow {
    stroke: $Primary;
    margin-right: 6px;
    transform: rotate(180deg);
    transition: transform 0.2s ease;

    &_open {
      stroke: $Peak;
      transform: rotate(0deg);
    }

    &_red {
      stroke: $Error;
    }

    &_grey {
      stroke: $Button_Disable;
    }
  }

  &__right-icon {
    :slotted(button) {
      @include right-icon;
    }

    @include slotted-svg-color($Primary);

    &_red {
      @include slotted-svg-color($Error);
    }

    &_grey {
      @include slotted-svg-color($Button_Disable);
    }

    &_white {
      @include slotted-svg-color($Peak);
    }
  }

  &__options {
    background: $Peak;
    position: absolute;
    top: calc(100% - 16px);
    border-radius: 8px;
    padding: 12px 0;
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04)
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
