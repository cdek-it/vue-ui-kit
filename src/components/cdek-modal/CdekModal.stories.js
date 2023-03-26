import CdekModal from './CdekModal.vue';
import { useModalService } from './services/ModalService';
import CdekButton from '../cdek-button/CdekButton.vue';
import CdekConfirm from './CdekConfirm.vue';

export default {
  title: 'CdekModal',
  component: CdekModal,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=3039-18607&t=Ljb6anDLwIifZ0zN-4)',
      },
    },
  },
};

const Template = (args) => ({
  components: { CdekModal, CdekButton, CdekConfirm },
  setup() {
    const modalService = useModalService();

    const onCancel = () => {
      modalService.closeModal();
    };

    const confirm = {
      title: 'Modal window',
      badge: {
        type: 'positive',
        text: 'Status',
      },
      hint: 'Заказов с ошибками: 2',
      content:
        'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса, окно, предназначенное для вывода информации и (или) получения ответа от пользователя. \n' +
        'Получил своё название потому, что осуществляет двустороннее взаимодействие компьютер-пользователь («диалог»): сообщая пользователю что-то и ожидая от него ответа.',
      footer: {
        accept: {
          text: 'ПОДТВЕРДИТЬ',
          onClick: () => {},
        },
        cancel: {
          text: 'ОтменИТЬ',
          onClick: onCancel,
        },
      },
    };

    const onButtonClick = () => {
      modalService.openModal({
        content: args.content,
        contentProps: confirm,
        width: args.width,
      });
    };

    return { onButtonClick, modalService };
  },
  template: `
    <CdekButton @click="onButtonClick">Открыть попап</CdekButton>
    <CdekModal />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  content:
    'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса, окно, предназначенное для вывода информации и (или) получения ответа от пользователя.',
};
Primary.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
modalService.openModal({
  content: 'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса, окно, предназначенное для вывода информации и (или) получения ответа от пользователя.'
});
`,
    },
  },
};

export const ComponentAsContent = Template.bind({});
ComponentAsContent.args = {
  content: CdekConfirm,
};
ComponentAsContent.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
modalService.openModal<IConfirmProps>({
  content: CdekConfirm,
  contentProps: {
    title: 'Modal window',
    badge: {
      type: 'positive',
      text: 'Status',
    },
    hint: 'Заказов с ошибками: 2',
    content:
      'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса, окно, предназначенное для вывода информации и (или) получения ответа от пользователя. \\n' +
      'Получил своё название потому, что осуществляет двустороннее взаимодействие компьютер-пользователь («диалог»): сообщая пользователю что-то и ожидая от него ответа.',
    footer: {
      accept: {
        text: 'ПОДТВЕРДИТЬ',
        onClick: () => {},
      },
      cancel: {
        text: 'ОтменИТЬ',
        onClick: onCancel,
      },
    },
  }
});
`,
    },
  },
};

export const WithWidth = Template.bind({});
WithWidth.args = {
  width: '300px',
  content:
    'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса, окно, предназначенное для вывода информации и (или) получения ответа от пользователя.',
};
WithWidth.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
modalService.openModal({
  content: 'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса, окно, предназначенное для вывода информации и (или) получения ответа от пользователя.'
  width: '300px'
});
`,
    },
  },
};
