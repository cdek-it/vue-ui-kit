import CdekButton from './CdekButton.vue';
import CdekSpinner from '../cdek-spinner/CdekSpinner.vue';

export default {
  title: 'Ui kit/CdekButton',
  component: CdekButton,
  parameters: {
    backgrounds: { default: 'grey' },
  },
  argTypes: {
    theme: {
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    width: {
      options: ['auto', 'content'],
    },
    small: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  components: { CdekButton, CdekSpinner },
  setup() {
    return { args };
  },
  template: `<CdekButton v-bind="args">${args.default}</CdekButton>`,
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

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  theme: 'secondary',
  default: 'Подтвердить',
};
SecondaryButton.parameters = {
  docs: {
    source: {
      code: '<CdekButton theme="secondary">Подтвердить</CdekButton>',
    },
  },
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  theme: 'outline',
  default: 'Подтвердить',
};
OutlineButton.parameters = {
  docs: {
    source: {
      code: '<CdekButton theme="outline">Подтвердить</CdekButton>',
    },
  },
};

export const GhostButton = Template.bind({});
GhostButton.args = {
  theme: 'ghost',
  default: 'Подтвердить',
};
GhostButton.parameters = {
  docs: {
    source: {
      code: '<CdekButton theme="ghost">Подтвердить</CdekButton>',
    },
  },
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  default: 'Подтвердить',
};
DisabledButton.parameters = {
  docs: {
    source: {
      code: '<CdekButton disabled>Подтвердить</CdekButton>',
    },
  },
};

export const WidthContentButton = Template.bind({});
WidthContentButton.args = {
  width: 'content',
  default: 'Подтвердить',
};
WidthContentButton.parameters = {
  docs: {
    source: {
      code: '<CdekButton width="content">Подтвердить</CdekButton>',
    },
  },
};

export const ButtonLoading = Template.bind({});
ButtonLoading.args = {
  default: 'Подтвердить',
  loading: true,
};
ButtonLoading.parameters = {
  docs: {
    source: {
      code: '<CdekButton loading>Подтвердить</CdekButton>',
    },
  },
};

export const ButtonLoadingEmpty = Template.bind({});
ButtonLoadingEmpty.args = {
  loading: true,
};
ButtonLoadingEmpty.parameters = {
  docs: {
    source: {
      code: '<CdekButton loading />',
    },
  },
};
