import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { InputText, IconField, InputIcon },
  setup() {
    const value = ref('');

    const onClickClear = () => {
      value.value = '';
    };

    return { args, value, onClickClear };
  },
  template: `
    <IconField v-if="args.showClear" style="width: 100%">
      <InputText 
        v-model="value"
        v-bind="args"
        style="width: 100%"
        :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }" 
        :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
      />
      <InputIcon @click.stop="onClickClear" class="p-inputicon-clear" style="cursor: pointer; z-index: 1">
        <i class="ti ti-x" />
      </InputIcon>
    </IconField>
    <InputText 
      v-else
      v-model="value"
      v-bind="args"
      style="width: 100%"
      :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    />
  `,
});

export const TemplateFloatLabel = (args) => ({
  components: { InputText, FloatLabel },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
    <FloatLabel variant="in">
        <InputText id="in_label" v-model="value" style="width: 100%" v-bind="args" />
        <label for="in_label">In Label</label>
    </FloatLabel>
`,
});
