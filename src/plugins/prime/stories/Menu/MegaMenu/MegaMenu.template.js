import { MegaMenu } from 'primevue';

const items = [
  {
    label: 'MenuItem',
    icon: 'ti ti-user',
    items: [
      [
        {
          label: 'Submenu 1',
          items: [{ label: 'Item 1.1' }, { label: 'Item 1.2' }],
        },
      ],
      [
        {
          label: 'Submenu 2',
          items: [
            { label: 'Item 2.1', icon: 'ti ti-file' },
            { label: 'Item 2.2', icon: 'ti ti-file' },
          ],
        },
      ],
    ],
  },
  {
    label: 'MenuItem',
    icon: 'ti ti-user',
    items: [
      [
        {
          label: 'Submenu 1',
          items: [{ label: 'Item 1.1' }, { label: 'Item 1.2' }],
        },
      ],
    ],
  },
];

export const HorizontalTemplate = () => ({
  components: { MegaMenu },
  setup() {
    return { items };
  },
  template: `
    <MegaMenu :model="items" />
  `,
});

export const VerticalTemplate = () => ({
  components: { MegaMenu },
  setup() {
    return { items };
  },
  template: `
    <MegaMenu :model="items" orientation="vertical" />
  `,
});
