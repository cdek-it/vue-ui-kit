<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
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
  <div class="cdek-input">
    <!-- название -->
    <label class="cdek-input__control">
      <!-- иконки слева -->
      <input class="cdek-input__input" v-model="value" />
      <!-- иконки справа -->
    </label>
    <div class="cdek-input__tip">
      <!-- подсказка или ошибка -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cdek-input {
  &__control {
    --border-width: 0px;

    --padding-top: calc(24px - var(--border-width));
    --padding-left-right: calc(16px - var(--border-width));
    --padding-bottom: calc(8px - var(--border-width));

    display: flex;
    align-items: center;
    height: 56px;

    padding-top: var(--padding-top);
    padding-inline: var(--padding-left-right);
    padding-bottom: var(--padding-bottom);

    box-sizing: border-box;
    background: $Surface_Neutral;
    box-shadow: inset 0px 1px 2px rgba(0, 33, 52, 0.05);
    border-radius: 8px;
    transition: background-color 0.3s ease;
    cursor: text;

    @include media-hover {
      background: $Primary_10;
    }

    &:focus-within {
      --border-width: 2px;

      background: $Peak;
      border: 2px solid $Primary;
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
  }
}
</style>
