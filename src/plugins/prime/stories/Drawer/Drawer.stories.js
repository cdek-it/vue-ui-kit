import Drawer from 'primevue/drawer';
import { Template, TemplateVariants } from './Drawer.template';

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

export const AllVariants = {
  name: 'Все варианты',
  render: () => TemplateVariants(),
};

export const Default = {
  name: 'По умолчанию',
  render: (args) => Template(args),
  args: {
    header: 'Заголовок Drawer',
  },
};

export const Left = {
  name: 'Слева',
  render: (args) => Template(args),
  args: {
    header: 'Drawer Слева',
    position: 'left',
  },
};

export const Right = {
  name: 'Справа',
  render: (args) => Template(args),
  args: {
    header: 'Drawer Справа',
    position: 'right',
  },
};

export const Top = {
  name: 'Сверху',
  render: (args) => Template(args),
  args: {
    header: 'Drawer Сверху',
    position: 'top',
  },
};

export const Bottom = {
  name: 'Снизу',
  render: (args) => Template(args),
  args: {
    header: 'Drawer Снизу',
    position: 'bottom',
  },
};

export const Full = {
  name: 'На весь экран',
  render: (args) => Template(args),
  args: {
    header: 'Полноэкранный Drawer',
    position: 'full',
  },
};
