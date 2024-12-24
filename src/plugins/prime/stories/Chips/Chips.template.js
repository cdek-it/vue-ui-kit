import { ref } from 'vue';
import AutoComplete from 'primevue/autocomplete';

export const Template = (args) => ({
  components: { AutoComplete },
  setup() {
    const options = ref(['Chip', 'Chip 2', 'Chip 3']);

    const complete = () => {
      options.value = ['Chip', 'Chip 2', 'Chip 3'];
    };

    return { args, options, complete };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="['Chip']"</code></span>

  <span></span>
  <AutoComplete :suggestions="options" @complete="complete" v-bind="args" />
  <AutoComplete :default-value="['Chip']" :suggestions="options" @complete="complete" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
  <AutoComplete invalid :suggestions="options" @complete="complete" v-bind="args" />
  <AutoComplete :default-value="['Chip']" invalid :suggestions="options" @complete="complete" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <AutoComplete disabled :suggestions="options" @complete="complete" v-bind="args" />
  <AutoComplete :default-value="['Chip']" disabled :suggestions="options" @complete="complete" v-bind="args" />
</div>
`,
});
