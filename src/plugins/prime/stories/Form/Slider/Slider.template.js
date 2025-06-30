import { ref } from 'vue';
import Slider from 'primevue/slider';

export const Template = (args) => ({
  components: { Slider },
  setup() {
    const value = ref(args.defaultValue || 50);

    return { args, value };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span><code>disabled</code></span>

  <Slider v-model="value" style="width: 200px" v-bind="args" />
  <Slider v-model="value" style="width: 200px" disabled v-bind="args" />
</div>
`,
});
