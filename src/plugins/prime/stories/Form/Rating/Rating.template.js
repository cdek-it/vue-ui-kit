import Rating from 'primevue/rating';

export const Template = (args) => ({
  components: { Rating },
  setup() {
    return { args };
  },
  template: '<Rating v-bind="args" />',
});
