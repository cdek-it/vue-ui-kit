import { ref } from 'vue';
import { MegaMenu } from 'primevue';
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
        item.items.forEach((subItem) => {
          if (subItem.items) {
            clearSelection(subItem.items);
          }
        });
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
      if (item.items) {
        item.items.forEach((subItem) => {
          if (subItem.items) {
            subItem.items.forEach((leafItem) => {
              if (!leafItem.separator) {
                leafItem.command = () => handleItemClick(leafItem);
              }
            });
          }
        });
      }
    });
  };

  addCommandHandlers(items.value);

  return items;
};

export const BasicTemplate = (args) => ({
  components: { MegaMenu, CodeSnippet },
  setup() {
    const items = createMenuWithSelection([
      {
        label: 'Products',
        icon: 'ti ti-box',
        items: [
          [
            {
              label: 'Electronics',
              items: [
                { label: 'Laptops', icon: 'ti ti-device-laptop' },
                { label: 'Phones', icon: 'ti ti-device-mobile' }
              ]
            }
          ],
          [
            {
              label: 'Clothing',
              items: [
                { label: 'Men', icon: 'ti ti-user' },
                { label: 'Women', icon: 'ti ti-user' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Services',
        icon: 'ti ti-tool',
        items: [
          [
            {
              label: 'Support',
              items: [
                { label: 'Help Center', icon: 'ti ti-help' },
                { label: 'Contact', icon: 'ti ti-mail' }
              ]
            }
          ]
        ]
      }
    ]);

    return { args, items };
  },
  template: `
    <div>
      <MegaMenu :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});
