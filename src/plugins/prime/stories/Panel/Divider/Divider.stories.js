import Divider from 'primevue/divider';
import {
  Template,
  TemplateContent,
  TemplateVertical,
  TemplateVerticalContent,
  TemplateType,
} from './Divider.template';

const meta = {
  title: 'Prime/Panel/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Divider используется для разделения контента.

### Import
\`\`\`js
import Divider from 'primevue/divider';
\`\`\`
        `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-divider' },
  },
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'top', 'bottom'],
      description: 'Выравнивание контента внутри разделителя',
      table: {
        category: 'Props',
        type: { summary: "'left' | 'center' | 'right' | 'top' | 'bottom'" },
      },
    },
    layout: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация разделителя',
      table: {
        category: 'Props',
        defaultValue: { summary: 'horizontal' },
        type: { summary: "'horizontal' | 'vertical'" },
      },
    },
    type: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Тип линии',
      table: {
        category: 'Props',
        defaultValue: { summary: 'solid' },
        type: { summary: "'solid' | 'dashed' | 'dotted'" },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Divider />
</template>
        `,
      },
    },
  },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const WithContent = {
  render: TemplateContent,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Divider align="left"><b>Left</b></Divider>
  <Divider align="center"><b>Center</b></Divider>
  <Divider align="right"><b>Right</b></Divider>
</template>
        `,
      },
    },
  },
};

export const Vertical = {
  render: TemplateVertical,
  parameters: {
    docs: {
      description: {
        story:
          'Вертикальный разделитель для разделения элементов в ряд. Требует высоты от родительского контейнера или явного задания высоты.',
      },
      source: {
        code: `
<template>
  <div class="flex items-center h-[24px]">
    <span>Component 1</span>
    <Divider layout="vertical" />
    <span>Component 2</span>
  </div>
</template>
        `,
      },
    },
  },
};

export const VerticalWithContent = {
  render: TemplateVerticalContent,
  name: 'Vertical with Content',
  parameters: {
    docs: {
      description: {
        story:
          'Вертикальный разделитель с контентом и различными вариантами выравнивания (top, center, bottom).',
      },
      source: {
        code: `
<template>
  <div class="flex h-[200px] justify-center text-center">
    <Divider layout="vertical" align="top">
        <div class="flex items-center">
            <i class="ti ti-user"></i>
            <b>Top</b>
        </div>
    </Divider>
    <Divider layout="vertical" align="center">
        <div class="flex items-center">
            <i class="ti ti-search"></i>
            <b>Center</b>
        </div>
    </Divider>
    <Divider layout="vertical" align="bottom">
        <div class="flex items-center">
            <i class="ti ti-check"></i>
            <b>Bottom</b>
        </div>
    </Divider>
  </div>
</template>
        `,
      },
    },
  },
};

export const Type = {
  render: TemplateType,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Divider type="dashed" />
  <Divider type="dotted" />
</template>
        `,
      },
    },
  },
};
