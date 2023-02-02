import CdekFormControl from './CdekFormControl.vue';

export default {
  title: 'Form/CdekFormControl',
  component: CdekFormControl,
};

const Template = (args) => ({
  components: { CdekFormControl },
  setup() {
    return { args };
  },
  template: `<CdekFormControl v-bind="args">`,
});

export const Primary = Template.bind({});
