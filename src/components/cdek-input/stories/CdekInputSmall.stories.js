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
  label: 'Кол-во',
  small: true,
};
SmallWithLabel.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small />',
    },
  },
};

export const SmallError = Template.bind({});
SmallError.args = {
  label: 'Кол-во',
  small: true,
  validRes: 'Ошибка',
};
SmallError.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small valid-res="Ошибка" />',
    },
  },
};

export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
  label: 'Кол-во',
  small: true,
  disabled: true,
};
SmallDisabled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small disabled />',
    },
  },
};

export const SmallDisabledFilled = Template.bind({});
SmallDisabledFilled.args = {
  label: 'Кол-во',
  small: true,
  disabled: true,
  story: 'LabelFilled',
};
SmallDisabledFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small disabled />',
    },
  },
};

export const SmallReadonly = Template.bind({});
SmallReadonly.args = {
  label: 'Кол-во',
  small: true,
  readonly: true,
  story: 'LabelFilled',
};
SmallReadonly.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small readonly />',
    },
  },
};

export const SmallTip = Template.bind({});
SmallTip.args = {
  label: 'Кол-во',
  tip: 'Подсказка',
  small: true,
};
SmallTip.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" small label="Кол-во">
  <template #tip>Подсказка</template>
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
  label: 'Кол-во',
  story: 'RightIcon',
  small: true,
};
SmallRightIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" small label="Кол-во">
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
  label: 'Кол-во',
  clearable: true,
  story: 'RightIcon',
  small: true,
};
SmallRightIconClearable.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Кол-во" small clearable>
  <template #right-icon>
    <!-- иконка должна быть размером 24x24 -->
    <button><EyeIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};
