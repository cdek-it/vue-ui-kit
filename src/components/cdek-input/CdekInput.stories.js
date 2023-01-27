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
      ['PlaceholderFilled', 'RightIconDisabled'].includes(args.story)
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

        <template #icons-left v-if="false">
          <SearchIcon />
        </template>

        <template #icons-right v-if="['RightIconDisabled', 'RightIcon'].includes(args.story)">
          <button @click="test"><EyeIcon /></button>
        </template>
      </CdekInput>
    </div>
  `,
});

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
  placeholder: 'Серия и номер паспорта',
};
Placeholder.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Серия и .."/>',
    },
  },
};

export const PlaceholderFilled = Template.bind({});
PlaceholderFilled.args = {
  placeholder: 'Серия и номер паспорта',
  story: 'PlaceholderFilled',
};
PlaceholderFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Серия и .."/>',
    },
  },
};

export const Tip = Template.bind({});
Tip.args = {
  placeholder: 'Серия и номер паспорта',
  tip: 'Пояснение или помощь',
};
Tip.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" placeholder="Серия и ..">
  <template #tip>Пояснение или помощь</template>
</CdekInput>
`,
    },
  },
};

export const ColoredTip = Template.bind({});
ColoredTip.args = {
  placeholder: 'Серия и номер паспорта',
  tip: 'Пояснение или помощь',
  tipColor: 'tertiary',
};
ColoredTip.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" placeholder="Серия и ..">
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
  placeholder: 'Серия и номер паспорта',
  tip: 'Пояснение или помощь',
  tipIcon: 'info',
  story: 'TipIcon',
};
TipIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" placeholder="Серия и ..">
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
  placeholder: 'Серия и номер паспорта',
  error: 'Ошибка',
};
Error.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Серия и .." error="Ошибка"/>',
    },
  },
};

export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  placeholder: 'Серия и номер паспорта',
  error: 'Ошибка',
  story: 'PlaceholderFilled',
};
ErrorFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Серия и .." error="Ошибка"/>',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Серия и номер паспорта',
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Серия и .." disabled/>',
    },
  },
};

export const DisabledWithError = Template.bind({});
DisabledWithError.args = {
  placeholder: 'Серия и номер паспорта',
  disabled: true,
  error: 'Ошибка',
};
DisabledWithError.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Серия и .." disabled error="Ошибка"/>',
    },
  },
};

export const DisabledFilled = Template.bind({});
DisabledFilled.args = {
  placeholder: 'Серия и номер паспорта',
  disabled: true,
  story: 'PlaceholderFilled',
};
DisabledFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Серия и .." disabled />',
    },
  },
};

export const ReadonlyFilled = Template.bind({});
ReadonlyFilled.args = {
  placeholder: 'Серия и номер паспорта',
  readonly: true,
  story: 'PlaceholderFilled',
};
ReadonlyFilled.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Серия и .." readonly />',
    },
  },
};

export const ExtraAttrs = Template.bind({});
ExtraAttrs.args = {
  placeholder: 'Введите больше 3 символов',
  maxlength: '3',
  tip: 'На компонент передан maxlength, он автоматически ставится на input',
};
ExtraAttrs.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Введ.." maxlength="3" />',
    },
  },
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  placeholder: 'Серия и номер паспорта',
  story: 'RightIcon',
};
RightIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" placeholder="Серия..">
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
  placeholder: 'Серия и номер паспорта',
  error: 'Ошибка',
  story: 'RightIcon',
};
RightIconError.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" placeholder="Серия.." error="Ошибка">
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
  placeholder: 'Серия и номер паспорта',
  story: 'RightIconDisabled',
  disabled: true,
};
RightIconDisabled.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" placeholder="Серия.." disabled>
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
  placeholder: 'Серия и номер паспорта',
  story: 'RightIconDisabled',
  readonly: true,
};
RightIconReadonly.parameters = {
  docs: {
    source: {
      code: `
<CdekInput v-model="inputVal" placeholder="Серия.." readonly>
  <template #right-icon>
    <!-- иконка должна быть размером 24x24 -->
    <button><EyeIcon /></button>
  </template>
</CdekInput>
`,
    },
  },
};
