import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
import ConfirmationEventBus from 'primevue/confirmationeventbus';

const SEVERITIES = [
  {
    type: 'success',
    buttonSeverity: 'success',
    icon: 'ti ti-circle-check',
    label: 'Успех',
    header: 'Успех',
    message: 'Операция выполнена успешно.',
    acceptLabel: 'OK',
    dialogClass: 'p-confirm-dialog-accept',
  },
  {
    type: 'info',
    buttonSeverity: 'info',
    icon: 'ti ti-info-circle',
    label: 'Информация',
    header: 'Информация',
    message: 'Это информационное сообщение.',
    acceptLabel: 'Понятно',
    dialogClass: 'p-confirm-dialog-info',
  },
  {
    type: 'warn',
    buttonSeverity: 'warn',
    icon: 'ti ti-alert-triangle',
    label: 'Предупреждение',
    header: 'Предупреждение',
    message: 'Внимание! Это действие может иметь последствия.',
    acceptLabel: 'Продолжить',
    dialogClass: 'p-confirm-dialog-warn',
  },
  {
    type: 'help',
    buttonSeverity: 'help',
    icon: 'ti ti-help-circle',
    label: 'Справка',
    header: 'Справка',
    message: 'Нужна помощь с этим действием?',
    acceptLabel: 'Да',
    dialogClass: 'p-confirm-dialog-help',
  },
  {
    type: 'danger',
    buttonSeverity: 'danger',
    icon: 'ti ti-circle-x',
    label: 'Удаление',
    header: 'Подтверждение',
    message: 'Это действие нельзя отменить. Продолжить?',
    acceptLabel: 'Удалить',
    dialogClass: 'p-confirm-dialog-error',
  },
];

const SIZES = [
  { key: 'sm', label: 'Small', dialogClass: 'p-confirmdialog-sm' },
  { key: 'base', label: 'Base', dialogClass: '' },
  { key: 'lg', label: 'Large', dialogClass: 'p-confirmdialog-lg' },
  { key: 'xlg', label: 'Extra Large', dialogClass: 'p-confirmdialog-xlg' },
];

const require = (options) => ConfirmationEventBus.emit('confirm', options);

export const Template = (args) => ({
  components: { ConfirmDialog, Button },
  setup() {
    const showConfirm = () => {
      require({
        group: 'cd-default',
        message: args.message ?? 'Вы уверены, что хотите продолжить?',
        header: args.header ?? 'Подтверждение',
        icon: args.icon ?? 'ti ti-alert-triangle',
        acceptLabel: args.acceptLabel ?? 'Да',
        rejectLabel: args.rejectLabel ?? 'Нет',
      });
    };

    return { args, showConfirm };
  },
  template: `
    <div>
      <ConfirmDialog group="cd-default" :class="args.class">
        <template #container="{ message, acceptCallback, rejectCallback }">
          <div class="p-dialog-header">
            <div class="p-dialog-title">
              <i :class="message.icon + ' p-icon'"></i>
              <span>{{ message.header }}</span>
            </div>
            <button class="p-button p-component p-button-icon-only p-button-rounded p-button-text p-dialog-close-button" type="button" @click="rejectCallback">
              <span class="p-button-icon ti ti-x"></span>
            </button>
          </div>
          <div class="p-dialog-content">
            <p>{{ message.message }}</p>
          </div>
          <div class="p-dialog-footer">
            <Button :label="message.rejectLabel" severity="secondary" variant="text" @click="rejectCallback" />
            <Button :label="message.acceptLabel" @click="acceptCallback" />
          </div>
        </template>
      </ConfirmDialog>
      <Button label="Показать диалог" severity="contrast" @click="showConfirm" />
    </div>
  `,
});

export const TemplateSeverities = () => ({
  components: { ConfirmDialog, Button },
  setup() {
    const showConfirm = (severity) => {
      require({
        group: 'cd-severity-' + severity.type,
        message: severity.message,
        header: severity.header,
        icon: severity.icon,
        acceptLabel: severity.acceptLabel,
        rejectLabel: 'Нет',
        acceptProps: { severity: severity.buttonSeverity },
      });
    };

    return { showConfirm, severities: SEVERITIES };
  },
  template: `
    <div>
      <ConfirmDialog
        v-for="severity in severities"
        :key="severity.type"
        :group="'cd-severity-' + severity.type"
        :class="severity.dialogClass"
      >
        <template #container="{ message, acceptCallback, rejectCallback }">
          <div class="p-dialog-header">
            <div class="p-dialog-title">
              <i :class="message.icon + ' p-icon'"></i>
              <span>{{ message.header }}</span>
            </div>
            <button class="p-button p-component p-button-icon-only p-button-rounded p-button-text p-dialog-close-button" type="button" @click="rejectCallback">
              <span class="p-button-icon ti ti-x"></span>
            </button>
          </div>
          <div class="p-dialog-content">
            <p>{{ message.message }}</p>
          </div>
          <div class="p-dialog-footer">
            <Button :label="message.rejectLabel" severity="secondary" variant="text" @click="rejectCallback" />
            <Button :label="message.acceptLabel" :severity="message.acceptProps?.severity" @click="acceptCallback" />
          </div>
        </template>
      </ConfirmDialog>
      <div class="flex flex-wrap gap-2">
        <Button
          v-for="severity in severities"
          :key="severity.type"
          :label="'Показать: ' + severity.label"
          :severity="severity.buttonSeverity"
          variant="outlined"
          @click="showConfirm(severity)"
        />
      </div>
    </div>
  `,
});

export const TemplateSizes = () => ({
  components: { ConfirmDialog, Button },
  setup() {
    const showConfirm = (size) => {
      require({
        group: 'cd-size-' + size.key,
        message: 'Это диалог размера ' + size.label,
        header: 'Подтверждение',
        icon: 'ti ti-alert-triangle',
        acceptLabel: 'Да',
        rejectLabel: 'Нет',
      });
    };

    return { showConfirm, sizes: SIZES };
  },
  template: `
    <div>
      <ConfirmDialog
        v-for="size in sizes"
        :key="size.key"
        :group="'cd-size-' + size.key"
        :class="size.dialogClass"
      >
        <template #container="{ message, acceptCallback, rejectCallback }">
          <div class="p-dialog-header">
            <div class="p-dialog-title">
              <i class="ti ti-alert-triangle p-icon"></i>
              <span>{{ message.header }}</span>
            </div>
            <button class="p-button p-component p-button-icon-only p-button-rounded p-button-text p-dialog-close-button" type="button" @click="rejectCallback">
              <span class="p-button-icon ti ti-x"></span>
            </button>
          </div>
          <div class="p-dialog-content">
            <p>{{ message.message }}</p>
          </div>
          <div class="p-dialog-footer">
            <Button :label="message.rejectLabel" severity="secondary" variant="text" @click="rejectCallback" />
            <Button :label="message.acceptLabel" @click="acceptCallback" />
          </div>
        </template>
      </ConfirmDialog>
      <div class="flex flex-wrap gap-2">
        <Button
          v-for="size in sizes"
          :key="size.key"
          :label="size.label"
          severity="contrast"
          @click="showConfirm(size)"
        />
      </div>
    </div>
  `,
});
