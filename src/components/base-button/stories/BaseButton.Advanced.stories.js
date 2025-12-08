import BaseButton from '../BaseButton.vue';

export default {
  title: 'Components/Button/Advanced',
  component: BaseButton,
  parameters: {
    docs: {
      description: {
        component: 'Продвинутые варианты использования кнопки с различными настройками.',
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

export const WidthContent = Template.bind({});
WidthContent.args = {
  width: 'content',
  label: 'Подтвердить',
};
WidthContent.parameters = {
  docs: {
    description: {
      story: 'Кнопка с шириной по содержимому.',
    },
    source: {
      code: '<CdekButton width="content">Подтвердить</CdekButton>',
    },
  },
};

export const AsDiv = Template.bind({});
AsDiv.args = {
  label: 'Подтвердить',
  as: 'div',
};
AsDiv.parameters = {
  docs: {
    description: {
      story: 'Кнопка, отрендеренная как div элемент.',
    },
    source: {
      code: '<CdekButton as="div">Подтвердить</CdekButton>',
    },
  },
};

export const Toast = Template.bind({});
Toast.args = {
  theme: 'toaster',
  label: 'Подтвердить',
};
Toast.parameters = {
  docs: {
    description: {
      story: 'Специальная тема кнопки для использования в уведомлениях.',
    },
    source: {
      code: '<CdekButton theme="toaster">Подтвердить</CdekButton>',
    },
  },
  backgrounds: { default: 'green' },
};
