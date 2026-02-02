import InputMask from 'primevue/inputmask';
import FloatLabel from 'primevue/floatlabel';
import { IconField, InputIcon } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { InputMask },
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
  <InputMask mask="99-999999" placeholder="99-999999" v-bind="args" />
  <InputMask mask="99-999999" placeholder="99-999999" invalid v-bind="args" />
  <InputMask mask="99-999999" placeholder="99-999999" disabled v-bind="args" />
  <InputMask mask="99-999999" placeholder="99-999999" readonly v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>v-model="12-345678"</code></span>
  <InputMask mask="99-999999" :default-value="'12-345678'" placeholder="99-999999" v-bind="args" />
  <InputMask mask="99-999999" :default-value="'12-345678'" placeholder="99-999999" invalid v-bind="args" />
  <InputMask mask="99-999999" :default-value="'12-345678'" placeholder="99-999999" disabled v-bind="args" />
  <InputMask mask="99-999999" :default-value="'12-345678'" placeholder="99-999999" readonly v-bind="args" />
</div>
`,
});

export const TemplateSizes = (args) => ({
  components: { InputMask },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <InputMask mask="99-999999" placeholder="Small" size="small" v-bind="args" />
  <InputMask mask="99-999999" placeholder="Normal" v-bind="args" />
  <InputMask mask="99-999999" placeholder="Large" size="large" v-bind="args" />
  <InputMask mask="99-999999" placeholder="XLarge" class="p-inputtext-xlg" v-bind="args" />
</div>
`,
});

export const TemplateFloatLabel = (args) => ({
  components: { InputMask, FloatLabel },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
    <FloatLabel variant="in">
        <InputMask id="phone" v-model="value" mask="99-999999" />
        <label for="phone">Phone Number</label>
    </FloatLabel>
`,
});

export const TemplateWithIcons = (args) => ({
  components: { InputMask, IconField, InputIcon },
  setup() {
    const inputValue = ref('');

    const onClickDelete = () => {
      inputValue.value = '';
    };

    return { args, inputValue, onClickDelete };
  },
  template: `
    <IconField>
      <InputMask v-model="inputValue" mask="99-999999" placeholder="99-999999" />
      <InputIcon @click="onClickDelete">
        <i class="ti ti-x" />
      </InputIcon>
    </IconField>
  `,
});

export const TemplateMasks = (args) => ({
  components: { InputMask },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <InputMask mask="99-999999" placeholder="Phone: 99-999999" v-bind="args" />
  <InputMask mask="99.99.9999" placeholder="Date: dd.mm.yyyy" v-bind="args" />
  <InputMask mask="(999) 999-9999" placeholder="Phone US: (999) 999-9999" v-bind="args" />
  <InputMask mask="99:99" placeholder="Time: 99:99" v-bind="args" />
  <InputMask mask="a*-999-a999" placeholder="Serial: a*-999-a999" v-bind="args" />
</div>
`,
});
