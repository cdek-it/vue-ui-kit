import Divider from 'primevue/divider';
import { Menu } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <Divider v-bind="args" />
  `,
});

export const ContentTemplate = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <Divider v-bind="args">
      <div>
        <i class="ti ti-info-circle mr-2"></i>
        Content
      </div>
    </Divider>
  `,
});

export const MenuGroupTemplate = (args) => ({
  components: { Divider, Menu },
  setup() {
    const menuItems = ref([
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
        separator: true
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
          }
        ]
      }
    ]);

    return { args, menuItems };
  },
  template: `
    <div style="padding: 2rem; background: #f8f9fa; min-height: 300px;">
Меню с разделительными группами<div style="display: flex; gap: 2rem; align-items: flex-start;">
        <!-- Menu with grouped items -->
        <div style="background: white; border-radius: 8px; box-shadow: 0 3.5px 3.5px 0 rgba(0, 0, 0, 0.2); padding: 0.5rem;">
          <Menu :model="menuItems" />
        </div>
        
        <!-- Standalone dividers demonstration -->
        <div style="background: white; border-radius: 8px; box-shadow: 0 3.5px 3.5px 0 rgba(0, 0, 0, 0.2); padding: 1.5rem; min-width: 200px;">
          <h4 style="margin: 0 0 1rem 0; color: #333;">Divider Examples</h4>
          
          <p style="margin: 0 0 0.5rem 0; color: #666;">Section 1</p>
          <Divider v-bind="args" />
          <p style="margin: 0.5rem 0; color: #666;">Section 2</p>
          <Divider v-bind="args" />
          <p style="margin: 0.5rem 0 0 0; color: #666;">Section 3</p>
        </div>
      </div>
    </div>
  `,
});
