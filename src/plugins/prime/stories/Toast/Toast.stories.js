import { PBlockToast } from '@/primeBlocks';

import {
  Template,
  TemplateCloseButton,
  TemplateCustomContentWithCloseButton,
  TemplateWithContent,
  TemplateWidth,
  TemplatePosition,
} from './Toast.template';

const meta = {
  title: 'Prime/Messages/Toast',
  component: PBlockToast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `\`Toast\` используется для отображения всплывающих уведомлений поверх интерфейса.\n 
Требует подключения \`ToastService\`.\n\`\`\`ts dark \nimport { PBlockToast, usePBlockToast } from '@cdek-it/vue-ui-kit';\`\`\` `,
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
        type: { summary: 'number' },
      },
    },
    width: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xlg'],
      description: 'Ширина тоста на экране.',
      table: {
        category: 'Props',
        type: { summary: "'sm' | 'md' | 'lg' | 'xlg'" },
      },
    },
  },
  args: {
    position: 'top-right',
    group: 'basic',
    life: 5000,
    width: 'md',
  },
};

export default meta;

export const Default = {
  name: 'Toast',
  render: Template,
  args: {
    group: 'basic',
    position: 'top-right',
    life: 5_000,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<script setup lang="ts">
import { PBlockToast, usePBlockToast } from '@cdek-it/vue-ui-kit';

const toast = usePBlockToast();

const showToast = () => {
  toast.add({
    severity: 'info',
    summary: 'Заголовок сообщения',
    detail: 'Дополнительная информация',
    life: 5_000, // мс
  });
};
</script>

<template>
  <div>
    <PBlockToast />
    <Button label="Показать toast" @click="showToast" />
  </div>
</template>
        `,
      },
    },
  },
};

export const DefaultButton = {
  name: 'Toast',
  render: TemplateCloseButton,
  args: {
    group: 'basic-button',
    position: 'top-right',
    life: 5_000,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<script setup lang="ts">
import { PBlockToast, usePBlockToast } from '@cdek-it/vue-ui-kit';

const toast = usePBlockToast();

const showToast = () => {
  toast.add({
    severity: 'info',
    summary: 'Заголовок сообщения',
    detail: 'Дополнительная информация',
    life: 5_000,
    closable: true, // по умолчанию false
  });
};
</script>

<template>
  <div>
    <PBlockToast />
    <Button label="Показать toast" @click="showToast" />
  </div>
</template>
        `,
      },
    },
  },
};

export const WithContent = {
  render: TemplateWithContent,
  args: {
    group: 'content',
    position: 'top-right',
    life: 5_000,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<script setup lang="ts">
import { PBlockToast, usePBlockToast } from '@cdek-it/vue-ui-kit';
import { IconCircleCheck } from '@tabler/icons-vue'; // Указано для примера.

const toast = usePBlockToast();

const showToast = () => {
  toast.add({
    severity: 'info',
    summary: 'Заголовок сообщения',
    detail: 'Дополнительная информация',
    icon: 'ti-circle-info',
    life: 5_000,
  });
};
</script>

<template>
  <div>
    <PBlockToast>
      <template #container="{ message }">
        <div class="p-toast-message-content">
          <div class="p-toast-accent-line"></div>
          <!-- Можно указать через icon или через как IconCircleCheck. -->
          <!-- В случае использования иконки как IconCircleCheck, то icon в конфиге не указываем. -->
          <i :class="'p-toast-message-icon ti ' + message.icon"></i>
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
        </div>
      </template>
    </PBlockToast>
    <Button label="Показать toast" @click="showToast" />
  </div>
</template>
        `,
      },
    },
  },
};

export const WithContentAndCloseButton = {
  render: TemplateCustomContentWithCloseButton,
  args: {
    group: 'content-close-button',
    life: 5_000,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<script setup lang="ts">
import { PBlockToast, usePBlockToast } from '@cdek-it/vue-ui-kit';

const toast = usePBlockToast();

const showToast = () => {
  toast.add({
    severity: 'info',
    summary: 'Заголовок сообщения',
    detail: 'Дополнительная информация',
    icon: 'ti-circle-info',
    life: 5_000,
  });
};
</script>

<template>
  <div>
     <PBlockToast>
      <template #container="{ message, closeCallback }">
        <div class="p-toast-message-content">
          <div class="p-toast-accent-line"></div>
          <i :class="'p-toast-message-icon ti ' + message.icon"></i>
          <div class="p-toast-message-text">
            <span class="p-toast-summary">{{ message.summary }}</span>
            <div class="p-toast-detail">{{ message.detail }}</div>
          </div>
          <button
            class="p-button p-component p-button-text p-toast-close-button"
            type="button"
            @click="closeCallback"
            >
              <span class="p-button-icon ti ti-x"></span>
          </button>
        </div>
      </template>
    </PBlockToast>
    <Button label="Показать toast" @click="showToast" />
  </div>
</template>
        `,
      },
    },
  },
};

export const Width = {
  render: TemplateWidth,
  args: {
    group: 'width-preview',
    position: 'top-right',
    life: 5_000,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<script setup lang="ts">
import { PBlockToast, usePBlockToast } from '@cdek-it/vue-ui-kit';

const toast = usePBlockToast();

const showToast = () => {
  toast.add({
    severity: 'info',
    summary: 'Заголовок сообщения',
    detail: 'Дополнительная информация',
    life: 5_000,
  });
};
</script>

<template>
  <div>
    <PBlockToast width="sm" />
    <Button label="Показать уведомление" @click="showToast" />
  </div>
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
        language: 'html',
        code: `
<script setup lang="ts">
import { PBlockToast, usePBlockToast } from '@cdek-it/vue-ui-kit';

const toast = usePBlockToast();

const showToast = (position) => {
  toast.add({
    severity: 'info',
    summary: 'Заголовок сообщения',
    detail: 'Позиция: ' + position,
    life: 5_000,
    group: position,
  });
};
</script>

<template>
  <PBlockToast position="top-left" group="top-left" />
  <PBlockToast position="top-center" group="top-center" />
  <PBlockToast position="top-right" group="top-right" />
  <PBlockToast position="bottom-left" group="bottom-left" />
  <PBlockToast position="bottom-center" group="bottom-center" />
  <PBlockToast position="bottom-right" group="bottom-right" />

  <Button label="Вверх слева" @click="showToast('top-left')" />
  <Button label="Вверх по центру" @click="showToast('top-center')" />
  <Button label="Вверх справа" @click="showToast('top-right')" />
  <Button label="Вниз слева" @click="showToast('bottom-left')" />
  <Button label="Вниз по центру" @click="showToast('bottom-center')" />
  <Button label="Вниз справа" @click="showToast('bottom-right')" />
</template>
        `,
      },
    },
  },
};
