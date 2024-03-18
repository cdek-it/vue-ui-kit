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

const value = computed(() => props.modelValue);

const setValue = (event: any) => {
  emit('update:modelValue', event.target.value);
};

const clear = () => {
  emit('update:modelValue', '');
};

const slots = useSlots();

const hasRightIcon = computed(() => !!slots['icons-right']);
const hasLeftIcon = computed(() => !!slots['icons-left']);

const inputRef = ref<HTMLInputElement>();

const showClearableButton = computed(() => {
  return props.clearable && value.value;
});

const getControl = () => inputRef.value;

defineExpose({ getControl });
</script>

<template>
  <div
    :class="[
      $style['prefix-input'],
      small && label ? $style['prefix-input_small'] : '',
      props.class,
    ]"
  >
    <label
      :class="[
        $style['prefix-input__control'],
        isError ? $style['prefix-input__control_error'] : '',
        isUserEvent ? $style['prefix-input__control_user-event'] : '',
        disabled ? $style['prefix-input__control_disabled'] : '',
        readonly ? $style['prefix-input__control_readonly'] : '',
        hasRightIcon ? $style['prefix-input__control_right-icon'] : '',
        small ? $style['prefix-input__control_small'] : '',
        showClearableButton ? $style['prefix-input__control_clearable'] : '',
      ]"
    >
      <div
        v-if="label"
        :class="[
          $style['prefix-input__label'],
          value ? $style['prefix-input__label_filled'] : '',
          isError ? $style['prefix-input__label_error'] : '',
          readonly ? $style['prefix-input__label_readonly'] : '',
          small ? $style['prefix-input__label_small'] : '',
        ]"
      >
        {{ label }}
      </div>

      <div v-if="hasLeftIcon" :class="$style['prefix-input__left-icon']">
        <!-- @slot Прописаны стили для svg -->
        <slot name="icons-left" />
      </div>

      <input
        :class="[
          $style['prefix-input__input'],
          isError ? $style['prefix-input__input_error'] : '',
          readonly ? $style['prefix-input__input_readonly'] : '',
          !label ? $style['prefix-input__input_no-label'] : '',
          small ? $style['prefix-input__input_small'] : '',
        ]"
        :value="value"
        @input="setValue"
        v-bind="$attrs"
        :disabled="disabled || readonly"
        ref="inputRef"
      />

      <button
        v-if="showClearableButton"
        :class="$style['prefix-input__clear']"
        type="button"
        @click="clear"
      >
        <CircleXIcon />
      </button>

      <div
        v-if="hasRightIcon"
        :class="[
          $style['prefix-input__right-icon'],
          isError ? $style['prefix-input__right-icon_red'] : '',
          disabled || readonly ? $style['prefix-input__right-icon_grey'] : '',
          showClearableButton
            ? $style['prefix-input__right-icon_clearable']
            : '',
        ]"
      >
        <!-- @slot Прописаны стандартные стили для `button > svg`, у них будет выставлен размер и будут меняться цвета -->
        <slot name="icons-right"> </slot>
      </div>
    </label>
    <div :class="$style['prefix-input__tip']">
      <template v-if="isError">
        <div
          :class="$style['error']"
          v-show="!hideErrorMessage"
          v-html="validRes"
        />
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

<style lang="scss" scoped module>
@mixin slotted-svg-color($color) {
  :slotted(svg) {
    path {
      stroke: $color;
    }
  }
}

.prefix-input {
  $right-icon-padding: 6px;
  $padding-left: 16px;

  width: 100%;

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
    outline-offset: -#{$outline-width};
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

    &_clearable {
      padding-inline-end: calc(
        #{$padding-left} - #{$outline-width} - #{$right-icon-padding}
      );

      &.prefix-input__control_small {
        padding-inline-end: 0;
      }
    }
  }

  &__input {
    @include body-1;

    background: unset;
    border: unset;
    outline: unset;
    width: 100%;
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

    &:focus {
      &::placeholder {
        transition: color 0.2s ease;
        color: $Button_Disable;
      }
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
    .prefix-input__control:focus-within:not(.prefix-input__control_disabled) & {
      @include caption-1;

      top: 8px;
      transform: translateY(0);
    }

    .prefix-input__control:not(:focus-within) &_error#{$this}_filled {
      color: $Error;
    }

    &_small {
      @include body-1;

      &.prefix-input__label_filled,
      .prefix-input__control:focus-within:not(.prefix-input__control_disabled)
        & {
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
    padding: $right-icon-padding;
    outline: none;
    cursor: pointer;
  }

  &__clear {
    @include right-icon;

    opacity: 0;
    z-index: -1;
    transition: all 0.2s ease;

    .prefix-input__control:focus-within & {
      z-index: 1;
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

    &_clearable {
      margin-left: 4px;
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
