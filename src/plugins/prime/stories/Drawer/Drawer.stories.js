import Drawer from 'primevue/drawer';
import { Template } from './Drawer.template';

export default {
  title: 'Prime/Overlay/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Drawer представляет собой панель, которая накладывается на содержимое страницы.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-drawer' },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom', 'full'],
    },
    visible: {
      control: 'boolean',
    },
  },
  args: {
    visible: false,
  },
};

export const Default = {
  render: (args) => Template(args),
  args: {
    header: 'Drawer Header',
  },
};

export const Left = {
  render: (args) => Template(args),
  args: {
    header: 'Drawer Left',
    position: 'left',
  },
};

export const Right = {
  render: (args) => Template(args),
  args: {
    header: 'Drawer Right',
    position: 'right',
  },
};

export const Top = {
  render: (args) => Template(args),
  args: {
    header: 'Drawer Top',
    position: 'top',
  },
};

export const Bottom = {
  render: (args) => Template(args),
  args: {
    header: 'Drawer Bottom',
    position: 'bottom',
  },
};

export const Full = {
  name: 'Full Screen',
  render: (args) => Template(args),
  args: {
    header: 'Full Screen Drawer',
    position: 'full',
  },
};
