import settings, { Template } from './settings';

export default {
  ...settings,
  title: 'Ui kit/CdekInputBasic',
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
  error: 'Ошибка',
};
Error.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." error="Ошибка"/>',
    },
  },
};

export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  label: 'Серия и номер паспорта',
  error: 'Ошибка',
  story: 'LabelFilled',
};
ErrorFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." error="Ошибка"/>',
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
  error: 'Ошибка',
};
DisabledWithError.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." disabled error="Ошибка"/>',
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
