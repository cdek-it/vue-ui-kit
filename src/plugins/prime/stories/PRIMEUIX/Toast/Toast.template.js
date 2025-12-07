import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();
    
    const showSuccess = () => {
      toast.add({ severity: 'success', summary: 'Успех', detail: 'Сообщение отправлено', life: 3000 });
    };
    
    const showInfo = () => {
      toast.add({ severity: 'info', summary: 'Информация', detail: 'Новое обновление доступно', life: 3000 });
    };
    
    const showWarn = () => {
      toast.add({ severity: 'warn', summary: 'Предупреждение', detail: 'Проверьте данные', life: 3000 });
    };
    
    const showError = () => {
      toast.add({ severity: 'error', summary: 'Ошибка', detail: 'Операция не выполнена', life: 3000 });
    };
    
    return { showSuccess, showInfo, showWarn, showError };
  },
  template: `
    <div class="flex justify-center p-4">
      <Toast />
      <div class="flex flex-wrap gap-2">
        <Button label="Успех" severity="success" @click="showSuccess" />
        <Button label="Информация" severity="info" @click="showInfo" />
        <Button label="Предупреждение" severity="warn" @click="showWarn" />
        <Button label="Ошибка" severity="danger" @click="showError" />
      </div>
    </div>
  `
});

// Позиции
export const PositionTemplate = () => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();
    
    const showTopLeft = () => {
      toast.add({ severity: 'info', summary: 'Сверху слева', group: 'tl', life: 3000 });
    };
    
    const showTopCenter = () => {
      toast.add({ severity: 'info', summary: 'Сверху по центру', group: 'tc', life: 3000 });
    };
    
    const showTopRight = () => {
      toast.add({ severity: 'info', summary: 'Сверху справа', group: 'tr', life: 3000 });
    };
    
    const showBottomLeft = () => {
      toast.add({ severity: 'info', summary: 'Снизу слева', group: 'bl', life: 3000 });
    };
    
    const showBottomCenter = () => {
      toast.add({ severity: 'info', summary: 'Снизу по центру', group: 'bc', life: 3000 });
    };
    
    const showBottomRight = () => {
      toast.add({ severity: 'info', summary: 'Снизу справа', group: 'br', life: 3000 });
    };
    
    return { showTopLeft, showTopCenter, showTopRight, showBottomLeft, showBottomCenter, showBottomRight };
  },
  template: `
    <div class="flex justify-center p-4">
      <Toast position="top-left" group="tl" />
      <Toast position="top-center" group="tc" />
      <Toast position="top-right" group="tr" />
      <Toast position="bottom-left" group="bl" />
      <Toast position="bottom-center" group="bc" />
      <Toast position="bottom-right" group="br" />
      
      <div class="flex flex-wrap gap-2">
        <Button label="Сверху слева" @click="showTopLeft" />
        <Button label="Сверху по центру" @click="showTopCenter" />
        <Button label="Сверху справа" @click="showTopRight" />
        <Button label="Снизу слева" @click="showBottomLeft" />
        <Button label="Снизу по центру" @click="showBottomCenter" />
        <Button label="Снизу справа" @click="showBottomRight" />
      </div>
    </div>
  `
});

// Множественные
export const MultipleTemplate = () => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();
    
    const showMultiple = () => {
      toast.add({ severity: 'info', summary: 'Сообщение 1', detail: 'Первое сообщение', life: 3000 });
      toast.add({ severity: 'success', summary: 'Сообщение 2', detail: 'Второе сообщение', life: 3000 });
      toast.add({ severity: 'warn', summary: 'Сообщение 3', detail: 'Третье сообщение', life: 3000 });
    };
    
    return { showMultiple };
  },
  template: `
    <div class="flex justify-center p-4">
      <Toast />
      <Button label="Показать несколько" @click="showMultiple" />
    </div>
  `
});

// Закрепленные
export const StickyTemplate = () => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();
    
    const showSticky = () => {
      toast.add({ severity: 'info', summary: 'Закрепленное', detail: 'Это сообщение не исчезнет автоматически' });
    };
    
    return { showSticky };
  },
  template: `
    <div class="flex justify-center p-4">
      <Toast />
      <Button label="Закрепленное" @click="showSticky" />
    </div>
  `
});

