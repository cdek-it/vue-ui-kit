<script lang="ts" setup>
import CdekBadge from '@/components/cdek-badge/CdekBadge.vue';
import type { IBadgeProps } from '@/components/cdek-badge/CdekBadge.vue';
import CdekButton from '@/components/cdek-button/CdekButton.vue';

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
  <div class="cdek-confirm">
    <div class="cdek-confirm__header" v-if="title">
      <div class="cdek-confirm__header__title">
        {{ title }}
        <CdekBadge v-if="badge" v-bind="badge" />
      </div>
      <div class="cdek-confirm__header__hint" v-if="hint">
        {{ hint }}
      </div>
    </div>
    <div class="cdek-confirm__content">
      {{ content }}
    </div>
    <div class="cdek-confirm__footer" v-if="footer">
      <CdekButton
        v-if="footer.accept"
        theme="primary"
        @click="footer?.accept?.onClick"
        width="content"
      >
        {{ footer?.accept?.text }}
      </CdekButton>
      <CdekButton
        v-if="footer?.cancel"
        theme="outline"
        @click="footer?.cancel?.onClick"
        width="content"
      >
        {{ footer?.cancel?.text }}
      </CdekButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cdek-confirm {
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

    .cdek-badge {
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

    .cdek-button {
      margin-right: 16px;
    }
  }
}
</style>
