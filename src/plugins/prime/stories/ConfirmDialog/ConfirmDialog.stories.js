import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
import { useConfirm } from 'primevue/useconfirm';

export default {
  title: 'Prime/ConfirmDialog',
  component: ConfirmDialog,
  parameters: {
    docs: {
      description: {
        component:
          'ConfirmDialog компонент для подтверждения действий пользователя. [Figma Design](https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/UI-kit-PrimeFace--1.0.0-beta-?node-id=520-6928)',
      },
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['danger', 'warn', 'success', 'info', 'help'],
      description: 'Тип severity для определения цвета иконки',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xlg'],
      description: 'Размер диалога (использует токены sizingDialog из semantic.ts)',
    },
    header: {
      control: 'text',
      description: 'Заголовок диалога',
    },   
    message: {
      control: 'text',
      description: 'Текст сообщения',
    },
    icon: {
      control: 'text',
      description: 'CSS класс иконки (например, ti ti-circle-x)',
    },
    acceptLabel: {
      control: 'text',
      description: 'Текст кнопки подтверждения',
    },
    rejectLabel: {
      control: 'text',
      description: 'Текст кнопки отмены',
    },
  },
};

const Template = (args) => ({
  components: { ConfirmDialog, Button },
  setup() {
    const confirm = useConfirm();

    const getSizeClass = (size) => {
      if (!size || size === 'default') return '';
      return `p-confirmdialog-${size}`;
    };

    const showDialog = () => {
      confirm.require({
        header: args.header,
        message: args.message,
        icon: args.icon,
        severity: args.severity,
        acceptLabel: args.acceptLabel || 'Да',
        rejectLabel: args.rejectLabel || 'Нет',
        accept: () => {
          console.log('Accepted');
        },
        reject: () => {
          console.log('Rejected');
        },
      });
    };

    return { args, showDialog, getSizeClass };
  },
  template: `
    <div>
      <ConfirmDialog :class="getSizeClass(args.size)" :pt="{ root: { 'data-pc-severity': args.severity } }">
        <template #container="{ message, acceptCallback, rejectCallback }">
          <div class="p-dialog-header">
            <div class="p-dialog-title">
              <i v-if="message.icon" :class="message.icon" class="p-icon"></i>
              <span>{{ message.header }}</span>
            </div>
            <Button @click="rejectCallback" icon="ti ti-x" text class="p-dialog-header-close" />
          </div>
          <div class="p-dialog-content">
            <span class="p-confirmdialog-message">{{ message.message }}</span>
          </div>
          <div class="p-dialog-footer">
            <Button :label="message.rejectLabel || 'Нет'" @click="rejectCallback" text />
            <Button :label="message.acceptLabel || 'Да'" @click="acceptCallback" :severity="message.severity || 'secondary'" />
          </div>
        </template>
      </ConfirmDialog>
      <Button @click="showDialog" :label="args.buttonLabel || 'Показать диалог'" />
    </div>
  `,
});

