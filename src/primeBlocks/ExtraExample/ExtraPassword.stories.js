import ExtraPassword from './ExtraPassword.vue';

export default {
  title: 'Prime Blocks/ExtraPassword',
  component: ExtraPassword,
};

const Template = (args) => ({
  components: { ExtraPassword },
  setup() {
    return { args };
  },
  template: `
    <ExtraPassword v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
