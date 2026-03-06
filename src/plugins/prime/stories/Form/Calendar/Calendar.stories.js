import { Template, LanguagesTemplate } from './Calendar.template';

export default {
  title: 'Prime/Form/Calendar',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',
};

export const Languages = {
  render: LanguagesTemplate.bind({}),
  name: 'Languages',
};

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

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
