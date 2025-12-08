import BaseBadge from '../BaseBadge.vue';

export default {
  title: 'Components/Badge/Variants',
  component: BaseBadge,
  parameters: {
    docs: {
      description: {
        component: 'Бейджи доступны в светлом (light) и темном (dark) вариантах.',
      },
    },
  },
};

const Template = (args) => ({
  components: { BaseBadge },
  setup() {
    return { args };
  },
  template: '<BaseBadge v-bind="args" />',
});

export const LightVariant = Template.bind({});
LightVariant.args = {
  text: 'Status',
  variant: 'light',
  type: 'positive',
};
LightVariant.parameters = {
  docs: {
    description: {
      story: 'Светлый вариант бейджа (по умолчанию).',
    },
    source: {
      code: '<CdekBadge variant="light" type="positive" text="Status" />',
    },
  },
};

export const DarkVariant = Template.bind({});
DarkVariant.args = {
  text: 'Status',
  variant: 'dark',
  type: 'negative',
};
DarkVariant.parameters = {
  docs: {
    description: {
      story: 'Темный вариант бейджа для использования на светлом фоне.',
    },
    source: {
      code: '<CdekBadge variant="dark" type="negative" text="Status" />',
    },
  },
};
