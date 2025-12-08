import BaseBadge from '../BaseBadge.vue';

export default {
  title: 'Components/Badge/Basic',
  component: BaseBadge,
  parameters: {
    docs: {
      description: {
        component: 'Базовое использование компонента Badge для отображения статусов и меток.',
      },
    },
  },
};

const Template = (args) => ({
  components: { BaseBadge },
  setup() {
    return { args };
  },
  template: '<BaseBadge v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Status',
};
Default.parameters = {
  docs: {
    description: {
      story: 'Базовый бейдж со стандартными настройками.',
    },
    source: {
      code: '<CdekBadge text="Status" />',
    },
  },
};
