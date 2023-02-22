<script lang="ts" setup>

export type BadgeProps = {
  type?: 'success' | 'error' | 'warning' | 'info' | 'disabled' | 'neutral';

  /**
   * Вариант фона: светлый или темный
   */
  variant?: 'light' | 'dark';
  /**
   * Текст
   */
  text: string;
};

const props = withDefaults(defineProps<BadgeProps>(), { type: 'info', variant: 'light' });
</script>

<template>
<div class="badge" :class="[type, variant]">
  {{ text }}
</div>
</template>

<style lang="scss" scoped>
.badge {
  @include badge-1;

  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;

  &.dark {
    color: $Peak;

    &.success {
      background: $Success_70;
    }

    &.warning {
      background: $Attention;
    }

    &.error {
      background: $Error;
    }

    &.info {
      background: $Secondary_Calm;
    }

    &.disabled {
      background: $Button_Disable;
    }

    &.neutral {
      background: $Tertiary;
    }
  }

  &.light {
    &.success {
      background: $Success_5;
      color: $Success;
    }

    &.warning {
      background: $Attention_5;
      color: $Attention;
    }

    &.error {
      background: $Error_5;
      color: $Error;
    }

    &.info {
      background: $Surface_Secondary;
      color: $Secondary;
    }

    &.disabled {
      background: $Surface_Neutral;
      color: $Bottom_50;
    }

    &.neutral {
      background: $Surface_Marine;
      color: $Tertiary;
    }
  }
}
</style>
