import { Badge } from 'primevue';
import { ref } from 'vue';
import { useMenu } from '@/plugins/prime/stories/Menu/_common/composables/useMenu';
import TieredMenuSelected from './TieredMenuSelected.vue';

export const BasicTemplate = () => ({
  components: { TieredMenuSelected },
  setup() {
    const { items } = useMenu();

    if (items.value[0]) {
      delete items.value[0].class;
    }

    return { items };
  },
  template: `
    <div class="card flex justify-center">
      <TieredMenuSelected :model="items" />
    </div>
  `,
});

export const WithSelectedTemplate = () => ({
  components: { TieredMenuSelected },
  setup() {
    const { items } = useMenu();
    return { items };
  },
  template: `
    <div class="card flex justify-center">
      <TieredMenuSelected :model="items" />
    </div>
  `,
});

export const CustomTemplate = (args) => ({
  components: { TieredMenuSelected, Badge },
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
    <div class="card flex justify-center">
      <TieredMenuSelected :model="items" v-bind="args">
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
      </TieredMenuSelected>
    </div>
  `,
});
