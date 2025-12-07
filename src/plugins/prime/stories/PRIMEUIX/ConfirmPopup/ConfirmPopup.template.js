import ConfirmPopup from 'primevue/confirmpopup';
import Button from 'primevue/button';
import { useConfirm } from 'primevue/useconfirm';

// Базовый пример
export const BasicTemplate = () => ({
  components: { ConfirmPopup, Button },
  setup() {
    const confirm = useConfirm();
    
    const showConfirm = (event) => {
      confirm.require({
        target: event.currentTarget,
        message: 'Вы уверены, что хотите продолжить?',
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
      <ConfirmPopup />
      <Button label="Удалить" severity="danger" @click="showConfirm" />
    </div>
  `
});

// Без заголовка
export const WithoutHeaderTemplate = () => ({
  components: { ConfirmPopup, Button },
  setup() {
    const confirm = useConfirm();
    
    const showConfirm = (event) => {
      confirm.require({
        target: event.currentTarget,
        message: 'Вы уверены?',
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
    
    return { showConfirm };
  },
  template: `
    <div class="flex justify-center p-4">
      <ConfirmPopup />
      <Button label="Сохранить" @click="showConfirm" />
    </div>
  `
});

