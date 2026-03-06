import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';

export const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '20px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span><strong>Default</strong></span>
  <span><strong>Invalid</strong></span>
  <span><strong>Disabled</strong></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>Unchecked</code></span>
  <Checkbox binary v-bind="args" />
  <Checkbox binary invalid v-bind="args" />
  <Checkbox binary disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>Checked</code></span>
  <Checkbox :model-value="true" binary v-bind="args" />
  <Checkbox :model-value="true" binary invalid v-bind="args" />
  <Checkbox :model-value="true" binary disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>Indeterminate</code></span>
  <Checkbox binary indeterminate v-bind="args" />
  <Checkbox binary indeterminate invalid v-bind="args" />
  <Checkbox binary indeterminate disabled v-bind="args" />
</div>
`,
});

export const InteractiveTemplate = (args) => ({
  components: { Checkbox },
  setup() {
    const checked = ref(false);
    const indeterminate = ref(true);
    return { args, checked, indeterminate };
  },
  template: `
<div class="flex flex-col gap-6">
  <div class="flex items-center gap-3">
    <Checkbox v-model="checked" binary inputId="cb1" />
    <label for="cb1" class="cursor-pointer">Accept terms and conditions</label>
  </div>
  
  <div class="flex items-center gap-3">
    <Checkbox v-model="indeterminate" binary indeterminate inputId="cb2" />
    <label for="cb2" class="cursor-pointer">Select all (indeterminate state)</label>
  </div>
  
  <div class="flex items-center gap-3">
    <Checkbox binary invalid inputId="cb3" />
    <label for="cb3" class="cursor-pointer text-red-600">Required field (invalid)</label>
  </div>
  
  <div class="flex items-center gap-3">
    <Checkbox :model-value="true" binary disabled inputId="cb4" />
    <label for="cb4" class="cursor-not-allowed opacity-60">Disabled checkbox</label>
  </div>
</div>
`,
});
