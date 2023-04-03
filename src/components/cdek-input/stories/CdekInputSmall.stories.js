import { Template } from './settings';
import CdekInput from '../CdekInput.vue';

export default {
  title: 'Ui kit/CdekInput/Small',
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

export const Small = Template.bind({});
Small.args = {
  small: true,
};
Small.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" small />',
    },
  },
};

export const SmallWithLabel = Template.bind({});
SmallWithLabel.args = {
  label: 'Серия и номер паспорта',
  small: true,
};
SmallWithLabel.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." small />',
    },
  },
};

export const SmallError = Template.bind({});
SmallError.args = {
  label: 'Серия и номер паспорта',
  small: true,
  validRes: 'Ошибка',
};
SmallError.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." small valid-res="Ошибка" />',
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
      code: '<CdekInput v-model="inputVal" label="Серия и .." small disabled />',
    },
  },
};

export const SmallDisabledFilled = Template.bind({});
SmallDisabled.args = {
  label: 'Серия и номер паспорта',
  small: true,
  disabled: true,
  story: 'LabelFilled',
};
SmallDisabled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." small disabled />',
    },
  },
};

export const SmallReadonly = Template.bind({});
SmallReadonly.args = {
  label: 'Серия и номер паспорта',
  small: true,
  readonly: true,
  story: 'LabelFilled',
};
SmallReadonly.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и .." small readonly />',
    },
  },
};

export const SmallTip = Template.bind({});
SmallTip.args = {
  label: 'Серия и номер паспорта',
  tip: 'Пояснение или помощь',
  small: true,
};
SmallTip.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" small label="Серия и ..">
  <template #tip>Пояснение или помощь</template>
</CdekInput>
`,
    },
  },
};

export const SmallLeftIcon = Template.bind({});
SmallLeftIcon.args = {
  story: 'LeftIcon',
  placeholder: 'Поиск',
  small: true,
};
SmallLeftIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" small placeholder="Поиск">
  <template #left-icon>
    <!-- иконка должна быть размером 24x24 -->
    <button><SearchIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};

export const SmallRightIcon = Template.bind({});
SmallRightIcon.args = {
  label: 'Серия и номер паспорта',
  story: 'RightIcon',
  small: true,
};
SmallRightIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" small label="Серия..">
  <template #right-icon>
    <!-- иконка должна быть размером 24x24 -->
    <button><EyeIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};

export const SmallRightIconClearable = Template.bind({});
SmallRightIconClearable.args = {
  label: 'Серия и номер паспорта',
  clearable: true,
  story: 'RightIcon',
  small: true,
};
SmallRightIconClearable.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия.." small clearable>
  <template #right-icon>
    <!-- иконка должна быть размером 24x24 -->
    <button><EyeIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};
