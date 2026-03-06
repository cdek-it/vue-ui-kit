import { Template, Slots } from './ToggleButton.template';

export default {
  title: 'Prime/Form/ToggleButton',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',
};

export const Slot = {
  render: Slots.bind({}),
  name: 'Slot',

  args: {
    name: 'default',
  },
};

export const IconSlot = {
  render: Slots.bind({}),
  name: 'Icon Slot',

  args: {
    name: 'icon',
    offLabel: 'ToggleButton',
    onLabel: 'ToggleButton',
  },
};
