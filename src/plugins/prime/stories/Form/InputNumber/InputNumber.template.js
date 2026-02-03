import InputNumber from 'primevue/inputnumber';
import FloatLabel from 'primevue/floatlabel';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { InputNumber },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(5, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>
  <span><code>readonly</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <InputNumber placeholder="0" showButtons buttonLayout="horizontal" v-bind="args" />
  <InputNumber placeholder="0" showButtons buttonLayout="horizontal" invalid v-bind="args" />
  <InputNumber placeholder="0" showButtons buttonLayout="horizontal" disabled v-bind="args" />
  <InputNumber placeholder="0" showButtons buttonLayout="horizontal" readonly v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>v-model="100"</code></span>
  <InputNumber :model-value="100" placeholder="0" showButtons buttonLayout="horizontal" v-bind="args" />
  <InputNumber :model-value="100" placeholder="0" showButtons buttonLayout="horizontal" invalid v-bind="args" />
  <InputNumber :model-value="100" placeholder="0" showButtons buttonLayout="horizontal" disabled v-bind="args" />
  <InputNumber :model-value="100" placeholder="0" showButtons buttonLayout="horizontal" readonly v-bind="args" />
</div>
`,
});

export const TemplateSizes = (args) => ({
  components: { InputNumber },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <InputNumber placeholder="Small" size="small" showButtons buttonLayout="horizontal" v-bind="args" />
  <InputNumber placeholder="Normal" showButtons buttonLayout="horizontal" v-bind="args" />
  <InputNumber placeholder="Large" size="large" showButtons buttonLayout="horizontal" v-bind="args" />
</div>
`,
});

export const TemplateFloatLabel = (args) => ({
  components: { InputNumber, FloatLabel },
  setup() {
    const value = ref(null);
    return { args, value };
  },
  template: `
    <FloatLabel variant="in">
        <InputNumber id="number" v-model="value" showButtons buttonLayout="horizontal" />
        <label for="number">Number</label>
    </FloatLabel>
`,
});

export const TemplateFormats = (args) => ({
  components: { InputNumber },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <InputNumber placeholder="Integer" showButtons buttonLayout="horizontal" v-bind="args" />
  <InputNumber placeholder="Decimal" :min-fraction-digits="2" :max-fraction-digits="2" showButtons buttonLayout="horizontal" v-bind="args" />
  <InputNumber placeholder="Currency" mode="currency" currency="USD" locale="en-US" showButtons buttonLayout="horizontal" v-bind="args" />
  <InputNumber placeholder="Percent" suffix="%" showButtons buttonLayout="horizontal" v-bind="args" />
</div>
`,
});

export const TemplateMinMax = (args) => ({
  components: { InputNumber },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <InputNumber placeholder="Min: 0, Max: 100" :min="0" :max="100" showButtons buttonLayout="horizontal" v-bind="args" />
  <InputNumber placeholder="Step: 5" :step="5" showButtons buttonLayout="horizontal" v-bind="args" />
</div>
`,
});
