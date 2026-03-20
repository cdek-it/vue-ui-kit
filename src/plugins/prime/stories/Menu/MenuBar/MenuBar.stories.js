import { BasicTemplate, WithIconTemplate } from './MenuBar.template';

export default {
  title: 'Prime/Menu/MenuBar',
  parameters: {
    docs: {
      description: {
        component:
          'Горизонтальная навигационная панель с поддержкой вложенных выпадающих подменю.',
      },
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
