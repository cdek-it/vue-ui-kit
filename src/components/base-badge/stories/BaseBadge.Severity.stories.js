import BaseBadge from '../BaseBadge.vue';

export default {
  title: 'Components/Badge/Severity',
  component: BaseBadge,
  parameters: {
    docs: {
      description: {
        component: 'Severity определяет цвет бейджа для различных типов статусов: positive, negative, process, info, deactive, neutral.',
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

export const PositiveLight = Template.bind({});
PositiveLight.args = {
  text: 'Status',
  type: 'positive',
};
PositiveLight.parameters = {
  docs: {
    description: {
      story: 'Положительный статус (успех, завершено).',
    },
    source: {
      code: '<CdekBadge type="positive" text="Status" />',
    },
  },
};

export const NegativeLight = Template.bind({});
NegativeLight.args = {
  text: 'Status',
  type: 'negative',
};
NegativeLight.parameters = {
  docs: {
    description: {
      story: 'Отрицательный статус (ошибка, отклонено).',
    },
    source: {
      code: '<CdekBadge type="negative" text="Status" />',
    },
  },
};

export const ProcessLight = Template.bind({});
ProcessLight.args = {
  text: 'Status',
  type: 'process',
};
ProcessLight.parameters = {
  docs: {
    description: {
      story: 'Статус в процессе выполнения.',
    },
    source: {
      code: '<CdekBadge type="process" text="Status" />',
    },
  },
};

export const InfoLight = Template.bind({});
InfoLight.args = {
  text: 'Status',
  type: 'info',
};
InfoLight.parameters = {
  docs: {
    description: {
      story: 'Информационный статус.',
    },
    source: {
      code: '<CdekBadge type="info" text="Status" />',
    },
  },
};

export const DeactiveLight = Template.bind({});
DeactiveLight.args = {
  text: 'Status',
  type: 'deactive',
};
DeactiveLight.parameters = {
  docs: {
    description: {
      story: 'Неактивный статус.',
    },
    source: {
      code: '<CdekBadge type="deactive" text="Status" />',
    },
  },
};

export const NeutralLight = Template.bind({});
NeutralLight.args = {
  text: 'Status',
  type: 'neutral',
};
NeutralLight.parameters = {
  docs: {
    description: {
      story: 'Нейтральный статус.',
    },
    source: {
      code: '<CdekBadge type="neutral" text="Status" />',
    },
  },
};
