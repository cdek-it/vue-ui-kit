import Popover from 'primevue/popover';
import { Template, TemplateRichContent } from './Popover.template';

const meta = {
  title: 'Prime/Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Всплывающее наложение, привязанное к целевому элементу. \n\n \`\`\`js \n import Popover from 'primevue/popover'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-popover' },
  },
  argTypes: {
    dismissable: {
      control: 'boolean',
      description: 'Закрывает popover при клике вне его области',
      table: {
        category: 'Props',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    appendTo: {
      control: 'text',
      description: 'Элемент, к которому присоединяется popover в DOM',
      table: {
        category: 'Props',
        defaultValue: { summary: 'body' },
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const PopoverDefault = {
  name: 'Popover',
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const op = ref();
const toggle = (event) => op.value.toggle(event);
</script>

<template>
  <Button type="button" label="Показать" @click="toggle" />
  <Popover ref="op">
    <div class="flex flex-col gap-2 p-2">
      <p class="m-0 text-sm">Содержимое popover.</p>
    </div>
  </Popover>
</template>
        `,
      },
    },
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const RichContent = {
  render: TemplateRichContent,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const op = ref();
const toggle = (event) => op.value.toggle(event);
</script>

<template>
  <Button type="button" label="Показать" @click="toggle" />
  <Popover ref="op">
    <div class="flex flex-col gap-3 p-1" style="min-width: 200px">
      <p class="m-0 font-semibold">Заголовок</p>
      <p class="m-0 text-sm">Дополнительное описание или любой произвольный контент.</p>
      <div class="flex gap-2">
        <Button label="Действие" size="small" />
        <Button label="Отмена" size="small" severity="contrast" />
      </div>
    </div>
  </Popover>
</template>
        `,
      },
    },
  },
};
