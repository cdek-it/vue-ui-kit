<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue';

import AlertTriangleIcon from './svg/alert-triangle.svg?component';
import BanIcon from './svg/ban.svg?component';
import CircleCheckIcon from './svg/circle-check.svg?component';
import InfoCircleIcon from './svg/info-circle.svg?component';

enum RESIZE_MODES {
  NONE = 'none',
  AUTO = 'auto',
  USER = 'user',
}

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
    class?: string;
    // TODO: описать
    resize?: 'none' | 'auto' | 'user';
    // TODO: описать
    height?: string;
  }>(),
  { class: '', resize: 'none', height: '88px' }
);

const isError = computed(() => typeof props.validRes === 'string');

const isUserEvent = computed(() => !props.disabled);

const emit = defineEmits<{
  /**
   * v-model
   */
  (e: 'update:modelValue', value: string): void;
}>();

const value = computed(() => props.modelValue);

const setValue = (event: any) => {
  if (props.resize === RESIZE_MODES.AUTO) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
    // TODO: убрать console.log
    console.log(
      '🚀 ~ setValue ~ event.target.scrollHeight:',
      event.target.scrollHeight
    );
  }

  emit('update:modelValue', event.target.value);
};

const textareaRef = ref<HTMLTextAreaElement>();

const getControl = () => textareaRef.value;

defineExpose({ getControl });
</script>

<template>
  <div :class="[$style['prefix-textarea'], props.class]">
    <label
      :class="[
        $style['prefix-textarea__control'],
        isError ? $style['prefix-textarea__control_error'] : '',
        isUserEvent ? $style['prefix-textarea__control_user-event'] : '',
        disabled ? $style['prefix-textarea__control_disabled'] : '',
        label ? $style['prefix-textarea__control_label-filled'] : '',
      ]"
    >
      <div
        v-if="label"
        :class="[
          $style['prefix-textarea__label'],
          value ? $style['prefix-textarea__label_filled'] : '',
          isError ? $style['prefix-textarea__label_error'] : '',
        ]"
      >
        {{ label }}
      </div>

      <!-- TODO: resize === RESIZE_MODES.USER вынести в computed -->
      <textarea
        :class="[
          $style['prefix-textarea__textarea'],
          isError ? $style['prefix-textarea__textarea_error'] : '',
          !label ? $style['prefix-textarea__textarea_no-label'] : '',
          resize === RESIZE_MODES.USER
            ? $style['prefix-textarea__textarea_resizable']
            : '',
        ]"
        :value="value"
        @input="setValue"
        v-bind="$attrs"
        :disabled="disabled"
        ref="textareaRef"
      />
    </label>
    <div :class="$style['prefix-textarea__tip']">
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
.prefix-textarea {
  $outline-width: 2px;
  $padding-left: 16px;
  $padding-top: 16px;
  $padding-top-without-outline: calc(#{$padding-top} - #{$outline-width});
  $offset-with-label: 7px;

  width: 100%;

  &__control {
    $this: &;

    position: relative;
    display: flex;
    align-items: center;

    outline: solid $outline-width transparent;
    outline-offset: -#{$outline-width};
    padding-inline: calc(#{$padding-left} - #{$outline-width});
    padding-block: $padding-top-without-outline;

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

    &_label-filled {
      padding-top: calc(
        #{$padding-top-without-outline} + #{$offset-with-label}
      );
    }

    &_error {
      background: $Error_5;
    }

    &_disabled {
      background: $Input_Disable;
    }
  }

  &__textarea {
    @include body-1;

    $height-without-label: calc(
      v-bind(height) - (#{$padding-top-without-outline} * 2)
    );

    box-sizing: border-box;
    background: unset;
    border: unset;
    outline: unset;
    width: 100%;
    flex-grow: 1;
    color: $Bottom;
    caret-color: $Primary;
    align-self: flex-end;
    resize: none;
    min-height: 24px;
    height: calc(#{$height-without-label} - #{$offset-with-label});

    &_error {
      caret-color: $Error;
    }

    &[disabled] {
      color: $Bottom_66;
    }

    &_no-label {
      align-self: center;
      height: $height-without-label;
    }

    &_resizable {
      resize: vertical;
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
  }

  &__label {
    $this: &;

    @include body-1;

    position: absolute;
    top: $padding-top;
    color: $Bottom_60;
    transition: all 0.3s ease;

    &_filled,
    .prefix-textarea__control:focus-within:not(
        .prefix-textarea__control_disabled
      )
      & {
      @include caption-1;

      top: 8px;
      transform: translateY(0);
    }

    .prefix-textarea__control:not(:focus-within) &_error#{$this}_filled {
      color: $Error;
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
}
</style>
