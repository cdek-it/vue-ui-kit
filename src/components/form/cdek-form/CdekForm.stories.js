import { ref } from 'vue';

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
    let form = ref({});

    const submit = (values) => {
      form.value = values;
    };

    const submitErrors = (values) => console.log('PARENT_ERRORS', values);

    return { args, submit, submitErrors, form };
  },
  template: `
    <CdekForm v-bind="args" @submit="submit" @submitError="submitErrors">
      <CdekFormControl name="firstName" />
      <CdekFormControl name="surname" />
      <button>Продолжить</button>
    </CdekForm>

    <p>Submit result: {{ form }}</p>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  story: 'Primary',
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<script lang="ts" setup>
const submit = (values) => {
  /**
   * В values будет лежать слепленный объект из всех CdekFormControl внутри формы
   * Ключами выступают названия, переданные в name
   * А значениями выступает значение поля
   */
  console.log(values);
}
</script>

<template>
  <CdekForm @submit="submit">
    <CdekFormControl name="firstName" />
    <CdekFormControl name="surname" />

    <button>Продолжить<button>
  </CdekForm>
</template>
`,
    },
  },
};
