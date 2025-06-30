import MultiSelect from 'primevue/multiselect';

export const Template = (args) => ({
  components: { MultiSelect },
  setup() {
    const options = [
      { name: 'Option 1', code: 'O1' },
      { name: 'Option 2', code: 'O2' },
      { name: 'Option 3', code: 'O3' },
    ];

    const defaultValue = [options[0], options[1]];

    return { args, options, defaultValue };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="[Option 1, Option 2]"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" :default-value="defaultValue" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>loading</code></span>
  <MultiSelect :options="options" optionLabel="name" loading placeholder="MultiSelect" v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" loading placeholder="MultiSelect" :default-value="defaultValue" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" invalid v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" :default-value="defaultValue" invalid v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" disabled v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" :default-value="defaultValue" disabled v-bind="args" />
</div>
`,
});
