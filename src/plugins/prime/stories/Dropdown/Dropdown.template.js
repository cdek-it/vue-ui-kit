import Select from 'primevue/select';

export const Template = (args) => ({
  components: { Select },
  setup() {
    const options = ['Chip', 'Chip 2', 'Chip 3'];
    return { args, options };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(5, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>loading</code></span>
  <span><code>disabled</code></span>

  <span></span>
  <Select :options="options" :style="{ width: '200px' }" v-bind="args" />
  <Select :options="options" invalid :style="{ width: '200px' }" v-bind="args" />
  <Select :options="options" loading :style="{ width: '200px' }" v-bind="args" />
  <Select :options="options" disabled :style="{ width: '200px' }" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>v-model="'Chip'"</code></span>
  <Select :options="options" :default-value="'Chip'" :style="{ width: '200px' }" v-bind="args" />
  <Select :options="options" invalid :default-value="'Chip'" :style="{ width: '200px' }" v-bind="args" />
  <Select :options="options" loading :default-value="'Chip'" :style="{ width: '200px' }" v-bind="args" />
  <Select :options="options" disabled :default-value="'Chip'" :style="{ width: '200px' }" v-bind="args" />
</div>
`,
});
