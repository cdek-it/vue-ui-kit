import Avatar from 'primevue/avatar';
import {
  Template,
  TemplateLabel,
  TemplateIcon,
  TemplateImage,
  TemplateGroup,
  TemplateSizes,
  TemplateShapes,
  TemplateLabelBadge,
  TemplateIconBadge,
  TemplateImageBadge,
} from './Avatar.template';

const meta = {
  title: 'Prime/Misc/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Avatar представляет пользователя или сущность. Может содержать текст, иконку или изображение. [PrimeVue Avatar](https://primevue.org/avatar)',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-avatar' },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст внутри аватара',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'text',
      description: 'Иконка внутри аватара',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    image: {
      control: 'text',
      description: 'URL изображения',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large', 'xlarge', null],
      description: 'Размер аватара',
      table: {
        category: 'Props',
        defaultValue: { summary: 'null (normal)' },
        type: { summary: "'small' | 'large' | 'xlarge'" },
      },
    },
    shape: {
      control: 'select',
      options: ['square', 'circle'],
      description: 'Форма аватара',
      table: {
        category: 'Props',
        defaultValue: { summary: 'square' },
        type: { summary: "'square' | 'circle'" },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const AvatarDefault = {
  name: 'Avatar',
  render: Template,
  args: {
    label: 'A',
  },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const Label = {
  render: TemplateLabel,
};

export const Icon = {
  render: TemplateIcon,
};

export const Image = {
  render: TemplateImage,
};

export const LabelWithBadge = {
  render: TemplateLabelBadge,
};

export const IconWithBadge = {
  render: TemplateIconBadge,
};

export const ImageWithBadge = {
  render: TemplateImageBadge,
};

export const AvatarGroup = {
  render: TemplateGroup,
};

export const Size = {
  render: TemplateSizes,
};

export const Shape = {
  render: TemplateShapes,
};
