import {
  BasicTemplate,
  MultipleTemplate,
  CustomTemplate,
} from './PanelMenu.template';

export default {
  title: 'Prime/Menu/PanelMenu',
  argTypes: {
    showIcons: {
      name: 'Show Icons',
      control: 'boolean',
      description: 'Показывать иконки в пунктах меню',
    },
  },
  args: {
    showIcons: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Аккордеон-меню с поддержкой вложенных подменю и раскрытием нескольких панелей.',
      },
    },
    designTokens: { prefix: '--p-panelmenu' },
  },
};

const baseItemsWithIcons = `[
  {
    label: 'Home',
    icon: 'ti ti-home',
    items: [
      { label: 'Components' },
      { label: 'Blocks' },
      { label: 'UI Kit' },
      { label: 'Templates', items: [{ label: 'Apollo' }, { label: 'Ultima' }] },
    ],
  },
  { label: 'Features', icon: 'ti ti-star' },
  {
    label: 'Projects',
    icon: 'ti ti-folder',
    items: [
      { label: 'Components' },
      { label: 'Blocks' },
      { label: 'UI Kit' },
    ],
  },
  { label: 'Contact', icon: 'ti ti-user', disabled: true },
]`;

export const Basic = {
  render: BasicTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <PBlockPanelMenu :model="items" />
</template>

<script setup>
import { ref } from 'vue';
import { PBlockPanelMenu } from '@cdek-it/vue-ui-kit';

const items = ref([
  {
    label: 'Home',
    items: [
      { label: 'Components' },
      { label: 'Blocks' },
      { label: 'UI Kit' },
      { label: 'Templates', items: [{ label: 'Apollo' }, { label: 'Ultima' }] },
    ],
  },
  { label: 'Features' },
  {
    label: 'Projects',
    items: [{ label: 'Components' }, { label: 'Blocks' }, { label: 'UI Kit' }],
  },
  { label: 'Contact', disabled: true },
]);
</script>
        `.trim(),
      },
    },
  },
};

export const Multiple = {
  render: MultipleTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <PBlockPanelMenu :model="items" multiple />
</template>

<script setup>
import { ref } from 'vue';
import { PBlockPanelMenu } from '@cdek-it/vue-ui-kit';

const items = ref(${baseItemsWithIcons});
</script>
        `.trim(),
      },
    },
  },
};

export const Custom = {
  render: CustomTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <PBlockPanelMenu :model="items" multiple>
    <template #item="{ item, props, root }">
      <PBlockMenuItem v-bind="{ ...item, ...props.action }" :root="root" />
    </template>
  </PBlockPanelMenu>
</template>

<script setup>
import { ref } from 'vue';
import { PBlockPanelMenu, PBlockMenuItem } from '@cdek-it/vue-ui-kit';

const items = ref([
  {
    label: 'Dashboard',
    icon: 'ti ti-layout-dashboard',
    description: 'Главная страница',
    items: [
      { label: 'Analytics', icon: 'ti ti-chart-line', description: 'Аналитика данных' },
      { label: 'Reports', icon: 'ti ti-file-analytics', description: 'Отчёты' },
      { label: 'Statistics', icon: 'ti ti-chart-bar', description: 'Статистика' },
    ],
  },
  {
    label: 'Features',
    icon: 'ti ti-star',
    description: 'Explore features',
    badge: 'New',
  },
  {
    label: 'Files',
    icon: 'ti ti-folder',
    description: 'Файловое хранилище',
    items: [
      { label: 'Documents', icon: 'ti ti-file-text', description: 'Документы' },
      { label: 'Photos', icon: 'ti ti-photo', description: 'Фотографии' },
    ],
  },
  {
    label: 'Settings',
    icon: 'ti ti-settings',
    description: 'Настройки приложения',
    disabled: true,
  },
]);
</script>
        `.trim(),
      },
    },
  },
};
