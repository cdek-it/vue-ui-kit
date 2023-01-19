import CdekWidget from './CdekWidget.vue';
import './CdekWidget.stories.css';

export default {
  title: 'Ui kit/CdekWidget',
  component: CdekWidget,
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
  components: { CdekWidget },
  setup() {
    return { args };
  },
  template: `<CdekWidget v-bind="args">${args.default}</CdekWidget>`,
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
