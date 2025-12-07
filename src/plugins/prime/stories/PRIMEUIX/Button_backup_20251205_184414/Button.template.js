import Button from 'primevue/button';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-3">
        <Button label="Отправить" />
        <Button label="Сохранить" severity="secondary" />
        <Button label="Обновить" severity="success" />
        <Button label="Удалить" severity="danger" />
      </div>
    </div>
  `
});

// Иконки
export const IconsTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-3">
        <Button label="Поиск" icon="pi pi-search" />
        <Button label="Удалить" icon="pi pi-trash" severity="danger" />
        <Button label="Сохранить" icon="pi pi-check" severity="success" />
        <Button icon="pi pi-search" />
        <Button label="Поиск" icon="pi pi-search" iconPos="right" />
      </div>
    </div>
  `
});

// Тяжесть
export const SeverityTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-3">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warn" severity="warn" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />
      </div>
    </div>
  `
});

// Текстовые
export const TextTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-3">
        <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warn" severity="warn" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
      </div>
    </div>
  `
});

// Контурные
export const OutlinedTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-3">
        <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warn" severity="warn" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
      </div>
    </div>
  `
});

// Скругленные
export const RoundedTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-3">
        <Button label="Primary" rounded />
        <Button label="Secondary" severity="secondary" rounded />
        <Button label="Success" severity="success" rounded />
        <Button label="Info" severity="info" rounded />
        <Button label="Warn" severity="warn" rounded />
        <Button label="Help" severity="help" rounded />
        <Button label="Danger" severity="danger" rounded />
      </div>
    </div>
  `
});

// Размеры
export const SizesTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-3 items-end">
        <Button label="Small" size="small" />
        <Button label="Normal" />
        <Button label="Large" size="large" />
      </div>
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Отправить" disabled />
    </div>
  `
});

// Загрузка
export const LoadingTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-3">
        <Button label="Загрузка" loading />
        <Button label="Поиск" icon="pi pi-search" loading />
        <Button icon="pi pi-search" loading />
      </div>
    </div>
  `
});

// Группа
export const GroupTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex">
        <Button label="Сохранить" icon="pi pi-check" />
        <Button label="Удалить" icon="pi pi-trash" severity="danger" />
        <Button label="Отменить" icon="pi pi-times" severity="secondary" />
      </div>
    </div>
  `
});
