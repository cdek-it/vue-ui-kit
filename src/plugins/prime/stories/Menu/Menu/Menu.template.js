import { Menu } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { Menu },
  setup() {
    const lastAction = ref('');

    // Простая структура для Menu компонента
    const items = ref([
      {
        label: 'New',
        icon: 'pi pi-plus',
        command: () => {
          lastAction.value = 'New clicked';
        },
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        command: () => {
          lastAction.value = 'Search clicked';
        },
      },
    ]);

    return { args, items, lastAction };
  },
  template: `
    <div>
      <Menu :model="items"/>
      <div class="mt-5" v-if="lastAction">Last action: {{ lastAction }}</div>
    </div>
`,
});

export const Grouped = (args) => ({
  components: { Menu },
  setup() {
    const lastAction = ref('');

    const items = ref([
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
              lastAction.value = 'New document clicked';
            },
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
              lastAction.value = 'Search documents clicked';
            },
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            command: () => {
              lastAction.value = 'Settings clicked';
            },
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              lastAction.value = 'Logout clicked';
            },
          },
        ],
      },
    ]);

    return { args, items, lastAction };
  },
  template: `
    <div>
      <Menu :model="items"/>
      <div class="mt-5" v-if="lastAction">Last action: {{ lastAction }}</div>
    </div>
  `,
});

export const Popup = (args) => ({
  components: { Menu },
  setup() {
    const lastAction = ref('');

    const items = ref([
      {
        label: 'File Operations',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
              lastAction.value = 'New clicked';
            },
          },
          {
            label: 'Open',
            icon: 'pi pi-folder-open',
            command: () => {
              lastAction.value = 'Open clicked';
            },
          },
          {
            label: 'Save',
            icon: 'pi pi-save',
            command: () => {
              lastAction.value = 'Save clicked';
            },
          },
        ],
      },
      {
        label: 'Export Options',
        items: [
          {
            label: 'Export as PDF',
            icon: 'pi pi-file-pdf',
            command: () => {
              lastAction.value = 'Export PDF clicked';
            },
          },
          {
            label: 'Export as Excel',
            icon: 'pi pi-file-excel',
            command: () => {
              lastAction.value = 'Export Excel clicked';
            },
          },
          {
            label: 'Print',
            icon: 'pi pi-print',
            command: () => {
              lastAction.value = 'Print clicked';
            },
          },
        ],
      },
      {
        label: 'User Actions',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            command: () => {
              lastAction.value = 'Settings clicked';
            },
          },
          {
            label: 'Help',
            icon: 'pi pi-question-circle',
            command: () => {
              lastAction.value = 'Help clicked';
            },
          },
        ],
      },
    ]);

    return { args, items, lastAction };
  },
  template: `
    <style>
      .popup-story .p-menu.p-component {
        box-shadow: 0 3.5px 3.5px 0 rgba(0, 0, 0, 0.2) !important;
        border-radius: 8px !important;
        border: 1px solid #e5e7eb !important;
        background: #ffffff !important;
      }
    </style>

    <div style="padding: 2rem; background: #f8f9fa; min-height: 300px; display: flex; align-items: flex-start;">
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
        <div class="mt-5" v-if="lastAction" style="margin-top: 1rem;">Last action: {{ lastAction }}</div>
      </div>
    </div>
  `,
});
