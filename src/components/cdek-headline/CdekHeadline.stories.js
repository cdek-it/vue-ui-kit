import CdekHeadline from './CdekHeadline.vue';
import getVersion from '@/test/getVersion';

const options = ['1', '2', '3', '4', '5', '6', '7'];

export default {
  title: 'Ui kit/CdekHeadline',
  component: CdekHeadline,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2270%3A8959&t=gXcwZvHont2zfWC4-0)',
      },
    },
    version: getVersion('0.0.1'),
  },
  argTypes: {
    size: {
      options,
    },
    smSize: {
      options,
    },
    mdSize: {
      options,
    },
    lgSize: {
      options,
    },
    xlSize: {
      options,
    },
    xxlSize: {
      options,
    },
  },
};

const Template = (args) => ({
  components: { CdekHeadline },
  setup() {
    return { args };
  },
  template: `<CdekHeadline v-bind="args">Заголовок</CdekHeadline>`,
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekHeadline>Заголовок</CdekHeadline>',
    },
  },
};

export const Headline2 = Template.bind({});
Headline2.args = {
  size: '2',
};
Headline2.parameters = {
  docs: {
    source: {
      code: '<CdekHeadline size="2">Заголовок</CdekHeadline>',
    },
  },
};

export const Headline3 = Template.bind({});
Headline3.args = {
  size: '3',
};
Headline3.parameters = {
  docs: {
    source: {
      code: '<CdekHeadline size="3">Заголовок</CdekHeadline>',
    },
  },
};

export const Headline4 = Template.bind({});
Headline4.args = {
  size: '4',
};
Headline4.parameters = {
  docs: {
    source: {
      code: '<CdekHeadline size="4">Заголовок</CdekHeadline>',
    },
  },
};

export const Headline5 = Template.bind({});
Headline5.args = {
  size: '5',
};
Headline5.parameters = {
  docs: {
    source: {
      code: '<CdekHeadline size="5">Заголовок</CdekHeadline>',
    },
  },
};

export const Headline6 = Template.bind({});
Headline6.args = {
  size: '6',
};
Headline6.parameters = {
  docs: {
    source: {
      code: '<CdekHeadline size="6">Заголовок</CdekHeadline>',
    },
  },
};

export const Headline7 = Template.bind({});
Headline7.args = {
  size: '7',
};
Headline7.parameters = {
  docs: {
    source: {
      code: '<CdekHeadline size="7">Заголовок</CdekHeadline>',
    },
  },
};

export const HeadlineWithMediaQuery = Template.bind({});
HeadlineWithMediaQuery.args = {
  size: '4',
  mdSize: '1',
};
HeadlineWithMediaQuery.parameters = {
  docs: {
    source: {
      code: '<CdekHeadline size="4" md-size="1">Заголовок от размера экрана</CdekHeadline>',
    },
  },
};
