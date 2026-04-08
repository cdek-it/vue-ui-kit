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
  template: `
    <Select 
      v-model="value" 
      :options="options" 
      optionLabel="name" 
      v-bind="args" 
      :class="{ 'p-select-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    />
  `,
});

export const FilterTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `
    <Select 
      v-model="value" 
      :options="options" 
      optionLabel="name" 
      filter 
      v-bind="args" 
      :class="{ 'p-select-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    />
  `,
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
      v-bind="args"
      :class="{ 'p-select-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
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
    <Select 
      v-model="value" 
      :options="options" 
      optionLabel="name" 
      v-bind="args"
      :class="{ 'p-select-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    >
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
  template: `
    <Select 
      v-model="value" 
      editable 
      :options="options" 
      optionLabel="name" 
      v-bind="args" 
      :class="{ 'p-select-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    />
  `,
});

export const DisabledTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `
    <Select 
      v-model="value" 
      disabled 
      :options="options" 
      optionLabel="name" 
      v-bind="args"
      :class="{ 'p-select-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    />
  `,
});

export const FloatLabelTemplate = (args) => ({
  components: { Select, FloatLabel },
  setup() {
    const value1 = ref(null);

    return { args, value1, options: basicOptions };
  },
  template: `
    <FloatLabel variant="in">
      <Select 
        id="in_label" 
        v-model="value1" 
        :options="options" 
        optionLabel="name" 
        v-bind="args" 
        :size="null"
      />
      <label for="in_label">{{ args.label }}</label>
    </FloatLabel>
  `,
});
