import Card from 'primevue/card';
import {
  Template,
  TemplateOverlay,
  TemplateWithoutHeader,
  TemplateWithoutFooter,
  TemplateWithoutSubtitle,
} from './Card.template';

const meta = {
  title: 'Prime/Panel/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Используется для группировки контента с заголовком, подзаголовком и действиями. \n\n \`\`\`js \n import Card from 'primevue/card'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-card' },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Card',
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Card>
    <template #header>
      <div class="bg-gray-100 h-32 flex items-center justify-center text-gray-400">
        <i class="ti ti-photo text-3xl"></i>
      </div>
    </template>
    <template #title>Title</template>
    <template #subtitle>Caption</template>
    <template #content>
      <p class="text-sm">Контент карточки.</p>
    </template>
    <template #footer>
      <Button label="Действие" size="small" />
    </template>
  </Card>
</template>
        `,
      },
    },
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const Overlay = {
  render: TemplateOverlay,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Card class="shadow-md">
    <template #header>
      <div class="bg-gray-100 h-32 flex items-center justify-center text-gray-400">
        <i class="ti ti-photo text-3xl"></i>
      </div>
    </template>
    <template #title>Title</template>
    <template #subtitle>Caption</template>
    <template #content>
      <p class="text-sm">Карточка с тенью.</p>
    </template>
    <template #footer>
      <Button label="Действие" size="small" style="width: 100%" />
    </template>
  </Card>
</template>
        `,
      },
    },
  },
};

export const WithoutHeader = {
  render: TemplateWithoutHeader,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Card>
    <template #title>Title</template>
    <template #subtitle>Caption</template>
    <template #content><p class="text-sm">Контент.</p></template>
    <template #footer><Button label="Действие" size="small" /></template>
  </Card>
</template>
        `,
      },
    },
  },
};

export const WithoutFooter = {
  render: TemplateWithoutFooter,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Card>
    <template #header>...</template>
    <template #title>Title</template>
    <template #subtitle>Caption</template>
    <template #content><p class="text-sm">Контент.</p></template>
  </Card>
</template>
        `,
      },
    },
  },
};

export const WithoutSubtitle = {
  render: TemplateWithoutSubtitle,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Card>
    <template #header>...</template>
    <template #title>Title</template>
    <template #content><p class="text-sm">Контент.</p></template>
    <template #footer><Button label="Действие" size="small" /></template>
  </Card>
</template>
        `,
      },
    },
  },
};
