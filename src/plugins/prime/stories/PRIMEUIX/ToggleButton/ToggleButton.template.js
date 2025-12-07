import ToggleButton from 'primevue/togglebutton';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { ToggleButton },
  setup() {
    const checked = ref(false);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <ToggleButton v-model="checked" onLabel="Да" offLabel="Нет" />
    </div>
  `
});

// С иконками
export const IconsTemplate = () => ({
  components: { ToggleButton },
  setup() {
    const checked = ref(false);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <ToggleButton 
        v-model="checked" 
        onIcon="ti ti-arrow-down-right" 
        offIcon="ti ti-arrow-down-right" 
        onLabel="Включено" 
        offLabel="Выключено" 
      />
    </div>
  `
});

// Пользовательский
export const CustomTemplate = () => ({
  components: { ToggleButton },
  setup() {
    const checked = ref(true);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <ToggleButton 
        v-model="checked" 
        onIcon="ti ti-arrow-down-right" 
        offIcon="ti ti-arrow-down-right" 
        onLabel="Звук вкл" 
        offLabel="Звук выкл"
        severity="success"
      />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { ToggleButton },
  setup() {
    const checked = ref(true);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <ToggleButton v-model="checked" onLabel="Да" offLabel="Нет" disabled />
    </div>
  `
});

// Размеры
export const SizesTemplate = () => ({
  components: { ToggleButton },
  setup() {
    const value1 = ref(false);
    const value2 = ref(false);
    const value3 = ref(false);
    
    return { value1, value2, value3 };
  },
  template: `
    <div class="card flex justify-center gap-4">
      <ToggleButton v-model="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
      <ToggleButton v-model="value2" onLabel="On" offLabel="Off" class="min-w-20" />
      <ToggleButton v-model="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { ToggleButton },
  setup() {
    const checked = ref(false);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2">
        <ToggleButton v-model="checked" onLabel="Согласен" offLabel="Не согласен" invalid />
        <small class="text-red-600">Необходимо согласиться</small>
      </div>
    </div>
  `
});

