import CdekSpinner from './CdekSpinner.vue';

export default {
  title: 'Ui kit/CdekSpinner',
  component: CdekSpinner,
  parameters: {
    backgrounds: { default: 'grey' },
  },
};

const Template = (args) => ({
  components: { CdekSpinner },
  setup() {
    return { args };
  },
  template: `<CdekSpinner v-bind="args"></CdekSpinner>`,
});

export const Primary = Template.bind({});
Primary.args = {
  size: 'large',
  color: 'green',
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekSpinner size="large" color="green"></CdekSpinner>',
    },
  },
};
