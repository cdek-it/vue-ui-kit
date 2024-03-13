import BaseToaster from './BaseToaster.vue';
import WifiOffIcon from './svg/wifi-off.svg?component';

export default {
  title: 'Ui kit/CdekToaster',
  component: BaseToaster,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=1984%3A4894&t=rF3i0PpE4y6w29LG-4)',
      },
    },
  },
  argTypes: {
    type: {
      options: ['info', 'success', 'error'],
    },
  },
};

const Template = (args) => ({
  components: { BaseToaster },
  setup() {
    return { args };
  },
  template: `
    <BaseToaster v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Сообщение',
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekToaster title="Сообщение" />',
    },
  },
};

export const LongText = Template.bind({});
LongText.args = {
  title: 'Почему-то очень длинный заголовок',
  text: 'Слишком подробное описание сообщения и ещё чего-то, что здесь можно было и не описывать, но раз уж на то пошло, мы выложим текст целиком, посмотрим, что будет. Конец сообщения должен быть виден.',
};
LongText.parameters = {
  docs: {
    source: {
      code: '<CdekToaster title="Почему-то очень..." text="..." />',
    },
  },
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: 'Сообщение',
  withoutIcon: true,
};
NoIcon.parameters = {
  docs: {
    source: {
      code: '<CdekToaster title="Сообщение" withoutIcon />',
    },
  },
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: 'Сообщение',
  button: {
    text: 'Продолжить',
    action: () => {},
  },
};
WithButton.parameters = {
  docs: {
    source: {
      code: `<CdekToaster :button="{ text: 'Продолжить', action: () => {} }" />`,
    },
  },
};

export const WithButtonLoading = Template.bind({});
WithButtonLoading.args = {
  title: 'Сообщение',
  button: {
    text: 'Продолжить',
    action: () => {},
    loading: true,
  },
};
WithButtonLoading.parameters = {
  docs: {
    source: {
      code: `<CdekToaster :button="{ text: 'Продолжить', action: () => {}, loading: true }" />`,
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  title: 'Поступила оплата',
  text: 'Заказ № 33445145, на сумму 2400,45 ₽ оплачен отправителем',
  type: 'success',
};
Success.parameters = {
  docs: {
    source: {
      code: '<CdekToaster title="Поступила оплата" text="..." type="success" />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  title: 'Сообщение',
  text: 'Аннотация',
  type: 'error',
};
Error.parameters = {
  docs: {
    source: {
      code: '<CdekToaster title="Сообщение" text="Аннотация" type="error" />',
    },
  },
};

export const ErrorCustomIcon = Template.bind({});
ErrorCustomIcon.args = {
  title: 'Нет связи с интернетом',
  icon: WifiOffIcon,
  type: 'error',
};
ErrorCustomIcon.parameters = {
  docs: {
    source: {
      code: '<CdekToaster title="Нет связи..." :icon="WifiOffIcon" type="error" />',
    },
  },
};
