import { ref } from 'vue';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import { IconField, InputIcon } from 'primevue';

export const Template = (args) => ({
  components: { FloatLabel, InputText },
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
  <FloatLabel variant="in">
    <component :is="args.component" id="input1" v-bind="args"/>
    <label for="input1">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="in">
    <component :is="args.component" id="input2" v-model="value1" v-bind="args" />
    <label for="input2">FloatLabel</label>
  </FloatLabel>

  <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
  <FloatLabel variant="in">
    <component :is="args.component" id="input3" invalid v-bind="args" />
    <label for="input3">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="in">
    <component :is="args.component" id="input4" v-model="value2" invalid v-bind="args" />
    <label for="input4">FloatLabel</label>
  </FloatLabel>

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <FloatLabel variant="in">
    <component :is="args.component" id="input5" disabled v-bind="args" />
    <label for="input5">FloatLabel</label>
  </FloatLabel>
  <FloatLabel variant="in">
    <component :is="args.component" id="input6" v-model="value3" disabled v-bind="args" />
    <label for="input6">FloatLabel</label>
  </FloatLabel>
</div>
`,
});

export const TemplateWithIcon = (args) => ({
  components: { FloatLabel, InputText, IconField, InputIcon },
  setup() {
    const inputValue = ref('');

    const onClickDelete = () => {
      inputValue.value = '';
    };

    return { args, inputValue, onClickDelete };
  },
  template: `
    <FloatLabel variant="in">
      <IconField>
        <InputText id="username" v-model="inputValue" />
        <InputIcon @click="onClickDelete">
          <i class="ti ti-x" />
        </InputIcon>
      </IconField>
      <label for="username">Username</label>
    </FloatLabel>
  `,
});
