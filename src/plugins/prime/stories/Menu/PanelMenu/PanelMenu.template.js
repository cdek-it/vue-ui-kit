import { ref, computed } from 'vue';
import { PBlockPanelMenu, PBlockMenuItem } from '@/primeBlocks';

const createItems = (showIcons) => [
  {
    label: 'Home',
    icon: showIcons ? 'ti ti-home' : undefined,
    items: [
      { label: 'Components', icon: showIcons ? 'ti ti-puzzle' : undefined },
      { label: 'Blocks', icon: showIcons ? 'ti ti-layout' : undefined },
      { label: 'UI Kit', icon: showIcons ? 'ti ti-palette' : undefined },
      {
        label: 'Templates',
        icon: showIcons ? 'ti ti-template' : undefined,
        items: [
          { label: 'Apollo', icon: showIcons ? 'ti ti-rocket' : undefined },
          { label: 'Ultima', icon: showIcons ? 'ti ti-star' : undefined },
        ],
      },
    ],
  },
  {
    label: 'Features',
    icon: showIcons ? 'ti ti-star' : undefined,
  },
  {
    label: 'Projects',
    icon: showIcons ? 'ti ti-folder' : undefined,
    items: [
      { label: 'Components', icon: showIcons ? 'ti ti-puzzle' : undefined },
      { label: 'Blocks', icon: showIcons ? 'ti ti-layout' : undefined },
      { label: 'UI Kit', icon: showIcons ? 'ti ti-palette' : undefined },
    ],
  },
  {
    label: 'Contact',
    icon: showIcons ? 'ti ti-user' : undefined,
    disabled: true,
  },
];

export const BasicTemplate = (args) => ({
  components: { PBlockPanelMenu },
  setup() {
    const items = computed(() => createItems(args.showIcons));

    return { args, items };
  },
  template: `
    <PBlockPanelMenu :model="items" />
  `,
});

export const MultipleTemplate = (args) => ({
  components: { PBlockPanelMenu },
  setup() {
    const items = computed(() => createItems(args.showIcons));

    return { args, items };
  },
  template: `
    <PBlockPanelMenu :model="items" multiple />
  `,
});

export const CustomTemplate = (args) => ({
  components: { PBlockPanelMenu, PBlockMenuItem },
  setup() {
    const items = ref([
      {
        label: 'Dashboard',
        icon: 'ti ti-layout-dashboard',
        description: 'Главная страница',
        items: [
          {
            label: 'Analytics',
            icon: 'ti ti-chart-line',
            description: 'Аналитика данных',
          },
          {
            label: 'Reports',
            icon: 'ti ti-file-analytics',
            description: 'Отчёты',
          },
          {
            label: 'Statistics',
            icon: 'ti ti-chart-bar',
            description: 'Статистика',
          },
        ],
      },
      {
        label: 'Features',
        icon: 'ti ti-star',
        description: 'Explore features',
        badge: 'New',
      },
      {
        label: 'Files',
        icon: 'ti ti-folder',
        description: 'Файловое хранилище',
        items: [
          {
            label: 'Documents',
            icon: 'ti ti-file-text',
            description: 'Документы',
          },
          { label: 'Photos', icon: 'ti ti-photo', description: 'Фотографии' },
        ],
      },
      {
        label: 'Settings',
        icon: 'ti ti-settings',
        description: 'Настройки приложения',
        disabled: true,
      },
    ]);

    return { args, items };
  },
  template: `
    <PBlockPanelMenu :model="items" multiple v-bind="args">
      <template #item="{ item, props, root }">
        <PBlockMenuItem v-bind="{ ...item, ...props.action }" :root="root" />
      </template>
    </PBlockPanelMenu>
  `,
});
