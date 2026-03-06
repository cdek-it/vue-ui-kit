import { Template, ChangedIcon, CustomChipTemplate } from './Chips.template';

export default {
  title: 'Prime/Form/Chips',
};

export const AnyValue = {
  render: Template.bind({}),
  name: 'Any Value',

  args: {
    multiple: true,
    typeahead: false,
  },
};

export const Suggestions = {
  render: Template.bind({}),
  name: 'Suggestions',

  args: {
    multiple: true,
    story: 'Suggestions',
  },
};

export const ChangeRemoveIcon = {
  render: ChangedIcon.bind({}),
  name: 'ChangeRemoveIcon',

  args: {
    multiple: true,
  },
};

export const CustomChip = {
  render: CustomChipTemplate.bind({}),
  name: 'CustomChip',

  args: {
    multiple: true,
  },
};
