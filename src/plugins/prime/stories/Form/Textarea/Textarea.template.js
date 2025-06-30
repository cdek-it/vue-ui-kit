import { ref } from 'vue';
import Textarea from 'primevue/textarea';

export const Template = (args) => ({
  components: { Textarea },
  setup() {
    const value1 = ref('text input');
    const value2 = ref('text input');
    const value3 = ref('text input');

    return { args, value1, value2, value3 };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="text input"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <Textarea placeholder="InputTextarea" v-bind="args" rows="6" />
  <Textarea v-model="value1" placeholder="InputTextarea" rows="6" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
  <Textarea placeholder="InputTextarea" rows="6" invalid v-bind="args" />
  <Textarea v-model="value2" placeholder="InputTextarea" rows="6" invalid v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <Textarea placeholder="InputTextarea" rows="6" disabled v-bind="args" />
  <Textarea v-model="value3" placeholder="InputTextarea" rows="6" disabled v-bind="args" />
</div>
`,
});
