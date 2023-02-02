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
    const submit = (values) => console.log('submit', values);
    return { args, submit };
  },
  template: `
    <CdekForm v-bind="args" v-slot="{ sendFormEvent }" @submit="submit">
      <CdekFormControl :emit-on-form="sendFormEvent" name="firstName" />
      <CdekFormControl :emit-on-form="sendFormEvent" name="surname" />
      <button>Продолжить</button>
    </CdekForm>
  `,
});

export const Primary = Template.bind({});
