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
  argTypes: {},
};

const Template = (args) => ({
  components: { CdekInput },
  setup() {
    return { args };
  },
  template: `
    <CdekInput />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  default: '',
  label: 'Серия и номер паспорта',
  tip: 'Пояснение или помощь',
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekInput /',
    },
  },
};
