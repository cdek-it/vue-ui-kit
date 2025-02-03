import PBlockPasword from './PBlockPassword.vue';

export default {
  title: 'Prime Blocks/PBlockPasword',
  component: PBlockPasword,
};

const Template = (args) => ({
  components: { PBlockPasword },
  setup() {
    return { args };
  },
  template: `
    <PBlockPasword v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
