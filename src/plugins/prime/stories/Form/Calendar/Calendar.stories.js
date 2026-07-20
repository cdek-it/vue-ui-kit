import { Template, LanguagesTemplate } from './Calendar.template';

export default {
  title: 'Prime/Form/Calendar',
};

export const Primary = {
  render: Template.bind({}),
};

export const Languages = {
  render: LanguagesTemplate.bind({}),
};

export const Disabled = {
  render: Template.bind({}),

  args: {
    inline: true,
    disabled: true,
  },
};

export const TimeOnly = {
  render: Template.bind({}),
  name: 'TimeOnly',

  args: {
    timeOnly: true,
  },
};
