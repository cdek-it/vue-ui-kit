import { Template } from './settings';
import BaseInput from '../BaseInput.vue';

export default {
  title: 'Ui kit/CdekInput/Basic',
  component: BaseInput,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=1998%3A4714&t=G78h9IqBm7eEp4F9-4)',
      },
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

export const PrimaryRTL = Template.bind({});
PrimaryRTL.args = {
  rtl: true,
};
PrimaryRTL.parameters = {
  docs: {
    source: {
      code: `
<div style="direction: rtl">
  <CdekInput v-model="inputVal" />
</div>
`,
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
      code: '<CdekInput v-model="inputVal" placeholder="Поиск" />',
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
      code: '<CdekInput v-model="inputVal" label="Серия и .." />',
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
      code: '<CdekInput v-model="inputVal" label="Серия и .." />',
    },
  },
};

export const LabelFilledRTL = Template.bind({});
LabelFilledRTL.args = {
  label: 'السلسلة ورقم الجواز"',
  story: 'LabelFilledRTL',
  rtl: true,
};
LabelFilledRTL.parameters = {
  docs: {
    source: {
      code: `
<div style="direction: rtl">
  <CdekInput v-model="inputVal" label="السلسلة ورقم الجواز" />
</div>
`,
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
      code: '<CdekInput v-model="inputVal" label="Серия и .." valid-res="Ошибка" />',
    },
  },
};

export const ErrorWithoutMessage = Template.bind({});
ErrorWithoutMessage.args = {
  label: 'Серия и номер паспорта',
  validRes: 'Ошибка',
  hideErrorMessage: true,
};
ErrorWithoutMessage.parameters = {
  docs: {
    source: {
      code: `
<CdekInput
  v-model="inputVal"
  label="Серия и .."
  valid-res="Ошибка"
  hide-error-message
/>
`,
    },
  },
};

export const ErrorWithoutMessageWithTip = Template.bind({});
ErrorWithoutMessageWithTip.args = {
  label: 'Серия и номер паспорта',
  validRes: 'Ошибка',
  hideErrorMessage: true,
  tip: 'Подсказка',
};
ErrorWithoutMessageWithTip.parameters = {
  docs: {
    source: {
      code: `
<CdekInput
  v-model="inputVal"
  label="Серия и .."
  valid-res="Ошибка"
  hide-error-message
>
  <template #tip>
    Подсказка
  </template>
</CdekInput>
`,
    },
  },
};

export const ShowErrorIfExists = Template.bind({});
ShowErrorIfExists.args = {
  label: 'Серия и номер паспорта',
  showErrorIfExists: true,
  story: 'ShowErrorIfExists',
};
ShowErrorIfExists.parameters = {
  docs: {
    source: {
      code: `
<CdekInput
  v-model="inputVal"
  label="Серия и .."
  show-error-if-exist
/>
`,
    },
  },
};

export const ShowErrorIfExistsWithTip = Template.bind({});
ShowErrorIfExistsWithTip.args = {
  label: 'Серия и номер паспорта',
  showErrorIfExists: true,
  story: 'ShowErrorIfExists',
  tip: 'Подсказка',
};
ShowErrorIfExistsWithTip.parameters = {
  docs: {
    source: {
      code: `
<CdekInput
  v-model="inputVal"
  label="Серия и .."
  show-error-if-exist
>
  <template #tip>
    Подсказка
  </template>
</CdekInput>
`,
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
      code: '<CdekInput v-model="inputVal" label="Серия и .." valid-res="Ошибка" />',
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
      code: '<CdekInput v-model="inputVal" label="Серия и .." disabled />',
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
      code: '<CdekInput v-model="inputVal" label="Серия и .." disabled valid-res="Ошибка" />',
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

export const SmallWidth = Template.bind({});
SmallWidth.args = {
  class: 'input-small-width-story',
};
SmallWidth.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" class="input-small-width-story" />
`,
    },
  },
};

export const ClearableFocus = Template.bind({});
ClearableFocus.args = {
  label: 'Серия и номер паспорта',
  clearable: true,
  story: 'ClearableFocus',
};
ClearableFocus.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия.." clearable />
`,
    },
  },
};

export const HtmlError = Template.bind({});
HtmlError.args = {
  class: 'input-html-error',
  label: 'Серия и номер паспорта',
  validRes:
    '<p>Накладные компании СДЭК длиной от 6 до 10 цифр.</p><p>Если Ваш номер не соответствует данному формату, обратитесь, пожалуйста, в магазин за уточнением верного номера.</p>',
};
HtmlError.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия и .." valid-res="<p>Накладные компании СДЭК д..." />
`,
    },
  },
};
