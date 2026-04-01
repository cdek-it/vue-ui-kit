import Breadcrumb from 'primevue/breadcrumb';
import { Template } from './Breadcrumb.template';

const meta = {
  title: 'Prime/Menu/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Компонент навигации, показывающий путь к текущей странице.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-breadcrumb' },
  },
  argTypes: {
    model: {
      control: 'object',
      description: 'Массив элементов меню',
      table: {
        category: 'Props',
        type: { summary: 'array' },
      },
    },
    home: {
      control: 'object',
      description: 'Элемент для иконки "Дом"',
      table: {
        category: 'Props',
        type: { summary: 'object' },
      },
    },
  },
};

export default meta;

const commonItems = [
  { label: 'Электроника', icon: 'ti ti-device-laptop', url: '#' },
  { label: 'Компьютеры', icon: 'ti ti-cpu', url: '#' },
  { label: 'Ноутбуки' },
];
const commonHome = { icon: 'ti ti-home', url: '#' };

const iconItems = [
  { icon: 'ti ti-device-laptop', url: '#' },
  { icon: 'ti ti-cpu', url: '#' },
  { icon: 'ti ti-book' },
];

export const Basic = {
  render: Template,
  args: {
    model: commonItems,
    home: commonHome,
  },
  parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
const home = { icon: 'ti ti-home', url: '#' };

const model = [
  {
    label: 'Электроника',
    icon: 'ti ti-device-laptop',
    url: '#'
  },
  {
    label: 'Компьютеры',
    icon: 'ti ti-cpu',
    url: '#'
  },
  {
    label: 'Ноутбуки'
  }
];
</script>

<template>
  <Breadcrumb :home="home" :model="model" />
</template>
        `,
      },
    },
  },
};

export const IconsOnly = {
  name: 'Only Icons',
  render: Template,
  args: {
    model: iconItems,
    home: commonHome,
  },
  parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
const home = { icon: 'ti ti-home', url: '#' };

const model = [
  { icon: 'ti ti-device-laptop', url: '#' },
  { icon: 'ti ti-cpu', url: '#' },
  { icon: 'ti ti-book' }
];
</script>

<template>
  <Breadcrumb :home="home" :model="model" />
</template>
        `,
      },
    },
  },
};
