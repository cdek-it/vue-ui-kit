import ExtraInputText from '@/primeBlocks/ExtraInputText/ExtraInputText.vue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { ExtraInputText },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
    <ExtraInputText
      v-model="value"
      :size="args.size"
      :clearable="args.clearable"
      :label-position="args.labelPosition"
      :label="args.label"
      :caption="args.caption"
      :info="args.info"
      :required="args.required"
      :invalid="args.invalid"
      :disabled="args.disabled"
      :readonly="args.readonly"
      :placeholder="args.placeholder"
      :fluid="args.fluid"
    />
  `,
});
