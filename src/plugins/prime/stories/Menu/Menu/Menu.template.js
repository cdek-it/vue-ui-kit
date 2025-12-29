import { ref } from 'vue';
import { Menu, Badge, Button } from 'primevue';
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
    });
  };

  const handleItemClick = (clickedItem) => {
    clearSelection(items.value);
    clickedItem.class = clickedItem.class
      ? `${clickedItem.class} ${selectedMenuItemClass}`
      : selectedMenuItemClass;
  };

  // Добавляем command handler ко всем пунктам
  items.value.forEach((item) => {
    if (!item.separator) {
      item.command = () => handleItemClick(item);
    }
  });

  return items;
};

// Basic Menu - простое меню с иконками
export const BasicTemplate = (args) => ({
  components: { Menu, CodeSnippet },
  setup() {
    const items = createMenuWithSelection([
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
      }
    ]);

    return { args, items };
  },
  template: `
    <div>
      <Menu :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});

// Group Menu - меню с группами (submenu labels)
export const GroupTemplate = (args) => ({
  components: { Menu, CodeSnippet },
  setup() {
    const items = ref([
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'ti ti-user',
          },
          {
            label: 'Search',
            icon: 'ti ti-user',
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'ti ti-settings',
          },
          {
            label: 'Logout',
            icon: 'ti ti-settings',
          }
        ]
      }
    ]);

    // Добавляем command handler для вложенных items
    items.value.forEach((group) => {
      if (group.items) {
        group.items.forEach((item) => {
          if (!item.separator) {
            const originalCommand = item.command;
            item.command = () => {
              // Снимаем выделение со всех пунктов
              items.value.forEach((g) => {
                if (g.items) {
                  g.items.forEach((i) => {
                    if (i.class?.includes(selectedMenuItemClass)) {
                      i.class = i.class
                        .split(' ')
                        .filter((c) => c !== selectedMenuItemClass)
                        .join(' ')
                        .trim() || undefined;
                    }
                  });
                }
              });
              // Добавляем класс выбранному пункту
              item.class = item.class
                ? `${item.class} ${selectedMenuItemClass}`
                : selectedMenuItemClass;
              
              if (originalCommand) originalCommand();
            };
          }
        });
      }
    });

    return { args, items };
  },
  template: `
    <div>
      <Menu :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});

// Popup Menu - меню как popup (overlay)
export const PopupTemplate = (args) => ({
  components: { Menu, Button, CodeSnippet },
  setup() {
    const menu = ref();
    const items = createMenuWithSelection([
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
      },
      {
        separator: true
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
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
      <Menu ref="menu" :model="items" :popup="true" />
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});

// Template Menu - меню с caption и badge
export const TemplateWithCaption = (args) => ({
  components: { Menu, CodeSnippet },
  setup() {
    const menuItems = [
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
        template: () => {
          return {
            template: `
              <div class="p-menu-item-link" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
                <div style="display: flex; align-items: center; gap: 7px; flex: 1;">
                  <i class="p-menu-item-icon ti ti-user"></i>
                  <div class="p-menu-item-label">
                    <span>MenuItem</span>
                    <span class="p-menu-item-caption">Caption</span>
                  </div>
                </div>
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
              </div>
            `
          };
        }
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
        template: () => {
          return {
            template: `
              <div class="p-menu-item-link" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
                <div style="display: flex; align-items: center; gap: 7px; flex: 1;">
                  <i class="p-menu-item-icon ti ti-user"></i>
                  <div class="p-menu-item-label">
                    <span>MenuItem</span>
                    <span class="p-menu-item-caption">Caption</span>
                  </div>
                </div>
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
              </div>
            `
          };
        }
      },
      {
        separator: true
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
        template: () => {
          return {
            template: `
              <div class="p-menu-item-link" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
                <div style="display: flex; align-items: center; gap: 7px; flex: 1;">
                  <i class="p-menu-item-icon ti ti-user"></i>
                  <div class="p-menu-item-label">
                    <span>MenuItem</span>
                    <span class="p-menu-item-caption">Caption</span>
                  </div>
                </div>
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
              </div>
            `
          };
        }
      }
    ];

    const items = createMenuWithSelection(menuItems);

    return { args, items };
  },
  template: `
    <div>
      <Menu :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});

export const TemplateWithBadge = (args) => ({
  components: { Menu, Badge, CodeSnippet },
  setup() {
    const menuItems = [
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
        badge: '2',
        template: (item) => {
          return {
            components: { Badge },
            setup() {
              return { item };
            },
            template: `
              <div class="p-menu-item-link" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
                <div style="display: flex; align-items: center; gap: 7px; flex: 1;">
                  <i class="p-menu-item-icon ti ti-user"></i>
                  <div class="p-menu-item-label">
                    <span>MenuItem</span>
                    <span class="p-menu-item-caption">Caption</span>
                  </div>
                  <Badge :value="item.badge" severity="success" />
                </div>
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
              </div>
            `
          };
        }
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
        badge: '2',
        template: (item) => {
          return {
            components: { Badge },
            setup() {
              return { item };
            },
            template: `
              <div class="p-menu-item-link" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
                <div style="display: flex; align-items: center; gap: 7px; flex: 1;">
                  <i class="p-menu-item-icon ti ti-user"></i>
                  <div class="p-menu-item-label">
                    <span>MenuItem</span>
                    <span class="p-menu-item-caption">Caption</span>
                  </div>
                  <Badge :value="item.badge" severity="success" />
                </div>
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
              </div>
            `
          };
        }
      },
      {
        separator: true
      },
      {
        label: 'MenuItem',
        icon: 'ti ti-user',
        badge: '5',
        template: (item) => {
          return {
            components: { Badge },
            setup() {
              return { item };
            },
            template: `
              <div class="p-menu-item-link" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
                <div style="display: flex; align-items: center; gap: 7px; flex: 1;">
                  <i class="p-menu-item-icon ti ti-user"></i>
                  <div class="p-menu-item-label">
                    <span>MenuItem</span>
                    <span class="p-menu-item-caption">Caption</span>
                  </div>
                  <Badge :value="item.badge" severity="success" />
                </div>
                <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
              </div>
            `
          };
        }
      }
    ];

    const items = createMenuWithSelection(menuItems);

    return { args, items };
  },
  template: `
    <div>
      <Menu :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});
