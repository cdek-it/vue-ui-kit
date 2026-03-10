import { Template } from './Chip.template';

export default {
  title: 'Prime/Misc/Chip',
};

export const Default = {
  render: Template.bind({}),

  args: {
    label: 'Chip',
  },
};

export const Removable = {
  render: Template.bind({}),

  args: {
    label: 'Chip',
    removable: true,
  },
};

export const Icon = {
  render: Template.bind({}),

  args: {
    label: 'Chip',
    icon: 'ti ti-info-circle',
  },
};

export const RemovableIcon = {
  render: Template.bind({}),
  name: 'RemovableIcon',

  args: {
    label: 'Chip',
    icon: 'ti ti-info-circle',
    removable: true,
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: 'disabled',

  args: {
    label: 'Chip',
    icon: 'ti ti-info-circle',
    removable: true,
    disabled: true,
  },
};

export const Accessability = {
  render: Template.bind({}),

  args: {
    label: 'Chip',
    icon: 'ti ti-info-circle',
    removable: true,

    pt: {
      removeIcon: {
        tabindex: '0',
      },
    },
  },
};

export const AccessabilityDisabledError = {
  render: Template.bind({}),
  name: 'AccessabilityDisabledError',

  args: {
    label: 'Chip',
    icon: 'ti ti-info-circle',
    removable: true,
    disabled: true,

    pt: {
      removeIcon: {
        tabindex: '0',
      },
    },
  },
};

export const AccessabilityDisabled = {
  render: Template.bind({}),
  name: 'AccessabilityDisabled',

  args: {
    label: 'Chip',
    icon: 'ti ti-info-circle',
    removable: true,
    disabled: true,

    pt: {
      removeIcon: {
        tabindex: '-1',
      },
    },
  },
};
