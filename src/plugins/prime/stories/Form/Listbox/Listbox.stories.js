import { Template, TemplateGrouped, TemplateCustom } from './Listbox.template';

export default {
  title: 'Prime/Form/Listbox',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',
};

export const Checkmark = {
  render: Template.bind({}),
  name: 'Checkmark',

  args: {
    checkmark: true,
  },
};

export const Grouped = {
  render: TemplateGrouped.bind({}),
  name: 'Grouped',
};

export const Custom = {
  render: TemplateCustom.bind({}),
  name: 'Custom',
};

export const Filter = {
  render: Template.bind({}),
  name: 'Filter',

  args: {
    filter: true,
  },
};
