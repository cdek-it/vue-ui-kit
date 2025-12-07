import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
import { useConfirm } from 'primevue/useconfirm';

// Базовый пример
export const BasicTemplate = () => ({
  components: { ConfirmDialog, Button },
  setup() {
    const confirm = useConfirm();
    
    const showConfirm = () => {
      confirm.require({
        message: 'Вы действительно хотите продолжить?',
        header: 'Подтверждение',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
          label: 'Отменить',
          severity: 'secondary',
          outlined: true
        },
        acceptProps: {
          label: 'Подтвердить'
        },
        accept: () => {
          alert('Подтверждено');
        },
        reject: () => {
          alert('Отклонено');
        }
      });
    };
    
    return { showConfirm };
  },
  template: `
    <div class="flex justify-center p-4">
      <ConfirmDialog />
      <Button label="Удалить" severity="danger" @click="showConfirm" />
    </div>
  `
});

// Позиция
export const PositionTemplate = () => ({
  components: { ConfirmDialog, Button },
  setup() {
    const confirm = useConfirm();
    
    const showTop = () => {
      confirm.require({
        group: 'top',
        message: 'Вы действительно хотите продолжить?',
        header: 'Подтверждение',
        icon: 'pi pi-info-circle',
        rejectProps: {
          label: 'Нет',
          severity: 'secondary',
          outlined: true
        },
        acceptProps: {
          label: 'Да'
        }
      });
    };
    
    return { showTop };
  },
  template: `
    <div class="flex justify-center p-4">
      <ConfirmDialog group="top" position="top" />
      <Button label="Подтвердить" @click="showTop" />
    </div>
  `
});

// Без кнопок
export const HeadlessTemplate = () => ({
  components: { ConfirmDialog, Button },
  setup() {
    const confirm = useConfirm();
    
    const showHeadless = () => {
      confirm.require({
        group: 'headless',
        message: 'Вы действительно хотите продолжить?',
        header: 'Подтверждение удаления'
      });
    };
    
    return { showHeadless };
  },
  template: `
    <div class="flex justify-center p-4">
      <ConfirmDialog group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
          <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded-lg">
            <div class="rounded-full bg-red-500 text-white inline-flex justify-center items-center h-24 w-24 -mt-20">
              <i class="pi pi-trash text-5xl"></i>
            </div>
            <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
            <p class="mb-0">{{ message.message }}</p>
            <div class="flex items-center gap-2 mt-6">
              <Button label="Сохранить" @click="acceptCallback" />
              <Button label="Отменить" outlined @click="rejectCallback" />
            </div>
          </div>
        </template>
      </ConfirmDialog>
      <Button label="Удалить" severity="danger" @click="showHeadless" />
    </div>
  `
});

