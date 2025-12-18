import PBlockAuth from './PBlockAuth.vue';

export default {
  title: 'Prime Blocks/PBlockAuth',
  component: PBlockAuth,
};

const Template = (args) => ({
  components: { PBlockAuth },
  setup() {
    // Возвращаем args, чтобы можно было конфигурировать блок через Storybook
    return { args };
  },
  template: `
    <PBlockAuth v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};


