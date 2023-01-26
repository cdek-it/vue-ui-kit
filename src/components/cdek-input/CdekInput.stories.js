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
    <CdekInput v-bind="args" v-model="inputVal" />
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
