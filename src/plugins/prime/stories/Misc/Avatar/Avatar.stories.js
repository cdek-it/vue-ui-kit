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
          'Avatar представляет пользователя или сущность. Может содержать текст, иконку или изображение.',
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
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Avatar label="A" />
</template>
        `,
      },
    },
  },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const Label = {
  render: TemplateLabel,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Avatar label="P" />
    <Avatar label="V" size="large" />
    <Avatar label="U" size="xlarge" />
  </div>
</template>
        `,
      },
    },
  },
};

export const Icon = {
  render: TemplateIcon,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Avatar icon="ti ti-user" />
    <Avatar icon="ti ti-search" size="large" />
    <Avatar icon="ti ti-check" size="xlarge" />
  </div>
</template>
        `,
      },
    },
  },
};

export const Image = {
  render: TemplateImage,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Avatar image="https://i.pravatar.cc/300?u=a" />
    <Avatar image="https://i.pravatar.cc/300?u=b" size="large" />
    <Avatar image="https://i.pravatar.cc/300?u=c" size="xlarge" />
  </div>
</template>
        `,
      },
    },
  },
};

export const LabelWithBadge = {
  render: TemplateLabelBadge,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="4" severity="danger">
      <Avatar label="U" size="xlarge" />
    </OverlayBadge>
    <OverlayBadge value="new" severity="info">
      <Avatar label="A" size="large" />
    </OverlayBadge>
  </div>
</template>
        `,
      },
    },
  },
};

export const IconWithBadge = {
  render: TemplateIconBadge,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <OverlayBadge severity="success">
      <Avatar icon="ti ti-user" size="xlarge" />
    </OverlayBadge>
    <OverlayBadge value="!" severity="warn">
      <Avatar icon="ti ti-bell" size="large" />
    </OverlayBadge>
  </div>
</template>
        `,
      },
    },
  },
};

export const ImageWithBadge = {
  render: TemplateImageBadge,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <OverlayBadge severity="success">
      <Avatar image="https://i.pravatar.cc/300?u=a" size="xlarge" shape="circle" />
    </OverlayBadge>
    <OverlayBadge severity="danger">
      <Avatar image="https://i.pravatar.cc/300?u=b" size="large" />
    </OverlayBadge>
  </div>
</template>
        `,
      },
    },
  },
};

export const AvatarGroup = {
  render: TemplateGroup,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <AvatarGroup>
    <Avatar image="https://i.pravatar.cc/300?u=a" shape="circle" />
    <Avatar image="https://i.pravatar.cc/300?u=b" shape="circle" />
    <Avatar image="https://i.pravatar.cc/300?u=c" shape="circle" />
    <Avatar image="https://i.pravatar.cc/300?u=d" shape="circle" />
    <Avatar image="https://i.pravatar.cc/300?u=e" shape="circle" />
    <Avatar label="+2" shape="circle" />
  </AvatarGroup>
</template>
        `,
      },
    },
  },
};

export const Size = {
  render: TemplateSizes,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex items-end gap-4">
    <Avatar label="M" />
    <Avatar label="L" size="large" />
    <Avatar label="XL" size="xlarge" />
  </div>
</template>
        `,
      },
    },
  },
};

export const Shape = {
  render: TemplateShapes,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Avatar label="S" />
    <Avatar label="C" shape="circle" />
  </div>
</template>
        `,
      },
    },
  },
};
