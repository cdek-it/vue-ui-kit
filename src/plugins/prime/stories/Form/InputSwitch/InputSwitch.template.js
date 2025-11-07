import ToggleSwitch from 'primevue/toggleswitch';

export const Template = (args) => ({
  components: { ToggleSwitch },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <ToggleSwitch v-bind="args" />
  <ToggleSwitch invalid v-bind="args" />
  <ToggleSwitch disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>v-model="true"</code></span>
  <ToggleSwitch :default-value="true" v-bind="args" />
  <ToggleSwitch :default-value="true" invalid v-bind="args" />
  <ToggleSwitch :default-value="true" disabled v-bind="args" />
</div>
`,
});
