import { Template } from './settings';
import CdekInput from '../CdekInput.vue';

export default {
  title: 'Ui kit/CdekInput/Basic',
  component: CdekInput,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=1998%3A4714&t=G78h9IqBm7eEp4F9-4)',
      },
    },
    version: {
      major: '0',
      minor: '0',
      patch: '1',
    },
  },
};

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" />',
    },
  },
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Поиск',
};
Placeholder.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Поиск"/>',
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  label: 'Серия и номер паспорта',
};
Label.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .."/>',
    },
  },
};

export const LabelFilled = Template.bind({});
LabelFilled.args = {
  label: 'Серия и номер паспорта',
  story: 'LabelFilled',
};
LabelFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .."/>',
    },
  },
};

export const LabelWithPlaceholder = Template.bind({});
LabelWithPlaceholder.args = {
  label: 'Серия и номер паспорта',
  placeholder: '00 00 – 000 000',
};
LabelWithPlaceholder.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." placeholder="00.." />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  label: 'Серия и номер паспорта',
  validRes: 'Ошибка',
};
Error.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." valid-res="Ошибка"/>',
    },
  },
};

export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  label: 'Серия и номер паспорта',
  validRes: 'Ошибка',
  story: 'LabelFilled',
};
ErrorFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." valid-res="Ошибка"/>',
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
      code: '<CdekInput v-model="inputVal" label="Серия и .." disabled/>',
    },
  },
};

export const DisabledWithError = Template.bind({});
DisabledWithError.args = {
  label: 'Серия и номер паспорта',
  disabled: true,
  validRes: 'Ошибка',
};
DisabledWithError.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." disabled valid-res="Ошибка"/>',
    },
  },
};

export const DisabledFilled = Template.bind({});
DisabledFilled.args = {
  label: 'Серия и номер паспорта',
  disabled: true,
  story: 'LabelFilled',
};
DisabledFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." disabled />',
    },
  },
};

export const ReadonlyFilled = Template.bind({});
ReadonlyFilled.args = {
  label: 'Серия и номер паспорта',
  readonly: true,
  story: 'LabelFilled',
};
ReadonlyFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." readonly />',
    },
  },
};

export const ExtraAttrs = Template.bind({});
ExtraAttrs.args = {
  label: 'Введите больше 3 символов',
  maxlength: '3',
  tip: 'На компонент передан maxlength, он автоматически ставится на input',
};
ExtraAttrs.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Введ.." maxlength="3" />',
    },
  },
};

export const Clearable = Template.bind({});
Clearable.args = {
  label: 'Серия и номер паспорта',
  clearable: true,
};
Clearable.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия.." clearable />
`,
    },
  },
};
