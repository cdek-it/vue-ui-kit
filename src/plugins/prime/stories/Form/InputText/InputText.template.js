import PBlockInputText from '@/primeBlocks/PBlockInputText/PBlockInputText.vue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { PBlockInputText },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
    <PBlockInputText
      v-model="value"
      :size="args.size"
      :clearable="args.clearable"
      :invalid="args.invalid"
      :disabled="args.disabled"
      :readonly="args.readonly"
      :placeholder="args.placeholder"
      :fluid="args.fluid"
    />
  `,
});
