import CdekBadge from './CdekBadge.vue';

export default {
  title: 'Ui kit/CdekBadge',
  component: CdekBadge,
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info', 'disabled', 'neutral'],
    },
    variant: {
      options: ['light', 'dark'],
    },
  },
};

const Template = (args) => ({
  components: { CdekBadge },
  setup() {
    return { args };
  },
  template: `
    <CdekBadge v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  text: 'Status',
};
Default.parameters = {
  docs: {
    source: {
      code: '<CdekBadge />',
    },
  },
};

export const SuccessLight = Template.bind({});
SuccessLight.args = {
  text: 'Status',
  variant: 'light',
  type: 'success',
};
SuccessLight.parameters = {
  docs: {
    source: {
      code: '<CdekBadge variant="light" type="success" />',
    },
  },
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  text: 'Status',
  variant: 'dark',
  type: 'error',
};
ErrorDark.parameters = {
  docs: {
    source: {
      code: '<CdekBadge variant="dark" type="error" />',
    },
  },
};
