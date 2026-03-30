import { Select, FloatLabel } from 'primevue';
import { ref } from 'vue';

const basicOptions = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
];

export const BasicTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `<Select v-model="value" :options="options" optionLabel="name" placeholder="Select a city" v-bind="args" />`,
});

export const FilterTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `<Select v-model="value" :options="options" optionLabel="name" filter placeholder="Select a city" v-bind="args" />`,
});

export const GroupedTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);
    const groupedOptions = [
      {
        label: 'Germany',
        items: [
          { label: 'Berlin', value: 'BE' },
          { label: 'Frankfurt', value: 'FR' },
          { label: 'Hamburg', value: 'HA' },
        ],
      },
      {
        label: 'USA',
        items: [
          { label: 'Chicago', value: 'CH' },
          { label: 'Los Angeles', value: 'LA' },
          { label: 'New York', value: 'NY' },
        ],
      },
    ];

    return { args, value, groupedOptions };
  },
  template: `
    <Select
      v-model="value"
      :options="groupedOptions"
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="items"
      placeholder="Select a city"
      v-bind="args"
    >
      <template #optiongroup="slotProps">
        <div class="flex items-center gap-2">
          <i class="ti ti-flag" />
          <span>{{ slotProps.option.label }}</span>
        </div>
      </template>
    </Select>
  `,
});

export const CustomTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);
    const options = [
      {
        name: 'Profile',
        description: 'Manage your account',
        icon: 'ti ti-user',
      },
      {
        name: 'Settings',
        description: 'App preferences',
        icon: 'ti ti-settings',
      },
      { name: 'Messages', description: 'Your inbox', icon: 'ti ti-message' },
    ];

    return { args, value, options };
  },
  template: `
    <Select v-model="value" :options="options" optionLabel="name" placeholder="Select an item" v-bind="args">
      <template #option="slotProps">
        <div class="flex items-center gap-2">
          <i :class="slotProps.option.icon" />
          <div>
            <div>{{ slotProps.option.name }}</div>
            <small>{{ slotProps.option.description }}</small>
          </div>
        </div>
      </template>
    </Select>
  `,
});

export const EditableTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `<Select v-model="value" editable :options="options" optionLabel="name" placeholder="Select or type a city" v-bind="args" />`,
});

export const DisabledTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `<Select v-model="value" disabled :options="options" optionLabel="name" placeholder="Select a city" v-bind="args" />`,
});

export const FloatLabelTemplate = (args) => ({
  components: { Select, FloatLabel },
  setup() {
    const value1 = ref(null);

    return { args, value1, options: basicOptions };
  },
  template: `
    <FloatLabel variant="in">
      <Select id="in_label" v-model="value1" :options="options" optionLabel="name" v-bind="args" />
      <label for="in_label">In Label</label>
    </FloatLabel>
  `,
});
