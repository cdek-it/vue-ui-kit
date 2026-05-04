import { Badge } from 'primevue';
import { ref } from 'vue';
import { useMenu } from '@/plugins/prime/stories/Menu/_common/composables/useMenu';
import PBlockTieredMenu from '@/primeBlocks/PBlockTieredMenu/PBlockTieredMenu.vue';

export const BasicTemplate = () => ({
  components: { PBlockTieredMenu },
  setup() {
    const { items } = useMenu();

    if (items.value[0]) {
      delete items.value[0].class;
    }

    return { items };
  },
  template: `
    <div class="card flex justify-center" style="height: 280px;">
      <PBlockTieredMenu :model="items" />
    </div>
  `,
});

export const WithSelectedTemplate = () => ({
  components: { PBlockTieredMenu },
  setup() {
    const { items } = useMenu();
    return { items };
  },
  template: `
    <div class="card flex justify-center" style="height: 280px;">
      <PBlockTieredMenu :model="items" />
    </div>
  `,
});

export const WithSeparatorTemplate = () => ({
  components: { PBlockTieredMenu },
  setup() {
    const items = ref([
      { label: 'Home', icon: 'ti ti-user' },
      { label: 'Features' },
      { separator: true },
      { label: 'Projects', icon: 'ti ti-folder' },
      { label: 'Contact', icon: 'ti ti-user' },
    ]);
    return { items };
  },
  template: `
    <div class="card flex justify-center" style="height: 280px;">
      <PBlockTieredMenu :model="items" />
    </div>
  `,
});

export const CustomTemplate = (args) => ({
  components: { PBlockTieredMenu, Badge },
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
        label: 'Projects',
        icon: 'ti ti-folder',
        description: 'Список проектов',
        items: [
          {
            label: 'Active',
            icon: 'ti ti-circle-check',
            description: 'Активные проекты',
          },
          {
            label: 'Archived',
            icon: 'ti ti-archive',
            description: 'Архивные проекты',
          },
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
    <div class="card flex justify-center" style="height: 280px;">
      <PBlockTieredMenu :model="items" v-bind="args">
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
      </PBlockTieredMenu>
    </div>
  `,
});
