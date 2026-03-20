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
  <MegaMenu :model="items" />
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
  <MegaMenu :model="items" orientation="vertical" />
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
  <MegaMenu :model="items">
    <template #item="{ item, props }">
      <a v-bind="props.action" class="p-megamenu-item-link">
        <span v-if="item.icon" :class="['p-megamenu-item-icon', item.icon]" />
        <div class="megamenu-item-label">
          <span class="p-megamenu-item-label">{{ item.label }}</span>
          <small v-if="item.description" class="megamenu-item-caption">{{ item.description }}</small>
        </div>
        <Badge v-if="item.badge" :value="item.badge" />
      </a>
    </template>
  </MegaMenu>
</template>`,
      },
    },
  },
};
