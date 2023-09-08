import CdekModal from '../CdekModal.vue';
import { useModalService } from '../services/ModalService';
import CdekButton from '../../cdek-button/CdekButton.vue';
import CdekConfirm from '../CdekConfirm.vue';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/CdekModal/Confirm',
  component: CdekModal,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=3039-18607&t=Ljb6anDLwIifZ0zN-4)',
      },
    },
    version: getVersion('0.0.1', 'beta'),
  },
};

const Template = (args) => ({
  components: { CdekModal, CdekButton, CdekConfirm },
  setup() {
    const modalService = useModalService();

    const onCancel = () => {
      modalService.closeModal();
    };

    if (args.footer && args.footer.cancel) {
      args.footer.cancel = {
        text: 'Отменить',
        onClick: onCancel,
      };
    }

    const onButtonClick = () => {
      modalService.openModal(CdekConfirm, {
        props: args,
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
  title: 'Modal window',
  badge: {
    text: 'Status',
    type: 'positive',
    variant: 'light',
  },
  hint: 'Заказов с ошибками: 2',
  content:
    'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса, окно, предназначенное для вывода информации и (или) получения ответа от пользователя.',
  footer: {
    accept: {
      text: 'Подтвердить',
      onClick: () => {},
    },
    cancel: {
      text: 'Отменить',
      onClick: 'onCancel',
    },
  },
};
Primary.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
const onCancel = () => {
    modalService.closeModal()
}
modalService.openModal<IConfirmProps>(CdekConfirm, {
  props: {
    title: 'Modal window',
      badge: {
        text: 'Status',
        type: 'positive',
        variant:'light'
      },
      hint: 'Заказов с ошибками: 2',
      content:
        'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса, окно, предназначенное для вывода информации и (или) получения ответа от пользователя.',
      footer: {
        accept: {
          text: 'Подтвердить',
          onClick: () => {},
        },
        cancel: {
          text: 'Отменить',
          onClick: onCancel,
        },
      },
  }
});
`,
    },
  },
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  content:
    'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса',
};
OnlyText.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
modalService.openModal<IConfirmProps>(CdekConfirm, {
  props: {
    content:
      'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса.'
  }
});
`,
    },
  },
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Modal window',
  content:
    'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса',
};
WithTitle.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
modalService.openModal<IConfirmProps>(CdekConfirm, {
  props: {
      title: 'Modal window',

    content:
      'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса.'
  }
});
`,
    },
  },
};

export const FullHeader = Template.bind({});
FullHeader.args = {
  title: 'Modal window',
  badge: {
    text: 'Status',
    type: 'positive',
    variant: 'light',
  },
  hint: 'Заказов с ошибками: 2',
  content:
    'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса',
};
FullHeader.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
modalService.openModal<IConfirmProps>(CdekConfirm, {
  props: {
      title: 'Modal window',
      badge: {
        text: 'Status',
        type: 'positive',
        variant:'light'
      },
      hint: 'Заказов с ошибками: 2',

    content:
      'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса.'
  }
});
`,
    },
  },
};

export const FullFooter = Template.bind({});
FullFooter.args = {
  title: 'Modal window',
  content:
    'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса',
  footer: {
    accept: {
      text: 'Подтвердить',
      onClick: () => {},
    },
    cancel: {
      text: 'Отменить',
      onClick: () => {},
    },
  },
};
FullFooter.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
const onCancel = () => {
    modalService.closeModal()
}
modalService.openModal<IConfirmProps>(CdekConfirm, {
  props: {
      title: 'Modal window',
    content:
      'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса.',
      footer: {
    accept: {
      text: 'Подтвердить',
      onClick: () => {},
    },
    cancel: {
      text: 'Отменить',
      onClick: onCancel,
    },
  }
  }
});
`,
    },
  },
};