export const Danger = Template.bind({});
Danger.args = {
  severity: 'danger',
  header: 'Подтверждение удаления',
  message: 'Вы уверены, что хотите удалить этот элемент? Это действие нельзя отменить.',
  icon: 'ti ti-circle-x',
  acceptLabel: 'Удалить',
  rejectLabel: 'Отмена',
  buttonLabel: 'Удалить элемент',
};
Danger.parameters = {
  docs: {
    description: {
      story: 'Диалог для критических действий (удаление, отмена). Использует красную иконку.',
    },
    source: {
      code: `
<script setup>
import { useConfirm } from 'primevue/useconfirm';

const confirm = useConfirm();

const deleteItem = () => {
  confirm.require({
    header: 'Подтверждение удаления',
    message: 'Вы уверены, что хотите удалить этот элемент?',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Удалить',
    rejectLabel: 'Отмена',
    accept: () => {
      // Логика удаления
    }
  });
};
</script>

<template>
  <ConfirmDialog />
  <Button @click="deleteItem" label="Удалить элемент" />
</template>
`,
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warn',
  header: 'Предупреждение',
  message: 'Это действие может привести к потере несохранённых данных. Продолжить?',
  icon: 'ti ti-alert-triangle',
  acceptLabel: 'Продолжить',
  rejectLabel: 'Отмена',
  buttonLabel: 'Показать предупреждение',
};
Warning.parameters = {
  docs: {
    description: {
      story: 'Диалог для предупреждений. Использует оранжевую иконку.',
    },
    source: {
      code: `
<script setup>
import { useConfirm } from 'primevue/useconfirm';

const confirm = useConfirm();

const showWarning = () => {
  confirm.require({
    header: 'Предупреждение',
    message: 'Это действие может привести к потере данных.',
    icon: 'pi pi-exclamation-circle',
    acceptLabel: 'Продолжить',
    rejectLabel: 'Отмена'
  });
};
</script>

<template>
  <ConfirmDialog />
  <Button @click="showWarning" label="Показать предупреждение" />
</template>
`,
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  severity: 'success',
  header: 'Подтверждение',
  message: 'Операция выполнена успешно. Хотите продолжить?',
  icon: 'ti ti-circle-check',
  acceptLabel: 'Продолжить',
  rejectLabel: 'Закрыть',
  buttonLabel: 'Показать успех',
};
Success.parameters = {
  docs: {
    description: {
      story: 'Диалог для подтверждения успешных действий. Использует зелёную иконку.',
    },
    source: {
      code: `
<script setup>
import { useConfirm } from 'primevue/useconfirm';

const confirm = useConfirm();

const showSuccess = () => {
  confirm.require({
    header: 'Подтверждение',
    message: 'Операция выполнена успешно.',
    icon: 'pi pi-check-circle',
    acceptLabel: 'Продолжить',
    rejectLabel: 'Закрыть'
  });
};
</script>

<template>
  <ConfirmDialog />
  <Button @click="showSuccess" label="Показать успех" />
</template>
`,
    },
  },
};

export const Info = Template.bind({});
Info.args = {
  severity: 'info',
  header: 'Информация',
  message: 'Эта функция находится в разработке. Хотите узнать больше?',
  icon: 'ti ti-info-circle',
  acceptLabel: 'Узнать больше',
  rejectLabel: 'Закрыть',
  buttonLabel: 'Показать информацию',
};
Info.parameters = {
  docs: {
    description: {
      story: 'Информационный диалог. Использует синюю иконку.',
    },
    source: {
      code: `
<script setup>
import { useConfirm } from 'primevue/useconfirm';

const confirm = useConfirm();

const showInfo = () => {
  confirm.require({
    header: 'Информация',
    message: 'Эта функция находится в разработке.',
    icon: 'pi pi-info-circle',
    acceptLabel: 'Узнать больше',
    rejectLabel: 'Закрыть'
  });
};
</script>

<template>
  <ConfirmDialog />
  <Button @click="showInfo" label="Показать информацию" />
</template>
`,
    },
  },
};

export const Help = Template.bind({});
Help.args = {
  severity: 'help',
  header: 'Справка',
  message: 'Нужна помощь с этой функцией? Мы можем показать вам руководство.',
  icon: 'ti ti-help-circle',
  acceptLabel: 'Показать руководство',
  rejectLabel: 'Не сейчас',
  buttonLabel: 'Показать справку',
};
Help.parameters = {
  docs: {
    description: {
      story: 'Диалог справки. Использует фиолетовую иконку.',
    },
    source: {
      code: `
<script setup>
import { useConfirm } from 'primevue/useconfirm';

const confirm = useConfirm();

const showHelp = () => {
  confirm.require({
    header: 'Справка',
    message: 'Нужна помощь с этой функцией?',
    icon: 'pi pi-question-circle',
    acceptLabel: 'Показать руководство',
    rejectLabel: 'Не сейчас'
  });
};
</script>

<template>
  <ConfirmDialog />
  <Button @click="showHelp" label="Показать справку" />
</template>
`,
    },
  },
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  severity: 'danger',
  header: 'Подтверждение действия',
  message:
    'Это очень длинное сообщение, которое демонстрирует, как диалог обрабатывает большие объёмы текста. ' +
    'Текст должен корректно переноситься на новые строки и сохранять читаемость. ' +
    'Иконка должна оставаться выровненной по верхнему краю, а текст занимать всё доступное пространство. ' +
    'Это важно для случаев, когда нужно показать детальное описание действия или предупреждение.',
  icon: 'ti ti-circle-x',
  acceptLabel: 'Понятно',
  rejectLabel: 'Отмена',
  buttonLabel: 'Размер SM',
  size: 'sm',
};
SizeSmall.parameters = {
  docs: {
    description: {
      story: 'Диалог размера SM. Использует токен sizingDialog.sm.extra.minWidth (20rem).',
    },
  },
};

export const SizeDefault = Template.bind({});
SizeDefault.args = {
  severity: 'danger',
  header: 'Подтверждение действия',
  message:
    'Это очень длинное сообщение, которое демонстрирует, как диалог обрабатывает большие объёмы текста. ' +
    'Текст должен корректно переноситься на новые строки и сохранять читаемость. ' +
    'Иконка должна оставаться выровненной по верхнему краю, а текст занимать всё доступное пространство. ' +
    'Это важно для случаев, когда нужно показать детальное описание действия или предупреждение.',
  icon: 'ti ti-circle-x',
  acceptLabel: 'Понятно',
  rejectLabel: 'Отмена',
  buttonLabel: 'Размер Default',
  size: 'default',
};
SizeDefault.parameters = {
  docs: {
    description: {
      story: 'Диалог размера Default. Использует токен sizingDialog.extra.minWidth (25rem).',
    },
  },
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  severity: 'danger',
  header: 'Подтверждение действия',
  message:
    'Это очень длинное сообщение, которое демонстрирует, как диалог обрабатывает большие объёмы текста. ' +
    'Текст должен корректно переноситься на новые строки и сохранять читаемость. ' +
    'Иконка должна оставаться выровненной по верхнему краю, а текст занимать всё доступное пространство. ' +
    'Это важно для случаев, когда нужно показать детальное описание действия или предупреждение.',
  icon: 'ti ti-circle-x',
  acceptLabel: 'Понятно',
  rejectLabel: 'Отмена',
  buttonLabel: 'Размер LG',
  size: 'lg',
};
SizeLarge.parameters = {
  docs: {
    description: {
      story: 'Диалог размера LG. Использует токен sizingDialog.lg.extra.minWidth (30rem).',
    },
  },
};

export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.args = {
  severity: 'danger',
  header: 'Подтверждение действия',
  message:
    'Это очень длинное сообщение, которое демонстрирует, как диалог обрабатывает большие объёмы текста. ' +
    'Текст должен корректно переноситься на новые строки и сохранять читаемость. ' +
    'Иконка должна оставаться выровненной по верхнему краю, а текст занимать всё доступное пространство. ' +
    'Это важно для случаев, когда нужно показать детальное описание действия или предупреждение.',
  icon: 'ti ti-circle-x',
  acceptLabel: 'Понятно',
  rejectLabel: 'Отмена',
  buttonLabel: 'Размер XLG',
  size: 'xlg',
};
SizeExtraLarge.parameters = {
  docs: {
    description: {
      story: 'Диалог размера XLG. Использует токен sizingDialog.xlg.extra.minWidth (45rem).',
    },
  },
};

export const CustomButtons = Template.bind({});
CustomButtons.args = {
  severity: 'info',
  header: 'Сохранить изменения?',
  message: 'У вас есть несохранённые изменения. Что вы хотите сделать?',
  icon: 'ti ti-device-floppy',
  acceptLabel: 'Сохранить',
  rejectLabel: 'Не сохранять',
  buttonLabel: 'Кастомные кнопки',
};
CustomButtons.parameters = {
  docs: {
    description: {
      story: 'Диалог с кастомными текстами кнопок.',
    },
    source: {
      code: `
<script setup>
import { useConfirm } from 'primevue/useconfirm';

const confirm = useConfirm();

const saveChanges = () => {
  confirm.require({
    header: 'Сохранить изменения?',
    message: 'У вас есть несохранённые изменения.',
    icon: 'pi pi-save',
    acceptLabel: 'Сохранить',
    rejectLabel: 'Не сохранять',
    accept: () => {
      // Сохранить
    },
    reject: () => {
      // Не сохранять
    }
  });
};
</script>

<template>
  <ConfirmDialog />
  <Button @click="saveChanges" label="Закрыть с изменениями" />
</template>
`,
    },
  },
};

export const AllVariants = () => ({
  components: { ConfirmDialog, Button },
  setup() {
    const confirm = useConfirm();

    const getSizeClass = (size) => {
      if (!size || size === 'default') return '';
      return `p-confirmdialog-${size}`;
    };

    // Используем данные из существующих stories
    const variants = [
      {
        ...Danger.args,
        name: 'Danger',
        group: 'danger-all',
      },
      {
        ...Warning.args,
        name: 'Warning',
        group: 'warning-all',
      },
      {
        ...Success.args,
        name: 'Success',
        group: 'success-all',
      },
      {
        ...Info.args,
        name: 'Info',
        group: 'info-all',
      },
      {
        ...Help.args,
        name: 'Help',
        group: 'help-all',
      },
    ];

    const showVariant = (variant) => {
      confirm.require({
        group: variant.group,
        severity: variant.severity,
        header: variant.header,
        message: variant.message,
        icon: variant.icon,
        acceptLabel: variant.acceptLabel,
        rejectLabel: variant.rejectLabel,
      });
    };

    return { variants, showVariant, getSizeClass };
  },
  template: `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ConfirmDialog v-for="variant in variants" :key="variant.group" :group="variant.group" :class="getSizeClass(variant.size)" :pt="{ root: { 'data-pc-severity': variant.severity } }">
        <template #container="{ message, acceptCallback, rejectCallback }">
          <div class="p-dialog-header">
            <div class="p-dialog-title">
              <i v-if="message.icon" :class="message.icon" class="p-icon"></i>
              <span>{{ message.header }}</span>
            </div>
            <Button @click="rejectCallback" icon="ti ti-x" text class="p-dialog-header-close" />
          </div>
          <div class="p-dialog-content">
            <span class="p-confirmdialog-message">{{ message.message }}</span>
          </div>
          <div class="p-dialog-footer">
            <Button :label="message.rejectLabel || 'Нет'" @click="rejectCallback" text />
            <Button :label="message.acceptLabel || 'Да'" @click="acceptCallback" :severity="message.severity || 'secondary'" />
          </div>
        </template>
      </ConfirmDialog>
      <Button 
        v-for="variant in variants" 
        :key="variant.name"
        @click="showVariant(variant)" 
        :label="variant.name"
        :severity="variant.severity"
      />
    </div>
  `,
});
AllVariants.parameters = {
  docs: {
    description: {
      story: 'Все варианты severity в одном месте для сравнения. Использует данные из соответствующих stories (Danger, Warning, Success, Info, Help).',
    },
  },
};
