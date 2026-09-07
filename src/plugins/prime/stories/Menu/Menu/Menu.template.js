import Menu from 'primevue/menu';
import Button from 'primevue/button';
import { ref } from 'vue';

export const PopupTemplate = () => ({
  components: { Menu, Button },
  setup() {
    const menu = ref();
    const items = ref([
      { label: 'New', icon: 'ti ti-file-plus' },
      { label: 'Search', icon: 'ti ti-search' },
      { separator: true },
      { label: 'Export', icon: 'ti ti-download' },
    ]);

    const toggle = (event) => menu.value.toggle(event);

    return { menu, items, toggle };
  },
  template: `
    <Button type="button" label="Show Menu" @click="toggle" />
    <Menu ref="menu" :model="items" :popup="true" />
  `,
});

export const BasicTemplate = () => ({
  components: { Menu },
  setup() {
    const items = ref([
      { label: 'New' },
      { label: 'Search' },
      { separator: true },
      { label: 'Export' },
    ]);

    return { items };
  },
  template: `<Menu :model="items" />`,
});

export const WithIconTemplate = () => ({
  components: { Menu },
  setup() {
    const items = ref([
      { label: 'New Document', icon: 'ti ti-file-plus' },
      { label: 'Open File', icon: 'ti ti-folder-open' },
      { label: 'Save', icon: 'ti ti-device-floppy' },
      { separator: true },
      { label: 'Print', icon: 'ti ti-printer' },
      { label: 'Export', icon: 'ti ti-download' },
    ]);

    return { items };
  },
  template: `<Menu :model="items" />`,
});

export const GroupedTemplate = () => ({
  components: { Menu },
  setup() {
    const items = ref([
      {
        label: 'File',
        items: [
          { label: 'New', icon: 'ti ti-plus' },
          { label: 'Open', icon: 'ti ti-folder-open' },
          { label: 'Save', icon: 'ti ti-device-floppy' },
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Cut', icon: 'ti ti-cut' },
          { label: 'Copy', icon: 'ti ti-copy' },
          { label: 'Paste', icon: 'ti ti-clipboard' },
        ],
      },
      {
        label: 'View',
        items: [
          { label: 'Zoom In', icon: 'ti ti-zoom-in' },
          { label: 'Zoom Out', icon: 'ti ti-zoom-out' },
        ],
      },
    ]);

    return { items };
  },
  template: `<Menu :model="items" />`,
});

export const CustomTemplate = () => ({
  components: { Menu },
  setup() {
    const items = ref([
      {
        label: 'New Document',
        caption: 'Create a new document',
        icon: 'ti ti-file-plus',
      },
      {
        label: 'Open File',
        caption: 'Open an existing file',
        icon: 'ti ti-folder-open',
      },
      { separator: true },
      {
        label: 'Save',
        caption: 'Save current document',
        icon: 'ti ti-device-floppy',
      },
    ]);

    return { items };
  },
  template: `
    <Menu :model="items">
      <template #item="{ item, props }">
        <a v-bind="props.action" class="p-menu-item-link">
          <span v-if="item.icon" :class="['p-menu-item-icon', item.icon]"></span>
          <div class="menu-item-label">
            <span class="p-menu-item-label">{{ item.label }}</span>
            <small v-if="item.caption" class="menu-item-caption">{{ item.caption }}</small>
          </div>
        </a>
      </template>
    </Menu>
  `,
});
