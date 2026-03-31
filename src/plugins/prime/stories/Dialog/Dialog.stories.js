import Dialog from 'primevue/dialog';
import { Template } from './Dialog.template';

const meta = {
  title: 'Prime/Overlay/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Контейнер, который отображается поверх основного содержимого страницы.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-dialog' },
  },
  argTypes: {
    header: {
      control: 'text',
      description: 'Заголовок окна',
    },
    modal: {
      control: 'boolean',
      description: 'Должно ли окно быть модальным (блокировать фон)',
    },
    visible: {
      control: 'boolean',
      description: 'Состояние видимости окна',
    },
    dismissableMask: {
      control: 'boolean',
      description: 'Закрывать ли окно при клике на маску',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Закрывать ли окно по нажатию Escape',
    },
    showHeader: {
      control: 'boolean',
      description: 'Отображать ли заголовок',
    },
    size: {
      control: 'select',
      options: ['small', 'base', 'large', 'xlarge'],
      mapping: {
        small: 'p-dialog-sm',
        base: null,
        large: 'p-dialog-lg',
        xlarge: 'p-dialog-xlg',
      },
      description: 'Размер диалога',
      table: {
        category: 'Props',
        defaultValue: { summary: 'base' },
        type: { summary: "'small' | 'base' | 'large' | 'xlarge'" },
      },
    },
  },
};

export default meta;

export const Basic = {
  render: Template,
  args: {
    header: 'Dialog Header',
    modal: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Button label="Open Dialog" @click="visible = true" />
  
  <Dialog v-model:visible="visible" header="Dialog Header" modal>
    <p>
      Ваш контент здесь...
    </p>
    <template #footer>
      <Button label="Нет" variant="text" @click="visible = false" />
      <Button label="Продолжить" severity="contrast" @click="visible = false" />
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
</script>
        `,
      },
    },
  },
};

export const Size = {
  render: Template,
  args: {
    header: 'Dialog Size Demo',
    modal: true,
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Используйте контрол size для переключения между размерами: small, base, large, xlarge.',
      },
      source: {
        code: `
<template>
  <Dialog v-model:visible="visible" header="Dialog Size Demo" size="large" modal>
    <p>Это окно демонстрации размеров.</p>
  </Dialog>
</template>
        `,
      },
    },
  },
};

export const NoModal = {
  render: Template,
  args: {
    header: 'No Modal Dialog',
    modal: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Dialog v-model:visible="visible" header="No Modal Dialog" :modal="false">
    <p>Это окно не блокирует фон страницы.</p>
  </Dialog>
</template>
        `,
      },
    },
  },
};

export const NoHeader = {
  render: Template,
  args: {
    modal: true,
    showHeader: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Dialog v-model:visible="visible" modal :showHeader="false">
    <p>Контент окна без заголовка.</p>
  </Dialog>
</template>
        `,
      },
    },
  },
};
