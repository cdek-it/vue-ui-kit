import Listbox from 'primevue/listbox';

export const Template = (args) => ({
  components: { Listbox },
  setup() {
    const options = [
      { name: 'Option 1', code: 'O1' },
      { name: 'Option 2', code: 'O2' },
    ];

    const defaultValue = options[0];

    return { args, options, defaultValue };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <Listbox :options="options" optionLabel="name" v-bind="args" />
  <Listbox :options="options" optionLabel="name" invalid v-bind="args" />
  <Listbox :options="options" optionLabel="name" disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>v-model="Option 1"</code></span>
  <Listbox :options="options" optionLabel="name" :default-value="defaultValue" v-bind="args" />
  <Listbox :options="options" optionLabel="name" :default-value="defaultValue" invalid v-bind="args" />
  <Listbox :options="options" optionLabel="name" :default-value="defaultValue" disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>:options="[]"</code></span>
  <Listbox :options="[]" optionLabel="name" v-bind="args" />
  <Listbox :options="[]" optionLabel="name" invalid v-bind="args" />
  <Listbox :options="[]" optionLabel="name" disabled v-bind="args" />
</div>
`,
});

export const TemplateGrouped = (args) => ({
  components: { Listbox },
  setup() {
    const groupedOptions = [
      {
        label: 'Germany',
        code: 'de',
        items: [
          { label: 'Berlin', value: 'BE' },
          { label: 'Frankfurt', value: 'FR' },
        ],
      },
      {
        label: 'USA',
        code: 'us',
        items: [
          { label: 'Chicago', value: 'CH' },
          { label: 'Los Angeles', value: 'LA' },
        ],
      },
    ];
    return { args, groupedOptions };
  },
  template: `
<Listbox 
  :options="groupedOptions" 
  optionLabel="label"
  optionGroupLabel="label"
  optionGroupChildren="items"
  v-bind="args"
>
  <template #optiongroup="slotProps">
    <div>
      <i class="ti ti-brand-tabler" />
      <div>{{ slotProps.option.label }}</div>
    </div>
  </template>
</Listbox>
`,
});

export const TemplateCustom = (args) => ({
  components: { Listbox },
  setup() {
    const options = [
      { name: 'Option 1', description: 'Description 1', icon: 'ti ti-user' },
      { name: 'Option 2', description: 'Description 2', icon: 'ti ti-users' },
      {
        name: 'Option 3',
        description: 'Description 3',
        icon: 'ti ti-user-plus',
      },
    ];
    return { args, options };
  },
  template: `
<Listbox :options="options" optionLabel="name" v-bind="args">
  <template #option="slotProps">
    <div class="flex items-center">
      <i :class="slotProps.option.icon" />
      <div class="ml-2">
        <div>{{ slotProps.option.name }}</div>
        <small>{{ slotProps.option.description }}</small>
      </div>
    </div>
  </template>
</Listbox>
`,
});
