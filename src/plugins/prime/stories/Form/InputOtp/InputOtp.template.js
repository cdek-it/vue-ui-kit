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

  <span :style="{ justifySelf: 'flex-start' }"><code>default</code></span>
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

export const TemplateLength = (args) => ({
  components: { InputOtp },
  setup() {
    const value4 = ref('1234');
    const value6 = ref('123456');
    return { args, value4, value6 };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
    <span><code>:length="4"</code></span>
    <InputOtp v-model="value4" :length="4" v-bind="args" />
  </div>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
    <span><code>:length="6"</code></span>
    <InputOtp v-model="value6" :length="6" v-bind="args" />
  </div>
</div>
`,
});

export const TemplateIntegerOnly = (args) => ({
  components: { InputOtp },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
  <span><code>integerOnly</code></span>
  <InputOtp v-model="value" integerOnly v-bind="args" />
</div>
`,
});

export const TemplateMask = (args) => ({
  components: { InputOtp },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
  <span><code>mask (password mode)</code></span>
  <InputOtp v-model="value" mask v-bind="args" />
</div>
`,
});
