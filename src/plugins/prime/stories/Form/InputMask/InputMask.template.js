import InputMask from 'primevue/inputmask';

export const Template = (args) => ({
  components: { InputMask },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <InputMask mask="99-999999" placeholder="99-999999" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
  <InputMask mask="99-999999" placeholder="99-999999" invalid v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <InputMask mask="99-999999" placeholder="99-999999" disabled v-bind="args" />
</div>
`,
});
