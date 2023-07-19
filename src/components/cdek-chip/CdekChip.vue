<template>
  <button
    class="cdek-chip"
    :class="{
      'cdek-chip_selected': selected,
      'cdek-chip_disabled': disabled,
      'cdek-chip_small': small,
    }"
    @click="onClickChipHandler"
    :disabled="disabled"
  >
    <span v-if="iconEnabled" class="cdek-chip__icon__wrapper">
      <!-- @slot слот для иконки, показывается справа -->
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
  /**
   * Название чипа
   */
  label: string;
  modelValue?: boolean;
  /**
   *  Кол-во опций, показывается рядом с названием справа
   */
  amount?: number;
  disabled?: boolean;
  small?: boolean;
}

const slots = useSlots();

const props = withDefaults(defineProps<CdekChipProps>(), {
  small: false,
  modelValue: false,
  disabled: false,
});

const emit = defineEmits<{
  /**
   * v-model
   */
  (e: 'update:modelValue', value: boolean): void;
}>();

const selected = ref(props.disabled ? false : props.modelValue);

const onClickChipHandler = () => {
  if (props.disabled) {
    return;
  }
  selected.value = !selected.value;
};

watch(selected, () => {
  emit('update:modelValue', selected.value);
});

watch(
  () => props.disabled,
  () => {
    if (!props.disabled) {
      selected.value = false;
    }
  }
);

const amountEnabled = computed(
  () => typeof props.amount === 'number' && !Number.isNaN(props.amount)
);

const iconEnabled = computed(() => {
  return Boolean(slots.icon);
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
  transition: all 0.5s ease;

  &:not([disabled]) {
    cursor: pointer;
  }
  @include body-1;

  &:not(&_disabled) {
    &:focus-visible {
      outline: 2px solid $Success_40;
    }
  }

  &:not(&_disabled, &_selected) {
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
    width: 24px;
    height: 24px;

    :deep(svg) {
      width: 100%;
      height: 100%;
      transition: all 0.1s ease;

      path {
        stroke: $Primary_Calm;
      }
    }
  }

  &__text {
    padding: 0 4px;
    transition: color 0.3s ease;
  }

  &__amount {
    padding: 0 8px;
    color: $Tertiary_70;
    transition: color 0.4s ease;

    @include caption-1;
  }

  &_selected {
    background: $Primary;

    .cdek-chip__icon__wrapper {
      :deep(path) {
        stroke: $Peak;
      }
    }

    .cdek-chip__text {
      color: $Peak;
    }

    .cdek-chip__amount {
      color: $Peak-70;
    }
  }

  &_disabled {
    background: $Input_Disable;
    color: $Button_Disable;

    :deep(path) {
      stroke: $Button_Disable;
    }
  }

  &_small {
    padding: 8px 12px;

    @include body-2;

    .cdek-chip__amount {
      padding: 0 4px;
    }

    .cdek-chip__icon__wrapper {
      width: 20px;
      height: 20px;

      :deep(path) {
        transform: scale(0.88);
      }
    }
  }
}
</style>
