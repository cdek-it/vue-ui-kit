import { Template, TemplateVariants } from './Dialog.template';

export default {
  title: 'Prime/Dialog',
};

export const AllVariants = {
  render: TemplateVariants.bind({}),
  name: 'All Variants',
};

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    header: 'Dialog Header',
    modal: true,
  },
};

export const Small = {
  render: Template.bind({}),
  name: 'Small',

  args: {
    header: 'Small Dialog',
    modal: true,
    class: 'p-dialog-sm',
  },
};

export const Large = {
  render: Template.bind({}),
  name: 'Large',

  args: {
    header: 'Large Dialog',
    modal: true,
    class: 'p-dialog-lg',
  },
};

export const ExtraLarge = {
  render: Template.bind({}),
  name: 'Extra Large',

  args: {
    header: 'Extra Large Dialog',
    modal: true,
    class: 'p-dialog-xlg',
  },
};

export const NoModal = {
  render: Template.bind({}),
  name: 'No Modal',

  args: {
    header: 'No Modal Dialog',
    modal: false,
  },
};

export const NoHeader = {
  render: Template.bind({}),
  name: 'No Header',

  args: {
    modal: true,
  },
};
