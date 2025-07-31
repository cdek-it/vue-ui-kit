import Chip from 'primevue/Chip';

export const Template = (args) => ({
  components: { Chip },
  setup() {
    return { args };
  },
  template: `
      <Chip v-bind="args" class="w-fit" />
  `,
});
