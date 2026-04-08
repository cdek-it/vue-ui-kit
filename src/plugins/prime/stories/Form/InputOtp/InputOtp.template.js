import { InputOtp } from 'primevue';
import { ref } from 'vue';

export const BasicTemplate = (args) => ({
  components: { InputOtp },
  setup() {
    const value = ref(null);
    return { args, value };
  },
  template: `<InputOtp v-model="value" v-bind="args" />`,
});

export const IntegerTemplate = (args) => ({
  components: { InputOtp },
  setup() {
    const value = ref(null);
    return { args, value };
  },
  template: `<InputOtp v-model="value" integerOnly v-bind="args" />`,
});

export const MaskTemplate = (args) => ({
  components: { InputOtp },
  setup() {
    const value = ref(null);
    return { args, value };
  },
  template: `<InputOtp v-model="value" mask="*" v-bind="args" />`,
});
