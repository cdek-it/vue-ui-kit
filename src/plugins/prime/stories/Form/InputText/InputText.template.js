import InputText from 'primevue/inputtext';
import InputTextClear from './InputTextClear.vue';
import FloatLabel from 'primevue/floatlabel';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { InputText, InputTextClear },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
    <InputTextClear
      v-if="args.showClear"
      v-model="value"
      :size="args.size"
      :invalid="args.invalid"
      :disabled="args.disabled"
      :readonly="args.readonly"
      :placeholder="args.placeholder"
    />
    <InputText
      v-else
      v-model="value"
      :invalid="args.invalid"
      :disabled="args.disabled"
      :readonly="args.readonly"
      :placeholder="args.placeholder"
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
