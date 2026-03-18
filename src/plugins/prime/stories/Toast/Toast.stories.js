import Toast from 'primevue/toast';
import {
  Template,
  TemplateWithCloseButton,
  TemplateWithContent,
  TemplateWidth,
  TemplatePosition,
} from './Toast.template';

const meta = {
  title: 'Prime/Messages/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Toast используется для отображения всплывающих уведомлений поверх интерфейса. Требует подключения \`ToastService\`. \n\n \n \`\`\`js \n import Toast from 'primevue/toast'; \n import { useToast } from 'primevue/usetoast'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-toast' },
  },
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-right',
        'top-left',
        'top-center',
        'bottom-right',
        'bottom-left',
        'bottom-center',
        'center',
      ],
      description: 'Позиция тоста на экране.',
      table: {
        category: 'Props',
        defaultValue: { summary: 'top-right' },
        type: {
          summary:
            "'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center' | 'center'",
        },
      },
    },
    group: {
      control: 'text',
      description:
        'Идентификатор группы тостов для адресной отправки сообщений.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    life: {
      control: 'number',
      description: 'Время (мс) до автоматического закрытия тоста.',
      table: {
        category: 'Props',
        defaultValue: { summary: 5000 },
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Toast',
  render: Template,
  args: {
    position: 'top-right',
    life: 5000,
  },
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const show = () => {
  toast.add({
    severity: 'info',
    summary: 'Сообщение',
    detail: 'Подпись',
    life: 5000,
    icon: 'ti ti-info-circle',
  });
};
</script>

<template>
  <Toast />
  <Button label="Показать уведомление" @click="show" />
</template>
        `,
      },
    },
  },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const WithCloseButton = {
  render: TemplateWithCloseButton,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Toast>
    <template #container="{ message, closeCallback }">
      <div class="p-toast-message-content">
        <div class="p-toast-accent-line"></div>
        <i :class="message.icon + ' p-toast-message-icon'"></i>
        <div class="p-toast-message-text">
          <span class="p-toast-summary">{{ message.summary }}</span>
          <div class="p-toast-detail">{{ message.detail }}</div>
        </div>
        <button class="p-button p-component p-button-text p-toast-close-button" type="button" @click="closeCallback">
          <span class="p-button-icon ti ti-x"></span>
        </button>
      </div>
    </template>
  </Toast>
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
  <Toast>
    <template #container="{ message, closeCallback }">
      <div class="p-toast-message-content">
        <div class="p-toast-accent-line"></div>
        <i :class="message.icon + ' p-toast-message-icon'"></i>
        <div class="p-toast-message-text">
          <span class="p-toast-summary">{{ message.summary }}</span>
          <div class="p-toast-detail">{{ message.detail }}</div>
          <div class="mt-4">
            <div class="text-sm">Дополнительный контент</div>
          </div>
          <div class="flex gap-2 mt-2">
            <div class="text-sm">Ячейка 1</div>
            <div class="text-sm">Ячейка 2</div>
          </div>
        </div>
        <button class="p-button p-component p-button-text p-toast-close-button" type="button" @click="closeCallback">
          <span class="p-button-icon ti ti-x"></span>
        </button>
      </div>
    </template>
  </Toast>
</template>
        `,
      },
    },
  },
};

export const Width = {
  render: TemplateWidth,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <!-- sm: 20rem -->
  <Toast group="width-sm">
    <template #container="{ message }">...</template>
  </Toast>
  <!-- base: 25rem -->
  <Toast group="width-base">
    <template #container="{ message }">...</template>
  </Toast>
  <!-- lg: 30rem -->
  <Toast group="width-lg">
    <template #container="{ message }">...</template>
  </Toast>
  <!-- xlg: 45rem -->
  <Toast group="width-xlg">
    <template #container="{ message }">...</template>
  </Toast>
</template>
        `,
      },
    },
  },
};

export const Position = {
  render: TemplatePosition,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const show = (position) => {
  toast.add({
    group: position,
    severity: 'info',
    summary: 'Сообщение',
    detail: 'Позиция: ' + position,
    life: 3000,
    icon: 'ti ti-info-circle',
  });
};
</script>

<template>
  <Toast position="top-left"      group="top-left" />
  <Toast position="top-center"    group="top-center" />
  <Toast position="top-right"     group="top-right" />
  <Toast position="bottom-left"   group="bottom-left" />
  <Toast position="bottom-center" group="bottom-center" />
  <Toast position="bottom-right"  group="bottom-right" />

  <Button label="Вверх слева"     severity="contrast" @click="show('top-left')" />
  <Button label="Вверх по центру" severity="contrast" @click="show('top-center')" />
  <Button label="Вверх справа"    severity="contrast" @click="show('top-right')" />
  <Button label="Вниз слева"      severity="contrast" @click="show('bottom-left')" />
  <Button label="Вниз по центру"  severity="contrast" @click="show('bottom-center')" />
  <Button label="Вниз справа"     severity="contrast" @click="show('bottom-right')" />
</template>
        `,
      },
    },
  },
};
