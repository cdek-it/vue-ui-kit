<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { IconInfoCircle } from '@tabler/icons-vue';
import { FloatLabel } from 'primevue';
import ExtraInputTextField from './ExtraInputTextField.vue';
import type { ExtraInputTextProps } from './types';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<ExtraInputTextProps>(), {
  clearable: true,
});

const attrs = useAttrs();

const resolvedLabelPosition = computed(() => {
  return props.labelPosition ?? 'default';
});

const isFloatLabel = computed(() => resolvedLabelPosition.value === 'float');
const isLeftLabel = computed(() => resolvedLabelPosition.value === 'left');

const inputId = computed(() => {
  if (typeof attrs.id === 'string' && attrs.id) {
    return attrs.id;
  }

  const labelValue = props.label?.trim();

  if (!labelValue) {
    return undefined;
  }

  const sanitizedLabel = labelValue
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return sanitizedLabel ? `extra-inputtext-${sanitizedLabel}` : undefined;
});

defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'value-change', value: string): void;
}>();
</script>

<template>
  <div
    class="extra-inputtext"
    :class="{ 'extra-inputtext--left-label': isLeftLabel }"
  >
    <label
      v-if="isLeftLabel && label"
      :for="inputId"
      class="extra-inputtext__left-label"
    >
      {{ label }}
      <span v-if="required" class="extra-inputtext__required">*</span>
    </label>

    <component
      :is="isFloatLabel ? FloatLabel : 'div'"
      v-bind="isFloatLabel ? { variant: 'in' } : {}"
      class="extra-inputtext__control"
    >
      <ExtraInputTextField
        v-bind="attrs"
        :id="inputId"
        :modelValue="modelValue"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :invalid="invalid"
        :required="required"
        :fluid="fluid"
        :size="size"
        :clearable="clearable"
        @update:modelValue="$emit('update:modelValue', $event)"
        @value-change="$emit('value-change', $event)"
      >
        <template #clear-icon>
          <slot name="clear-icon" />
        </template>
      </ExtraInputTextField>
      <label v-if="isFloatLabel" :for="inputId">
        {{ label
        }}<span v-if="required" class="extra-inputtext__required">*</span>
      </label>
    </component>

    <div v-if="caption || info || $slots.caption" class="extra-inputtext__meta">
      <slot name="caption">
        <span>{{ caption }}</span>
      </slot>
      <span
        v-if="info"
        class="extra-inputtext__info"
        :title="info"
        :aria-label="info"
      >
        <IconInfoCircle size="1rem" />
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.extra-inputtext {
  &__control {
    width: 100%;
  }

  &--left-label {
    display: flex;
    align-items: center;
    gap: var(--p-spacing-2x, 0.5rem);
  }

  &__left-label {
    white-space: nowrap;
  }

  &__meta {
    margin-top: var(--p-spacing-1x, 0.25rem);
    display: inline-flex;
    align-items: center;
    gap: var(--p-spacing-1x, 0.25rem);
    color: var(--p-text-muted-color, inherit);
    font-size: var(--p-fonts-font-size-200, 0.875rem);
  }

  &__info {
    display: inline-flex;
    align-items: center;
    cursor: help;
  }
}

.extra-inputtext__required {
  color: var(--p-red-500);
  margin-left: var(--p-spacing-1x);
}
</style>
