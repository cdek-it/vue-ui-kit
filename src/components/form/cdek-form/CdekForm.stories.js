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
    let errors = ref({});

    const rules =
      args.story === 'WithValidation'
        ? {
            required: (value) => {
              if (!value.trim()) {
                return 'Поле обязательное';
              }

              return true;
            },
          }
        : {};

    const submit = (values) => {
      form.value = values;
    };

    const submitErrors = (err) => {
      errors.value = err;
    };

    return { args, submit, submitErrors, form, errors, rules };
  },
  template: `
    <CdekForm v-bind="args" @submit="submit" @submitError="submitErrors">
      <CdekFormControl name="firstName" :rules="rules" />
      <CdekFormControl name="surname" />
      <button>Продолжить</button>
    </CdekForm>

    <p>submit result: {{ form }}</p>
    <p v-if="args.story === 'WithValidation'">submitError result: {{ errors }}</p>
  `,
});

export const Primary = Template.bind({});
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

export const WithValidation = Template.bind({});
WithValidation.args = {
  story: 'WithValidation',
};
WithValidation.parameters = {
  docs: {
    source: {
      code: `
<script lang="ts" setup>
/**
 * Валидаторы в поле передаются объектом, где ключом выступает название валидатора
 * Этот ключ будет передаваться в объекте errors на submitError, в случае ошибки
 * 
 * Кастомная функция-валидатор должна возвращать true если поле прошло валидацию
 * и строку с текстом ошибки, если валидация не прошла
 */
const rules = {
  required: (value) => {
    if (!value.trim()) {
      return 'Поле обязательное';
    }

    return true;
  }
}

/**
 * С валидацией submit не будет отправляться, пока
 * форма не будет без ошибок
 */
const submit = (values) => {
  /**
   * Здесь values - это отвалидированная форма, можно сразу отправлять
   */
  console.log(values);
}

/**
 * Если произошел submit, но форма с ошибками, отправляется событие submitError
 */
const submitError = (errors) => {
  /**
   * В errors будет лежать объект по формату
   * 
   * {
   *   [название поля]: true | <название валидатора>
   * }
   * 
   * true будет означать, что валидация на этом поле прошла
   * 
   * string (название валидатора) - он вызвал ошибку
   * 
   * текст ошибки в данном случае не передается, он используется только внутри компонента
   */
  console.log(errors);
}
</script>

<template>
  <CdekForm @submit="submit" @submitError="submitError">
    <CdekFormControl name="firstName" :rules="rules" />
    <CdekFormControl name="surname" />

    <button>Продолжить<button>
  </CdekForm>
</template>
`,
    },
  },
};
