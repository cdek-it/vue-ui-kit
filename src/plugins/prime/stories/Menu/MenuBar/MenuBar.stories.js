import {
  BasicTemplate,
  WithIconTemplate,
  CustomTemplate,
  WithItemAsTemplate,
  WithSlotsTemplate,
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
  <PBlockMenubar :model="items" />
</template>

<script setup>
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

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
  <PBlockMenubar :model="items" />
</template>

<script setup>
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

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
  <PBlockMenubar :model="items" />
</template>

<script setup>
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

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

export const WithItemAs = {
  render: WithItemAsTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Menubar с кастомным тегом/компонентом для пунктов меню через проп `itemAs`.',
      },
      source: {
        code: `
<template>
  <PBlockMenubar :model="items" item-as="button" />
</template>

<script setup>
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref([
  { label: 'Home', icon: 'ti ti-home' },
  {
    label: 'Features',
    icon: 'ti ti-star',
    items: [
      { label: 'Core', icon: 'ti ti-cpu' },
      { label: 'UI Kit', icon: 'ti ti-palette' },
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

export const WithSlots = {
  render: WithSlotsTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Menubar с использованием слотов `start`, `item`, `itemicon`, `submenuicon` и `end`.',
      },
      source: {
        code: `
<template>
  <PBlockMenubar :model="items">
    <template #start>
      <span class="ti ti-brand-vue" style="font-size: 1.5rem; margin-right: 0.5rem;" />
    </template>
    <template #item="{ item, props }">
      <PBlockMenuItem v-bind="{ ...item, ...props.action }" />
    </template>
    <template #itemicon="{ item }">
      <span v-if="item.icon" :class="item.icon" style="color: var(--p-primary-color);" />
    </template>
    <template #submenuicon>
      <span class="ti ti-chevron-down" style="font-size: 0.75rem;" />
    </template>
    <template #end>
      <button class="p-button p-button-text p-button-sm">Logout</button>
    </template>
  </PBlockMenubar>
</template>

<script setup>
import { ref } from 'vue';
import { PBlockMenubar, PBlockMenuItem } from '@cdek-it/vue-ui-kit';

const items = ref([
  { label: 'Home', icon: 'ti ti-home' },
  {
    label: 'Features',
    icon: 'ti ti-star',
    items: [
      { label: 'Core', icon: 'ti ti-cpu' },
      { label: 'UI Kit', icon: 'ti ti-palette' },
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
