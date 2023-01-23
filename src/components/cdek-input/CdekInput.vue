<script lang="ts" setup>
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    label?: string;
    tip?: string;
    value?: string;
  }>(),
  {}
);
const input = ref<string>(props.value || '');
</script>

<template>
  <label class="cdek-input">
    <div>
      <p class="cdek-input__label" :class="input ? 'filled' : ''">
        {{ label }}
      </p>
      <input type="text" v-model="input" />
    </div>
  </label>
  <p class="tip">{{ tip }}</p>
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
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 16px;
  height: 56px;
  background: $Surface_Neutral;
  box-shadow: inset 0px 1px 2px rgba(0, 33, 52, 0.05);
  box-sizing: border-box;
  border-radius: 8px;
  &:hover {
    background: $Primary_10;
  }
  &:focus-within {
    padding: 6px 6px 6px 14px;
    background-color: $Peak;
    border: 2px solid $Primary;
    & .cdek-input__label {
      @include caption-1;

      top: -2px;
    }
  }

  &__label {
    @include body-1;

    position: relative;
    top: 13px;
    transition: all 0.2s ease;
    color: $Bottom_60;
  }
  input {
    @include body-1;

    color: $Bottom;
    caret-color: $Primary;
  }
}
.tip {
  @include caption-1;

  margin: 4px 0 0 16px;
  color: $Bottom_66;
}
.filled {
  @include caption-1;

  top: -2px;
}
</style>
