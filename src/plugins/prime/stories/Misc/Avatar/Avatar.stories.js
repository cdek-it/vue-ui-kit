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
};

export const Icon = {
  render: AvatarIconTemplate.bind({}),
};

export const Image = {
  render: AvatarImageTemplate.bind({}),
};

export const LabelWithBadge = {
  render: AvatarBadgeTemplate.bind({}),
};

export const IconWithBadge = {
  render: AvatarIconBadgeTemplate.bind({}),
};

export const ImageWithBadge = {
  render: AvatarImageBadgeTemplate.bind({}),
};
