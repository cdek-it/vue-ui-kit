import Checkbox from 'primevue/checkbox';
import { Template, TemplateGroup } from './Checkbox.template';

const meta = {
  title: 'Prime/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Компонент управления формой для выбора одного или нескольких вариантов.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-checkbox' },
  },
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Значение чекбокса',
      table: {
        category: 'Props',
      },
    },
    binary: {
      control: 'boolean',
      description:
        'Используется ли чекбокс как бинарное поле (true/false) или как часть массива',
      table: {
        category: 'Props',
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Подсвечивает поле как невалидное',
      table: {
        category: 'Props',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает возможность взаимодействия',
      table: {
        category: 'Props',
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Устанавливает неопределенное состояние',
      table: {
        category: 'Props',
      },
    },
  },
};

export default meta;

export const Basic = {
  render: Template,
  args: {
    binary: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Checkbox v-model="checked" binary />
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>
        `,
      },
    },
  },
};

export const Invalid = {
  render: Template,
  args: {
    binary: true,
    invalid: true,
    modelValue: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Checkbox v-model="checked" binary invalid />
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>
        `,
      },
    },
  },
};

export const Disabled = {
  render: Template,
  args: {
    binary: true,
    disabled: true,
    modelValue: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Checkbox v-model="checked" binary disabled />
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(true);
</script>
        `,
      },
    },
  },
};

export const Indeterminate = {
  render: Template,
  args: {
    binary: true,
    indeterminate: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Checkbox binary indeterminate />
</template>
        `,
      },
    },
  },
};

export const Group = {
  render: TemplateGroup,
  args: {
    modelValue: ['Pizza', 'Mushroom'],
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-3">
      <Checkbox v-model="pizza" value="Pizza" inputId="ingredient1" />
      <label for="ingredient1"> Cheese </label>
    </div>
    <div class="flex items-center gap-3">
      <Checkbox v-model="pizza" value="Mushroom" inputId="ingredient2" />
      <label for="ingredient2"> Mushroom </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const pizza = ref(['Pizza', 'Mushroom']);
</script>
        `,
      },
    },
  },
};
