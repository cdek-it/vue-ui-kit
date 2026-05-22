import { ref } from 'vue';
import PBlockMenubar from '@/primeBlocks/PBlockMenubar/PBlockMenubar.vue';

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
          {
            label: 'Core',
            icon: 'ti ti-cpu',
            items: [
              { label: 'API', icon: 'ti ti-braces' },
              { label: 'CLI', icon: 'ti ti-terminal-2' },
            ],
          },
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

const baseItems = () =>
  ref([
    { label: 'Home', icon: 'ti ti-home' },
    {
      label: 'Features',
      icon: 'ti ti-star',
      items: [
        {
          label: 'Core',
          icon: 'ti ti-cpu',
          items: [
            { label: 'API', icon: 'ti ti-braces' },
            { label: 'CLI', icon: 'ti ti-terminal-2' },
          ],
        },
        { label: 'UI Kit', icon: 'ti ti-palette' },
      ],
    },
    { label: 'Settings', icon: 'ti ti-settings' },
  ]);

export const WithSlotsTemplate = () => ({
  components: { PBlockMenubar },
  setup() {
    return { items: baseItems() };
  },
  template: `
    <PBlockMenubar :model="items">
      <template #start>
        <span class="ti ti-brand-vue" style="font-size: 1.5rem; margin-right: 0.5rem;" />
      </template>
      <template #submenuicon>
        <span class="ti ti-chevron-down" style="font-size: 0.75rem;" />
      </template>
      <template #end>
        <button class="p-button p-button-text p-button-sm">Logout</button>
      </template>
    </PBlockMenubar>
  `,
});

export const WithItemIconSlotTemplate = () => ({
  components: { PBlockMenubar },
  setup() {
    return { items: baseItems() };
  },
  template: `
    <PBlockMenubar :model="items">
      <template #itemicon="{ item }">
        <span v-if="item.icon" :class="item.icon" class="text-violet-600" />
      </template>
    </PBlockMenubar>
  `,
});

export const WithSubmenuIconSlotTemplate = () => ({
  components: { PBlockMenubar },
  setup() {
    return { items: baseItems() };
  },
  template: `
    <PBlockMenubar :model="items">
      <template #submenuicon="{ root }">
        <span :class="root ? 'ti ti-caret-down-filled text-emerald-500' : 'ti ti-caret-right-filled text-emerald-500'" />
      </template>
    </PBlockMenubar>
  `,
});

export const WithSubmenuIconActiveStateTemplate = () => ({
  components: { PBlockMenubar },
  setup() {
    return { items: baseItems() };
  },
  template: `
    <PBlockMenubar :model="items">
      <template #submenuicon="{ root }">
        <span
          :class="[
            root ? 'ti ti-chevron-down' : 'ti ti-chevron-right',
            'text-emerald-500 transition-transform duration-200',
            '[li[data-p-active=true]_&]:rotate-180',
          ]"
        />
      </template>
    </PBlockMenubar>
  `,
});

export const WithButtonSlotTemplate = () => ({
  components: { PBlockMenubar },
  setup() {
    return { items: baseItems() };
  },
  template: `
    <PBlockMenubar :model="items">
      <template #button="{ toggleCallback }">
        <button class="p-button p-button-text p-button-sm" type="button" @click="toggleCallback">
          <span class="ti ti-menu-2" style="margin-right: 0.25rem;" />
          Menu
        </button>
      </template>
    </PBlockMenubar>
  `,
});

export const WithButtonIconSlotTemplate = () => ({
  components: { PBlockMenubar },
  setup() {
    return { items: baseItems() };
  },
  template: `
    <PBlockMenubar :model="items">
      <template #buttonicon>
        <span class="ti ti-layout-sidebar-right-collapse text-sky-500" />
      </template>
    </PBlockMenubar>
  `,
});
