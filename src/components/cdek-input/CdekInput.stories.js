import { ref } from 'vue';
import CdekInput from './CdekInput.vue';

export default {
  title: 'Ui kit/CdekInput',
  component: CdekInput,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=1998%3A4714&t=G78h9IqBm7eEp4F9-4)',
      },
    },
  },
};

const Template = (args) => ({
  components: { CdekInput },
  setup() {
    const inputVal = ref('');

    return { args, inputVal };
  },
  template: `
    <CdekInput v-bind="args" v-model="inputVal" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Серия и номер паспорта',
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="modelValue"/>',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Серия и номер паспорта',
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="modelValue" disabled/>',
    },
  },
};

export const DisabledFilled = Template.bind({});
DisabledFilled.args = {
  label: 'Серия и номер паспорта',
  modelValue: '1234 567891',
  disabled: true,
};
DisabledFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="1234 567891" disabled/>',
    },
  },
};

export const Readonly = Template.bind({});
Readonly.args = {
  label: 'Серия и номер паспорта',
  modelValue: '1234 567891',
  readonly: true,
};
Readonly.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="1234 567891" readonly/>',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  label: 'Серия и номер паспорта',
  errorMessage: 'Ошибка',
};
Error.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="modelValue" errorMessage="Ошибка"/>',
    },
  },
};

export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  label: 'Серия и номер паспорта',
  modelValue: '1234 567891',
  errorMessage: 'Ошибка',
};
ErrorFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="1234 567891" errorMessage="Ошибка"/>',
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  label: 'Серия и номер паспорта',
  small: true,
};
Small.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="modelValue" small />',
    },
  },
};

export const SmallError = Template.bind({});
SmallError.args = {
  label: 'Серия и номер паспорта',
  small: true,
  errorMessage: 'Ошибка',
};
SmallError.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="modelValue" errorMessage="Ошибка" small />',
    },
  },
};

export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
  label: 'Серия и номер паспорта',
  small: true,
  disabled: true,
};
SmallDisabled.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="modelValue" disabled />',
    },
  },
};

export const SmallDisabledFilled = Template.bind({});
SmallDisabledFilled.args = {
  label: 'Серия и номер паспорта',
  modelValue: '1234 567891',
  small: true,
  disabled: true,
};
SmallDisabledFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="1234 567891" disabled />',
    },
  },
};

export const SmallReadonly = Template.bind({});
SmallReadonly.args = {
  label: 'Серия и номер паспорта',
  modelValue: '1234 567891',
  small: true,
  readonly: true,
};
SmallReadonly.parameters = {
  docs: {
    source: {
      code: '<CdekInput label="Серия и номер паспорта" v-model="1234 567891" readonly />',
    },
  },
};
