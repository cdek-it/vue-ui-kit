import CdekSpinner from './CdekSpinner.vue';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/CdekSpinner',
  component: CdekSpinner,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2182%3A8032&t=z1QNDvjqjFqqVZE2-0)',
      },
    },
    version: getVersion('0.0.1'),
  },
  argTypes: {
    color: {
      options: ['green', 'white'],
    },
    size: {
      options: ['small', 'medium', 'big'],
    },
  },
};

const Template = (args) => ({
  components: { CdekSpinner },
  setup() {
    return { args };
  },
  template: `<CdekSpinner v-bind="args"></CdekSpinner>`,
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekSpinner />',
    },
  },
};

export const WhiteSpinner = Template.bind({});
WhiteSpinner.args = {
  color: 'white',
};
WhiteSpinner.parameters = {
  docs: {
    source: {
      code: '<CdekSpinner color="white"></CdekSpinner>',
    },
  },
  backgrounds: { default: 'green' },
};

export const CustomColorSpinner = Template.bind({});
CustomColorSpinner.args = {
  color: '#E40029',
};
CustomColorSpinner.parameters = {
  docs: {
    source: {
      code: '<CdekSpinner color="#E40029"></CdekSpinner>',
    },
  },
};
CustomColorSpinner.argTypes = {
  color: {
    control: 'color',
  },
};

export const MediumSpinner = Template.bind({});
MediumSpinner.args = {
  size: 'medium',
};
MediumSpinner.parameters = {
  docs: {
    source: {
      code: '<CdekSpinner size="medium"></CdekSpinner>',
    },
  },
};

export const BigSpinner = Template.bind({});
BigSpinner.args = {
  size: 'big',
};
BigSpinner.parameters = {
  docs: {
    source: {
      code: '<CdekSpinner size="big"></CdekSpinner>',
    },
  },
};

export const CustomSizeSpinner = Template.bind({});
CustomSizeSpinner.args = {
  size: 66,
};
CustomSizeSpinner.parameters = {
  docs: {
    source: {
      code: '<CdekSpinner :size="66"></CdekSpinner>',
    },
  },
};
CustomSizeSpinner.argTypes = {
  size: {
    control: 'number',
  },
};
