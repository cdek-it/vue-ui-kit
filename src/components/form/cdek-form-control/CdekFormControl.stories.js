import { ref } from 'vue';
import CdekFormControl from './CdekFormControl.vue';
import { CdekForm } from '../cdek-form';
import './CdekFormControl.stories.css';
import { formSettings } from '../index';

export default {
  title: 'Form/CdekFormControl',
  component: CdekFormControl,
  parameters: {
    version: {
      major: '0',
      minor: '0',
      patch: '1',
      postfix: 'alpha',
      style: {
        background: 'rgba(228, 0, 41, 0.05)',
        color: '#e40029',
      },
    },
  },
};

const Template = (args) => ({
  components: { CdekForm, CdekFormControl },
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
      <CdekForm>
        <CdekFormControl v-bind="args" :rules="rules" />
        <p>Current validator: <code>'{{ rules }}'</code></p>
      </CdekForm>

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
