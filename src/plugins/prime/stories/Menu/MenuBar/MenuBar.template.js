import { ref } from 'vue';
import PBlockMenubar from '@/primeBlocks/PBlockMenubar/PBlockMenubar.vue';
import PBlockMenuItem from '@/primeBlocks/PBlockMenuItem/PBlockMenuItem.vue';

export const BasicTemplate = () => ({
  components: { PBlockMenubar },
  setup() {
    const items = [
      {
        label: 'Features',
      },
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
    ];

    return { items };
  },
  template: `
    <PBlockMenubar :model="items" />
  `,
});

export const WithIconTemplate = () => ({
  components: { PBlockMenubar },
  setup() {
    const items = [
      {
        label: 'Home',
        icon: 'ti ti-home',
      },
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
      {
        label: 'Settings',
        icon: 'ti ti-settings',
      },
    ];

    return { items };
  },
  template: `
    <PBlockMenubar :model="items" />
  `,
});

export const CustomTemplate = (args) => ({
  components: { PBlockMenubar },
  setup() {
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
          {
            label: 'Core',
            icon: 'ti ti-cpu',
            description: 'Основные возможности',
          },
          {
            label: 'UI Kit',
            icon: 'ti ti-palette',
            description: 'UI компоненты',
          },
        ],
      },
      {
        label: 'Settings',
        icon: 'ti ti-settings',
        description: 'Настройки приложения',
      },
    ]);

    return { args, items };
  },
  template: `
    <PBlockMenubar :model="items" v-bind="args" />
  `,
});

export const WithItemAsTemplate = () => ({
  components: { PBlockMenubar },
  setup() {
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

    return { items };
  },
  template: `
    <PBlockMenubar :model="items" item-as="button" />
  `,
});

export const WithSlotsTemplate = () => ({
  components: { PBlockMenubar, PBlockMenuItem },
  setup() {
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

    return { items };
  },
  template: `
    <PBlockMenubar :model="items">
      <template #start>
        <span class="ti ti-brand-vue" style="font-size: 1.5rem; margin-right: 0.5rem;" />
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <PBlockMenuItem v-bind="{ ...item, ...props.action }" />
      </template>
      <template #end>
        <button class="p-button p-button-text p-button-sm">Logout</button>
      </template>
    </PBlockMenubar>
  `,
});
