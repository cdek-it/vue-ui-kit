import RadioButton from 'primevue/radiobutton';
import {
  Template,
  TemplateInvalid,
  TemplateDisabled,
} from './RadioButton.template';

const meta = {
  title: 'Prime/Form/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Позволяет выбрать один вариант из группы взаимоисключающих опций. \n\n \`\`\`js \n import RadioButton from 'primevue/radiobutton'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-radiobutton' },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Имя группы радиокнопок',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Значение данной опции',
      table: {
        category: 'Props',
        type: { summary: 'any' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Отображает состояние ошибки валидации',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает взаимодействие с компонентом',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const RadioButtonDefault = {
  name: 'RadioButton',
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const value = ref('option1');
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <RadioButton v-model="value" name="group" value="option1" inputId="opt1" />
      <label for="opt1">Опция 1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="value" name="group" value="option2" inputId="opt2" />
      <label for="opt2">Опция 2</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="value" name="group" value="option3" inputId="opt3" />
      <label for="opt3">Опция 3</label>
    </div>
  </div>
</template>
        `,
      },
    },
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const Invalid = {
  render: TemplateInvalid,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <RadioButton v-model="value" name="group" value="option1" inputId="opt1" invalid />
      <label for="opt1">Опция 1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="value" name="group" value="option2" inputId="opt2" invalid />
      <label for="opt2">Опция 2</label>
    </div>
  </div>
</template>
        `,
      },
    },
  },
};

export const Disabled = {
  render: TemplateDisabled,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <RadioButton v-model="value" name="group" value="option1" inputId="opt1" disabled />
      <label for="opt1">Опция 1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="value" name="group" value="option2" inputId="opt2" disabled />
      <label for="opt2">Опция 2</label>
    </div>
  </div>
</template>
        `,
      },
    },
  },
};
