import { Menubar } from 'primevue';
import CodeSnippet from '@/plugins/prime/stories/_common/CodeSnippet.vue';

export const Template = (args) => ({
  components: { Menubar, CodeSnippet },
  setup() {
    const items = [
      {
        label: 'Features',
      },
      {
        label: 'Projects',
        items: [
          {
            label: 'Components',
          },
          {
            label: 'Blocks',
          },
          {
            label: 'UI Kit',
          },
          {
            label: 'Templates',
            items: [
              {
                label: 'Apollo',
              },
              {
                label: 'Ultima',
              },
            ],
          },
        ],
      },
      {
        icon: 'ti ti-user',
        label: 'Contact',
        disabled: true,
        items: [
          {
            label: 'Components',
          },
          {
            label: 'Blocks',
          },
          {
            label: 'UI Kit',
          },
          {
            label: 'Templates',
            items: [
              {
                label: 'Apollo',
              },
              {
                label: 'Ultima',
              },
            ],
          },
        ],
      },
    ];

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

export const WithIconInOptionTemplate = (args) => ({
  components: { Menubar, CodeSnippet },
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
          {
            label: 'Core',
            icon: 'ti ti-cpu',
          },
          {
            label: 'Blocks',
            icon: 'ti ti-layout-grid',
          },
          {
            label: 'UI Kit',
            icon: 'ti ti-palette',
          },
          {
            label: 'Templates',
            icon: 'ti ti-template',
            items: [
              {
                label: 'Apollo',
                icon: 'ti ti-rocket',
              },
              {
                label: 'Ultima',
                icon: 'ti ti-diamond',
              },
            ],
          },
        ],
      },
      {
        label: 'Projects',
        icon: 'ti ti-folder',
        items: [
          {
            label: 'Active',
            icon: 'ti ti-circle-check',
          },
          {
            label: 'Archived',
            icon: 'ti ti-archive',
          },
        ],
      },
      {
        label: 'Settings',
        icon: 'ti ti-settings',
      },
    ];

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

export const CustomTemplate = (args) => ({
  components: { Menubar, CodeSnippet },
  setup() {
    const items = [
      {
        label: 'Products',
        icon: 'ti ti-shopping-cart',
        items: [
          {
            label: 'Electronics',
            items: [
              {
                label: 'Laptops',
                icon: 'ti ti-device-laptop',
              },
              {
                label: 'Phones',
                icon: 'ti ti-device-mobile',
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'Clothing',
            items: [
              {
                label: 'Men',
                icon: 'ti ti-user',
              },
              {
                label: 'Women',
                icon: 'ti ti-user',
              },
            ],
          },
        ],
      },
      {
        label: 'Contacts',
        icon: 'ti ti-address-book',
        items: [
          {
            label: 'Team Members',
            items: [
              {
                template: () => {
                  return {
                    template: `
                      <div class="p-menubar-item-content" style="padding: 0.5rem 0.75rem; display: flex; align-items: center; gap: 0.5rem; width: 100%;">
                        <i class="ti ti-user" style="font-size: 17.5px;"></i>
                        <div style="flex: 1; display: flex; flex-direction: column; gap: 0.25rem;">
                          <span style="font-size: 14px; color: #2b2e33;">John Doe</span>
                          <span style="font-size: 12.25px; color: #85888e;">Developer</span>
                        </div>
                        <button style="background: #1dc831; color: white; border: none; border-radius: 4px; padding: 4px 8px; font-size: 12px; cursor: pointer;">Call</button>
                        <i class="ti ti-chevron-right" style="font-size: 17.5px; color: #2b2e33;"></i>
                      </div>
                    `,
                  };
                },
              },
              {
                template: () => {
                  return {
                    template: `
                      <div class="p-menubar-item-content" style="padding: 0.5rem 0.75rem; display: flex; align-items: center; gap: 0.5rem; width: 100%;">
                        <i class="ti ti-user" style="font-size: 17.5px;"></i>
                        <div style="flex: 1; display: flex; flex-direction: column; gap: 0.25rem;">
                          <span style="font-size: 14px; color: #2b2e33;">Jane Smith</span>
                          <span style="font-size: 12.25px; color: #85888e;">Designer</span>
                        </div>
                        <button style="background: #1dc831; color: white; border: none; border-radius: 4px; padding: 4px 8px; font-size: 12px; cursor: pointer;">Call</button>
                        <i class="ti ti-chevron-right" style="font-size: 17.5px; color: #2b2e33;"></i>
                      </div>
                    `,
                  };
                },
              },
              {
                template: () => {
                  return {
                    template: `
                      <div class="p-menubar-item-content" style="padding: 0.5rem 0.75rem; display: flex; align-items: center; gap: 0.5rem; width: 100%; background: #2b2e33; border-radius: 7px;">
                        <i class="ti ti-user" style="font-size: 17.5px; color: white;"></i>
                        <div style="flex: 1; display: flex; flex-direction: column; gap: 0.25rem;">
                          <span style="font-size: 14px; color: white;">Mike Johnson</span>
                          <span style="font-size: 12.25px; color: #85888e;">Manager</span>
                        </div>
                        <button style="background: #1dc831; color: white; border: none; border-radius: 4px; padding: 4px 8px; font-size: 12px; cursor: pointer;">Call</button>
                        <i class="ti ti-chevron-right" style="font-size: 17.5px; color: white;"></i>
                      </div>
                    `,
                  };
                },
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'Partners',
            items: [
              {
                template: () => {
                  return {
                    template: `
                      <div class="p-menubar-item-content" style="padding: 0.5rem 0.75rem; display: flex; align-items: center; gap: 0.5rem; width: 100%;">
                        <i class="ti ti-building" style="font-size: 17.5px;"></i>
                        <div style="flex: 1; display: flex; flex-direction: column; gap: 0.25rem;">
                          <span style="font-size: 14px; color: #2b2e33;">Acme Corp</span>
                          <span style="font-size: 12.25px; color: #85888e;">Technology</span>
                        </div>
                        <button style="background: #1dc831; color: white; border: none; border-radius: 4px; padding: 4px 8px; font-size: 12px; cursor: pointer;">Call</button>
                        <i class="ti ti-chevron-right" style="font-size: 17.5px; color: #2b2e33;"></i>
                      </div>
                    `,
                  };
                },
              },
              {
                template: () => {
                  return {
                    template: `
                      <div class="p-menubar-item-content" style="padding: 0.5rem 0.75rem; display: flex; align-items: center; gap: 0.5rem; width: 100%;">
                        <i class="ti ti-building" style="font-size: 17.5px;"></i>
                        <div style="flex: 1; display: flex; flex-direction: column; gap: 0.25rem;">
                          <span style="font-size: 14px; color: #2b2e33;">Global Inc</span>
                          <span style="font-size: 12.25px; color: #85888e;">Finance</span>
                        </div>
                        <button style="background: #1dc831; color: white; border: none; border-radius: 4px; padding: 4px 8px; font-size: 12px; cursor: pointer;">Call</button>
                        <i class="ti ti-chevron-right" style="font-size: 17.5px; color: #2b2e33;"></i>
                      </div>
                    `,
                  };
                },
              },
            ],
          },
        ],
      },
      {
        label: 'About',
        icon: 'ti ti-info-circle',
      },
    ];

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
