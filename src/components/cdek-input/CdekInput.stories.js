import { ref } from 'vue';
import CdekInput from './CdekInput.vue';
import SearchIcon from './svg/search.svg?component';
import EyeIcon from './svg/eye.svg?component';

import './CdekInput.stories.scss';

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
  argTypes: {
    story: {
      table: {
        disable: true,
      },
    },
    tipColor: {
      options: ['tertiary', 'attention', 'error', 'success'],
      type: 'select',
    },
    tipIcon: {
      options: ['info', 'alert', 'ban', 'circle'],
      type: 'select',
    },
  },
};

const Template = (args) => ({
  components: { CdekInput, SearchIcon, EyeIcon },
  setup() {
    const inputVal = ref(
      ['LabelFilled', 'RightIconDisabled'].includes(args.story)
        ? '34 45 – 987 123'
        : ''
    );

    return { args, inputVal };
  },
  template: `
    <div class="input-story">
      <CdekInput v-bind="args" v-model="inputVal">
        <template #tip="{ alert, info, ban, circle }">
          <component v-if="args.story === 'TipIcon'" :is="${args.tipIcon}" />
          <span :class="args.tipColor">{{ args.tip }}</span>
        </template>

        <template #icons-left v-if="args.story === 'LeftIcon'">
          <SearchIcon />
        </template>

        <template #icons-right v-if="['RightIconDisabled', 'RightIcon'].includes(args.story)">
          <button @click="test"><EyeIcon /></button>
        </template>
      </CdekInput>
    </div>
  `,
});

// TEST: prop modelValue должен лежать внутри инпута
// TEST: при изменении значения в инпуте, должно эмиттиться событие update:modelValue
export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" />',
    },
  },
};

// TEST: при передаче placeholder, он должен отобразиться на инпуте
// TEST: при передаче placeholder, он не должен быть на корневом div компонента
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

// TEST: если передан label он должен отобразиться
// TEST: если label не передан, то div.cdek-input__placeholder не должен рендериться
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

// TEST: Если передан label и есть значение, то должен добавиться класс cdek-input__placeholder_filled
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
