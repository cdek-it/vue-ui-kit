import { MegaMenu } from 'primevue';
import CodeSnippet from '@/plugins/prime/stories/_common/CodeSnippet.vue';

export const Template = (args) => ({
  components: { MegaMenu, CodeSnippet },
  setup() {
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

export const VerticalTemplate = (args) => ({
  components: { MegaMenu, CodeSnippet },
  setup() {
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

    return { args, items };
  },
  template: `
    <div>
      <MegaMenu :model="items" orientation="vertical"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});
