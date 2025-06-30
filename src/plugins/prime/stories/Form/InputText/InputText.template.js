import InputText from 'primevue/inputtext';
import { IconField, InputIcon } from 'primevue';
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
    <IconField>
      <InputText v-model="inputValue" placeholder="Normal" />
      <InputIcon @click="onClickDelete">
        <i class="ti ti-x" />
      </InputIcon>
    </IconField>
  `,
});
