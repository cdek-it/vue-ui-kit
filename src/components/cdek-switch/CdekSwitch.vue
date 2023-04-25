<script lang="ts" setup>
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

const enabled = ref(false);
</script>

<template>
  <div class="cdek-switch">
    <Switch
      v-model="enabled"
      :class="{ 'cdek-switch__bg_enabled': enabled }"
      class="cdek-switch__bg"
    >
      <span
        :class="{ 'cdek-switch__circle_enabled': enabled }"
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
  }

  &:deep(#{$this}__bg_enabled) {
    background: $Primary;
  }

  &__circle {
    $width: 26px;
    $offset: 2px;

    display: inline-block;
    width: $width;
    height: 26px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.01),
      0px 3px 1px rgba(0, 0, 0, 0.03);
    border-radius: 100px;
    background: $Peak;
    position: absolute;
    top: $offset;
    left: $offset;
    transition: left ease $transition-speed;

    &_enabled {
      left: calc(100% - #{$width} - #{$offset});
    }
  }
}
</style>
