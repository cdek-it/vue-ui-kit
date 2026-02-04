import Select from 'primevue/select';
import FloatLabel from 'primevue/floatlabel';

const options = [
  { name: 'Option 1', code: 'O1' },
  { name: 'Option 2', code: 'O2' },
  { name: 'Option 3', code: 'O3' },
];

export const Template = (args) => ({
  components: { Select },
  setup() {
    return { args, options };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '40px' }">
  <div :style="{ display: 'grid', gridTemplateColumns: '100px repeat(4, 220px)', gap: '20px', alignItems: 'center' }">
    <span></span>
    <span :style="{ fontWeight: 'bold' }">Small (sm)</span>
    <span :style="{ fontWeight: 'bold' }">Medium (md)</span>
    <span :style="{ fontWeight: 'bold' }">Large (lg)</span>
    <span :style="{ fontWeight: 'bold' }">XLarge (xlg)</span>

    <span :style="{ fontWeight: 'bold' }">Default</span>
    <Select size="small" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" showClear />
    <Select :options="options" optionLabel="name" placeholder="Select item" v-bind="args" showClear />
    <Select size="large" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" showClear />
    <Select class="p-select-xlg" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" showClear />

    <span :style="{ fontWeight: 'bold' }">Invalid</span>
    <Select invalid size="small" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" showClear />
    <Select invalid :options="options" optionLabel="name" placeholder="Select item" v-bind="args" showClear />
    <Select invalid size="large" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" showClear />
    <Select invalid class="p-select-xlg" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" showClear />

    <span :style="{ fontWeight: 'bold' }">Disabled</span>
    <Select disabled size="small" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
    <Select disabled :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
    <Select disabled size="large" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
    <Select disabled class="p-select-xlg" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />

    <span :style="{ fontWeight: 'bold' }">Readonly</span>
    <Select class="p-readonly" size="small" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
    <Select class="p-readonly" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
    <Select class="p-readonly" size="large" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
    <Select class="p-readonly p-select-xlg" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />

    <span :style="{ fontWeight: 'bold' }">Loading</span>
    <Select loading size="small" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
    <Select loading :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
    <Select loading size="large" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
    <Select loading class="p-select-xlg" :options="options" optionLabel="name" placeholder="Select item" v-bind="args" />
  </div>
</div>
`,
});

export const FloatLabelTemplate = (args) => ({
  components: { Select, FloatLabel },
  setup() {
    return { args, options };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }">
  <div :style="{ display: 'grid', gridTemplateColumns: '100px 220px', gap: '40px 20px', alignItems: 'center' }">
    <span></span>
    <span :style="{ fontWeight: 'bold' }">Default (md)</span>

    <span :style="{ fontWeight: 'bold' }">Default</span>
    <FloatLabel variant="in">
      <Select id="in_label" :options="options" optionLabel="name" v-bind="args" />
      <label for="in_label">In Label</label>
    </FloatLabel>

    <span :style="{ fontWeight: 'bold' }">Filled</span>
    <FloatLabel variant="in">
      <Select id="in_label_f" :options="options" optionLabel="name" :model-value="options[0]" v-bind="args" />
      <label for="in_label_f">In Label</label>
    </FloatLabel>
  </div>
</div>
`,
});
