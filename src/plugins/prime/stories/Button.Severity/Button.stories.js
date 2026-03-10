import { Template } from '../Button/Button.template';

export default {
  title: 'Prime/Button/Severity',
};

export const Danger = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    icon: 'ti ti-arrow-down-right',
    severity: 'danger',
  },
};

export const Warn = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    icon: 'ti ti-alert-triangle',
    severity: 'warn',
  },
};

export const Success = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    icon: 'ti ti-check',
    severity: 'success',
  },
};

export const Info = {
  render: Template.bind({}),

  args: {
    label: 'Button',
    icon: 'ti ti-info-circle',
    severity: 'info',
  },
};
