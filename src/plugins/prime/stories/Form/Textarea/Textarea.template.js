import { ref } from 'vue';
import Textarea from 'primevue/textarea';
import FloatLabel from 'primevue/floatlabel';
import { IconField, InputIcon } from 'primevue';

export const Template = (args) => ({
  components: { Textarea },
  setup() {
    const value1 = ref('text input');
    const value2 = ref('text input');
    const value3 = ref('text input');

    return { args, value1, value2, value3 };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="text input"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <Textarea placeholder="Placeholder" v-bind="args" rows="6" />
  <Textarea v-model="value1" placeholder="Placeholder" rows="6" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
  <Textarea placeholder="Placeholder" rows="6" invalid v-bind="args" />
  <Textarea v-model="value2" placeholder="Placeholder" rows="6" invalid v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <Textarea placeholder="Placeholder" rows="6" disabled v-bind="args" />
  <Textarea v-model="value3" placeholder="Placeholder" rows="6" disabled v-bind="args" />
</div>
`,
});

export const TemplateSizes = (args) => ({
  components: { Textarea },
  setup() {
    const valueSm = ref('text input');
    const valueMd = ref('text input');
    const valueLg = ref('text input');

    return { args, valueSm, valueMd, valueLg };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="text input"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>size="small"</code></span>
  <Textarea placeholder="Placeholder" rows="6" size="small" v-bind="args" />
  <Textarea v-model="valueSm" placeholder="Placeholder" rows="6" size="small" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>default</code></span>
  <Textarea placeholder="Placeholder" rows="6" v-bind="args" />
  <Textarea v-model="valueMd" placeholder="Placeholder" rows="6" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
  <Textarea placeholder="Placeholder" rows="6" size="large" v-bind="args" />
  <Textarea v-model="valueLg" placeholder="Placeholder" rows="6" size="large" v-bind="args" />
</div>
`,
});

export const TemplateReadonly = (args) => ({
  components: { Textarea },
  setup() {
    const value1 = ref('');
    const value2 = ref('readonly text');

    return { args, value1, value2 };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span><code>v-model="readonly text"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>readonly</code></span>
  <Textarea v-model="value1" placeholder="Placeholder" rows="6" readonly v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>readonly (filled)</code></span>
  <Textarea v-model="value2" placeholder="Placeholder" rows="6" readonly v-bind="args" />
</div>
`,
});

export const TemplateFloatLabel = (args) => ({
  components: { Textarea, FloatLabel },
  setup() {
    const valueOver1 = ref('');
    const valueOver2 = ref('text input');
    const valueIn1 = ref('');
    const valueIn2 = ref('text input');
    const valueOn1 = ref('');
    const valueOn2 = ref('text input');

    return {
      args,
      valueOver1,
      valueOver2,
      valueIn1,
      valueIn2,
      valueOn1,
      valueOn2,
    };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="text input"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>variant="over"</code></span>
  <FloatLabel variant="over">
    <Textarea v-model="valueOver1" inputId="over_empty" rows="6" v-bind="args" />
    <label for="over_empty">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="over">
    <Textarea v-model="valueOver2" inputId="over_filled" rows="6" v-bind="args" />
    <label for="over_filled">FloatLabel</label>
  </FloatLabel>

  <span :style="{ justifySelf: 'flex-start' }"><code>variant="in"</code></span>
  <FloatLabel variant="in">
    <Textarea v-model="valueIn1" inputId="in_empty" rows="6" v-bind="args" />
    <label for="in_empty">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="in">
    <Textarea v-model="valueIn2" inputId="in_filled" rows="6" v-bind="args" />
    <label for="in_filled">FloatLabel</label>
  </FloatLabel>

  <span :style="{ justifySelf: 'flex-start' }"><code>variant="on"</code></span>
  <FloatLabel variant="on">
    <Textarea v-model="valueOn1" inputId="on_empty" rows="6" v-bind="args" />
    <label for="on_empty">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="on">
    <Textarea v-model="valueOn2" inputId="on_filled" rows="6" v-bind="args" />
    <label for="on_filled">FloatLabel</label>
  </FloatLabel>
</div>
`,
});

export const TemplateFloatLabelSizes = (args) => ({
  components: { Textarea, FloatLabel },
  setup() {
    const valueMd1 = ref('');
    const valueMd2 = ref('text input');

    return { args, valueMd1, valueMd2 };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="text input"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>default</code></span>
  <FloatLabel variant="in">
    <Textarea v-model="valueMd1" inputId="md_empty" rows="6" v-bind="args" />
    <label for="md_empty">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="in">
    <Textarea v-model="valueMd2" inputId="md_filled" rows="6" v-bind="args" />
    <label for="md_filled">FloatLabel</label>
  </FloatLabel>
</div>
`,
});

export const TemplateFloatLabelStates = (args) => ({
  components: { Textarea, FloatLabel },
  setup() {
    const valueDefault = ref('text input');
    const valueInvalid = ref('text input');
    const valueDisabled = ref('text input');

    return { args, valueDefault, valueInvalid, valueDisabled };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span><code>v-model="text input"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>default</code></span>
  <FloatLabel variant="in">
    <Textarea v-model="valueDefault" inputId="fl_default" rows="6" v-bind="args" />
    <label for="fl_default">FloatLabel</label>
  </FloatLabel>

  <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
  <FloatLabel variant="in">
    <Textarea v-model="valueInvalid" inputId="fl_invalid" rows="6" invalid v-bind="args" />
    <label for="fl_invalid">FloatLabel</label>
  </FloatLabel>

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <FloatLabel variant="in">
    <Textarea v-model="valueDisabled" inputId="fl_disabled" rows="6" disabled v-bind="args" />
    <label for="fl_disabled">FloatLabel</label>
  </FloatLabel>
</div>
`,
});

export const TemplateWithClearIcon = (args) => ({
  components: { Textarea, IconField, InputIcon },
  setup() {
    const valueMd = ref('text input');

    const clearMd = () => {
      valueMd.value = '';
    };

    return { args, valueMd, clearMd };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'start', justifyItems: 'center' }">
  <span></span>
  <span><code>v-model="text input"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>default</code></span>
  <IconField>
    <Textarea v-model="valueMd" placeholder="Placeholder" rows="6" v-bind="args" />
    <InputIcon @click="clearMd">
      <i class="ti ti-x" />
    </InputIcon>
  </IconField>
</div>
`,
});
