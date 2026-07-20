import Message from 'primevue/message';
import {
  Template,
  TemplateSeverities,
  TemplateWithCloseButton,
  TemplateWithContent,
} from './Message.template';

const meta = {
  title: 'Prime/Messages/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Message используется для отображения встроенных уведомлений с различными уровнями важности. \n\n \`\`\`js \n import Message from 'primevue/message'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-message' },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['info', 'success', 'warn', 'error', 'secondary', 'contrast'],
      description: 'Уровень важности сообщения.',
      table: {
        category: 'Props',
        defaultValue: { summary: 'info' },
        type: {
          summary:
            "'info' | 'success' | 'warn' | 'error' | 'secondary' | 'contrast'",
        },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Отображает кнопку закрытия сообщения.',
      table: {
        category: 'Props',
        defaultValue: { summary: true },
        type: { summary: 'boolean' },
      },
    },
    icon: {
      control: 'text',
      description: 'Иконка сообщения (CSS-класс).',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    life: {
      control: 'number',
      description: 'Время (мс) до автоматического закрытия. 0 — не закрывать.',
      table: {
        category: 'Props',
        defaultValue: { summary: 0 },
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Message',
  render: Template,
  args: {
    severity: 'info',
    icon: 'ti ti-info-circle',
    closable: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Message severity="info">
    <template #container>
      <div class="p-message-content">
        <div class="p-message-accent-line"></div>
        <i class="ti ti-info-circle p-message-icon"></i>
        <div class="p-message-text">
          <span class="p-message-summary">Message</span>
          <div class="p-message-detail">caption</div>
        </div>
      </div>
    </template>
  </Message>
</template>
        `,
      },
    },
  },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const Severities = {
  render: TemplateSeverities,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex flex-col gap-4">
    <Message severity="info">
      <template #container>
        <div class="p-message-content">
          <div class="p-message-accent-line"></div>
          <i class="ti ti-info-circle p-message-icon"></i>
          <div class="p-message-text">
            <span class="p-message-summary">Message</span>
            <div class="p-message-detail">caption</div>
          </div>
        </div>
      </template>
    </Message>
    <Message severity="success">...</Message>
    <Message severity="warn">...</Message>
    <Message severity="error">...</Message>
  </div>
</template>
        `,
      },
    },
  },
};

export const WithCloseButton = {
  render: TemplateWithCloseButton,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Message severity="info" :closable="true">
    <template #container="{ closeCallback }">
      <div class="p-message-content">
        <div class="p-message-accent-line"></div>
        <i class="ti ti-info-circle p-message-icon"></i>
        <div class="p-message-text">
          <span class="p-message-summary">Message</span>
          <div class="p-message-detail">caption</div>
        </div>
        <Button
          class="p-message-close-button"
          icon="ti ti-x"
          variant="text"
          @click="closeCallback"
        />
      </div>
    </template>
  </Message>
</template>
        `,
      },
    },
  },
};

export const WithContent = {
  render: TemplateWithContent,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Message severity="info" :closable="true">
    <template #container="{ closeCallback }">
      <div class="p-message-content">
        <div class="p-message-accent-line"></div>
        <i class="ti ti-info-circle p-message-icon"></i>
        <div class="p-message-text">
          <span class="p-message-summary">Message</span>
          <div class="p-message-detail">caption</div>
          <div class="mt-4">
            <div class="text-sm">CONTENT</div>
          </div>
          <div class="flex gap-2 mt-2">
            <div class="text-sm">Cell 1</div>
            <div class="text-sm">Cell 2</div>
          </div>
        </div>
        <Button
          class="p-message-close-button"
          icon="ti ti-x"
          variant="text"
          @click="closeCallback"
        />
      </div>
    </template>
  </Message>
</template>
        `,
      },
    },
  },
};
