import TestComponent from './TestComponent.vue';

export default {
  title: 'Test/TestComponent',
  component: TestComponent,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TestComponent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TestComponent v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Какое-то название',
};
