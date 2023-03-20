import CdekFormControl from './CdekFormControl.vue';
import { CdekForm } from '../cdek-form';
import './CdekFormControl.stories.css';
import { formSettings } from '../index';

export default {
  title: 'Form/CdekFormControl',
  component: CdekFormControl,
};

const Template = (args) => ({
  components: { CdekForm, CdekFormControl },
  setup() {
    if (args.story === 'WithExtraLocale') {
      formSettings.addMessages('required', { en: 'Required field' });
      formSettings.changeLocale('en');
    }

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

export const WithExtraLocale = Template.bind({});
WithExtraLocale.args = {
  label: 'Имя',
  name: 'firstName',
  rules: 'required',
  story: 'WithExtraLocale',
};
WithExtraLocale.parameters = {
  docs: {
    source: {
      code: `
<script lang="ts" setup>
import { formSettings } from 'vue-ui-kit';

// Добавляем переводы на конкретное правило, действует глобально, лучше сделать при инициализации
formSettings.addMessages('required', { en: 'Required field' });
// Меняем локаль, это действует глобально на все формы, так что можно завязать на i18n
formSettings.changeLocale('en');

// Если нужно кастомное сообщение только в одном месте, то лучше сделать кастомный валидатор
</script>

<template>
  <CdekForm>
    <CdekFormControl name="firstName" label="Имя" rules="required">
  </CdekForm>
</template>
`,
    },
  },
};
