import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
import { useConfirm } from 'primevue/useconfirm';

export const Template = (args) => ({
  components: { ConfirmDialog, Button },
  setup() {
    const confirm = useConfirm();

    const showConfirm = () => {
      confirm.require({
        group: 'headless',
        message: args.message || 'Вы уверены, что хотите продолжить?',
        header: args.header || 'Подтверждение',
        icon: args.icon || 'ti ti-alert-triangle',
        acceptLabel: args.acceptLabel || 'Да',
        rejectLabel: args.rejectLabel || 'Нет',
        acceptProps: {
          severity: args.acceptSeverity || 'secondary',
        },
        rejectProps: {
          severity: 'secondary',
          text: true,
        },
        accept: () => {
          console.log('Accepted');
        },
        reject: () => {
          console.log('Rejected');
        },
      });
    };

    return { showConfirm, args };
  },
  template: `
    <Button @click="showConfirm">Показать диалог</Button>
    <ConfirmDialog group="headless" :class="args.class">
      <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="p-dialog-header">
          <div class="p-dialog-title">
            <i :class="args.icon || 'ti ti-alert-triangle'" class="p-icon"></i>
            <span>{{ args.header || 'Подтверждение' }}</span>
          </div>
          <Button 
            icon="ti ti-x"
            severity="secondary"
            text
            rounded
            aria-label="Close"
            class="p-dialog-close-button"
            @click="rejectCallback"
          />
        </div>
        <div class="p-dialog-content">
          <p>{{ message.message }}</p>
        </div>
        <div class="p-dialog-footer">
          <Button 
            :label="args.rejectLabel || 'Нет'" 
            severity="secondary"
            text
            @click="rejectCallback"
          />
          <Button 
            :label="args.acceptLabel || 'Да'" 
            :severity="args.acceptSeverity || 'secondary'"
            @click="acceptCallback"
          />
        </div>
      </template>
    </ConfirmDialog>
  `,
});
