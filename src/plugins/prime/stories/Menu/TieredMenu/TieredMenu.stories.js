import {
  BasicTemplate,
  WithSelectedTemplate,
  WithSeparatorTemplate,
  CustomTemplate,
} from './TieredMenu.template';

export default {
  title: 'Prime/Menu/TieredMenu',
  parameters: {
    docs: {
      description: {
        component:
          'Компонент для отображения иерархического меню с вложенными подменю, которые открываются в виде вложенных оверлеев при наведении на пункт.',
      },
    },
    designTokens: { prefix: '--p-tieredmenu' },
  },
};

const baseItems = `[
  {
    label: 'Home',
    icon: 'ti ti-user',
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
]`;

export const Basic = {
  render: BasicTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="card flex justify-center">
    <TieredMenu :model="items" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(${baseItems});
</script>
        `.trim(),
      },
    },
  },
};

export const WithSelected = {
  render: WithSelectedTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<!-- TieredMenuSelected.vue -->
<script setup>
import { TieredMenu } from 'primevue';
import { ref } from 'vue';
import { cloneDeep } from 'lodash';

const SELECTED_CLASS = 'p-menuitem-checked';

const baseItems = [
  { label: 'Home', icon: 'ti ti-user', class: SELECTED_CLASS },
  { label: 'Features' },
  { label: 'Projects' },
];

const items = ref(cloneDeep(baseItems));

const clearSelectedClass = (menuItems) => {
  menuItems.forEach((item) => {
    if (item.class?.includes(SELECTED_CLASS)) {
      item.class = item.class
        .split(' ')
        .filter((c) => c !== SELECTED_CLASS)
        .join(' ')
        .trim() || undefined;
    }
    if (item.items) clearSelectedClass(item.items);
  });
};

const addCommandHandler = (menuItems) => {
  menuItems.forEach((item) => {
    item.command = () => {
      clearSelectedClass(items.value);
      item.class = item.class
        ? item.class + ' ' + SELECTED_CLASS
        : SELECTED_CLASS;
    };
    if (item.items) addCommandHandler(item.items);
  });
};

addCommandHandler(items.value);
</script>

<template>
  <TieredMenu :model="items" />
</template>
        `.trim(),
      },
    },
  },
};

export const WithSeparator = {
  render: WithSeparatorTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="card flex justify-center">
    <PBlockTieredMenu :model="items" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PBlockTieredMenu from '@/primeBlocks/PBlockTieredMenu/PBlockTieredMenu.vue';

const items = ref([
  { label: 'Home', icon: 'ti ti-user' },
  { label: 'Features' },
  { separator: true },
  { label: 'Projects', icon: 'ti ti-folder' },
  { label: 'Contact', icon: 'ti ti-user' },
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
  <div class="card flex justify-center">
    <TieredMenu :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <a v-bind="props.action" class="p-tieredmenu-item-link">
          <span v-if="item.icon" :class="['p-tieredmenu-item-icon', item.icon]" />
          <div class="p-tieredmenu-item-caption">
            <span class="p-tieredmenu-item-label">{{ item.label }}</span>
            <small v-if="item.description" class="p-tieredmenu-item-caption-text">{{ item.description }}</small>
          </div>
          <Badge v-if="item.badge" :value="item.badge" />
          <span v-if="hasSubmenu" class="p-tieredmenu-submenu-icon ti ti-chevron-right" />
        </a>
      </template>
    </TieredMenu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Badge } from 'primevue';

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
    label: 'Projects',
    icon: 'ti ti-folder',
    description: 'Список проектов',
    items: [
      { label: 'Active', icon: 'ti ti-circle-check', description: 'Активные проекты' },
      { label: 'Archived', icon: 'ti ti-archive', description: 'Архивные проекты' },
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
