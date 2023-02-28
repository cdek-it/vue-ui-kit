<script lang="ts" setup>
import { computed, useSlots } from "vue";
import CheckIcon from './svg/check.svg?component';

interface IOption {
  value: string | number,
  title: string | number,
  [props: string]: any
}

const props = withDefaults(
  defineProps<{
    option?: IOption;
    selected?: boolean;
    disabled?: boolean;
    color?: string;
  }>(),
  {
    selected: false,
    disabled: false,
    color: undefined
  }
);

const slots = useSlots();
const hasLeftIcon = computed(() => Boolean(slots['icon-left']));

const colorStyle = computed(() => ({'--list-item-color': props.color}));

const emit = defineEmits<{
  (e: 'select', value?: IOption): void;
}>();

const onSelect = () => {
  emit('select', props.option);
}
</script>

<template>
<div
  class="cdek-list-item"
  :style="colorStyle"
  :class="{
    'cdek-list-item_disabled': disabled,
    'cdek-list-item_selected': selected,
    'cdek-list-item_colored': Boolean(color),
  }"
  @click="onSelect"
>
  <div
    class="cdek-list-item__left-icon"
    v-if="hasLeftIcon"
  >
    <slot name="icon-left" />
  </div>
  <div class="cdek-list-item__content">
    <slot />
  </div>
  <CheckIcon
    class="cdek-list-item__checkmark"
    v-if="selected"
  />
</div>
</template>

<style lang="scss" scoped>
.cdek-list-item {
  $this: &;

  color: $Bottom;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;

  &:hover:not(&_disabled),
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
