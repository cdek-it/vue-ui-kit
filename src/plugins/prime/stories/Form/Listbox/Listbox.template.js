import { Listbox } from 'primevue';
import { ref } from 'vue';

const basicOptions = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
];

export const BasicTemplate = (args) => ({
  components: { Listbox },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `<Listbox v-model="value" :options="options" optionLabel="name" v-bind="args" />`,
});

export const CheckmarkTemplate = (args) => ({
  components: { Listbox },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `<Listbox v-model="value" :options="options" optionLabel="name" checkmark v-bind="args" />`,
});

export const GroupedTemplate = (args) => ({
  components: { Listbox },
  setup() {
    const value = ref(null);
    const groupedOptions = [
      {
        label: 'Germany',
        code: 'de',
        items: [
          { label: 'Berlin', value: 'BE' },
          { label: 'Frankfurt', value: 'FR' },
          { label: 'Hamburg', value: 'HA' },
        ],
      },
      {
        label: 'USA',
        code: 'us',
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
    <Listbox
      v-model="value"
      :options="groupedOptions"
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="items"
      v-bind="args"
    >
      <template #optiongroup="slotProps">
        <div class="flex items-center gap-2">
          <i class="ti ti-brand-tabler" />
          <span>{{ slotProps.option.label }}</span>
        </div>
      </template>
    </Listbox>
  `,
});

export const CustomTemplate = (args) => ({
  components: { Listbox },
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
    <Listbox v-model="value" :options="options" optionLabel="name" v-bind="args">
      <template #option="slotProps">
        <div class="flex items-center gap-2">
          <i :class="slotProps.option.icon" />
          <div>
            <div>{{ slotProps.option.name }}</div>
            <small class="p-listbox-option-caption">{{ slotProps.option.description }}</small>
          </div>
        </div>
      </template>
    </Listbox>
  `,
});

export const FilterTemplate = (args) => ({
  components: { Listbox },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `<Listbox v-model="value" :options="options" filter optionLabel="name" v-bind="args" />`,
});

export const DisabledTemplate = (args) => ({
  components: { Listbox },
  setup() {
    const value = ref(null);

    return { args, value, options: basicOptions };
  },
  template: `<Listbox v-model="value" disabled :options="options" optionLabel="name" v-bind="args" />`,
});

export const MultipleTemplate = (args) => ({
  components: { Listbox },
  setup() {
    const value = ref([]);

    return { args, value, options: basicOptions };
  },
  template: `<Listbox v-model="value" :options="options" optionLabel="name" multiple v-bind="args" />`,
});
