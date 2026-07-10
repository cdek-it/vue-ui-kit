import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import { IconField, InputIcon } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { InputText },
  setup() {
    return { args };
  },
  template: `
    <InputText 
      v-bind="args"
      :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    />
  `,
});

export const TemplateFloatLabel = (args) => ({
  components: { InputText, FloatLabel, IconField, InputIcon },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
    <IconField>
      <FloatLabel variant="in">
        <InputText id="username" v-model="value" style="width: 100%" :invalid="args.invalid" :disabled="args.disabled" />
        <label for="username">Username</label>
      </FloatLabel>
      <InputIcon @click="value = ''">
        <i class="ti ti-x" />
      </InputIcon>
    </IconField>
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
      <InputText 
        v-model="inputValue" 
        v-bind="args"
        :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
        :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
        placeholder="Normal" 
      />
      <InputIcon @click="onClickDelete">
        <i class="ti ti-x" />
      </InputIcon>
    </IconField>
  `,
});
