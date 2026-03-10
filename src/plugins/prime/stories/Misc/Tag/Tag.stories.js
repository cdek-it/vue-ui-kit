import { Template, TemplateVariants } from './Tag.template';

export default {
  title: 'Prime/Misc/Tag',
};

export const AllVariants = {
  render: TemplateVariants.bind({}),
};

export const Primary = {
  render: Template.bind({}),

  args: {
    value: 'Tag',
    severity: 'primary',
  },
};

export const Secondary = {
  render: Template.bind({}),

  args: {
    value: 'Tag',
    severity: 'secondary',
  },
};

export const Success = {
  render: Template.bind({}),

  args: {
    value: 'Tag',
    severity: 'success',
  },
};

export const Info = {
  render: Template.bind({}),

  args: {
    value: 'Tag',
    severity: 'info',
  },
};

export const Warning = {
  render: Template.bind({}),

  args: {
    value: 'Tag',
    severity: 'warn',
  },
};

export const Danger = {
  render: Template.bind({}),

  args: {
    value: 'Tag',
    severity: 'danger',
  },
};

export const Rounded = {
  render: Template.bind({}),

  args: {
    value: 'Tag',
    rounded: true,
  },
};

export const WithIcon = {
  render: Template.bind({}),

  args: {
    value: 'Tag',
    icon: 'ti ti-check',
  },
};

export const IconOnly = {
  render: Template.bind({}),

  args: {
    icon: 'ti ti-check',
  },
};
