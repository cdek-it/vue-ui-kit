import CdekAlert from './CdekAlert.vue';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/CdekAlert',
  component: CdekAlert,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2132%3A6344&mode=dev)',
      },
    },
    version: getVersion('0.3.0'),
  },
  argTypes: {
    default: { control: 'text' },
    header: { control: 'text' },
    type: {
      options: ['positive', 'negative', 'attention', 'info'],
    },
    style: {
      options: ['surface', 'line'],
    },
  },
};

const Template = (args) => ({
  components: { CdekAlert },
  setup() {
    return { args };
  },
  template: `
    <CdekAlert v-bind="args">
      <template v-if="args.header" #header>{{ args.header }}</template>
      
      <template v-if="args.default">{{ args.default }}</template>
    </CdekAlert>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Заголовок',
  default: 'Описание. Рекомендовано не более двух строк полезного текста',
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<CdekAlert title="Заголовок">
  Описание. Рекомендовано не более двух строк полезного текста
</CdekAlert>
`,
    },
  },
};

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: 'Кастомный заголовок',
  default: 'Описание. Рекомендовано не более двух строк полезного текста',
};
CustomHeader.parameters = {
  docs: {
    source: {
      code: `
<CdekAlert>
  <template #header>Кастомный заголовок</template>

  Описание. Рекомендовано не более двух строк полезного текста
</CdekAlert>
`,
    },
  },
};

export const Positive = Template.bind({});
Positive.args = {
  title: 'Заголовок',
  default: 'Описание. Рекомендовано не более двух строк полезного текста',
  type: 'positive',
};
Positive.parameters = {
  docs: {
    source: {
      code: `
<CdekAlert title="Заголовок" type="positive">
  Описание. Рекомендовано не более двух строк полезного текста
</CdekAlert>
`,
    },
  },
};

export const Negative = Template.bind({});
Negative.args = {
  title: 'Заголовок',
  default: 'Описание. Рекомендовано не более двух строк полезного текста',
  type: 'negative',
};
Negative.parameters = {
  docs: {
    source: {
      code: `
<CdekAlert title="Заголовок" type="negative">
  Описание. Рекомендовано не более двух строк полезного текста
</CdekAlert>
`,
    },
  },
};

export const Info = Template.bind({});
Info.args = {
  title: 'Заголовок',
  default: 'Описание. Рекомендовано не более двух строк полезного текста',
  type: 'info',
};
Info.parameters = {
  docs: {
    source: {
      code: `
<CdekAlert title="Заголовок" type="info">
  Описание. Рекомендовано не более двух строк полезного текста
</CdekAlert>
`,
    },
  },
};

export const Line = Template.bind({});
Line.args = {
  title: 'Заголовок',
  default: 'Описание. Рекомендовано не более двух строк полезного текста',
  style: 'line',
};
Line.parameters = {
  docs: {
    source: {
      code: `
<CdekAlert title="Заголовок" style="line">
  Описание. Рекомендовано не более двух строк полезного текста
</CdekAlert>
`,
    },
  },
};
