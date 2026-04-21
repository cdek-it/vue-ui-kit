import { MegaMenu } from 'primevue';
import { ref } from 'vue';
import MegaMenuItem from './MegaMenuItem.vue';

const baseItems = [
  {
    label: 'Products',
    icon: 'ti ti-box',
    items: [
      [
        {
          label: 'UI Components',
          items: [
            { label: 'Form', icon: 'ti ti-forms' },
            { label: 'Button', icon: 'ti ti-hand-click' },
            { label: 'Table', icon: 'ti ti-table' },
          ],
        },
      ],
      [
        {
          label: 'Charts',
          items: [
            { label: 'Bar Chart', icon: 'ti ti-chart-bar' },
            { label: 'Line Chart', icon: 'ti ti-chart-line' },
          ],
        },
      ],
    ],
  },
  {
    label: 'Solutions',
    icon: 'ti ti-bulb',
    items: [
      [
        {
          label: 'Business',
          items: [
            { label: 'Analytics', icon: 'ti ti-chart-dots' },
            { label: 'CRM', icon: 'ti ti-users' },
          ],
        },
      ],
    ],
  },
  {
    label: 'Contact',
    icon: 'ti ti-mail',
    disabled: true,
  },
];

export const HorizontalTemplate = (args) => ({
  components: { MegaMenu },
  setup() {
    const items = ref(baseItems);

    return { args, items };
  },
  template: `<MegaMenu :model="items" v-bind="args" />`,
});

export const VerticalTemplate = (args) => ({
  components: { MegaMenu },
  setup() {
    const items = ref(baseItems);

    return { args, items };
  },
  template: `<MegaMenu :model="items" orientation="vertical" v-bind="args" />`,
});

export const CustomTemplate = (args) => ({
  components: { MegaMenu, MegaMenuItem },
  setup() {
    const items = ref([
      {
        label: 'Products',
        icon: 'ti ti-box',
        items: [
          [
            {
              label: 'Components',
              items: [
                {
                  label: 'Form',
                  description: 'Input, Select, Checkbox',
                  icon: 'ti ti-forms',
                  badge: 'New',
                },
                {
                  label: 'Button',
                  description: 'Actions and triggers',
                  icon: 'ti ti-hand-click',
                },
              ],
            },
          ],
          [
            {
              label: 'Charts',
              items: [
                {
                  label: 'Bar Chart',
                  description: 'Categorical comparison',
                  icon: 'ti ti-chart-bar',
                },
                {
                  label: 'Line Chart',
                  description: 'Trends over time',
                  icon: 'ti ti-chart-line',
                  badge: 'Beta',
                },
              ],
            },
          ],
        ],
      },
      {
        label: 'Solutions',
        icon: 'ti ti-bulb',
        items: [
          [
            {
              label: 'Business',
              items: [
                {
                  label: 'Analytics',
                  description: 'Reports and dashboards',
                  icon: 'ti ti-chart-dots',
                },
                {
                  label: 'CRM',
                  description: 'Customer management',
                  icon: 'ti ti-users',
                  badge: 'Pro',
                },
              ],
            },
          ],
        ],
      },
    ]);

    return { args, items };
  },
  template: `
    <MegaMenu :model="items" v-bind="args">
      <template #item="{ item, props }">
        <MegaMenuItem :item="item" :action-props="props.action" />
      </template>
    </MegaMenu>
  `,
});
