<script lang="ts" setup>
import { computed } from 'vue';
import EyeIcon from './svg/eye.svg?component';
import CrossInCircleIcon from './svg/cross-in-circle.svg?component';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    disabled?: boolean;
    readonly?: boolean;
    errorMessage?: string;
    small?: boolean;
  }>(),
  {}
);

const emit = defineEmits<{
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
</script>

<template>
  <label
    class="cdek-input"
    :class="{
      filled: !!value,
      disabled: disabled,
      readonly: readonly,
      error: !!errorMessage,
      small: small,
    }"
  >
    <div class="cdek-input__content">
      <p class="cdek-input__label">
        {{ label }}
      </p>
      <input
        class="cdek-input__input"
        type="text"
        v-model="value"
        :disabled="disabled"
      />
    </div>
    <div v-if="!readonly" class="icons-container">
      <button class="visible-on-hover">
        <CrossInCircleIcon />
      </button>
      <button>
        <EyeIcon />
      </button>
    </div>
  </label>

  <!-- TODO: более плоская структура -->
  <div>
    <!-- TODO: модификаторы по БЭМ -->
    <label
      class="cdek-input__label"
      :class="{ 'cdek-input__label_small': small }"
    ></label>
    <!-- по стилям выглядит как инпут -->
    <div
      class="cdek-input__control"
      :class="{ 'cdek-input__control_small': small }"
    >
      <!-- иконки слева -->
      <input />
      <!-- иконки справа -->
    </div>
    <div>
      <!-- подсказка или ошибка -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
// TODO: все ховеры делать с медиа правилом
p {
  margin: 0;
}
button {
  padding: 0;
  border: none;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

input {
  border: unset;
  background: unset;
  outline: unset;
  padding: 0;

  &:focus {
    border: unset;
    background: unset;
    outline: unset;
  }
}

.cdek-input {
  transition: background-color 0.3s ease;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 6px;
  padding: 8px 14px 8px 16px;
  height: 56px;
  background-color: $Surface_Neutral;
  box-shadow: inset 0px 1px 2px rgba(0, 33, 52, 0.05);
  box-sizing: border-box;
  border-radius: 8px;
  cursor: text;

  .icons-container {
    display: flex;
    align-items: center;
    gap: 16px;
    color: $Primary;

    & button {
      height: 24px;
    }
  }

  &:hover {
    background-color: $Primary_10;

    & .visible-on-hover {
      opacity: 1;
    }
  }

  &:focus-within:not([disabled='true']),
  &.filled {
    & .cdek-input__label {
      @include caption-1;

      top: 0;
    }
  }

  &:focus-within:not([disabled='true']) {
    background-color: $Peak;
    border: 2px solid $Primary;
    padding: 6px 12px 6px 14px;
  }

  &__content {
    flex-grow: 1;
  }

  &__label {
    @include body-1;

    position: relative;
    top: 12px;
    left: 0;
    transition: all 0.3s ease;
    color: $Bottom_60;
  }

  &__input {
    @include body-1;

    width: 100%;
    color: $Bottom;
    caret-color: $Primary;
  }

  &.disabled {
    background-color: $Input_Disable;
    padding: 8px 14px 8px 16px;
    border: none;
    pointer-events: none;

    & .icons-container {
      color: $Button_Disable;
    }
    &.small {
      &:focus-within:not([disabled='true']),
      &.filled {
        & .cdek-input__label {
          color: $Bottom_60;
        }
      }
    }
  }

  &.readonly {
    background-color: transparent;
    box-shadow: unset;
    border: none;
    pointer-events: none;
  }

  &.error {
    background-color: $Error_5;

    &:hover {
      background-color: $Error_10;
    }

    &:focus-within:not([disabled='true']) {
      background-color: $Peak;
      border: 2px solid $Error;
      padding: 6px 12px 6px 14px;
    }

    & .cdek-input__input {
      caret-color: $Error;
    }

    & .icons-container {
      color: $Error;
    }
  }
  &.small {
    height: 36px;
    padding: 6px 6px 6px 16px;

    & .cdek-input__input {
      position: relative;
      top: -9px;
    }

    & .cdek-input__label {
      @include body-2;
    }

    &:focus-within:not([disabled='true']),
    &.filled {
      & .cdek-input__label {
        @include caption-1;

        color: $Primary;
        top: -17px;
        left: -16px;
      }
    }

    &:focus-within:not([disabled='true']) {
      padding: 4px 4px 4px 14px;
    }
    &.error {
      &:focus-within:not([disabled='true']) {
        border: 2px solid $Error;
      }

      &:focus-within:not([disabled='true']),
      &.filled {
        & .cdek-input__label {
          color: $Error;
        }
      }
    }
    &.readonly {
      &:focus-within:not([disabled='true']),
      &.filled {
        & .cdek-input__label {
          color: $Bottom_60;
          left: 0;
        }
      }
    }
  }
}
.visible-on-hover {
  opacity: 0;
  transition: all 0.1s ease;
}
// .tip {
//   @include caption-1;

//   display: flex;
//   align-items: center;
//   margin: 4px 0 0 16px;
//   color: $Bottom_66;
// }
</style>
