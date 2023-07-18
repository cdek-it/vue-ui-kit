<template>
  <button
    class="cdek-chip"
    :class="{
      selected,
      disabled,
      small,
    }"
    @click="onClickChipHandler"
  >
    <span v-if="iconEnabled" class="cdek-chip__icon__wrapper">
      <slot name="icon" />
    </span>

    <span class="cdek-chip__text">
      {{ label }}
    </span>
    <span v-if="amountEnabled" class="cdek-chip__amount">
      {{ amount }}
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots, watch } from 'vue';

export interface CdekChipProps {
  label: string;
  modelValue?: boolean;
  amount?: number;
  disabled?: boolean;
  small?: boolean;
}

const slots = useSlots();

const props = withDefaults(defineProps<CdekChipProps>(), {
  small: false,
  modelValue: false,
});

const selected = ref(props.disabled ? false : props.modelValue);

const emit = defineEmits<{
  /**
   * v-model
   */
  (e: 'update:modelValue', value: boolean): void;
}>();

const amountEnabled = computed(
  () => typeof props.amount === 'number' && !Number.isNaN(props.amount)
);

const iconEnabled = computed(() => {
  return Boolean(slots.icon);
});

const onClickChipHandler = () => {
  if (props.disabled) return;
  selected.value = !selected.value;
};

watch(selected, () => {
  emit('update:modelValue', selected.value);
});
</script>

<style lang="scss" scoped>
.cdek-chip {
  display: inline-flex;
  align-items: center;
  border-radius: 100px;
  background: $Surface_Neutral;
  border: none;
  padding: 12px;
  outline-color: rgba(0, 0, 0, 0);

  @include body-1;

  &:not(.disabled) {
    &:focus-visible {
      outline: 2px solid $Success_40;
    }
  }

  &:not(.disabled, .selected) {
    @include media-hover {
      background: $Primary_10;

      span {
        color: $Primary-Active;

        :deep(path) {
          stroke: $Primary-Active;
        }
      }
    }
  }

  &__icon__wrapper {
    display: flex;
    align-items: center;
  }

  &__text {
    display: flex;
    padding: 0 4px;
    align-items: center;
  }

  &__amount {
    padding: 0 8px;
    color: $Tertiary_70;

    @include caption-1;
  }

  &.selected {
    background: $Primary;
    color: $Peak;

    :deep(path) {
      stroke: $Peak;
    }

    .cdek-chip__amount {
      color: $Peak-70;
    }
  }

  &.disabled {
    background: $Input_Disable;
    color: $Button_Disable;
  }

  &.small {
    padding: 8px 12px;

    @include body-2;

    .cdek-chip__amount {
      padding: 0 8px;
    }
  }
}
</style>
