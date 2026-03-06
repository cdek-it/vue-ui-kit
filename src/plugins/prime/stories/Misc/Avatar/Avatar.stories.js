import {
  AvatarTemplate,
  AvatarIconTemplate,
  AvatarImageTemplate,
  AvatarBadgeTemplate,
  AvatarIconBadgeTemplate,
  AvatarImageBadgeTemplate,
} from './Avatar.template.js';

export default {
  title: 'Prime/Misc/Avatar',
};

export const Label = {
  render: AvatarTemplate.bind({}),
  name: 'Label',
};

export const Icon = {
  render: AvatarIconTemplate.bind({}),
  name: 'Icon',
};

export const Image = {
  render: AvatarImageTemplate.bind({}),
  name: 'Image',
};

export const LabelWithBadge = {
  render: AvatarBadgeTemplate.bind({}),
  name: 'Label With Badge',
};

export const IconWithBadge = {
  render: AvatarIconBadgeTemplate.bind({}),
  name: 'Icon With Badge',
};

export const ImageWithBadge = {
  render: AvatarImageBadgeTemplate.bind({}),
  name: 'Image With Badge',
};
