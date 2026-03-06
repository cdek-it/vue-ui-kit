import { Template, TemplateVariants } from './Tooltip.template';

export default {
  title: 'Prime/Form/Tooltip',
};

export const AllVariants = {
  render: TemplateVariants.bind({}),
  name: 'All Variants',
};

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    text: 'This is a tooltip',
    label: 'Hover me',
  },
};

export const Top = {
  render: Template.bind({}),
  name: 'Top',

  args: {
    text: 'Top tooltip',
    label: 'Top',
  },
};

export const Bottom = {
  render: Template.bind({}),
  name: 'Bottom',

  args: {
    text: 'Bottom tooltip',
    label: 'Bottom',
  },
};

export const Left = {
  render: Template.bind({}),
  name: 'Left',

  args: {
    text: 'Left tooltip',
    label: 'Left',
  },
};

export const Right = {
  render: Template.bind({}),
  name: 'Right',

  args: {
    text: 'Right tooltip',
    label: 'Right',
  },
};

export const LongText = {
  render: Template.bind({}),
  name: 'Long Text',

  args: {
    text: 'This is a very long tooltip text that should wrap to multiple lines when it exceeds the maximum width of the tooltip container',
    label: 'Long text',
  },
};
