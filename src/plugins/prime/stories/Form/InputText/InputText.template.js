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
      :showClear="args.showClear"
      :hasFloatlabel="args.hasFloatlabel"
      :label="args.label"
      :required="args.required"
      :invalid="args.invalid"
      :disabled="args.disabled"
      :readonly="args.readonly"
      :placeholder="args.placeholder"
      :fluid="args.fluid"
    />
  `,
});
