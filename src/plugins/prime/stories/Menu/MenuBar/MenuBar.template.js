import { ref } from 'vue';
import { Menubar } from 'primevue';
import CodeSnippet from '@/plugins/prime/stories/_common/CodeSnippet.vue';
import { selectedMenuItemClass } from '@/plugins/prime/consts';

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

export const BasicTemplate = (args) => ({
  components: { Menubar, CodeSnippet },
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
      <Menubar :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});
