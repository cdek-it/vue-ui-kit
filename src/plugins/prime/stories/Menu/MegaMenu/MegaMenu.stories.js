import { HorizontalTemplate, VerticalTemplate } from './MegaMenu.template';

export default {
  title: 'Prime/Menu/MegaMenu',
  parameters: {
    docs: {
      description: {
        component:
          'Компонент для создания многоколоночного меню с группировкой пунктов в подменю, поддерживает горизонтальную и вертикальную ориентацию.',
      },
    },
    designTokens: { prefix: '--p-megamenu' },
  },
};

const sourceItems = `[
  {
    label: 'MenuItem',
    icon: 'ti ti-user',
    items: [
      [
        {
          label: 'Submenu 1',
          items: [{ label: 'Item 1.1' }, { label: 'Item 1.2' }],
        },
      ],
      [
        {
          label: 'Submenu 2',
          items: [
            { label: 'Item 2.1', icon: 'ti ti-file' },
            { label: 'Item 2.2', icon: 'ti ti-file' },
          ],
        },
      ],
    ],
  },
  {
    label: 'MenuItem',
    icon: 'ti ti-user',
    items: [
      [
        {
          label: 'Submenu 1',
          items: [{ label: 'Item 1.1' }, { label: 'Item 1.2' }],
        },
      ],
    ],
  },
]`;

export const Horizontal = {
  render: HorizontalTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <MegaMenu :model="items" />
</template>

<script setup>
import { ref } from 'vue';

const items = ref(${sourceItems});
</script>
        `.trim(),
      },
    },
  },
};

export const Vertical = {
  render: VerticalTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <MegaMenu :model="items" orientation="vertical" />
</template>

<script setup>
import { ref } from 'vue';

const items = ref(${sourceItems});
</script>
        `.trim(),
      },
    },
  },
};
