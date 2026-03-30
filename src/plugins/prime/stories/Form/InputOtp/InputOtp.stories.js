import {
  BasicTemplate,
  IntegerTemplate,
  MaskTemplate,
} from './InputOtp.template';

export default {
  title: 'Prime/Form/InputOtp',
  parameters: {
    docs: {
      description: {
        component:
          'Компонент для ввода одноразовых паролей (OTP). Поддерживает настройку длины, маскирование символов и ввод только цифр.',
      },
    },
    designTokens: {
      prefix: '--p-inputotp',
    },
  },
  args: {
    length: 4,
    invalid: false,
    disabled: false,
    readonly: false,
  },
  argTypes: {
    length: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Количество символов (полей ввода)',
    },
    integerOnly: {
      control: 'boolean',
      description: 'Разрешить ввод только цифр',
    },
    mask: {
      control: 'boolean',
      description: 'Скрывать вводимые символы',
    },
    invalid: {
      control: 'boolean',
      description: 'Состояние ошибки',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    readonly: {
      control: 'boolean',
      description: 'Только для чтения',
    },
  },
};

export const Basic = {
  render: BasicTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
  <InputOtp v-model="value" />
</template>`,
      },
    },
  },
};

export const IntegerOnly = {
  render: IntegerTemplate.bind({}),
  args: {
    integerOnly: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
  <InputOtp v-model="value" integerOnly />
</template>`,
      },
    },
  },
};

export const Mask = {
  render: MaskTemplate.bind({}),
  args: {
    mask: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
  <InputOtp v-model="value" mask="*" />
</template>`,
      },
    },
  },
};
