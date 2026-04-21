import {
  BasicTemplate,
  WithIconTemplate,
  CustomTemplate,
} from './MenuBar.template';

export default {
  title: 'Prime/Menu/MenuBar',
  parameters: {
    docs: {
      description: {
        component:
          'Горизонтальная навигационная панель с поддержкой вложенных выпадающих подменю.',
      },
      story: { height: '300px' },
    },
    designTokens: { prefix: '--p-menubar' },
  },
};

export const Basic = {
  render: BasicTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Menubar :model="items" />
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { label: 'Features' },
  {
    label: 'Projects',
    items: [
      { label: 'Components' },
      { label: 'Blocks' },
      { label: 'UI Kit' },
      {
        label: 'Templates',
        items: [{ label: 'Apollo' }, { label: 'Ultima' }],
      },
    ],
  },
  {
    icon: 'ti ti-user',
    label: 'Contact',
    disabled: true,
  },
]);
</script>
        `.trim(),
      },
    },
  },
};

export const WithIcon = {
  render: WithIconTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Menubar :model="items" />
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { label: 'Home', icon: 'ti ti-home' },
  {
    label: 'Features',
    icon: 'ti ti-star',
    items: [
      { label: 'Core', icon: 'ti ti-cpu' },
      { label: 'Blocks', icon: 'ti ti-layout-grid' },
      { label: 'UI Kit', icon: 'ti ti-palette' },
      {
        label: 'Templates',
        icon: 'ti ti-template',
        items: [
          { label: 'Apollo', icon: 'ti ti-rocket' },
          { label: 'Ultima', icon: 'ti ti-diamond' },
        ],
      },
    ],
  },
  {
    label: 'Projects',
    icon: 'ti ti-folder',
    items: [
      { label: 'Active', icon: 'ti ti-circle-check' },
      { label: 'Archived', icon: 'ti ti-archive' },
    ],
  },
  { label: 'Settings', icon: 'ti ti-settings' },
]);
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
  <Menubar :model="items">
    <template #item="{ item, props }">
      <MenubarItem :item="item" :action-props="props.action" />
    </template>
  </Menubar>
</template>

<script setup>
import { ref } from 'vue';
import MenubarItem from './MenubarItem.vue';

const items = ref([
  {
    label: 'Home',
    icon: 'ti ti-home',
    description: 'Перейти на главную',
  },
  {
    label: 'Features',
    icon: 'ti ti-star',
    description: 'Explore features',
    badge: 'New',
    items: [
      { label: 'Core', icon: 'ti ti-cpu', description: 'Основные возможности' },
      { label: 'UI Kit', icon: 'ti ti-palette', description: 'UI компоненты' },
    ],
  },
  {
    label: 'Settings',
    icon: 'ti ti-settings',
    description: 'Настройки приложения',
  },
]);
</script>
        `.trim(),
      },
    },
  },
};
