import { Template } from './Skeleton.template';

export default {
  title: 'Prime/Misc/Skeleton',
};

export const Default = {
  render: Template.bind({}),
};

export const Circle = {
  render: Template.bind({}),

  args: {
    shape: 'circle',
    size: '100px',
  },
};

export const NoAnimate = {
  render: Template.bind({}),
  name: 'NoAnimate',

  args: {
    animation: 'none',
    size: '100px',
  },
};
