import { Menubar } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { Menubar },
  setup() {
    const items = ref([
      {
        label: 'Home',
      },
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
    ]);

    return { args, items };
  },
  template: `
    <div>
      <Menubar :model="items"/>
    </div>
`,
});

export const CheckedItem = (args) => ({
  components: { Menubar },
  setup() {
    const selectedClass = 'p-menuitem-checked';

    const items = ref([
      {
        label: 'Home',
        class: selectedClass,
      },
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
    ]);

    return { args, items };
  },
  template: `
    <div>
      <Menubar :model="items"/>
    </div>
`,
});
