import {
  PopupTemplate,
  BasicTemplate,
  WithIconTemplate,
  GroupedTemplate,
  CustomTemplate,
} from './Menu.template';

export default {
  title: 'Prime/Menu/Menu',
  parameters: {
    docs: {
      description: {
        component:
          'Компонент навигационного меню, поддерживает режим popup (по нажатию кнопки) и inline-отображение, группировку пунктов и кастомные шаблоны.',
      },
    },
    designTokens: { prefix: '--p-menu' },
  },
};

export const Popup = {
  render: PopupTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Button type="button" label="Show Menu" @click="toggle" />
  <Menu ref="menu" :model="items" :popup="true" />
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
  { label: 'New', icon: 'ti ti-file-plus' },
  { label: 'Search', icon: 'ti ti-search' },
  { separator: true },
  { label: 'Export', icon: 'ti ti-download' },
]);

const toggle = (event) => menu.value.toggle(event);
</script>
        `.trim(),
      },
    },
  },
};

export const Basic = {
  render: BasicTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Button type="button" label="Show Menu" @click="toggle" />
  <Menu ref="menu" :model="items" :popup="true" />
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
  { label: 'New' },
  { label: 'Search' },
  { separator: true },
  { label: 'Export' },
]);

const toggle = (event) => menu.value.toggle(event);
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
  <Button type="button" label="Options" @click="toggle" />
  <Menu ref="menu" :model="items" :popup="true" />
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
  { label: 'New Document', icon: 'ti ti-file-plus' },
  { label: 'Open File', icon: 'ti ti-folder-open' },
  { label: 'Save', icon: 'ti ti-device-floppy' },
  { separator: true },
  { label: 'Print', icon: 'ti ti-printer' },
  { label: 'Export', icon: 'ti ti-download' },
]);

const toggle = (event) => menu.value.toggle(event);
</script>
        `.trim(),
      },
    },
  },
};

export const Grouped = {
  render: GroupedTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Button type="button" label="Show Grouped Menu" @click="toggle" />
  <Menu ref="menu" :model="items" :popup="true" />
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
  {
    label: 'File',
    items: [
      { label: 'New', icon: 'ti ti-plus' },
      { label: 'Open', icon: 'ti ti-folder-open' },
      { label: 'Save', icon: 'ti ti-device-floppy' },
    ],
  },
  {
    label: 'Edit',
    items: [
      { label: 'Cut', icon: 'ti ti-cut' },
      { label: 'Copy', icon: 'ti ti-copy' },
      { label: 'Paste', icon: 'ti ti-clipboard' },
    ],
  },
]);

const toggle = (event) => menu.value.toggle(event);
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
  <Button type="button" label="Show Menu with Captions" @click="toggle" />
  <Menu ref="menu" :model="items" :popup="true">
    <template #item="{ item, props }">
      <a v-bind="props.action" class="p-menu-item-link">
        <span v-if="item.icon" :class="['p-menu-item-icon', item.icon]"></span>
        <div class="menu-item-label">
          <span class="p-menu-item-label">{{ item.label }}</span>
          <small v-if="item.caption" class="menu-item-caption">{{ item.caption }}</small>
        </div>
      </a>
    </template>
  </Menu>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
  { label: 'New Document', caption: 'Create a new document', icon: 'ti ti-file-plus' },
  { label: 'Open File', caption: 'Open an existing file', icon: 'ti ti-folder-open' },
  { separator: true },
  { label: 'Save', caption: 'Save current document', icon: 'ti ti-device-floppy' },
]);

const toggle = (event) => menu.value.toggle(event);
</script>
        `.trim(),
      },
    },
  },
};
