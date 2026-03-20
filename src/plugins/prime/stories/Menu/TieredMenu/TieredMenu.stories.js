import { BasicTemplate, WithSelectedTemplate } from './TieredMenu.template';

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
<template>
  <div class="card flex justify-center">
    <TieredMenu :model="items" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(${baseItems.replace(
          "label: 'Home',",
          "label: 'Home',\n    class: 'p-menuitem-checked',"
        )});
</script>
        `.trim(),
      },
    },
  },
};
