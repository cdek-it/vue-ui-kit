import InputText from 'primevue/inputtext';
import { IconField, InputIcon } from 'primevue';
import FloatLabel from 'primevue/floatlabel';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { InputText },
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
  <InputText placeholder="InputText" v-bind="args" />
  <InputText placeholder="InputText" invalid v-bind="args" />
  <InputText placeholder="InputText" disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>v-model="text input"</code></span>
  <InputText :default-value="'text input'" placeholder="InputText" v-bind="args" />
  <InputText :default-value="'text input'" placeholder="InputText" invalid v-bind="args" />
  <InputText :default-value="'text input'" placeholder="InputText" disabled v-bind="args" />
</div>
`,
});

export const TemplateWithIcons = (args) => ({
  components: { InputText, IconField, InputIcon },
  setup() {
    const inputValue = ref('');

    const onClickDelete = () => {
      inputValue.value = '';
    };

    return { args, inputValue, onClickDelete };
  },
  template: `
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '15px' }">
      <div>
        <p :style="{ marginBottom: '8px', fontSize: '14px', color: '#666' }">
          Начните вводить текст - иконка очистки появится автоматически
        </p>
        <IconField>
          <InputText v-model="inputValue" placeholder="Введите текст..." />
          <InputIcon v-if="inputValue.length > 0" @click="onClickDelete">
            <i class="ti ti-x" />
          </InputIcon>
        </IconField>
        <p :style="{ marginTop: '8px', fontSize: '12px', color: '#999' }">
          Текущее значение: "{{ inputValue }}" (длина: {{ inputValue.length }})
        </p>
      </div>
    </div>
  `,
});

export const TemplateReadonly = (args) => ({
  components: { InputText },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span :style="{ justifySelf: 'flex-start' }"><code>readonly</code></span>
  <InputText placeholder="Placeholder" readonly v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>readonly with value</code></span>
  <InputText :default-value="'InputText'" readonly v-bind="args" />
</div>
`,
});

export const TemplateFloatLabel = (args) => ({
  components: { InputText, FloatLabel },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>FloatLabel (inside)</code></span>
  <FloatLabel variant="inside">
    <InputText id="float-default" v-model="value" v-bind="args" />
    <label for="float-default">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="inside">
    <InputText id="float-invalid" v-model="value" invalid v-bind="args" />
    <label for="float-invalid">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="inside">
    <InputText id="float-disabled" v-model="value" disabled v-bind="args" />
    <label for="float-disabled">FloatLabel</label>
  </FloatLabel>

  <span :style="{ justifySelf: 'flex-start' }"><code>FloatLabel with value</code></span>
  <FloatLabel variant="inside">
    <InputText id="float-value" :default-value="'InputText'" v-bind="args" />
    <label for="float-value">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="inside">
    <InputText id="float-value-invalid" :default-value="'InputText'" invalid v-bind="args" />
    <label for="float-value-invalid">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="inside">
    <InputText id="float-value-disabled" :default-value="'InputText'" disabled v-bind="args" />
    <label for="float-value-disabled">FloatLabel</label>
  </FloatLabel>
</div>
`,
});

export const TemplateFloatLabelOn = (args) => ({
  components: { InputText, FloatLabel },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>FloatLabel (on)</code></span>
  <FloatLabel variant="on">
    <InputText id="float-on-default" v-model="value" v-bind="args" />
    <label for="float-on-default">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="on">
    <InputText id="float-on-invalid" v-model="value" invalid v-bind="args" />
    <label for="float-on-invalid">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="on">
    <InputText id="float-on-disabled" v-model="value" disabled v-bind="args" />
    <label for="float-on-disabled">FloatLabel</label>
  </FloatLabel>

  <span :style="{ justifySelf: 'flex-start' }"><code>FloatLabel with value</code></span>
  <FloatLabel variant="on">
    <InputText id="float-on-value" :default-value="'InputText'" v-bind="args" />
    <label for="float-on-value">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="on">
    <InputText id="float-on-value-invalid" :default-value="'InputText'" invalid v-bind="args" />
    <label for="float-on-value-invalid">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="on">
    <InputText id="float-on-value-disabled" :default-value="'InputText'" disabled v-bind="args" />
    <label for="float-on-value-disabled">FloatLabel</label>
  </FloatLabel>
</div>
`,
});

export const TemplateFloatLabelOver = (args) => ({
  components: { InputText, FloatLabel },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>FloatLabel (over)</code></span>
  <FloatLabel variant="over">
    <InputText id="float-over-default" v-model="value" v-bind="args" />
    <label for="float-over-default">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="over">
    <InputText id="float-over-invalid" v-model="value" invalid v-bind="args" />
    <label for="float-over-invalid">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="over">
    <InputText id="float-over-disabled" v-model="value" disabled v-bind="args" />
    <label for="float-over-disabled">FloatLabel</label>
  </FloatLabel>

  <span :style="{ justifySelf: 'flex-start' }"><code>FloatLabel with value</code></span>
  <FloatLabel variant="over">
    <InputText id="float-over-value" :default-value="'InputText'" v-bind="args" />
    <label for="float-over-value">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="over">
    <InputText id="float-over-value-invalid" :default-value="'InputText'" invalid v-bind="args" />
    <label for="float-over-value-invalid">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="over">
    <InputText id="float-over-value-disabled" :default-value="'InputText'" disabled v-bind="args" />
    <label for="float-over-value-disabled">FloatLabel</label>
  </FloatLabel>
</div>
`,
});

export const TemplateFloatLabelWithIcons = (args) => ({
  components: { InputText, FloatLabel, IconField, InputIcon },
  setup() {
    const inputValue = ref('InputText');

    const onClickDelete = () => {
      inputValue.value = '';
    };

    return { args, inputValue, onClickDelete };
  },
  template: `
    <FloatLabel>
      <IconField>
        <InputText id="float-icon" v-model="inputValue" />
        <InputIcon v-if="inputValue.length > 0" @click="onClickDelete">
          <i class="ti ti-x" />
        </InputIcon>
      </IconField>
      <label for="float-icon">FloatLabel</label>
    </FloatLabel>
  `,
});

export const TemplateSizes = (args) => ({
  components: { InputText },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'max-content', gap: '15px', alignItems: 'center' }">
  <div :style="{ display: 'flex', gap: '10px', alignItems: 'center' }">
    <span :style="{ width: '100px' }"><code>SM</code></span>
    <InputText placeholder="Small" class="p-inputtext-sm" v-bind="args" />
  </div>
  
  <div :style="{ display: 'flex', gap: '10px', alignItems: 'center' }">
    <span :style="{ width: '100px' }"><code>Default</code></span>
    <InputText placeholder="Default" v-bind="args" />
  </div>
  
  <div :style="{ display: 'flex', gap: '10px', alignItems: 'center' }">
    <span :style="{ width: '100px' }"><code>LG</code></span>
    <InputText placeholder="Large" class="p-inputtext-lg" v-bind="args" />
  </div>
  
  <div :style="{ display: 'flex', gap: '10px', alignItems: 'center' }">
    <span :style="{ width: '100px' }"><code>XLG</code></span>
    <InputText placeholder="Extra Large" class="p-inputtext-xlg" v-bind="args" />
  </div>
</div>
`,
});
