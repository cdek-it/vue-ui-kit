import Badge from 'primevue/badge';

export const Template = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: `<Badge v-bind="args" />`,
});
