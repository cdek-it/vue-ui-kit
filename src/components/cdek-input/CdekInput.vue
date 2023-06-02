<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed, useSlots, ref } from 'vue';

import AlertTriangleIcon from './svg/alert-triangle.svg?component';
import BanIcon from './svg/ban.svg?component';
import CircleCheckIcon from './svg/circle-check.svg?component';
import InfoCircleIcon from './svg/info-circle.svg?component';
import CircleXIcon from './svg/circle-x.svg?component';

const props = withDefaults(
  defineProps<{
    /**
     * v-model
     */
    modelValue: string;
    label?: string;
    /**
     * `true` - валидация пройдена, ошибку показывать не надо
     *
     * `string` - текст ошибки, ошибка показывается
     */
    validRes?: true | string;
    hideErrorMessage?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    small?: boolean;
    clearable?: boolean;
    class?: string;
  }>(),
  { class: '' }
);

const isError = computed(() => typeof props.validRes === 'string');

const isUserEvent = computed(() => !props.disabled && !props.readonly);

const emit = defineEmits<{
  /**
   * v-model
   */
  (e: 'update:modelValue', value: string): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
const clear = () => {
  emit('update:modelValue', '');
};

const slots = useSlots();

const hasRightIcon = computed(() => !!slots['icons-right']);
const hasLeftIcon = computed(() => !!slots['icons-left']);

const inputRef = ref<HTMLInputElement>();
const getControl = () => inputRef.value;
defineExpose({ getControl });
</script>

<template>
  <div
    class="cdek-input"
    :class="{
      'cdek-input_small': small && label,
      [props.class]: true,
    }"
  >
    <label
      class="cdek-input__control"
      :class="{
        'cdek-input__control_error': isError,
        'cdek-input__control_user-event': isUserEvent,
        'cdek-input__control_disabled': disabled,
        'cdek-input__control_readonly': readonly,
        'cdek-input__control_right-icon': hasRightIcon,
        'cdek-input__control_small': small,
      }"
    >
      <div
        v-if="label"
        class="cdek-input__label"
        :class="{
          'cdek-input__label_filled': value,
          'cdek-input__label_error': isError,
          'cdek-input__label_readonly': readonly,
          'cdek-input__label_small': small,
        }"
      >
        {{ label }}
      </div>

      <div v-if="hasLeftIcon" class="cdek-input__left-icon">
        <!-- @slot Прописаны стили для svg -->
        <slot name="icons-left" />
      </div>

      <input
        class="cdek-input__input"
        :class="{
          'cdek-input__input_error': isError,
          'cdek-input__input_readonly': readonly,
          'cdek-input__input_no-label': !label,
          'cdek-input__input_small': small,
        }"
        v-model="value"
        v-bind="$attrs"
        :disabled="disabled || readonly"
        ref="inputRef"
      />

      <button
        v-if="clearable && value"
        class="cdek-input__clear"
        @click="clear"
      >
        <CircleXIcon />
      </button>

      <div
        class="cdek-input__right-icon"
        :class="{
          'cdek-input__right-icon_red': isError,
          'cdek-input__right-icon_grey': disabled || readonly,
        }"
        v-if="hasRightIcon"
      >
        <!-- @slot Прописаны стандартные стили для `button > svg`, у них будет выставлен размер и будут меняться цвета -->
        <slot name="icons-right"> </slot>
      </div>
    </label>
    <div class="cdek-input__tip">
      <template v-if="isError">
        <span class="error" v-show="!hideErrorMessage">
          {{ validRes }}
        </span>
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

.cdek-input {
  $padding-left: 16px;

  &_small {
    padding-top: 20px;
  }

  &__control {
    $this: &;
    $outline-width: 2px;

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
    cursor: text;

    &_user-event {
      @include media-hover {
        background: $Primary_10;
      }

      &:focus-within {
        background: $Peak;
        outline-color: $Primary;
      }

      &#{$this}_error {
        @include media-hover {
          background: $Error_10;
        }

        &:focus-within {
          background: $Peak !important;
          outline-color: $Error;
        }
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
      padding-block: 0;
    }
  }

  &__input {
    @include body-1;

    background: unset;
    border: unset;
    outline: unset;
    flex-grow: 1;
    color: $Bottom;
    caret-color: $Primary;
    align-self: flex-end;

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
      width: 100%;
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
    .cdek-input__control:focus-within:not(.cdek-input__control_disabled) & {
      @include caption-1;

      top: 8px;
      transform: translateY(0);
    }

    .cdek-input__control:not(:focus-within) &_error#{$this}_filled {
      color: $Error;
    }

    &_small {
      @include body-1;

      &.cdek-input__label_filled,
      .cdek-input__control:focus-within:not(.cdek-input__control_disabled) & {
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

  &__clear {
    @include right-icon;

    opacity: 0;
    transition: all 0.2s ease;

    @media (hover: hover) {
      .cdek-input__control:hover & {
        opacity: 1;
      }
    }

    .cdek-input__control:focus-within & {
      opacity: 1;
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
  }

  &__left-icon {
    line-height: 0;

    :slotted(svg) {
      margin-right: 8px;
    }
  }
}
</style>
