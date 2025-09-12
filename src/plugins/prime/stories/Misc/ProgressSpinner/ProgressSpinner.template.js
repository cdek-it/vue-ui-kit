import ProgressSpinner from 'primevue/progressspinner';

export const Template = (args) => ({
  components: { ProgressSpinner },
  setup() {
    return { args };
  },
  template: `
      <ProgressSpinner v-bind="args" />
  `,
});
