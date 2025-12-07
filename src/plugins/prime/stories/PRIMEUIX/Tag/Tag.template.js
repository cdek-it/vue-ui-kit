import Tag from 'primevue/tag';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Tag },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Tag value="Новый" />
        <Tag value="Премиум" severity="success" />
        <Tag value="Информация" severity="info" />
        <Tag value="Внимание" severity="warn" />
        <Tag value="Опасность" severity="danger" />
      </div>
    </div>
  `
});

// Иконка
export const IconTemplate = () => ({
  components: { Tag },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Tag icon="pi pi-user" value="Основной" />
        <Tag icon="pi pi-check" value="Успех" severity="success" />
        <Tag icon="pi pi-info-circle" value="Инфо" severity="info" />
        <Tag icon="pi pi-exclamation-triangle" value="Предупреждение" severity="warn" />
        <Tag icon="pi pi-times" value="Опасность" severity="danger" />
      </div>
    </div>
  `
});

// Округленный
export const RoundedTemplate = () => ({
  components: { Tag },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Tag value="Основной" rounded />
        <Tag value="Успех" severity="success" rounded />
        <Tag value="Инфо" severity="info" rounded />
        <Tag value="Предупреждение" severity="warn" rounded />
        <Tag value="Опасность" severity="danger" rounded />
      </div>
    </div>
  `
});

// Только иконка
export const IconOnlyTemplate = () => ({
  components: { Tag },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Tag icon="pi pi-check" severity="success" rounded />
        <Tag icon="pi pi-bookmark" severity="info" rounded />
        <Tag icon="pi pi-exclamation-triangle" severity="warn" rounded />
        <Tag icon="pi pi-times" severity="danger" rounded />
      </div>
    </div>
  `
});

// Тяжесть
export const SeverityTemplate = () => ({
  components: { Tag },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Tag value="Primary" />
        <Tag value="Success" severity="success" />
        <Tag value="Info" severity="info" />
        <Tag value="Warn" severity="warn" />
        <Tag value="Danger" severity="danger" />
        <Tag value="Secondary" severity="secondary" />
        <Tag value="Contrast" severity="contrast" />
      </div>
    </div>
  `
});

