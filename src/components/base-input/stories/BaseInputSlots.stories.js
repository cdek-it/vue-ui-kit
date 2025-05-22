import { Template } from './settings';
import BaseInput from '../BaseInput.vue';

export default {
  title: 'Ui kit/CdekInput/Slots',
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

export const TipIconRTL = Template.bind({});
TipIconRTL.argTypes = {
  tipIcon: {
    options: ['info', 'alert', 'ban', 'circle'],
    type: 'select',
  },
};
TipIconRTL.args = {
  label: 'السلسلة ورقم الجواز',
  tip: 'توضيح أو مساعدة',
  tipIcon: 'info',
  story: 'TipIconRTL',
  rtl: true,
};
TipIconRTL.parameters = {
  docs: {
    source: {
      code: `
<div style="direction: rtl">
  <CdekInput v-model="inputVal" label="السلسلة ورقم الجواز">
    <template #tip="{ info }">
      <component :is="info" />
      <span>توضيح أو مساعدة</span>
    </template>
  </CdekInput>
</div>
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

export const RightIconRTL = Template.bind({});
RightIconRTL.args = {
  label: 'السلسلة ورقم الجواز',
  story: 'RightIconRTL',
  rtl: true,
};
RightIconRTL.parameters = {
  docs: {
    source: {
      code: `
<div style="direction: rtl">
  <CdekInput v-model="inputVal" label="السلسلة ورقم الجواز">
    <template #icons-right>
      <!-- иконка должна быть размером 24x24 -->
      <button><EyeIcon /></button>
    </template>
  </CdekInput>
</div>
`,
    },
  },
};

export const RightIconError = Template.bind({});
RightIconError.args = {
  label: 'Серия и номер паспорта',
  validRes: 'Ошибка',
  story: 'RightIconError',
};
RightIconError.parameters = {
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
  story: 'RightIconReadonly',
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
  story: 'RightIconClearable',
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

export const RightIconClearableRTL = Template.bind({});
RightIconClearableRTL.args = {
  label: 'السلسلة ورقم الجواز',
  clearable: true,
  story: 'RightIconClearableRTL',
  rtl: true,
};
RightIconClearableRTL.parameters = {
  docs: {
    source: {
      code: `
<div style="direction: rtl">
  <CdekInput v-model="inputVal" label="السلسلة ورقم الجواز" clearable>
    <template #icons-right>
      <!-- иконка должна быть размером 24x24 -->
      <button><EyeIcon /></button>
    </template>
  </CdekInput>
</div>
`,
    },
  },
};

export const SmallRightIconClearable = Template.bind({});
SmallRightIconClearable.args = {
  label: 'Серия и номер паспорта',
  clearable: true,
  story: 'SmallRightIconClearable',
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

export const LeftIconRTL = Template.bind({});
LeftIconRTL.args = {
  story: 'LeftIconRTL',
  placeholder: 'بحث',
  rtl: true,
};
LeftIconRTL.parameters = {
  docs: {
    source: {
      code: `
<div style="direction: rtl"
  <CdekInput v-model="inputVal" placeholder="بحث">
    <template #icons-left>
      <!-- иконка должна быть размером 24x24 -->
      <button><SearchIcon /></button>
    </template>
  </CdekInput>
</div>
`,
    },
  },
};
