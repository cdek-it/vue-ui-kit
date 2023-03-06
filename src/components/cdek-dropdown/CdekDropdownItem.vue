<script lang="ts" setup>
import { computed, useSlots } from "vue";
import type { Component } from "vue";
import CheckIcon from './svg/check.svg?component';

export interface IOption {
  value: string | number,
  title: string | number,
  icon?: Component,
  disabled?: boolean,
  color?: string
  [props: string]: any
}

const props = withDefaults(
  defineProps<{
    value: IOption;
    selected?: boolean;
    active?: boolean;
  }>(),
  {
    selected: false,
    active: false,
  }
);
const colorStyle = computed(() => ({'--list-item-color': props.value.color}));
</script>

<template>
  <div
    class="cdek-dropdown-item"
    :style="colorStyle"
    :class="{
      'cdek-dropdown-item_active': active,
      'cdek-dropdown-item_selected': selected,
      'cdek-dropdown-item_disabled': value.disabled,
      'cdek-dropdown-item_colored': Boolean(value.color),
    }"
  >
    <div
      class="cdek-dropdown-item__left-icon"
      v-if="Boolean(value.icon)"
    >
      <component :is="value.icon" />
    </div>
    <div class="cdek-dropdown-item__content">
      <slot />
    </div>
    <CheckIcon
      class="cdek-dropdown-item__checkmark"
      v-if="selected"
    />
  </div>
</template>

<style lang="scss" scoped>
.cdek-dropdown-item {
  $this: &;

  color: $Bottom;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;

  &:hover:not(&_disabled),
  &_active:not(&_disabled),
  &_selected {
    background: $Surface_Access;
  }

  &_colored {
    color: var(--list-item-color);

    #{$this}__left-icon {
      stroke: var(--list-item-color);
    }
  }

  &_disabled {
    color: $Bottom_40;
    cursor: default;

    &#{$this}_selected {
      background: $Surface_Neutral;
    }

    #{$this}__left-icon {
      stroke: $Bottom_30;
    }
  }

  &__content {
    @include body-2;
  }

  &__checkmark {
    stroke: $Primary;
    margin-left: auto;
    height: 20px;
  }

  &__left-icon {
    margin-right: 12px;
    stroke: $Primary;
  }

}
</style>
