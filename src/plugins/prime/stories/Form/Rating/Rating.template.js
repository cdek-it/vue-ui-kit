import { ref } from 'vue';
import Rating from 'primevue/rating';

export const Template = (args) => ({
  components: { Rating },
  setup() {
    const value = ref(args.modelValue || null);
    return { args, value };
  },
  template: `
    <Rating v-model="value" v-bind="args" />
  `,
});
