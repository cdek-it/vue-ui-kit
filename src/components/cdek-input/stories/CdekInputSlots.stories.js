import settings, { Template } from './settings';

export default {
  ...settings,
  title: 'Ui kit/CdekInputSlots',
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
  <template #right-icon>
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
  error: 'Ошибка',
  story: 'RightIcon',
};
RightIconError.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" label="Серия.." error="Ошибка">
  <template #right-icon>
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
  <template #right-icon>
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
  <template #right-icon>
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
  <template #left-icon>
    <!-- иконка должна быть размером 24x24 -->
    <button><SearchIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};
