import { Template } from './settings';
import CdekInput from '../CdekInput.vue';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/CdekInput/Slots',
  component: CdekInput,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=1998%3A4714&t=G78h9IqBm7eEp4F9-4)',
      },
    },
    version: getVersion('0.0.1'),
  },
};

export const Tip = Template.bind({});
Tip.args = {
  label: 'Серия и номер паспорта',
  tip: 'Пояснение или помощь',
};
Tip.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия и ..">
  <template #tip>Пояснение или помощь</template>
</CdekInput>
`,
    },
  },
};

export const ColoredTip = Template.bind({});
ColoredTip.argTypes = {
  tipColor: {
    options: ['tertiary', 'attention', 'error', 'success'],
    type: 'select',
  },
};
ColoredTip.args = {
  label: 'Серия и номер паспорта',
  tip: 'Пояснение или помощь',
  tipColor: 'tertiary',
};
ColoredTip.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия и ..">
  <template #tip>
    <span class="tertiary">Пояснение или помощь</span>
  </template>
</CdekInput>
`,
    },
  },
};

export const TipIcon = Template.bind({});
TipIcon.argTypes = {
  tipIcon: {
    options: ['info', 'alert', 'ban', 'circle'],
    type: 'select',
  },
};
TipIcon.args = {
  label: 'Серия и номер паспорта',
  tip: 'Пояснение или помощь',
  tipIcon: 'info',
  story: 'TipIcon',
};
TipIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия и ..">
  <template #tip="{ info }">
    <component :is="info" />
    <span>Пояснение или помощь</span>
  </template>
</CdekInput>
`,
    },
  },
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: 'Серия и номер паспорта',
  story: 'RightIcon',
};
RightIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия..">
  <template #icons-right>
    <!-- иконка должна быть размером 24x24 -->
    <button><EyeIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};

export const RightIconError = Template.bind({});
RightIconError.args = {
  label: 'Серия и номер паспорта',
  validRes: 'Ошибка',
  story: 'RightIcon',
};
RightIconError.parameters = {
  version: getVersion('0.1.0'),
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия.." valid-res="Ошибка">
  <template #icons-right>
    <!-- иконка должна быть размером 24x24 -->
    <button><EyeIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};

export const RightIconDisabled = Template.bind({});
RightIconDisabled.args = {
  label: 'Серия и номер паспорта',
  story: 'RightIconDisabled',
  disabled: true,
};
RightIconDisabled.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия.." disabled>
  <template #icons-right>
    <!-- иконка должна быть размером 24x24 -->
    <button><EyeIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};

export const RightIconReadonly = Template.bind({});
RightIconReadonly.args = {
  label: 'Серия и номер паспорта',
  story: 'RightIconDisabled',
  readonly: true,
};
RightIconReadonly.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия.." readonly>
  <template #icons-right>
    <!-- иконка должна быть размером 24x24 -->
    <button><EyeIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};

export const RightIconClearable = Template.bind({});
RightIconClearable.args = {
  label: 'Серия и номер паспорта',
  clearable: true,
  story: 'RightIcon',
};
RightIconClearable.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия.." clearable>
  <template #icons-right>
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
  class: 'input-small-with-icon',
};
SmallRightIconClearable.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия.." clearable class="input-small-with-icon">
  <template #icons-right>
    <!-- иконка должна быть размером 24x24 -->
    <button><EyeIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  story: 'LeftIcon',
  placeholder: 'Поиск',
};
LeftIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" placeholder="Поиск">
  <template #icons-left>
    <!-- иконка должна быть размером 24x24 -->
    <button><SearchIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};
