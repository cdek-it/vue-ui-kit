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
          'Визуальное представление пользователя или сущности. Может содержать текст, иконку или изображение.',
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
    docs: {},
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
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" />
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" size="xlarge" />
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
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="xlarge" shape="circle" />
    </OverlayBadge>
    <OverlayBadge severity="danger">
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" />
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
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" />
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" shape="circle" />
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png" shape="circle" />
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
