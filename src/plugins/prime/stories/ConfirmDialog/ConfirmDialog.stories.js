import ConfirmDialog from 'primevue/confirmdialog';
import {
  Template,
  TemplateSeverities,
  TemplateSizes,
} from './ConfirmDialog.template';

const meta = {
  title: 'Prime/Overlay/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Компонент используется для подтверждения действий пользователя. Требует подключения \`ConfirmationService\`. \n\n \n \`\`\`js \n import ConfirmDialog from 'primevue/confirmdialog'; \n import { useConfirm } from 'primevue/useconfirm'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-confirmdialog' },
  },
  argTypes: {
    group: {
      control: 'text',
      description: 'Идентификатор группы для адресной отправки сообщений.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    message: {
      control: 'text',
      description: 'Текст сообщения в диалоге.',
      table: {
        category: 'Args (confirm.require)',
        type: { summary: 'string' },
      },
    },
    header: {
      control: 'text',
      description: 'Заголовок диалога.',
      table: {
        category: 'Args (confirm.require)',
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'text',
      description: 'CSS-класс иконки в заголовке.',
      table: {
        category: 'Args (confirm.require)',
        type: { summary: 'string' },
      },
    },
    acceptLabel: {
      control: 'text',
      description: 'Текст кнопки подтверждения.',
      table: {
        category: 'Args (confirm.require)',
        type: { summary: 'string' },
      },
    },
    rejectLabel: {
      control: 'text',
      description: 'Текст кнопки отмены.',
      table: {
        category: 'Args (confirm.require)',
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'ConfirmDialog',
  render: Template,
  args: {
    message: 'Вы уверены, что хотите продолжить?',
    header: 'Подтверждение',
    icon: 'ti ti-alert-triangle',
    acceptLabel: 'Да',
    rejectLabel: 'Нет',
  },
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { useConfirm } from 'primevue/useconfirm';

const confirm = useConfirm();

const show = () => {
  confirm.require({
    group: 'default',
    message: 'Вы уверены, что хотите продолжить?',
    header: 'Подтверждение',
    icon: 'ti ti-alert-triangle',
    acceptLabel: 'Да',
    rejectLabel: 'Нет',
  });
};
</script>

<template>
  <ConfirmDialog group="default">
    <template #container="{ message, acceptCallback, rejectCallback }">
      <div class="p-dialog-header">
        <div class="p-dialog-title">
          <i :class="message.icon + ' p-icon'"></i>
          <span>{{ message.header }}</span>
        </div>
        <button class="p-button p-component p-button-text p-dialog-close-button" type="button" @click="rejectCallback">
          <span class="p-button-icon ti ti-x"></span>
        </button>
      </div>
      <div class="p-dialog-content">
        <p>{{ message.message }}</p>
      </div>
      <div class="p-dialog-footer">
        <Button :label="message.rejectLabel" variant="text" @click="rejectCallback" />
        <Button :label="message.acceptLabel" @click="acceptCallback" />
      </div>
    </template>
  </ConfirmDialog>
  <Button label="Показать диалог" @click="show" />
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
  <!-- success -->
  <ConfirmDialog group="severity-success" class="p-confirm-dialog-accept">
    <template #container="{ message, acceptCallback, rejectCallback }">...</template>
  </ConfirmDialog>
  <!-- info -->
  <ConfirmDialog group="severity-info" class="p-confirm-dialog-info">
    <template #container="{ message, acceptCallback, rejectCallback }">...</template>
  </ConfirmDialog>
  <!-- warn -->
  <ConfirmDialog group="severity-warn" class="p-confirm-dialog-warn">
    <template #container="{ message, acceptCallback, rejectCallback }">...</template>
  </ConfirmDialog>
  <!-- help -->
  <ConfirmDialog group="severity-help" class="p-confirm-dialog-help">
    <template #container="{ message, acceptCallback, rejectCallback }">...</template>
  </ConfirmDialog>
  <!-- danger -->
  <ConfirmDialog group="severity-danger" class="p-confirm-dialog-error">
    <template #container="{ message, acceptCallback, rejectCallback }">...</template>
  </ConfirmDialog>
</template>
        `,
      },
    },
  },
};

export const Sizes = {
  render: TemplateSizes,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <!-- sm: p-confirmdialog-sm -->
  <ConfirmDialog group="size-sm" class="p-confirmdialog-sm">
    <template #container="{ message, acceptCallback, rejectCallback }">...</template>
  </ConfirmDialog>
  <!-- base: без дополнительного класса -->
  <ConfirmDialog group="size-base">
    <template #container="{ message, acceptCallback, rejectCallback }">...</template>
  </ConfirmDialog>
  <!-- lg: p-confirmdialog-lg -->
  <ConfirmDialog group="size-lg" class="p-confirmdialog-lg">
    <template #container="{ message, acceptCallback, rejectCallback }">...</template>
  </ConfirmDialog>
  <!-- xlg: p-confirmdialog-xlg -->
  <ConfirmDialog group="size-xlg" class="p-confirmdialog-xlg">
    <template #container="{ message, acceptCallback, rejectCallback }">...</template>
  </ConfirmDialog>
</template>
        `,
      },
    },
  },
};
