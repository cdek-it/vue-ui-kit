import Skeleton from 'primevue/skeleton';

export const Template = (args) => ({
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: `
    <Skeleton v-bind="args" />
  `,
});
