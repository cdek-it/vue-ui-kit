import {
  HorizontalTemplate,
  VerticalTemplate,
  CustomTemplate,
} from './MegaMenu.template';

export default {
  title: 'Prime/Menu/MegaMenu',
  parameters: {
    docs: {
      description: {
        component:
          'Расширенное меню с поддержкой многоколоночных подменю. Поддерживает горизонтальную и вертикальную ориентацию.',
      },
      story: { height: '300px' },
    },
    designTokens: {
      prefix: '--p-megamenu',
    },
  },
};

export const Horizontal = {
  render: HorizontalTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: 'Products',
    icon: 'ti ti-box',
    items: [
      [
        {
          label: 'UI Components',
          items: [
            { label: 'Form', icon: 'ti ti-forms' },
            { label: 'Button', icon: 'ti ti-hand-click' },
          ],
        },
      ],
    ],
  },
  { label: 'Contact', icon: 'ti ti-mail', disabled: true },
]);
</script>

<template>
  <PBlockMegaMenu :model="items" />
</template>`,
      },
    },
  },
};

export const Vertical = {
  render: VerticalTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: 'Products',
    icon: 'ti ti-box',
    items: [
      [
        {
          label: 'UI Components',
          items: [
            { label: 'Form', icon: 'ti ti-forms' },
            { label: 'Button', icon: 'ti ti-hand-click' },
          ],
        },
      ],
    ],
  },
]);
</script>

<template>
  <PBlockMegaMenu :model="items" orientation="vertical" />
</template>`,
      },
    },
  },
};

export const Custom = {
  render: CustomTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';
import { PBlockMenuItem } from '@cdek-it/vue-ui-kit';

const items = ref([
  {
    label: 'Products',
    icon: 'ti ti-box',
    items: [
      [
        {
          label: 'Components',
          items: [
            {
              label: 'Form',
              description: 'Input, Select, Checkbox',
              icon: 'ti ti-forms',
              badge: 'New',
            },
            {
              label: 'Button',
              description: 'Actions and triggers',
              icon: 'ti ti-hand-click',
            },
          ],
        },
      ],
    ],
  },
]);
</script>

<template>
  <PBlockMegaMenu :model="items">
    <template #item="{ item, props }">
      <PBlockMenuItem v-bind="{ ...item, ...props.action }" />
    </template>
  </PBlockMegaMenu>
</template>`,
      },
    },
  },
};
