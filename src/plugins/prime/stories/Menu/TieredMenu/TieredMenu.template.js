import { ref } from 'vue';
import { TieredMenu, Badge, Button } from 'primevue';
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

// Basic TieredMenu - простое многоуровневое меню
export const BasicTemplate = (args) => ({
  components: { TieredMenu, CodeSnippet },
  setup() {
    const items = createMenuWithSelection([
      {
        label: 'File',
        icon: 'ti ti-file',
        items: [
          {
            label: 'New',
            icon: 'ti ti-plus',
          },
          {
            label: 'Open',
            icon: 'ti ti-folder-open',
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'ti ti-edit',
        items: [
          {
            label: 'Copy',
            icon: 'ti ti-copy',
          },
          {
            label: 'Paste',
            icon: 'ti ti-clipboard',
          }
        ]
      }
    ]);

    return { args, items };
  },
  template: `
    <div>
      <TieredMenu :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});

// Popup TieredMenu
export const PopupTemplate = (args) => ({
  components: { TieredMenu, Button, CodeSnippet },
  setup() {
    const menu = ref();
    const items = createMenuWithSelection([
      {
        label: 'File',
        icon: 'ti ti-file',
        items: [
          {
            label: 'New',
            icon: 'ti ti-plus',
          },
          {
            label: 'Open',
            icon: 'ti ti-folder-open',
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Edit',
        icon: 'ti ti-edit',
        items: [
          {
            label: 'Copy',
            icon: 'ti ti-copy',
          },
          {
            label: 'Paste',
            icon: 'ti ti-clipboard',
          }
        ]
      }
    ]);

    const toggle = (event) => {
      menu.value.toggle(event);
    };

    return { args, items, menu, toggle };
  },
  template: `
    <div>
      <Button type="button" label="Show Menu" @click="toggle" />
      <TieredMenu ref="menu" :model="items" :popup="true" />
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});
