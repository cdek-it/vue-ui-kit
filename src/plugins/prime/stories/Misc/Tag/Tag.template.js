import Tag from 'primevue/tag';

export const Template = (args) => ({
  components: { Tag },
  setup() {
    return { args };
  },
  template: '<Tag v-bind="args" />',
});
