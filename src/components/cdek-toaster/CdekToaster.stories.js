import CdekToast from './CdekToaster.vue';
import CheckInCircleIcon from './svg/check-in-circle.svg?component';
import WarningIcon from './svg/warning.svg?component';
import InfoIcon from './svg/info.svg?component';
import WifiOffIcon from './svg/wifi-off.svg?component';

export default {
  title: 'Ui kit/CdekToast',
  component: CdekToast,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=1984%3A4894&t=rF3i0PpE4y6w29LG-4)',
      },
    },
    backgrounds: { default: 'stripped' },
  },
  argTypes: {
    message: {},
  },
};

const Template = (args) => ({
  components: { CdekToast },
  setup() {
    return { args };
  },
  template: `
    <CdekToast v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  message: {
    content: {
      title: 'Сообщение',
      text: 'Аннотация',
    },
    icon: InfoIcon,
    type: 'info',
    button: {
      text: 'CLICK',
      action: () => console.log('CLICK'),
    },
  },
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekToast message={...} />',
    },
  },
};

export const PrimaryLongText = Template.bind({});
PrimaryLongText.args = {
  message: {
    content: {
      title: 'Почему-то очень длинный заголовок',
      text: 'Слишком подробное описание сообщения и ещё чего-то, что здесь можно было и не описывать, но раз уж на то пошло, мы выложим текст целиком, посмотрим, что будет. Конец сообщения должен быть виден.',
    },
    icon: InfoIcon,
    type: 'info',
    button: {
      text: 'CLICK',
      action: () => console.log('CLICK'),
    },
  },
};
PrimaryLongText.parameters = {
  docs: {
    source: {
      code: '<CdekToast message={...} />',
    },
  },
};

export const PrimaryNoIcon = Template.bind({});
PrimaryNoIcon.args = {
  message: {
    content: {
      title: 'Сообщение',
      text: 'Аннотация',
    },
    type: 'info',
    button: {
      text: 'CLICK',
      action: () => console.log('CLICK'),
    },
  },
};
PrimaryNoIcon.parameters = {
  docs: {
    source: {
      code: '<CdekToast message={...} />',
    },
  },
};

export const PrimaryNoButton = Template.bind({});
PrimaryNoButton.args = {
  message: {
    content: {
      title: 'Сообщение',
      text: 'Аннотация',
    },
    icon: InfoIcon,
    type: 'info',
  },
};
PrimaryNoButton.parameters = {
  docs: {
    source: {
      code: '<CdekToast message={...} />',
    },
  },
};

export const PrimaryOnlyMessageTitle = Template.bind({});
PrimaryOnlyMessageTitle.args = {
  message: {
    content: {
      title: 'Синхронизация завершена',
    },
    icon: CheckInCircleIcon,
    type: 'info',
    button: {
      text: 'посмотреть обновления',
      action: () => console.log('Обновления посмотрены'),
    },
  },
};
PrimaryOnlyMessageTitle.parameters = {
  docs: {
    source: {
      code: '<CdekToast message={...} />',
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  message: {
    content: {
      title: 'Поступила оплата',
      text: 'Заказ № 33445145, на сумму 2400,45 ₽ оплачен отправителем',
    },
    icon: CheckInCircleIcon,
    type: 'success',
    button: {
      text: 'открыть заказ',
      action: () => console.log('Заказ открыт'),
    },
  },
};
Success.parameters = {
  docs: {
    source: {
      code: '<CdekToast message={...} />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  message: {
    content: {
      title: 'Сообщение',
      text: 'Аннотация',
    },
    icon: WarningIcon,
    type: 'error',
  },
};
Error.parameters = {
  docs: {
    source: {
      code: '<CdekToast message={...} />',
    },
  },
};

export const ErrorNoWifi = Template.bind({});
ErrorNoWifi.args = {
  message: {
    content: {
      title: 'Нет связи с интернетом',
    },
    icon: WifiOffIcon,
    type: 'error',
  },
};
ErrorNoWifi.parameters = {
  docs: {
    source: {
      code: '<CdekToast message={...} />',
    },
  },
};
