import BaseButton from '../BaseButton.vue';

export default {
  title: 'Components/Button/Sizes',
  component: BaseButton,
  parameters: {
    docs: {
      description: {
        component: 'Кнопка предоставляет различные размеры для адаптации к разным контекстам использования.',
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

export const Small = Template.bind({});
Small.args = {
  label: 'Подтвердить',
  small: true,
};
Small.parameters = {
  docs: {
    description: {
      story: 'Маленький размер кнопки для компактных интерфейсов.',
    },
    source: {
      code: '<CdekButton small>Подтвердить</CdekButton>',
    },
  },
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'Подтвердить',
};
Normal.parameters = {
  docs: {
    description: {
      story: 'Стандартный размер кнопки.',
    },
    source: {
      code: '<CdekButton>Подтвердить</CdekButton>',
    },
  },
};
