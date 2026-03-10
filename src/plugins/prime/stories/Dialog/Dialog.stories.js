import { Template, TemplateVariants } from './Dialog.template';

export default {
  title: 'Prime/Dialog',
};

export const AllVariants = {
  render: TemplateVariants.bind({}),
};

export const Default = {
  render: Template.bind({}),

  args: {
    header: 'Dialog Header',
    modal: true,
  },
};

export const Small = {
  render: Template.bind({}),

  args: {
    header: 'Small Dialog',
    modal: true,
    class: 'p-dialog-sm',
  },
};

export const Large = {
  render: Template.bind({}),

  args: {
    header: 'Large Dialog',
    modal: true,
    class: 'p-dialog-lg',
  },
};

export const ExtraLarge = {
  render: Template.bind({}),

  args: {
    header: 'Extra Large Dialog',
    modal: true,
    class: 'p-dialog-xlg',
  },
};

export const NoModal = {
  render: Template.bind({}),

  args: {
    header: 'No Modal Dialog',
    modal: false,
  },
};

export const NoHeader = {
  render: Template.bind({}),

  args: {
    modal: true,
  },
};
