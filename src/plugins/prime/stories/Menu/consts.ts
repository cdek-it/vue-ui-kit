export const selectedClass = 'p-menuitem-checked';

export const baseMenuItems = [
  {
    label: 'Home',
    icon: 'ti ti-user',
    class: selectedClass,
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
