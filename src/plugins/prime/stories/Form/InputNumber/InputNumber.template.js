import InputNumber from 'primevue/inputnumber';

export const Template = (args) => ({
  components: { InputNumber },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>

  <InputNumber v-bind="args" />
  <InputNumber v-bind="args" invalid />
  <InputNumber v-bind="args" disabled />
</div>
`,
});
