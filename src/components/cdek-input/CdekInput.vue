<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue: string;
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
  <label class="cdek-input" :class="value ? 'filled' : ''">
    <div class="cdek-input__content">
      <p class="cdek-input__label">
        {{ label }}
      </p>
      <input class="cdek-input__input" type="text" v-model="value" />
    </div>
    <div></div>
  </label>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
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
  padding: 8px 8px 8px 16px;
  height: 56px;
  background-color: $Surface_Neutral;
  box-shadow: inset 0px 1px 2px rgba(0, 33, 52, 0.05);
  box-sizing: border-box;
  border-radius: 8px;
  cursor: text;

  &:hover {
    background-color: $Primary_10;
  }

  &:focus-within,
  &.filled {
    & .cdek-input__label {
      @include caption-1;

      top: 0;
    }
  }

  &:focus-within {
    background-color: $Peak;
    border: 2px solid $Primary;
    padding: 6px 6px 6px 14px;
  }

  &__content {
    flex-grow: 1;
  }

  &__label {
    @include body-1;

    position: relative;
    top: 12px;
    transition: all 0.3s ease;
    color: $Bottom_60;
  }

  &__input {
    @include body-1;

    width: 100%;
    color: $Bottom;
    caret-color: $Primary;
  }
}
// .tip {
//   @include caption-1;

//   margin: 4px 0 0 16px;
//   color: $Bottom_66;
// }
</style>
