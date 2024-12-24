import { ref } from 'vue';
import InputOtp from 'primevue/inputotp';

export const Template = (args) => ({
  components: { InputOtp },
  setup() {
    const value = ref('1234');
    return { args, value };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <InputOtp v-bind="args" />
  <InputOtp invalid v-bind="args" />
  <InputOtp disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>v-model="1234"</code></span>
  <InputOtp v-model="value" v-bind="args" />
  <InputOtp v-model="value" invalid v-bind="args" />
  <InputOtp v-model="value" disabled v-bind="args" />
</div>
`,
});
