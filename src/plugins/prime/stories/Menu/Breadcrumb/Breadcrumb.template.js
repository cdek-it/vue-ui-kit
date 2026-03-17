import Breadcrumb from 'primevue/breadcrumb';

export const Template = (args) => ({
  components: { Breadcrumb },
  setup() {
    return { args };
  },
  template: '<Breadcrumb v-bind="args" />',
});
