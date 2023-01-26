import { ref } from 'vue';
import CdekInput from './CdekInput.vue';

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
  components: { CdekInput },
  setup() {
    const inputVal = ref(
      args.story === 'PlaceholderFilled' ? '34 45 – 987 123' : ''
    );

    return { args, inputVal };
  },
  template: `
    <CdekInput v-bind="args" v-model="inputVal">
      <template #tip="{ alert, info, ban, circle }">
        <component v-if="args.story === 'TipIcon'" :is="${args.tipIcon}" />
        <span :class="args.tipColor">{{ args.tip }}</span>
      </template>
    </CdekInput>
  `,
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekInput v-model="inputVal"/>',
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
