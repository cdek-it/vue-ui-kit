import { Template, TemplateGrouped, TemplateCustom } from './Listbox.template';

export default {
  title: 'Prime/Form/Listbox',
};

export const Primary = {
  render: Template.bind({}),
};

export const Checkmark = {
  render: Template.bind({}),

  args: {
    checkmark: true,
  },
};

export const Grouped = {
  render: TemplateGrouped.bind({}),
};

export const Custom = {
  render: TemplateCustom.bind({}),
};

export const Filter = {
  render: Template.bind({}),

  args: {
    filter: true,
  },
};
