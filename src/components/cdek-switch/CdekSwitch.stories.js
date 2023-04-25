import CdekSwitch from './CdekSwitch.vue';

export default {
  title: 'Ui kit/CdekSwitch',
  component: CdekSwitch,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2050-6123&t=wfKjh1NP9rExUFRb-0)',
      },
    },
    version: {
      major: '0',
      minor: '0',
      patch: '1',
    },
  },
};

const Template = (args) => ({
  components: { CdekSwitch },
  setup() {
    return { args };
  },
  template: `
    <CdekSwitch v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekSwitch />',
    },
  },
};
