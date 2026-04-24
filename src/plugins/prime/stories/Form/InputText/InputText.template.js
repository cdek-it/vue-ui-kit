import InputText from 'primevue/inputtext';
import PBlockInputText from '@/primeBlocks/PBlockInputText/PBlockInputText.vue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { InputText, PBlockInputText },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
    <PBlockInputText
      v-if="args.showClear"
      v-model="value"
      :size="args.size"
      :invalid="args.invalid"
      :disabled="args.disabled"
      :readonly="args.readonly"
      :placeholder="args.placeholder"
      :fluid="args.fluid"
    />
    <InputText
      v-else
      v-model="value"
      :invalid="args.invalid"
      :disabled="args.disabled"
      :readonly="args.readonly"
      :placeholder="args.placeholder"
      :fluid="args.fluid"
      style="width: 100%"
      :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
      :size="args.size === 'xlarge' || args.size === 'base' ? null : args.size"
    />
  `,
});
