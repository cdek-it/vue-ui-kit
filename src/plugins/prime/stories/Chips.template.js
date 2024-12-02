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
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="['Chip']"</code></span>
  <span><code>:suggestions="items"</code></span>

  <span></span>
  <AutoComplete multiple :typeahead="false" v-bind="args" />
  <AutoComplete :default-value="['Chip']" multiple :typeahead="false" v-bind="args" />
  <AutoComplete multiple :suggestions="options" @complete="complete" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
  <AutoComplete invalid multiple :typeahead="false" v-bind="args" />
  <AutoComplete :default-value="['Chip']" invalid multiple :typeahead="false" v-bind="args" />
  <AutoComplete invalid multiple :suggestions="options" @complete="complete" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <AutoComplete disabled multiple :typeahead="false" v-bind="args" />
  <AutoComplete :default-value="['Chip']" disabled multiple :typeahead="false" v-bind="args" />
  <AutoComplete disabled multiple :suggestions="options" @complete="complete" v-bind="args" />
</div>
`,
});
