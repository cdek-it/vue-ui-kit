import ExtraMenuItem from './ExtraMenuItem.vue';

export default {
  title: 'Prime Blocks/ExtraMenuItem',
  component: ExtraMenuItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Самостоятельный disabled-пункт блокирует активацию и навигацию. Для as=button применяется нативный disabled; внутри меню сохраняются состояния родительского Prime-компонента. Иконка подменю по умолчанию chevron-right; проп expanded переключает её на chevron-down (расширение API, в composite-меню значение передаёт родитель).',
      },
    },
  },
};

export const Basic = {
  args: { label: 'Menu item', icon: 'ti ti-box', url: '#' },
};

export const WithDescription = {
  args: {
    label: 'Menu item',
    description: 'Description',
    icon: 'ti ti-box',
    badge: '2',
    items: [{ label: 'Child' }],
  },
};

export const Expanded = {
  args: {
    label: 'Menu item',
    icon: 'ti ti-box',
    expanded: true,
    items: [{ label: 'Child' }],
  },
};

export const CustomIcon = {
  render: () => ({
    components: { ExtraMenuItem },
    template: `
      <ExtraMenuItem label="Custom icon">
        <template #itemicon><span class="ti ti-star" /></template>
      </ExtraMenuItem>
    `,
  }),
};

// Standalone items must also suppress native actions without a Prime menu parent.
export const Disabled = {
  args: {
    as: 'button',
    label: 'Disabled item',
    icon: 'ti ti-box',
    disabled: true,
  },
};
