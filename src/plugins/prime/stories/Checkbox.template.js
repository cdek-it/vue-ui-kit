import Checkbox from 'primevue/checkbox';

export const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '20px', color: 'black', alignItems: 'center', justifyItems: 'center' }">
  <span :style="{ justifySelf: 'flex-start' }"><code>modelValue</code></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>false</code></span>
  <Checkbox binary v-bind="args" />
  <Checkbox binary invalid v-bind="args" />
  <Checkbox binary disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>true</code></span>
  <Checkbox :default-value="true" binary v-bind="args" />
  <Checkbox :default-value="true" binary invalid v-bind="args" />
  <Checkbox :default-value="true" binary disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>indeterminate</code></span>
  <Checkbox binary indeterminate v-bind="args" />
  <Checkbox binary indeterminate invalid v-bind="args" />
  <Checkbox binary indeterminate disabled v-bind="args" />
</div>
`,
});
