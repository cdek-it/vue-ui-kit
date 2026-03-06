import { Template } from './ProgressBar.template';

export default {
  title: 'Prime/Misc/ProgressBar',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',

  args: {
    value: 50,
  },
};

export const Indeterminate = {
  render: Template.bind({}),
  name: 'Indeterminate',

  args: {
    mode: 'indeterminate',
  },
};

export const Values25 = {
  render: Template.bind({}),
  name: 'Values 25',

  args: {
    value: 25,
  },
};

export const Values50 = {
  render: Template.bind({}),
  name: 'Values 50',

  args: {
    value: 50,
  },
};

export const Values75 = {
  render: Template.bind({}),
  name: 'Values 75',

  args: {
    value: 75,
  },
};

export const Values100 = {
  render: Template.bind({}),
  name: 'Values 100',

  args: {
    value: 100,
  },
};

export const NoLabel = {
  render: Template.bind({}),
  name: 'No Label',

  args: {
    value: 60,
    showValue: false,
  },
};
