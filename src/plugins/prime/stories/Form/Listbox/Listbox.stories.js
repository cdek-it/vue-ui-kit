import {
  BasicTemplate,
  CheckmarkTemplate,
  GroupedTemplate,
  CustomTemplate,
  FilterTemplate,
  MultipleTemplate,
  DisabledTemplate,
} from './Listbox.template';

export default {
  title: 'Prime/Form/Listbox',
  parameters: {
    docs: {
      description: {
        component:
          'Список опций с поддержкой одиночного и множественного выбора. Поддерживает группировку, фильтрацию, галочку выбора и кастомные шаблоны пунктов.',
      },
    },
    designTokens: {
      prefix: '--p-listbox',
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
  { name: 'Chicago', code: 'CH' },
  { name: 'Los Angeles', code: 'LA' },
  { name: 'New York', code: 'NY' },
  { name: 'San Francisco', code: 'SF' },
];
</script>

<template>
  <Listbox v-model="value" :options="options" optionLabel="name" />
</template>`,
      },
    },
  },
};

export const Checkmark = {
  render: CheckmarkTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = [
  { name: 'Chicago', code: 'CH' },
  { name: 'Los Angeles', code: 'LA' },
  { name: 'New York', code: 'NY' },
];
</script>

<template>
  <Listbox v-model="value" :options="options" optionLabel="name" checkmark />
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
  <Listbox
    v-model="value"
    :options="options"
    optionLabel="label"
    optionGroupLabel="label"
    optionGroupChildren="items"
  >
    <template #optiongroup="{ option }">
      <div class="flex items-center gap-2">
        <i class="ti ti-brand-tabler" />
        <span>{{ option.label }}</span>
      </div>
    </template>
  </Listbox>
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
  <Listbox v-model="value" :options="options" optionLabel="name">
    <template #option="{ option }">
      <div class="flex items-center gap-2">
        <i :class="option.icon" />
        <div>
          <div>{{ option.name }}</div>
          <small class="p-listbox-option-caption">{{ option.description }}</small>
        </div>
      </div>
    </template>
  </Listbox>
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
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]);
</script>

<template>
  <Listbox v-model="value" :options="cities" filter optionLabel="name" />
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
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]);
</script>

<template>
  <Listbox v-model="value" disabled :options="cities" optionLabel="name" />
</template>`,
      },
    },
  },
};

export const Multiple = {
  render: MultipleTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref([]);
const options = [
  { name: 'Chicago', code: 'CH' },
  { name: 'Los Angeles', code: 'LA' },
  { name: 'New York', code: 'NY' },
  { name: 'San Francisco', code: 'SF' },
];
</script>

<template>
  <Listbox v-model="value" :options="options" optionLabel="name" multiple />
</template>`,
      },
    },
  },
};
