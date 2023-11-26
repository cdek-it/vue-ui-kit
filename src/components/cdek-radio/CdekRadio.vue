<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    small?: boolean;
    value: string;
    modelValue: string;
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
    'cdek-radio--small': props.small,
    'cdek-radio--disabled': props.disabled,
  };
});

const onChange = (e: Event) => {
  if (!e.target) {
    return;
  }

  emit('update:modelValue', (e.target as HTMLInputElement).value);
};

const isSelected = computed(() => {
  return props.modelValue === props.value;
});
</script>

<template>
  <label class="cdek-radio" :class="classes">
    <input
      type="radio"
      :checked="isSelected"
      :disabled="disabled"
      :value="value"
      @change="onChange"
    />

    <span class="cdek-radio__text">
      {{ label }}

      <span v-if="tip" class="cdek-radio__tip">
        {{ tip }}
      </span>
    </span>
  </label>
</template>

<style scoped lang="scss">
.cdek-radio {
  position: relative;
  display: inline-block;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    left: -9999px;
    outline: none;

    &:checked + .cdek-radio__text {
      &::before {
        background: $Primary;
        border: none;
      }

      &::after {
        opacity: 1;
      }
    }

    &:disabled + .cdek-radio__text {
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
      border-radius: 50%;
    }

    &::after {
      content: '';

      opacity: 0;
      position: absolute;
      top: 8px;
      left: 8px;
      width: 16px;
      height: 16px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  &:not(.cdek-radio--disabled) {
    @include media-hover {
      input + .cdek-radio__text {
        color: $Primary_Active;

        &::before {
          background: $Primary_20;
        }
      }

      input:checked + .cdek-radio__text {
        &::before {
          background: $Primary_70;
        }
      }
    }
  }

  &--disabled {
    .cdek-radio__text {
      color: $Bottom_60;

      &::before {
        background: $Surface_Neutral;
        border: 1px solid $Button_Disable;
      }
    }

    input:checked + .cdek-radio__text::before {
      background: $Button_Disable;
    }
  }

  &--small {
    .cdek-radio__text {
      @include body-2;
      padding-left: 40px;

      &::before {
        width: 24px;
        height: 24px;
      }

      &::after {
        width: 12px;
        height: 12px;
        top: 6px;
        left: 6px;
      }
    }
  }
}
</style>
