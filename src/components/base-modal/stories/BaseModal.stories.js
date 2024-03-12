import BaseModal from '../BaseModal.vue';
import { useModalService } from '../services/ModalService';
import BaseButton from '../../base-button/BaseButton.vue';
import BaseConfirm from '../BaseConfirm.vue';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/CdekModal/Modal',
  component: BaseModal,
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
  components: { BaseModal, BaseButton, BaseConfirm },
  setup() {
    const modalService = useModalService();

    const onCancel = () => {
      modalService.closeModal();
    };

    const confirm = {
      title: 'Modal window',
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
    };

    const onButtonClick = () => {
      modalService.openModal(args.component, {
        props: confirm,
        settings: {
          width: args.width,
          withoutCloseButton: args.withoutCloseButton,
          wrapperWithoutPaddings: args.wrapperWithoutPaddings,
        },
      });
    };

    return { onButtonClick, modalService };
  },
  template: `
    <BaseButton @click="onButtonClick">Открыть попап</BaseButton>
    <BaseModal />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  component: BaseConfirm,
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
    content:
      'Диало́говое окно́ (англ. dialog box) в графическом пользовательском интерфейсе — специальный элемент интерфейса, окно, предназначенное для вывода информации и (или) получения ответа от пользователя.'
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

export const WithWidth = Template.bind({});
WithWidth.args = {
  width: '400px',
  component: BaseConfirm,
};
WithWidth.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
modalService.openModal(CdekConfirm, {
  props: componentProps,
  settings: {
    width: '400px'
  }
});
`,
    },
  },
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  withoutCloseButton: true,
  component: BaseConfirm,
};
WithoutCloseButton.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
modalService.openModal(CdekConfirm, {
  props: componentProps,
  settings: {
    withoutCloseButton: true
  }
});
`,
    },
  },
};

export const WrapperWithoutPaddings = Template.bind({});
WrapperWithoutPaddings.args = {
  wrapperWithoutPaddings: true,
  component: BaseConfirm,
};
WrapperWithoutPaddings.parameters = {
  docs: {
    source: {
      code: `
const modalService = useModalService();
modalService.openModal(CdekConfirm, {
  props: componentProps,
  settings: {
    wrapperWithoutPaddings: true
  }
});
`,
    },
  },
};
