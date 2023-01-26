<script lang="ts" setup>
import { computed } from 'vue';

import AlertTriangleIcon from './svg/alert-triangle.svg?component';
import BanIcon from './svg/ban.svg?component';
import CircleCheckIcon from './svg/circle-check.svg?component';
import InfoCircleIcon from './svg/info-circle.svg?component';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    placeholder?: string;
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
    <label class="cdek-input__control">
      <!-- название -->
      <div
        v-if="placeholder"
        class="cdek-input__placeholder"
        :class="{ 'cdek-input__placeholder_filled': value }"
      >
        {{ placeholder }}
      </div>

      <!-- иконки слева -->
      <input class="cdek-input__input" v-model="value" />
      <!-- иконки справа -->
    </label>
    <div class="cdek-input__tip">
      <slot
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
.cdek-input {
  $padding-left: 16px;

  &__control {
    $outline-width: 2px;

    position: relative;
    display: flex;
    align-items: center;
    height: 56px;

    outline: solid $outline-width transparent;
    padding-top: 22px;
    padding-inline: calc(#{$padding-left} - #{$outline-width});
    padding-bottom: 6px;

    box-sizing: border-box;
    background: $Surface_Neutral;
    box-shadow: inset 0px 1px 2px rgba(0, 33, 52, 0.05);
    border-radius: 8px;
    transition: background-color 0.3s ease, outline-color 0.3s ease;
    cursor: text;

    @include media-hover {
      background: $Primary_10;
    }

    &:focus-within {
      background: $Peak;
      outline-color: $Primary;
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

  &__placeholder {
    @include body-1;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: $Bottom_60;
    transition: all 0.3s ease;

    &_filled,
    .cdek-input__control:focus-within & {
      @include caption-1;

      top: 8px;
      transform: translateY(0);
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
    :slotted(.error) {
      color: $Error;
    }
    :slotted(.success) {
      color: $Success;
    }

    :slotted(svg) {
      vertical-align: bottom;
      margin-right: 4px;
    }
  }
}
</style>
