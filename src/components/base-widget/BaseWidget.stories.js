import BaseWidget from './BaseWidget.vue';
import './BaseWidget.stories.css';

export default {
  title: 'Ui kit/CdekWidget',
  component: BaseWidget,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=1983%3A4081&t=z1QNDvjqjFqqVZE2-0)',
      },
    },
  },
};

const Template = (args) => ({
  components: { BaseWidget },
  setup() {
    return { args };
  },
  template: `
    <BaseWidget v-bind="args">
      <template #header v-if="args.story === 'WithCustomHeader'">
        <i>Я</i> кастомный
      </template>

      ${args.default || ''}

      <input v-if="args.story === 'Disabled'" />
    </BaseWidget>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  default: 'Контент',
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekWidget>Контент</CdekWidget>',
    },
  },
};

export const WithHeadline = Template.bind({});
WithHeadline.args = {
  headline: 'Название',
  default: 'Контент',
};
WithHeadline.parameters = {
  docs: {
    source: {
      code: '<CdekWidget headline="Название">Контент</CdekWidget>',
    },
  },
};

export const WithHeadlineMobile = Template.bind({});
WithHeadlineMobile.args = {
  headline: 'Название',
  default: 'Контент',
};
WithHeadlineMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  docs: {
    source: {
      code: '<CdekWidget headline="Название">Контент</CdekWidget>',
    },
  },
};

export const WithoutPaddings = Template.bind({});
WithoutPaddings.args = {
  headline: 'Название',
  default: 'Контент',
  withoutPaddings: true,
};
WithoutPaddings.parameters = {
  docs: {
    source: {
      code: '<CdekWidget headline="Название" without-paddings>Контент</CdekWidget>',
    },
  },
};

export const WithCustomHeader = Template.bind({});
WithCustomHeader.args = {
  default: 'Контент',
  story: 'WithCustomHeader',
};
WithCustomHeader.parameters = {
  docs: {
    source: {
      code: `
<CdekWidget>
  <template #header>
    <i>Я</i> кастомный
  </template>

  Контент
</CdekWidget>
`,
    },
  },
};

export const WithSpinner = Template.bind({});
WithSpinner.args = {
  headline: 'Название',
  default: 'Контент',
  loading: true,
};
WithSpinner.parameters = {
  docs: {
    source: {
      code: `
<CdekWidget headline="Название" loading>
  Контент
</CdekWidget>
`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  headline: 'Название',
  disabled: true,
  story: 'Disabled',
};
Disabled.parameters = {
  docs: {
    source: {
      code: `
<CdekWidget headline="Название" disabled>
  <input />
</CdekWidget>
`,
    },
  },
};
