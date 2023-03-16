import CdekFormControl from './CdekFormControl.vue';
import { CdekForm } from '../cdek-form';
import './CdekFormControl.stories.css';

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
      <CdekFormControl v-bind="args" />
    </CdekForm>`,
});

export const Primary = Template.bind({});
Primary.args = {
  name: 'firstName',
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="firstName">
</CdekForm>
`,
    },
  },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Имя',
  name: 'firstName',
};
WithLabel.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="firstName" label="Имя">
</CdekForm>
`,
    },
  },
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  label: 'Имя',
  name: 'firstName',
  class: 'some-class',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="firstName" label="Имя" class="some-class">
</CdekForm>
`,
    },
  },
};

export const Required = Template.bind({});
Required.args = {
  label: 'Имя',
  name: 'firstName',
  rules: 'required',
};
Required.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="firstName" label="Имя" rules="required">
</CdekForm>
`,
    },
  },
};
