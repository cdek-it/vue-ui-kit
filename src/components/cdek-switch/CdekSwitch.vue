<script lang="ts" setup>
import { computed } from 'vue';
import { Switch } from '@headlessui/vue';

const props = defineProps<{
  modelValue: boolean;
  disabled?: boolean;
  small?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();

const enabled = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (!props.disabled) {
      emit('update:modelValue', value);
    }
  },
});
</script>

<template>
  <div class="cdek-switch">
    <Switch
      v-model="enabled"
      :disabled="disabled"
      :class="{
        'cdek-switch__bg_enabled': enabled,
        'cdek-switch__bg_small': small,
      }"
      class="cdek-switch__bg"
    >
      <span
        :class="{
          'cdek-switch__circle_enabled': enabled,
          'cdek-switch__circle_disabled': disabled,
          'cdek-switch__circle_small': small,
        }"
        class="cdek-switch__circle"
      />
    </Switch>
  </div>
</template>

<style lang="scss" scoped>
.cdek-switch {
  $this: &;
  $transition-speed: 0.1s;

  display: inline-block;

  &:deep(#{$this}__bg) {
    width: 51px;
    height: 30px;
    background: $Tertiary_40;
    border-radius: 36.5px;
    outline: none;
    border: none;
    position: relative;
    cursor: pointer;
    transition: background-color ease $transition-speed;

    &[disabled] {
      background: $Bottom_20;
      pointer-events: none;
    }
  }

  &:deep(#{$this}__bg_enabled) {
    background: $Primary;

    @include media-hover {
      background: $Primary_Button_Hover;
    }

    &[disabled] {
      background: $Button_Disable;
    }
  }

  &:deep(#{$this}__bg_small) {
    width: 40px;
    height: 24px;
  }

  &__circle {
    --size: 26px;
    $offset: 2px;

    display: inline-block;
    width: var(--size);
    height: var(--size);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.01),
      0px 3px 1px rgba(0, 0, 0, 0.03);
    border-radius: 100px;
    background: $Peak;
    position: absolute;
    top: $offset;
    left: $offset;
    transition: left ease $transition-speed;

    &_enabled {
      left: calc(100% - var(--size) - #{$offset});
    }

    &_disabled {
      background: $Peak_80;
      box-shadow: none;
    }

    &_small {
      --size: 20px;
    }
  }
}
</style>
