import {
  BasicTemplate,
  FilterTemplate,
  GroupedTemplate,
  CustomTemplate,
  EditableTemplate,
  DisabledTemplate,
  FloatLabelTemplate,
} from './Select.template';

export default {
  title: 'Prime/Form/Select',
  parameters: {
    docs: {
      description: {
        component:
          'Выпадающий список для выбора одного значения из набора опций. Поддерживает фильтрацию, группировку, кастомные шаблоны и редактируемый ввод.',
      },
    },
    designTokens: {
      prefix: '--p-select',
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
const options = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
];
</script>

<template>
  <Select v-model="value" :options="options" optionLabel="name" placeholder="Select a city" />
</template>`,
      },
    },
  },
};

export const Filter = {
  render: FilterTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
];
</script>

<template>
  <Select v-model="value" :options="options" optionLabel="name" filter placeholder="Select a city" />
</template>`,
      },
    },
  },
};

export const Grouped = {
  render: GroupedTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = [
  {
    label: 'Germany',
    items: [
      { label: 'Berlin', value: 'BE' },
      { label: 'Frankfurt', value: 'FR' },
    ],
  },
  {
    label: 'USA',
    items: [
      { label: 'Chicago', value: 'CH' },
      { label: 'Los Angeles', value: 'LA' },
    ],
  },
];
</script>

<template>
  <Select
    v-model="value"
    :options="options"
    optionLabel="label"
    optionGroupLabel="label"
    optionGroupChildren="items"
    placeholder="Select a city"
  >
    <template #optiongroup="{ option }">
      <div class="flex items-center gap-2">
        <i class="ti ti-flag" />
        <span>{{ option.label }}</span>
      </div>
    </template>
  </Select>
</template>`,
      },
    },
  },
};

export const Custom = {
  render: CustomTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = [
  { name: 'Profile', description: 'Manage your account', icon: 'ti ti-user' },
  { name: 'Settings', description: 'App preferences', icon: 'ti ti-settings' },
  { name: 'Messages', description: 'Your inbox', icon: 'ti ti-message' },
];
</script>

<template>
  <Select v-model="value" :options="options" optionLabel="name" placeholder="Select an item">
    <template #option="{ option }">
      <div class="flex items-center gap-2">
        <i :class="option.icon" />
        <div>
          <div>{{ option.name }}</div>
          <small>{{ option.description }}</small>
        </div>
      </div>
    </template>
  </Select>
</template>`,
      },
    },
  },
};

export const Editable = {
  render: EditableTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
];
</script>

<template>
  <Select v-model="value" editable :options="options" optionLabel="name" placeholder="Select or type a city" />
</template>`,
      },
    },
  },
};

export const Disabled = {
  render: DisabledTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
];
</script>

<template>
  <Select v-model="value" disabled :options="options" optionLabel="name" placeholder="Select a city" />
</template>`,
      },
    },
  },
};

export const FloatLabel = {
  render: FloatLabelTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
];
</script>

<template>
  <FloatLabel variant="in">
    <Select id="in_label" v-model="value" :options="options" optionLabel="name" />
    <label for="in_label">In Label</label>
  </FloatLabel>
</template>`,
      },
    },
  },
};
