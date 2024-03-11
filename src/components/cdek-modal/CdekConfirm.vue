<script lang="ts" setup>
import BaseBadge from '../base-badge/BaseBadge.vue';
import type { IBadgeProps } from '../base-badge/BaseBadge.vue';
import BaseButton from '../base-button/BaseButton.vue';

export interface IConfirmProps {
  /**
   * заголовок
   */
  title?: string;
  /**
   * CdekBadge
   */
  badge?: IBadgeProps;
  hint?: string;
  content: string;
  /**
   * Кнопки accept/cancel и коллбеки на них
   */
  footer?: {
    accept?: {
      text: string;
      onClick: () => any;
    };
    cancel?: {
      text: string;
      onClick: () => any;
    };
  };
}

const props = withDefaults(defineProps<IConfirmProps>(), {});
</script>

<template>
  <div :class="$style['prefix-confirm']">
    <div :class="$style['prefix-confirm__header']" v-if="title">
      <div :class="$style['prefix-confirm__header__title']">
        {{ title }}
        <BaseBadge v-if="badge" v-bind="badge" />
      </div>
      <div :class="$style['prefix-confirm__header__hint']" v-if="hint">
        {{ hint }}
      </div>
    </div>
    <div :class="$style['prefix-confirm__content']">
      {{ content }}
    </div>
    <div :class="$style['prefix-confirm__footer']" v-if="footer">
      <BaseButton
        v-if="footer.accept"
        theme="primary"
        @click="footer?.accept?.onClick"
        width="content"
      >
        {{ footer?.accept?.text }}
      </BaseButton>
      <BaseButton
        v-if="footer?.cancel"
        theme="outline"
        @click="footer?.cancel?.onClick"
        width="content"
      >
        {{ footer?.cancel?.text }}
      </BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped module>
.prefix-confirm {
  padding: 20px 24px;

  &__header {
    display: flex;
    flex-flow: row;
    align-items: center;
    border-bottom: 1px solid $Bottom_10;
    padding-bottom: 20px;
    margin-bottom: 32px;

    @include media-sm {
      flex-flow: column;
      align-items: flex-start;
    }

    &__title {
      @include headline-3;
      display: flex;
      align-items: center;
    }

    .prefix-badge {
      margin-left: 20px;
    }

    &__hint {
      @include headline-7;
      font-weight: 400;
      color: $Tertiary;
      margin-right: 68px;
      margin-left: auto;

      @include media-sm {
        margin-left: 0;
        margin-right: 68px;
      }
    }
  }

  &__footer {
    display: flex;
    flex-flow: row;
    border-top: 1px solid $Bottom_10;
    padding-top: 20px;
    margin-top: 32px;

    @include media-sm {
      flex-flow: column;
      gap: 16px;
    }

    .prefix-button {
      margin-right: 16px;
    }
  }
}
</style>
