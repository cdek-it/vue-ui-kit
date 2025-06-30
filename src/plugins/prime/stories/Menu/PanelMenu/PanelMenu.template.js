import { ref } from 'vue';
import { PanelMenu } from 'primevue';

export const Template = (args) => ({
  components: { PanelMenu },
  setup() {
    const items = ref([
      {
        label: 'Files',
        items: [
          {
            label: 'Documents',
            items: [
              {
                label: 'Invoices',
                items: [
                  {
                    label: 'Pending',
                  },
                  {
                    label: 'Paid',
                  },
                ],
              },
              {
                label: 'Clients',
              },
            ],
          },
          {
            label: 'Images',
            items: [
              {
                label: 'Logos',
              },
            ],
          },
        ],
      },
      {
        label: 'Cloud',
        items: [
          {
            label: 'Upload',
          },
          {
            label: 'Download',
          },
          {
            label: 'Sync',
          },
        ],
      },
      {
        label: 'Devices',
        disabled: true,
        items: [
          {
            label: 'Phone',
          },
          {
            label: 'Desktop',
          },
          {
            label: 'Tablet',
          },
        ],
      },
    ]);

    return { args, items };
  },
  template: `
    <div>
      <PanelMenu :model="items" multiple/>
    </div>
`,
});
