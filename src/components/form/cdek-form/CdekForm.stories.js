import CdekForm from './CdekForm.vue';
import { CdekFormControl } from '@/components/form/cdek-form-control';

export default {
  title: 'Form/CdekForm',
  component: CdekForm,
  subcomponents: { CdekFormControl },
};

const Template = (args) => ({
  components: { CdekForm, CdekFormControl },
  setup() {
    const submit = (values) => console.log('PARENT_SUBMIT', values);
    const submitErrors = (values) => console.log('PARENT_ERRORS', values);

    const rules = {
      required: (val) => !!val,
    };

    return { args, submit, submitErrors, rules };
  },
  template: `
    <CdekForm v-bind="args" @submit="submit" @submitError="submitErrors">
      <CdekFormControl name="firstName" :rules="rules" />
      <CdekFormControl name="surname" :rules="rules" />
      <button>Продолжить</button>
    </CdekForm>
  `,
});

export const Primary = Template.bind({});
