import Message from 'primevue/message';
import Button from 'primevue/button';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Message },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3 w-full md:w-[600px]">
        <Message>Информационное сообщение</Message>
        <Message severity="success">Сообщение об успехе</Message>
        <Message severity="info">Информационное сообщение</Message>
        <Message severity="warn">Предупреждающее сообщение</Message>
        <Message severity="error">Сообщение об ошибке</Message>
        <Message severity="secondary">Вторичное сообщение</Message>
        <Message severity="contrast">Контрастное сообщение</Message>
      </div>
    </div>
  `
});

// С иконками
export const IconTemplate = () => ({
  components: { Message },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3 w-full md:w-[600px]">
        <Message icon="pi pi-send">Отправить сообщение</Message>
        <Message severity="success" icon="pi pi-check-circle">Успешно сохранено</Message>
        <Message severity="warn" icon="pi pi-exclamation-triangle">Внимание требуется</Message>
      </div>
    </div>
  `
});

// Закрываемые
export const ClosableTemplate = () => ({
  components: { Message },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3 w-full md:w-[600px]">
        <Message closable>Это сообщение можно закрыть</Message>
        <Message severity="success" closable>Операция выполнена успешно</Message>
        <Message severity="warn" closable>Проверьте введенные данные</Message>
        <Message severity="error" closable>Произошла ошибка</Message>
      </div>
    </div>
  `
});

// Пользовательский контент
export const CustomTemplate = () => ({
  components: { Message, Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3 w-full md:w-[600px]">
        <Message severity="info">
          <div class="flex items-center gap-3">
            <i class="pi pi-info-circle text-2xl"></i>
            <div class="flex-1">
              <div class="font-bold mb-1">Обновление доступно</div>
              <div class="text-sm">Доступна новая версия приложения. Хотите обновить?</div>
            </div>
            <Button label="Обновить" size="small" />
          </div>
        </Message>
      </div>
    </div>
  `
});

// Размеры
export const SizesTemplate = () => ({
  components: { Message },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3 w-full md:w-[600px]">
        <Message size="small">Маленькое сообщение</Message>
        <Message>Обычное сообщение</Message>
        <Message size="large">Большое сообщение</Message>
      </div>
    </div>
  `
});

