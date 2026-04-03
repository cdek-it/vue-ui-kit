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
        <svg v-if="item.items" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-megamenu-submenu-icon" aria-hidden="true" data-pc-section="submenuicon"><path d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z" fill="currentColor"></path></svg>
      </a>
    </template>
  </MegaMenu>
</template>`,
      },
    },
  },
};
