import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Avatar },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Avatar label="Д" size="large" />
        <Avatar label="ИВ" size="large" />
        <Avatar label="МА" size="large" />
      </div>
    </div>
  `
});

// Иконка
export const IconTemplate = () => ({
  components: { Avatar },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Avatar icon="pi pi-user" size="large" />
        <Avatar icon="pi pi-user" size="large" style="background-color: #2196F3; color: #ffffff" />
        <Avatar icon="pi pi-user" size="large" style="background-color: #9c27b0; color: #ffffff" />
      </div>
    </div>
  `
});

// Изображение
export const ImageTemplate = () => ({
  components: { Avatar },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" />
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" />
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large" />
      </div>
    </div>
  `
});

// Размеры
export const SizesTemplate = () => ({
  components: { Avatar },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4 items-end">
        <Avatar label="ХЛ" size="xlarge" />
        <Avatar label="Б" size="large" />
        <Avatar label="С" />
        <Avatar label="М" size="small" />
      </div>
    </div>
  `
});

// Формы
export const ShapesTemplate = () => ({
  components: { Avatar },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Avatar label="К" size="large" />
        <Avatar label="К" size="large" shape="circle" />
      </div>
    </div>
  `
});

// Группа
export const GroupTemplate = () => ({
  components: { Avatar, AvatarGroup },
  template: `
    <div class="flex justify-center p-4">
      <AvatarGroup>
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" />
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" />
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large" />
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" size="large" />
        <Avatar label="+2" size="large" />
      </AvatarGroup>
    </div>
  `
});

// Бейдж
export const BadgeTemplate = () => ({
  components: { Avatar, Badge },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" v-badge.danger="4" />
        <Avatar icon="pi pi-user" size="large" v-badge.success />
      </div>
    </div>
  `
});

// Стили
export const StylesTemplate = () => ({
  components: { Avatar },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Avatar label="АБ" size="large" style="background-color: #ee9cda; color: #000000" />
        <Avatar label="ВГ" size="large" style="background-color: #b7dfe0; color: #000000" />
        <Avatar label="ДЕ" size="large" style="background-color: #ffe185; color: #000000" />
      </div>
    </div>
  `
});

