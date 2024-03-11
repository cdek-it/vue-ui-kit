<template>
  <button
    :class="[
      $style['prefix-chip'],
      {
        [$style['prefix-chip_selected']]: selected,
        [$style['prefix-chip_disabled']]: disabled,
        [$style['prefix-chip_small']]: small,
      },
    ]"
    :disabled="disabled"
    type="button"
    @click="onClickChipHandler"
  >
    <span v-if="iconEnabled" :class="$style['prefix-chip__icon__wrapper']">
      <!-- @slot слот для иконки, показывается слева -->
      <slot name="icon" />
    </span>

    <span :class="$style['prefix-chip__text']">
      {{ label }}
    </span>
    <span v-if="amountEnabled" :class="$style['prefix-chip__amount']">
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

const updateModelValue = (value: boolean) => {
  emit('update:modelValue', value);
  selected.value = value;
};

watch(
  () => props.modelValue,
  (newValue) => {
    if (props.disabled) {
      updateModelValue(false);
      return;
    }
    selected.value = newValue;
  }
);

const onClickChipHandler = () => {
  if (props.disabled) {
    return;
  }
  updateModelValue(!selected.value);
};

watch(
  () => props.disabled,
  () => {
    if (props.disabled) {
      updateModelValue(false);
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

<style lang="scss" scoped module>
.prefix-chip {
  display: inline-flex;
  align-items: center;
  border-radius: 100px;
  background: $Surface_Neutral;
  border: none;
  padding: 12px;
  outline-color: rgba(0, 0, 0, 0);
  transition: all 0.3s ease;

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

      path {
        transition: all 0.3s ease;
        stroke: $Primary_Calm;
      }
    }
  }

  &__text {
    padding: 0 4px;
    transition: all 0.3s ease;
  }

  &__amount {
    padding: 0 8px;
    color: $Tertiary_70;
    transition: all 0.3s ease;

    @include caption-1;
  }

  &_selected {
    background: $Primary;

    .prefix-chip__icon__wrapper {
      :deep(path) {
        stroke: $Peak;
      }
    }

    .prefix-chip__text {
      color: $Peak;
    }

    .prefix-chip__amount {
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

    .prefix-chip__amount {
      padding: 0 4px;
    }

    .prefix-chip__icon__wrapper {
      width: 20px;
      height: 20px;

      :deep(path) {
        transform: scale(0.88);
      }
    }
  }
}
</style>
