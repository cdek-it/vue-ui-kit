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
};

const Template = (args) => ({
  components: { CdekInput },
  setup() {
    const inputVal = ref('');

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
