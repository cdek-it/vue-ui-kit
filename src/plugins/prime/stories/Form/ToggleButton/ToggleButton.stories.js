import { Template, Slots } from './ToggleButton.template';

export default {
  title: 'Prime/Form/ToggleButton',
};

export const Primary = {
  render: Template.bind({}),
};

export const Slot = {
  render: Slots.bind({}),

  args: {
    name: 'default',
  },
};

export const IconSlot = {
  render: Slots.bind({}),

  args: {
    name: 'icon',
    offLabel: 'ToggleButton',
    onLabel: 'ToggleButton',
  },
};
