import {
  BasicTemplate,
  MultipleTemplate,
  GroupedTemplate,
  CustomTemplate,
  DropdownTemplate,
  DisabledTemplate,
  FloatLabelTemplate,
} from './AutoComplete.template';

export default {
  title: 'Prime/Form/AutoComplete',
  args: {
    showClear: true,
    size: 'medium',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Размер поля ввода',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: "'small' | 'medium' | 'large' | 'xlarge'" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Поле ввода с автодополнением. Поддерживает одиночный и множественный выбор, группировку, кастомные шаблоны и кнопку открытия списка.',
      },
    },
    designTokens: {
      prefix: '--p-autocomplete',
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
const suggestions = ref([]);
const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
];

const search = (event) => {
  suggestions.value = event.query
    ? cities.filter((c) => c.name.toLowerCase().startsWith(event.query.toLowerCase()))
    : cities;
};
</script>

<template>
  <AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" @complete="search" placeholder="Search..." />
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
const suggestions = ref([]);
const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
];

const search = (event) => {
  suggestions.value = event.query
    ? cities.filter((c) => c.name.toLowerCase().startsWith(event.query.toLowerCase()))
    : cities;
};
</script>

<template>
  <AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" multiple @complete="search" placeholder="Search..." />
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
const suggestions = ref([]);
const groupedCities = [
  {
    label: 'Germany',
    items: [
      { name: 'Berlin', code: 'BE' },
      { name: 'Frankfurt', code: 'FR' },
    ],
  },
  {
    label: 'USA',
    items: [
      { name: 'Chicago', code: 'CH' },
      { name: 'Los Angeles', code: 'LA' },
    ],
  },
];

const search = (event) => {
  if (!event.query) {
    suggestions.value = groupedCities;
    return;
  }
  suggestions.value = groupedCities
    .map((group) => ({
      ...group,
      items: group.items.filter((c) => c.name.toLowerCase().startsWith(event.query.toLowerCase())),
    }))
    .filter((group) => group.items.length > 0);
};
</script>

<template>
  <AutoComplete
    v-model="value"
    :suggestions="suggestions"
    optionLabel="name"
    optionGroupLabel="label"
    optionGroupChildren="items"
    @complete="search"
    placeholder="Search..."
  >
    <template #optiongroup="{ option }">
      <div class="flex items-center gap-2">
        <i class="ti ti-flag" />
        <span>{{ option.label }}</span>
      </div>
    </template>
  </AutoComplete>
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
const suggestions = ref([]);
const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
];

const search = (event) => {
  suggestions.value = event.query
    ? cities.filter((c) => c.name.toLowerCase().startsWith(event.query.toLowerCase()))
    : cities;
};
</script>

<template>
  <AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" @complete="search" placeholder="Search...">
    <template #option="{ option }">
      <div class="flex items-center gap-2">
        <i class="ti ti-map-pin" />
        <span>{{ option.name }}</span>
        <small style="margin-left: auto; opacity: 0.6;">{{ option.code }}</small>
      </div>
    </template>
  </AutoComplete>
</template>`,
      },
    },
  },
};

export const Dropdown = {
  render: DropdownTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const value = ref(null);
const suggestions = ref([]);
const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
];

const search = (event) => {
  suggestions.value = event.query
    ? cities.filter((c) => c.name.toLowerCase().startsWith(event.query.toLowerCase()))
    : cities;
};
</script>

<template>
  <AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" dropdown @complete="search" placeholder="Search..." />
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
const suggestions = ref([]);
</script>

<template>
  <AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" disabled placeholder="Search..." />
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
const suggestions = ref([]);
const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
];

const search = (event) => {
  suggestions.value = event.query
    ? cities.filter((c) => c.name.toLowerCase().startsWith(event.query.toLowerCase()))
    : cities;
};
</script>

<template>
  <FloatLabel variant="in">
    <AutoComplete id="in_label" v-model="value" :suggestions="suggestions" optionLabel="name" @complete="search" />
    <label for="in_label">In Label</label>
  </FloatLabel>
</template>`,
      },
    },
  },
};
