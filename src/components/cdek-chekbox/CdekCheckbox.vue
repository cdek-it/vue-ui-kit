<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    small?: boolean;
    modelValue: boolean;
    label: string;
    tip?: string;
  }>(),
  {
    disabled: false,
    small: false,
  }
);

const emit = defineEmits(['update:modelValue']);
const classes = computed(() => {
  return {
    'cdek-checkbox--small': props.small,
    'cdek-checkbox--disabled': props.disabled,
  };
});
const onChange = (e: Event) => {
  if (!e.target) {
    return;
  }

  emit('update:modelValue', (e.target as HTMLInputElement).checked);
};
</script>

<template>
  <label class="cdek-checkbox" :class="classes">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    />

    <span class="cdek-checkbox__text">
      {{ label }}

      <span v-if="tip" class="cdek-checkbox__tip">
        {{ tip }}
      </span>
    </span>
  </label>
</template>

<style scoped lang="scss">
.cdek-checkbox {
  position: relative;
  display: inline-block;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    left: -9999px;
    outline: none;
    &:checked + .cdek-checkbox__text {
      &::before {
        background: $Primary;
        border: none;
      }

      &::after {
        opacity: 1;
      }
    }

    &:disabled + .cdek-checkbox__text {
      &::before,
      &::after {
        cursor: not-allowed;
      }
    }
  }

  &__tip {
    @include caption-1;

    color: $Bottom_60;
  }

  &__text {
    @include body-1;

    padding: 2px 0px 2px 48px;
    display: flex;
    flex-direction: column;

    &::before {
      content: '';

      box-sizing: border-box;
      position: absolute;
      border: 1px solid $Primary;
      width: 32px;
      height: 32px;
      top: 0;
      left: 0;
      cursor: pointer;
      background-color: $Primary_5;
      border-radius: 8px;
    }

    &::after {
      content: '';

      opacity: 0;
      background-image: url(./svg/check.svg);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 12px;
      left: 10px;
      width: 13px;
      height: 9px;
      cursor: pointer;
    }
  }

  &:not(.cdek-checkbox--disabled) {
    @include media-hover {
      input + .cdek-checkbox__text {
        color: $Primary_Active;

        &::before {
          background: $Primary_20;
        }
      }

      input:checked + .cdek-checkbox__text {
        &::before {
          background: $Primary_70;
        }
      }
    }
  }

  &--disabled {
    .cdek-checkbox__text {
      color: $Bottom_60;

      &::before {
        background: $Surface_Neutral;
        border: 1px solid $Button_Disable;
      }
    }

    input:checked + .cdek-checkbox__text::before {
      background: $Button_Disable;
    }
  }

  &--small {
    .cdek-checkbox__text {
      @include body-2;
      padding-left: 40px;

      &::before {
        width: 24px;
        height: 24px;
        border-radius: 6px;
      }

      &::after {
        width: 9px;
        height: 6px;
        top: 9px;
        left: 8px;
      }
    }
  }
}
</style>
