import ProgressBar from 'primevue/progressbar';

export const Template = (args) => ({
  components: { ProgressBar },
  setup() {
    return { args };
  },
  template: `
    <ProgressBar v-bind="args" />
  `,
});
