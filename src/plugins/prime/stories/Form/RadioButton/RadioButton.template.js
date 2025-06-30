import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';

export const Template = (args) => ({
  components: { RadioButton },
  setup() {
    const value1 = ref('2');
    const value2 = ref('2');
    const value3 = ref('2');
    return { args, value1, value2, value3 };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>value="1"</code></span>
  <RadioButton v-model="value1" name="group1" value="1" v-bind="args" />
  <RadioButton v-model="value2" name="group2" value="1" invalid v-bind="args" />
  <RadioButton v-model="value3" name="group3" value="1" disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>value="2"</code></span>
  <RadioButton v-model="value1" name="group1" value="2" v-bind="args" />
  <RadioButton v-model="value2" name="group2" value="2" invalid v-bind="args" />
  <RadioButton v-model="value3" name="group3" value="2" disabled v-bind="args" />
</div>
`,
});
