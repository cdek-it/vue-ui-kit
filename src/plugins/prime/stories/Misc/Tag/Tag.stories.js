import { Template, TemplateVariants } from './Tag.template';

export default {
  title: 'Prime/Misc/Tag',
};

export const AllVariants = {
  render: TemplateVariants.bind({}),
  name: 'All Variants',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',

  args: {
    value: 'Tag',
    severity: 'primary',
  },
};

export const Secondary = {
  render: Template.bind({}),
  name: 'Secondary',

  args: {
    value: 'Tag',
    severity: 'secondary',
  },
};

export const Success = {
  render: Template.bind({}),
  name: 'Success',

  args: {
    value: 'Tag',
    severity: 'success',
  },
};

export const Info = {
  render: Template.bind({}),
  name: 'Info',

  args: {
    value: 'Tag',
    severity: 'info',
  },
};

export const Warning = {
  render: Template.bind({}),
  name: 'Warning',

  args: {
    value: 'Tag',
    severity: 'warn',
  },
};

export const Danger = {
  render: Template.bind({}),
  name: 'Danger',

  args: {
    value: 'Tag',
    severity: 'danger',
  },
};

export const Rounded = {
  render: Template.bind({}),
  name: 'Rounded',

  args: {
    value: 'Tag',
    rounded: true,
  },
};

export const WithIcon = {
  render: Template.bind({}),
  name: 'With Icon',

  args: {
    value: 'Tag',
    icon: 'ti ti-check',
  },
};

export const IconOnly = {
  render: Template.bind({}),
  name: 'Icon Only',

  args: {
    icon: 'ti ti-check',
  },
};
