import CdekWidget from './CdekWidget.vue';
import './CdekWidget.stories.css';

export default {
  title: 'Ui kit/CdekWidget',
  component: CdekWidget,
  parameters: {
    backgrounds: { default: 'grey' },
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
