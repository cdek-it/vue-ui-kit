import { PBlockFileUpload } from '@/primeBlocks';

export const DefaultTemplate = (args) => ({
  components: { PBlockFileUpload },
  setup() {
    return { args };
  },
  template: `<PBlockFileUpload v-bind="args" />`,
});
