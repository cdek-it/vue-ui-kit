import { Template } from './ProgressSpinner.template';

export default {
  title: 'Prime/Misc/ProgressSpinner',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',
};

export const Size = {
  render: Template.bind(),
  name: 'Size',

  args: {
    class: '!w-[300px] !h-[300px]',
    value: 'Custom Size',
  },
};
