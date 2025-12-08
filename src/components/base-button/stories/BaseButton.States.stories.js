import BaseButton from '../BaseButton.vue';

export default {
  title: 'Components/Button/States',
  component: BaseButton,
  parameters: {
    docs: {
      description: {
        component: 'Различные состояния кнопки: отключенная, загрузка и другие.',
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Подтвердить',
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'Отключенная кнопка не может быть нажата и не реагирует на взаимодействие.',
    },
    source: {
      code: '<CdekButton disabled>Подтвердить</CdekButton>',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Подтвердить',
  loading: true,
};
Loading.parameters = {
  docs: {
    description: {
      story: 'Кнопка в состоянии загрузки показывает спиннер вместо содержимого.',
    },
    source: {
      code: '<CdekButton loading>Подтвердить</CdekButton>',
    },
  },
};

export const LoadingWithContent = Template.bind({});
LoadingWithContent.args = {
  spinnerBefore: true,
  loading: true,
  label: 'Подтвердить',
};
LoadingWithContent.parameters = {
  docs: {
    description: {
      story: 'Кнопка в состоянии загрузки со спиннером перед текстом.',
    },
    source: {
      code: '<CdekButton loading spinner-before>Подтвердить</CdekButton>',
    },
  },
};
