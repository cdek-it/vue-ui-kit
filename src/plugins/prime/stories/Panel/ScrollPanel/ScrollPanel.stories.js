import ScrollPanel from 'primevue/scrollpanel';
import {
  Template,
  TemplateHorizontal,
  TemplateBoth,
} from './ScrollPanel.template';

const meta = {
  title: 'Prime/Panel/ScrollPanel',
  component: ScrollPanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `ScrollPanel — компонент с кастомной полосой прокрутки. \n\n \`\`\`js \n import ScrollPanel from 'primevue/scrollpanel'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-scrollpanel' },
  },
  argTypes: {
    step: {
      control: 'number',
      description: 'Шаг прокрутки в пикселях.',
      table: {
        category: 'Props',
        defaultValue: { summary: 5 },
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const Default = {
  name: 'ScrollPanel',
  render: Template,
  args: {
    step: 5,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ScrollPanel style="width: 100%; height: 200px">
    <p>Ваш контент здесь...</p>
  </ScrollPanel>
</template>
        `,
      },
    },
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const Horizontal = {
  render: TemplateHorizontal,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ScrollPanel style="width: 100%; height: 80px">
    <p style="white-space: nowrap">Длинная строка без переносов...</p>
  </ScrollPanel>
</template>
        `,
      },
    },
  },
};

export const Both = {
  render: TemplateBoth,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ScrollPanel style="width: 100%; height: 200px">
    <p style="white-space: nowrap">Контент шире и выше контейнера...</p>
  </ScrollPanel>
</template>
        `,
      },
    },
  },
};
