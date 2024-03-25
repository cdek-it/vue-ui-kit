import { ref } from 'vue';
import BaseFormControl from './BaseFormControl.vue';
import BaseForm from '../base-form/BaseForm.vue';
import './BaseFormControl.stories.css';
import { formSettings } from '../index';
import BaseSpinner from '../../base-spinner/BaseSpinner.vue';

export default {
  title: 'Form/CdekFormControl',
  component: BaseFormControl,
  argTypes: {
    type: {
      options: ['text', 'number', 'autocomplete'],
    },
  },
};

const Template = (args) => ({
  components: { BaseForm, BaseFormControl },
  setup() {
    if (args.story === 'WithExtraLocale') {
      formSettings.addMessages('required', { en: 'Required field' });
      formSettings.changeLocale('en');
    }

    const ifEmail = ref(true);
    const rules = ref(
      args.story === 'ChangeValidatorRuntime' ? 'email' : args.rules || ''
    );

    const toggleEmail = () => {
      ifEmail.value = !ifEmail.value;
      rules.value = ifEmail.value ? 'email' : '';
    };

    return { args, ifEmail, toggleEmail, rules };
  },
  template: `
    <div>
      <BaseForm>
        <BaseFormControl v-bind="args" :rules="rules" />
        <p>Current validator: <code>'{{ rules }}'</code></p>
      </BaseForm>

      <button @click="toggleEmail" v-if="args.story === 'ChangeValidatorRuntime'">
        Переключить email
      </button>
    </div>
  `,
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
  className: 'some-class',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="firstName" label="Имя" class-name="some-class">
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
import { formSettings } from '@cdek-ui-kit/vue';

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

export const ChangeValidatorRuntime = Template.bind({});
ChangeValidatorRuntime.args = {
  label: 'Имя',
  name: 'firstName',
  story: 'ChangeValidatorRuntime',
};
ChangeValidatorRuntime.parameters = {
  docs: {
    source: {
      code: `
const ifEmail = ref(true);

const toggleEmail = () => {
  ifEmail.value = !ifEmail.value;
}

...

<CdekForm>
  <CdekFormControl name="firstName" label="Имя" :rules="ifEmail ? 'email' : ''">
</CdekForm>

<button @click="toggleEmail">Переключить email</button>
`,
    },
  },
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  name: 'email',
  rules: 'email',
};
Email.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="email" label="Email" rules="email">
</CdekForm>
`,
    },
  },
};

export const RequiredWithEmail = Template.bind({});
RequiredWithEmail.args = {
  label: 'Email',
  name: 'email',
  rules: 'required|email',
};
RequiredWithEmail.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="email" label="Email" rules="required|email">
</CdekForm>
`,
    },
  },
};

export const Regex = Template.bind({});
Regex.args = {
  label: 'Number',
  name: 'number',
  rules: {
    regex: /^([0-9]+)$/,
  },
};
Regex.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="number" label="Number" :rules="{ regex: /^([0-9]+)$/ }">
</CdekForm>
`,
    },
  },
};

export const RegexWithRequired = Template.bind({});
RegexWithRequired.args = {
  label: 'Number',
  name: 'number',
  rules: {
    required: true,
    regex: /^([0-9]+)$/,
  },
};
RegexWithRequired.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="number" label="Number" :rules="{ required: true, regex: /^([0-9]+)$/ }">
</CdekForm>
`,
    },
  },
};

export const RequiredCustomMessage = Template.bind({});
RequiredCustomMessage.args = {
  label: 'Имя',
  name: 'firstname',
  rules: {
    required: 'Введи имя, мм',
  },
};
RequiredCustomMessage.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="firstname" label="Имя" :rules="{ required: 'Введи имя, мм' }">
</CdekForm>
`,
    },
  },
};

let t = 0;
export const RequiredCustomMessageFunction = Template.bind({});
RequiredCustomMessageFunction.args = {
  label: 'Имя',
  name: 'firstname',
  rules: {
    required: () => `${t++} ошибка`,
  },
};
RequiredCustomMessageFunction.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl name="firstname" label="Имя" :rules="{ required: () => '' }">
</CdekForm>
`,
    },
  },
};

export const RegexWithCustomError = Template.bind({});
RegexWithCustomError.args = {
  label: 'Number',
  name: 'number',
  rules: {
    regex: { pattern: /^([0-9]+)$/, message: 'Только цифры' },
  },
};
RegexWithCustomError.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl
    name="number"
    label="Number"
    :rules="{ regex: { pattern: /../, message: '' } }"
  >
</CdekForm>
`,
    },
  },
};

export const WithoutError = Template.bind({});
WithoutError.args = {
  label: 'Name',
  name: 'name',
  rules: 'required',
  hideErrorMessage: true,
};
WithoutError.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl
    name="name"
    label="Name"
    rules="required"
    hide-error-message
  >
</CdekForm>
`,
    },
  },
};

export const InputTypeNumber = Template.bind({});
InputTypeNumber.args = {
  label: 'Цена',
  name: 'name',
  type: 'number',
  rules: 'required',
};
InputTypeNumber.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl
    name="name"
    label="Цена"
    type="number"
    rules="required"
  >
</CdekForm>
`,
    },
  },
};

export const DisabledAutocomplete = Template.bind({});
DisabledAutocomplete.args = {
  label: 'Город',
  name: 'city',
  initialValue: 1,
  items: [{ value: 1, title: 'Москва' }],
  type: 'autocomplete',
  disabled: true,
};
WithoutError.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl
    type="autocomplete"
    name="city"
    label="Город"
    :initial-value="1"
    :items="[{ value: 1, title: 'Москва' }]"
    disabled
  >
</CdekForm>
`,
    },
  },
};

const SlottedTemplate = (args) => ({
  components: { BaseForm, BaseFormControl, BaseSpinner },
  setup() {
    return { args };
  },
  template: `
    <div>
      <BaseForm>
        <BaseFormControl v-bind="args">
          <template #icons-right>
            <BaseSpinner />
          </template>
        </BaseFormControl>
      </BaseForm>
    </div>
  `,
});

export const CustomSlot = SlottedTemplate.bind({});

CustomSlot.args = {
  label: 'Город',
  name: 'city',
};

CustomSlot.parameters = {
  docs: {
    source: {
      code: `
<CdekForm>
  <CdekFormControl
    name="city"
    label="Город"
  >
</CdekForm>
`,
    },
  },
};
