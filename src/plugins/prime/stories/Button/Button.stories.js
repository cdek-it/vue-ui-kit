import { Template, TemplateBadge, TemplateVariants } from './Button.template';

export default {
  title: 'Prime/Button',
};

export const AllVariants = {
  render: TemplateVariants.bind({}),
};

export const Primary = {
  render: Template.bind({}),

  args: {
    label: 'Button',
  },
};

export const Secondary = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    severity: 'secondary',
  },
};

export const Tertiary = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    severity: 'contrast',
  },
};

export const Text = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    variant: 'text',
  },
};

export const Link = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    variant: 'link',
  },
};

export const IconOnly = {
  render: Template.bind({}),

  args: {
    icon: 'ti ti-check',
  },
};

export const IconPrefix = {
  render: Template.bind({}),

  args: {
    icon: 'ti ti-check',
    label: 'Button',
  },
};

export const IconPostfix = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    icon: 'ti ti-arrow-right',
    iconPos: 'right',
  },
};

export const Rounded = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    rounded: true,
  },
};

export const Disabled = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    disabled: true,
  },
};

export const DisabledOutlined = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    variant: 'outlined',
    disabled: true,
  },
};

export const DisabledText = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    variant: 'text',
    disabled: true,
  },
};

export const DisabledLink = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    variant: 'link',
    disabled: true,
  },
};

export const Badge = {
  render: TemplateBadge.bind({}),

  args: {
    value: 'Badge',
    severity: 'danger',
  },

  argTypes: {
    value: {
      control: 'text',
    },

    severity: {
      control: 'inline-radio',
      options: [null, 'info', 'success', 'warn', 'danger'],
    },
  },

  parameters: {
    controls: {
      include: ['value', 'severity'],
    },
  },
};
