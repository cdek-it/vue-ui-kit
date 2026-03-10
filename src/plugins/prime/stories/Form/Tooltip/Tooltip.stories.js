import { Template, TemplateVariants } from './Tooltip.template';

export default {
  title: 'Prime/Form/Tooltip',
};

export const AllVariants = {
  render: TemplateVariants.bind({}),
};

export const Default = {
  render: Template.bind({}),

  args: {
    text: 'This is a tooltip',
    label: 'Hover me',
  },
};

export const Top = {
  render: Template.bind({}),

  args: {
    text: 'Top tooltip',
    label: 'Top',
  },
};

export const Bottom = {
  render: Template.bind({}),

  args: {
    text: 'Bottom tooltip',
    label: 'Bottom',
  },
};

export const Left = {
  render: Template.bind({}),

  args: {
    text: 'Left tooltip',
    label: 'Left',
  },
};

export const Right = {
  render: Template.bind({}),

  args: {
    text: 'Right tooltip',
    label: 'Right',
  },
};

export const LongText = {
  render: Template.bind({}),

  args: {
    text: 'This is a very long tooltip text that should wrap to multiple lines when it exceeds the maximum width of the tooltip container',
    label: 'Long text',
  },
};
