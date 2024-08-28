import { ref } from 'vue';

import BaseForm from './BaseForm.vue';
import BaseFormControl from '../base-form-control/BaseFormControl.vue';
import { formSettings } from '../index';

export default {
  title: 'Form/CdekForm',
  component: BaseForm,
  subcomponents: { BaseFormControl },
};

const Template = (args) => ({
  components: { BaseForm, BaseFormControl },
  setup() {
    let form = ref({});
    let errors = ref({});

    const ruleFactory = () => {
      switch (args.story) {
        case 'GlobalValidator':
          return 'alpha';
        case 'ChangeLanguage':
        case 'ManualSubmit':
          return 'required';
        case 'WithValidation':
          return {
            newRequired: (value) => {
              if (!value || !value.trim()) {
                return 'Поле обязательное';
              }

              return true;
            },
          };
        case 'ChangeEvent':
          return 'required';
        default:
          return {};
      }
    };

    const rules = ruleFactory();

    if (args.story === 'ChangeLanguage') {
      formSettings.addMessages('required', { en: 'Required field' });
    }

    const changeLocaleEn = () => {
      formSettings.changeLocale('en');
    };

    const changeLocaleRu = () => {
      formSettings.changeLocale('ru');
    };

    const submit = (values) => {
      form.value = values;
    };

    const submitErrors = (err) => {
      errors.value = err;
    };

    const baseFormRef = ref(null);
    const triggerSubmitResult = ref();

    const triggerSubmit = () => {
      triggerSubmitResult.value = baseFormRef.value?.triggerSubmit();
    };

    const clearForm = () => {
      baseFormRef.value?.clearForm();
    };

    const changeEventResult = ref({});

    const change = (result) => {
      changeEventResult.value = result;
    };

    return {
      args,
      submit,
      submitErrors,
      form,
      errors,
      rules,
      changeLocaleEn,
      changeLocaleRu,
      baseFormRef,
      triggerSubmit,
      triggerSubmitResult,
      clearForm,
      changeEventResult,
      change,
    };
  },
  template: `
    <BaseForm v-bind="args" @submit="submit" @submitError="submitErrors" @change="change" ref="baseFormRef">
      <BaseFormControl
        name="firstName"
        label="firstName"
        :rules="rules"
        initialValue="${
          args.story === 'WithInitialValues' || args.story === 'ClearForm'
            ? 'Имя'
            : ''
        }"
      />
      <BaseFormControl
        name="surname"
        label="surname"
        initialValue="${
          args.story === 'WithInitialValues' || args.story === 'ClearForm'
            ? 'Фамилия'
            : ''
        }"
      />
      <button v-if="args.story !== 'ManualSubmit' && args.story !== 'ChangeEvent'">Продолжить</button>
    </BaseForm>
    
    <p v-if="args.story === 'ClearForm'">
      <button @click="clearForm">Очистить форму</button>
    </p>

    <p v-if="args.story !== 'ManualSubmit' && args.story !== 'ChangeEvent'">submit result: {{ form }}</p>
    <p v-if="args.story === 'WithValidation'">submitError result: {{ errors }}</p>
    <p v-if="args.story === 'ChangeLanguage'">
      <button @click="changeLocaleEn">Сменить язык на английский</button>
      <button @click="changeLocaleRu">Сменить язык на русский</button>
    </p>
    <p v-if="args.story === 'ManualSubmit'">
      <button @click="triggerSubmit">Вызвать submit</button>
      <p>Ответ <code>triggerSubmit</code>: {{ triggerSubmitResult }}</p>
    </p>
    <p v-if="args.story === 'ChangeEvent'">change event result: {{ changeEventResult }}</p>
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
    <CdekFormControl name="firstName" label="firstName" />
    <CdekFormControl name="surname" label="surname" />

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
  newRequired: (value) => {
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
    <CdekFormControl name="firstName" label="firstName" :rules="rules" />
    <CdekFormControl name="surname" label="surname" />

    <button>Продолжить<button>
  </CdekForm>
</template>
`,
    },
  },
};

