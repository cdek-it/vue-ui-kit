<script lang="ts" setup>
export interface IBadgeProps {
  type?: 'positive' | 'negative' | 'process' | 'info' | 'deactive' | 'neutral';

  /**
   * Вариант фона: светлый или темный
   */
  variant?: 'light' | 'dark';
  /**
   * Текст
   */
  text?: string;
}

const props = withDefaults(defineProps<IBadgeProps>(), {
  type: 'info',
  variant: 'light',
  text: '',
});
</script>

<template>
  <div :class="[$style['prefix-badge'], type, variant]">
    <slot>
      {{ text }}
    </slot>
  </div>
</template>

<style lang="scss" scoped module>
.prefix-badge {
  @include badge-1;

  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;

  &.dark {
    color: $Peak;

    &.positive {
      background: $Success_70;
    }

    &.process {
      background: $Attention;
    }

    &.negative {
      background: $Error;
    }

    &.info {
      background: $Secondary_Calm;
    }

    &.deactive {
      background: $Button_Disable;
    }

    &.neutral {
      background: $Tertiary;
    }
  }

  &.light {
    &.positive {
      background: $Success_5;
      color: $Success;
    }

    &.process {
      background: $Attention_5;
      color: $Attention;
    }

    &.negative {
      background: $Error_5;
      color: $Error;
    }

    &.info {
      background: $Surface_Secondary;
      color: $Secondary;
    }

    &.deactive {
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
