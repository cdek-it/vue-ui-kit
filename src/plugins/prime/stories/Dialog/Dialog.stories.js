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
          'Dialog (модальное окно) — это контейнер, который отображается поверх основного содержимого страницы.',
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
      <Button label="Cancel" variant="text" @click="visible = false" />
      <Button label="Save" severity="tertiary" @click="visible = false" />
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

export const Small = {
  render: Template,
  args: {
    header: 'Small Dialog',
    modal: true,
    class: 'p-dialog-sm',
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Dialog v-model:visible="visible" header="Small Dialog" modal class="p-dialog-sm">
    <p>Это маленькое окно (min-width 320px, max-width 384px).</p>
  </Dialog>
</template>
        `,
      },
    },
  },
};

export const Large = {
  render: Template,
  args: {
    header: 'Large Dialog',
    modal: true,
    class: 'p-dialog-lg',
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Dialog v-model:visible="visible" header="Large Dialog" modal class="p-dialog-lg">
    <p>Это большое окно (min-width 480px, max-width 928px).</p>
  </Dialog>
</template>
        `,
      },
    },
  },
};

export const ExtraLarge = {
  render: Template,
  args: {
    header: 'Extra Large Dialog',
    modal: true,
    class: 'p-dialog-xlg',
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Dialog v-model:visible="visible" header="Extra Large Dialog" modal class="p-dialog-xlg">
    <p>Это очень большое окно (min-width 928px, max-width 90vw).</p>
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
