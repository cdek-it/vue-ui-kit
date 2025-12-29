import { ref } from 'vue';
import { PanelMenu } from 'primevue';
import CodeSnippet from '@/plugins/prime/stories/_common/CodeSnippet.vue';
import { selectedMenuItemClass } from '@/plugins/prime/consts';

// Утилита для управления выбранным пунктом меню
const createMenuWithSelection = (menuItems) => {
  const items = ref(menuItems);

  const clearSelection = (itemsList) => {
    itemsList.forEach((item) => {
      if (item.class?.includes(selectedMenuItemClass)) {
        item.class = item.class
          .split(' ')
          .filter((c) => c !== selectedMenuItemClass)
          .join(' ')
          .trim() || undefined;
      }
      if (item.items) {
        clearSelection(item.items);
      }
    });
  };

  const handleItemClick = (clickedItem) => {
    clearSelection(items.value);
    clickedItem.class = clickedItem.class
      ? `${clickedItem.class} ${selectedMenuItemClass}`
      : selectedMenuItemClass;
  };

  // Добавляем command handler ко всем пунктам рекурсивно
  const addCommandHandlers = (itemsList) => {
    itemsList.forEach((item) => {
      if (!item.separator) {
        item.command = () => handleItemClick(item);
      }
      if (item.items) {
        addCommandHandlers(item.items);
      }
    });
  };

  addCommandHandlers(items.value);

  return items;
};

// Basic PanelMenu
export const BasicTemplate = (args) => ({
  components: { PanelMenu, CodeSnippet },
  setup() {
    const items = createMenuWithSelection([
      {
        label: 'Documents',
        icon: 'ti ti-file',
        items: [
          {
            label: 'New',
            icon: 'ti ti-plus',
          },
          {
            label: 'Search',
            icon: 'ti ti-search',
          }
        ]
      },
      {
        label: 'Profile',
        icon: 'ti ti-user',
        items: [
          {
            label: 'Settings',
            icon: 'ti ti-settings',
          },
          {
            label: 'Logout',
            icon: 'ti ti-logout',
          }
        ]
      }
    ]);

    return { args, items };
  },
  template: `
    <div>
      <PanelMenu :model="items" multiple/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});
