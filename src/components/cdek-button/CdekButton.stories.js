import CdekButton from './BaseButton.vue';
import ArrowRightIcon from './svg/arrow-right.svg?component';
import CheckIcon from './svg/check.svg?component';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/CdekButton',
  component: CdekButton,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=1984%3A4274&t=z1QNDvjqjFqqVZE2-0)',
      },
    },
    version: getVersion('0.0.1'),
  },
  argTypes: {
    theme: {
      options: ['primary', 'secondary', 'outline', 'ghost', 'toaster'],
    },
    width: {
      options: ['auto', 'content'],
    },
  },
};

const Template = (args) => ({
  components: { CdekButton, ArrowRightIcon, CheckIcon },
  setup() {
    return { args };
  },
  template: `
    <CdekButton v-bind="args">
      <CheckIcon v-if="args.story === 'IconBefore'" />
      ${args.default}
      <ArrowRightIcon v-if="args.story === 'IconAfter'" />
    </CdekButton>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  default: 'Подтвердить',
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekButton>Подтвердить</CdekButton>',
    },
  },
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  default: 'Подтвердить',
  small: true,
};
PrimarySmall.parameters = {
  docs: {
    source: {
      code: '<CdekButton small>Подтвердить</CdekButton>',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  default: 'Подтвердить',
};
Secondary.parameters = {
  docs: {
    source: {
      code: '<CdekButton theme="secondary">Подтвердить</CdekButton>',
    },
  },
};

export const Outline = Template.bind({});
Outline.args = {
  theme: 'outline',
  default: 'Подтвердить',
};
Outline.parameters = {
  docs: {
    source: {
      code: '<CdekButton theme="outline">Подтвердить</CdekButton>',
    },
  },
};

export const Ghost = Template.bind({});
Ghost.args = {
  theme: 'ghost',
  default: 'Подтвердить',
};
Ghost.parameters = {
  docs: {
    source: {
      code: '<CdekButton theme="ghost">Подтвердить</CdekButton>',
    },
  },
};

export const Toast = Template.bind({});
Toast.args = {
  theme: 'toaster',
  default: 'Подтвердить',
};
Toast.parameters = {
  docs: {
    source: {
      code: '<CdekButton theme="toaster">Подтвердить</CdekButton>',
    },
  },
  backgrounds: { default: 'green' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  default: 'Подтвердить',
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<CdekButton disabled>Подтвердить</CdekButton>',
    },
  },
};

export const WidthContent = Template.bind({});
WidthContent.args = {
  width: 'content',
  default: 'Подтвердить',
};
WidthContent.parameters = {
  docs: {
    source: {
      code: '<CdekButton width="content">Подтвердить</CdekButton>',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  default: 'Подтвердить',
  loading: true,
};
Loading.parameters = {
  docs: {
    source: {
      code: '<CdekButton loading>Подтвердить</CdekButton>',
    },
  },
};

export const LoadingWithContent = Template.bind({});
LoadingWithContent.args = {
  spinnerBefore: true,
  loading: true,
  default: 'Подтвердить',
};
LoadingWithContent.parameters = {
  docs: {
    source: {
      code: '<CdekButton loading spinner-before>Подтвердить</CdekButton>',
    },
  },
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  default: 'Подтвердить',
  story: 'IconBefore',
};
IconBefore.parameters = {
  docs: {
    source: {
      code: `
<CdekButton>
  <CheckIcon />
  Подтвердить
</CdekButton>
`,
    },
  },
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  default: 'Подтвердить',
  story: 'IconAfter',
};
IconAfter.parameters = {
  docs: {
    source: {
      code: `
<CdekButton>
  Подтвердить
  <ArrowRightIcon />
</CdekButton>
`,
    },
  },
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  default: '',
  icon: true,
  story: 'IconBefore',
  width: 'content',
};
IconAfter.parameters = {
  docs: {
    source: {
      code: `
<CdekButton icon width="content">
  <CheckIcon />
</CdekButton>
`,
    },
  },
};

export const AsDiv = Template.bind({});
AsDiv.args = {
  default: 'Подтвердить',
  as: 'div',
};
AsDiv.parameters = {
  docs: {
    source: {
      code: `
<CdekButton as="div">Подтвердить</CdekButton>
`,
    },
  },
};
