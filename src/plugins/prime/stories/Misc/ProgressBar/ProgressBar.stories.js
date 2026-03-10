import { Template } from './ProgressBar.template';

export default {
  title: 'Prime/Misc/ProgressBar',
};

export const Primary = {
  render: Template.bind({}),

  args: {
    value: 50,
  },
};

export const Indeterminate = {
  render: Template.bind({}),

  args: {
    mode: 'indeterminate',
  },
};

export const Values25 = {
  render: Template.bind({}),

  args: {
    value: 25,
  },
};

export const Values50 = {
  render: Template.bind({}),

  args: {
    value: 50,
  },
};

export const Values75 = {
  render: Template.bind({}),

  args: {
    value: 75,
  },
};

export const Values100 = {
  render: Template.bind({}),

  args: {
    value: 100,
  },
};

export const NoLabel = {
  render: Template.bind({}),

  args: {
    value: 60,
    showValue: false,
  },
};