export const GlobalValidator = Template.bind({});
GlobalValidator.args = {
  story: 'GlobalValidator',
};
GlobalValidator.parameters = {
  docs: {
    source: {
      code: `
<CdekForm @submit="submit">
  <CdekFormControl name="firstName" label="firstName" rules="alpha" />
  <CdekFormControl name="surname" label="surname" />

  <button>Продолжить<button>
</CdekForm>
`,
    },
  },
};

export const ChangeLanguage = Template.bind({});
ChangeLanguage.args = {
  story: 'ChangeLanguage',
};
ChangeLanguage.parameters = {
  docs: {
    source: {
      code: `
<script lang="ts" setup>
import { formSettings } from '@cdek-ui-kit/vue';

const changeLocale = () => {
  // Смена языка действует глобально
  // При смене языка текст ошибок автоматически меняется
  formSettings.changeLocale('en');
}
</script>

<template>
  <CdekForm @submit="submit">
    <CdekFormControl name="firstName" label="firstName" rules="required" />
    <CdekFormControl name="surname" label="surname" />

    <button>Продолжить<button>
  </CdekForm>

  <button @click="changeLocale">Изменить язык</button>
</template>
`,
    },
  },
};

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
  story: 'WithInitialValues',
};
WithInitialValues.parameters = {
  docs: {
    source: {
      code: `
<CdekForm @submit="submit">
  <CdekFormControl name="firstName" label="firstName" initialValue="Имя" />
  <CdekFormControl name="surname" label="surname" initialValue="Фамилия" />

  <button>Продолжить<button>
</CdekForm>
`,
    },
  },
};

export const ManualSubmit = Template.bind({});
ManualSubmit.args = {
  story: 'ManualSubmit',
};
ManualSubmit.parameters = {
  docs: {
    source: {
      code: `
<script setup lang="ts">
import { ref } from 'vue';

const cdekFormRef = ref(null);

type TriggerSubmitResult = {
  isError: boolean;
  isValid: boolean;
  errors?: ErrorsT;
  values?: FieldsT;
};

const triggerSubmit = () => {
  const result: TriggerSubmitResult = cdekFormRef.value?.triggerSubmit();
}
</script>

<template>
  <CdekForm ref="cdekFormRef">
    <CdekFormControl name="firstName" label="firstName" rules="required" />
    <CdekFormControl name="surname" label="surname" />
  </CdekForm>
</template>
`,
    },
  },
};

export const ClearForm = Template.bind({});
ClearForm.args = {
  story: 'ClearForm',
};
ClearForm.parameters = {
  docs: {
    source: {
      code: `
<script setup lang="ts">
import { ref } from 'vue';

const cdekFormRef = ref(null);

const clearForm = () => {
    cdekFormRef.value?.clearForm();
};
</script>

<template>
  <CdekForm @submit="submit" ref="cdekFormRef">
    <CdekFormControl name="firstName" label="firstName" initialValue="Имя" />
    <CdekFormControl name="surname" label="surname" initialValue="Фамилия" />
  
    <button>Продолжить<button>
  </CdekForm>
  
  <button @click="clearForm">Очистить форму<button>
</template>
`,
    },
  },
};

export const ChangeEvent = Template.bind({});
ChangeEvent.args = {
  story: 'ChangeEvent',
};
ChangeEvent.parameters = {
  docs: {
    source: {
      code: `
<script lang="ts" setup>
import type { FormChangeResult } from '@cdek-ui-kit/vue';

const change = (result: FormChangeResult<CustomValuesT>) => {
  /**
   * В result будет лежать объект такого вида:
   * type FormChangeResult<CustomValuesT = FieldsT> = {
   *  isValid: boolean;
   *  errors: ErrorsT;
   *  values: CustomValuesT;
   * };
   */
  console.log(result);
}
</script>

<template>
  <CdekForm @submit="submit" @change="change">
    <CdekFormControl name="firstName" label="firstName" />
    <CdekFormControl name="surname" label="surname" />
  </CdekForm>
</template>
`,
    },
  },
};
