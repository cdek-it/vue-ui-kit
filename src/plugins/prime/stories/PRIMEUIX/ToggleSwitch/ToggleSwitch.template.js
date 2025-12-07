import ToggleSwitch from 'primevue/toggleswitch';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { ToggleSwitch },
  setup() {
    const checked = ref(false);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <ToggleSwitch v-model="checked" />
    </div>
  `
});

// Предустановленное значение
export const PreselectionTemplate = () => ({
  components: { ToggleSwitch },
  setup() {
    const checked = ref(true);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <ToggleSwitch v-model="checked" />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { ToggleSwitch },
  setup() {
    const checked = ref(true);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <ToggleSwitch v-model="checked" disabled />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { ToggleSwitch },
  setup() {
    const checked = ref(false);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2">
        <ToggleSwitch v-model="checked" invalid />
        <small class="text-red-600">Необходимо включить</small>
      </div>
    </div>
  `
});

