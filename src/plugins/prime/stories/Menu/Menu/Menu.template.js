import { Menu } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { Menu },
  setup() {
    // Простая структура для Menu компонента
    const items = ref([
      {
        label: 'New',
        icon: 'pi pi-plus',
        command: () => {
          console.log('New clicked');
        }
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        command: () => {
          console.log('Search clicked');
        }
      }
    ]);

    return { args, items };
  },
  template: `
    <div>
      <Menu :model="items"/>
    </div>
`,
});


export const Grouped = (args) => ({
  components: { Menu },
  setup() {
    // Структура с группами (submenu headers) как в HTML примере
    const items = ref([
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
              console.log('New document');
            }
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
              console.log('Search documents');
            }
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            command: () => {
              console.log('Settings');
            }
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              console.log('Logout');
            }
          }
        ]
      }
    ]);

    return { args, items };
  },
  template: `
    <div>
      <Menu :model="items"/>
    </div>
`,
});

export const Popup = (args) => ({
  components: { Menu },
  setup() {
    // Структура для Popup меню с группами и тенью
    const items = ref([
      {
        label: 'File Operations',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
              console.log('New clicked');
            }
          },
          {
            label: 'Open',
            icon: 'pi pi-folder-open',
            command: () => {
              console.log('Open clicked');
            }
          },
          {
            label: 'Save',
            icon: 'pi pi-save',
            command: () => {
              console.log('Save clicked');
            }
          }
        ]
      },
      {
        label: 'Export Options',
        items: [
          {
            label: 'Export as PDF',
            icon: 'pi pi-file-pdf',
            command: () => {
              console.log('Export PDF clicked');
            }
          },
          {
            label: 'Export as Excel',
            icon: 'pi pi-file-excel',
            command: () => {
              console.log('Export Excel clicked');
            }
          },
          {
            label: 'Print',
            icon: 'pi pi-print',
            command: () => {
              console.log('Print clicked');
            }
          }
        ]
      },
      {
        label: 'User Actions',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            command: () => {
              console.log('Settings clicked');
            }
          },
          {
            label: 'Help',
            icon: 'pi pi-question-circle',
            command: () => {
              console.log('Help clicked');
            }
          }
        ]
      }
    ]);

    return { args, items };
  },
  template: `
    <div style="padding: 2rem; background: #f8f9fa; min-height: 300px; display: flex; align-items: flex-start;">
      <style>
        .popup-story .p-menu.p-component {
          box-shadow: 0 3.5px 3.5px 0 rgba(0, 0, 0, 0.2) !important;
          border-radius: 8px !important;
          border: 1px solid #e5e7eb !important;
          background: #ffffff !important;
        }
      </style>
      <div class="popup-story">
        <Menu 
          :model="items" 
          style="
            display: inline-block; 
            box-shadow: 0 3.5px 3.5px 0 rgba(0, 0, 0, 0.2); 
            border-radius: 8px; 
            border: 1px solid #e5e7eb; 
            background: #ffffff;
          " 
        />
      </div>
    </div>
`,
});
