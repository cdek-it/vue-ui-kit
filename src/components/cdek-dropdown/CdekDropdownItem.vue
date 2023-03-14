<script lang="ts" setup>
import { computed } from 'vue';
import type { Component } from 'vue';
import CheckIcon from './svg/check.svg?component';

export interface IItemValue {
  value: string | number;
  title: string | number;
  icon?: Component;
  disabled?: boolean;
  color?: string;
  [props: string]: any;
}

const props = withDefaults(
  defineProps<{
    /**
     * Элементы выпадающего списка.
     *
     *   `value: string | number;` - значение, которое засетится в modelValue
     *
     *   `title: string | number;` - текст, который отображается в списке
     *
     *   `icon?: Component;` - компонент иконки, выводится слева от текста
     *
     *   `disabled?: boolean;` - признак неактивности. неактивный элемент нельзя выбрать, так же в списке он будет выделен серым цветом
     *
     *   `color?: string;` - цвет в HEX. Если указан, то в этот цвет перекрасится текст и иконка
     *
     */
    value: IItemValue;
    selected?: boolean;
    active?: boolean;
  }>(),
  {
    selected: false,
    active: false,
  }
);
const colorStyle = computed(() => ({ '--list-item-color': props.value.color }));
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
    <div class="cdek-dropdown-item__left-icon" v-if="Boolean(value.icon)">
      <component :is="value.icon" />
    </div>
    <div class="cdek-dropdown-item__content">
      <slot />
    </div>
    <CheckIcon class="cdek-dropdown-item__checkmark" v-if="selected" />
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
  transition: background-color 0.3s ease, outline-color 0.3s ease;

  @include media-hover {
    &:not(#{$this}_disabled) {
      background: $Surface_Access;
    }
  }

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
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__checkmark {
    stroke: $Primary;
    margin-left: auto;
    height: 20px;
    flex-shrink: 0;
  }

  &__left-icon {
    margin-right: 12px;
    stroke: $Primary;
    flex-shrink: 0;
  }
}
</style>
