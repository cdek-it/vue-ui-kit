import CdekFormControl from './CdekFormControl.vue';
import { CdekForm } from '../cdek-form';

export default {
  title: 'Form/CdekFormControl',
  component: CdekFormControl,
};

const Template = (args) => ({
  components: { CdekForm, CdekFormControl },
  setup() {
    return { args };
  },
  template: `
    <CdekForm>
      <CdekFormControl v-bind="args">
    </CdekForm>`,
});

export const Primary = Template.bind({});
