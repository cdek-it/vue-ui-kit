import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { ref } from 'vue';

export default {
  title: 'Prime/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          'Dialog компонент для отображения модальных окон. [Figma Design](https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/UI-kit-PrimeFace--1.0.0-beta-?node-id=520-6620)',
      },
    },
  },
  argTypes: {
    header: {
      control: 'text',
      description: 'Заголовок диалога',
    },
    modal: {
      control: 'boolean',
      description: 'Модальный режим (блокирует фон)',
    },
    closable: {
      control: 'boolean',
      description: 'Показать кнопку закрытия',
    },
    maximizable: {
      control: 'boolean',
      description: 'Показать кнопку максимизации',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xlg'],
      description: 'Размер диалога (sm: 20rem, default: 25rem, lg: 30rem, xlg: 45rem)',
    },
  },
};

const Template = (args) => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(args.modal === false);

    const getDialogClass = (size) => {
      const sizeClasses = {
        sm: 'p-dialog-sm-extra',
        default: 'p-dialog-extra',
        lg: 'p-dialog-lg-extra',
        xlg: 'p-dialog-xlg-extra',
      };
      return sizeClasses[size] || sizeClasses.default;
    };

    return { args, visible, getDialogClass };
  },
  template: `
    <div>
      <Button v-if="args.modal !== false" :label="args.buttonLabel || 'Показать диалог'" @click="visible = true" />
      <Dialog 
        v-model:visible="visible" 
        :header="args.header"
        :modal="args.modal !== false"
        :closable="args.closable !== false"
        :maximizable="args.maximizable || false"
        :pt="{
          root: { class: getDialogClass(args.size) }
        }"
      >
        <template #header v-if="args.headerSlot">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i v-if="args.headerIcon" :class="args.headerIcon"></i>
            <span>{{ args.header }}</span>
          </div>
        </template>
        <p>{{ args.content || 'Содержимое диалога' }}</p>
        <template #footer v-if="args.showFooter !== false">
          <Button label="Отмена" text @click="visible = false" />
          <Button label="Сохранить" @click="visible = false" />
        </template>
      </Dialog>
    </div>
  `,
});

export const SizeDefault = Template.bind({});
SizeDefault.args = {
  header: 'Dialog',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe.',
  buttonLabel: 'Нажми на меня',
  modal: true,
  closable: true,
  maximizable: false,
  size: 'default',
};
SizeDefault.parameters = {
  docs: {
    description: {
      story: 'Базовый модальный диалог размера Default (25rem) с min-width и max-width.',
    },
  },
};

export const NoModal = Template.bind({});
NoModal.args = {
  header: 'Dialog',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe.',
  buttonLabel: 'Нажми на меня',
  modal: false,
  closable: true,
  maximizable: false,
  size: 'sm',
  showFooter: true,
};
NoModal.parameters = {
  docs: {
    description: {
      story: 'Немодальный диалог размера SM (20rem) с min-width и max-width. Диалог открыт сразу и не блокирует фон.',
    },
  },
};

export const WithMaximize = Template.bind({});
WithMaximize.args = {
  header: 'Диалог с максимизацией',
  content: 'Этот диалог можно развернуть на весь экран с помощью кнопки максимизации.',
  buttonLabel: 'Диалог с максимизацией',
  modal: true,
  closable: true,
  maximizable: true,
  size: 'default',
};
WithMaximize.parameters = {
  docs: {
    description: {
      story: 'Диалог с кнопкой максимизации в header.',
    },
  },
};

export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  header: 'Диалог без футера',
  content: 'Этот диалог не имеет футера с кнопками.',
  buttonLabel: 'Без футера',
  modal: true,
  closable: true,
  maximizable: false,
  showFooter: false,
  size: 'default',
};
WithoutFooter.parameters = {
  docs: {
    description: {
      story: 'Диалог без футера.',
    },
  },
};

export const SizeSm = Template.bind({});
SizeSm.args = {
  header: 'Маленький диалог',
  content: 'Диалог с минимальной шириной 20rem.',
  buttonLabel: 'Размер SM',
  modal: true,
  closable: true,
  maximizable: false,
  size: 'sm',
};
SizeSm.parameters = {
  docs: {
    description: {
      story: 'Диалог размера SM (20rem).',
    },
  },
};

export const SizeLg = Template.bind({});
SizeLg.args = {
  header: 'Большой диалог',
  content: 'Диалог с шириной 30rem для большего содержимого.',
  buttonLabel: 'Размер LG',
  modal: true,
  closable: true,
  maximizable: false,
  size: 'lg',
};
SizeLg.parameters = {
  docs: {
    description: {
      story: 'Диалог размера LG (30rem).',
    },
  },
};

export const SizeXlg = Template.bind({});
SizeXlg.args = {
  header: 'Очень большой диалог',
  content: 'Диалог с шириной 45rem для максимального содержимого.',
  buttonLabel: 'Размер XLG',
  modal: true,
  closable: true,
  maximizable: false,
  size: 'xlg',
};
SizeXlg.parameters = {
  docs: {
    description: {
      story: 'Диалог размера XLG (45rem).',
    },
  },
};

export const LongContent = Template.bind({});
LongContent.args = {
  header: 'Диалог с длинным содержимым',
  content:
    'Это очень длинное содержимое диалога, которое демонстрирует, как диалог обрабатывает большие объёмы текста. ' +
    'Текст должен корректно переноситься на новые строки и сохранять читаемость. ' +
    'Диалог должен автоматически подстраиваться под размер содержимого, но не превышать максимальную высоту экрана. ' +
    'При необходимости появится вертикальная прокрутка для просмотра всего содержимого. ' +
    'Это важно для случаев, когда нужно показать детальную информацию или длинные формы.',
  buttonLabel: 'Длинное содержимое',
  modal: true,
  closable: true,
  maximizable: true,
  size: 'default',
};
LongContent.parameters = {
  docs: {
    description: {
      story: 'Диалог с длинным содержимым для проверки прокрутки.',
    },
  },
};
