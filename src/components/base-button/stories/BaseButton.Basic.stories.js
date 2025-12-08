import BaseButton from '../BaseButton.vue';

export default {
  title: 'Components/Button/Basic',
  component: BaseButton,
  parameters: {
    docs: {
      description: {
        component: 'Базовое использование кнопки с различными вариантами текста и состояний.',
      },
    },
  },
};

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: '<BaseButton v-bind="args">{{ args.label }}</BaseButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Подтвердить',
};
Primary.parameters = {
  docs: {
    description: {
      story: 'Основная кнопка с темой по умолчанию.',
    },
    source: {
      code: '<CdekButton>Подтвердить</CdekButton>',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  label: 'Подтвердить',
};
Secondary.parameters = {
  docs: {
    description: {
      story: 'Вторичная кнопка для менее важных действий.',
    },
    source: {
      code: '<CdekButton theme="secondary">Подтвердить</CdekButton>',
    },
  },
};

export const Outline = Template.bind({});
Outline.args = {
  theme: 'outline',
  label: 'Подтвердить',
};
Outline.parameters = {
  docs: {
    description: {
      story: 'Кнопка с контуром без заливки фона.',
    },
    source: {
      code: '<CdekButton theme="outline">Подтвердить</CdekButton>',
    },
  },
};

export const Ghost = Template.bind({});
Ghost.args = {
  theme: 'ghost',
  label: 'Подтвердить',
};
Ghost.parameters = {
  docs: {
    description: {
      story: 'Прозрачная кнопка для минималистичного дизайна.',
    },
    source: {
      code: '<CdekButton theme="ghost">Подтвердить</CdekButton>',
    },
  },
};
