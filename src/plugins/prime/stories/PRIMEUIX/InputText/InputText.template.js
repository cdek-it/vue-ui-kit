import InputText from 'primevue/inputtext';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { InputText },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputText v-model="value" placeholder="Введите текст" class="w-full md:w-80" />
    </div>
  `
});

// Размеры
export const SizesTemplate = () => ({
  components: { InputText },
  setup() {
    const valueSmall = ref('');
    const valueNormal = ref('');
    const valueLarge = ref('');
    
    return { valueSmall, valueNormal, valueLarge };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-4 w-full md:w-80">
        <InputText v-model="valueSmall" size="small" placeholder="Small" />
        <InputText v-model="valueNormal" placeholder="Normal" />
        <InputText v-model="valueLarge" size="large" placeholder="Large" />
      </div>
    </div>
  `
});

// Заполненный
export const FilledTemplate = () => ({
  components: { InputText },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputText v-model="value" variant="filled" placeholder="Заполненный" class="w-full md:w-80" />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { InputText },
  setup() {
    const value = ref('Отключенное поле');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputText v-model="value" disabled class="w-full md:w-80" />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { InputText },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2 w-full md:w-80">
        <InputText v-model="value" invalid placeholder="Невалидное поле" class="w-full" />
        <small class="text-red-600">Это поле обязательно</small>
      </div>
    </div>
  `
});

// Fluid
export const FluidTemplate = () => ({
  components: { InputText },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="p-4">
      <InputText v-model="value" fluid placeholder="Fluid занимает всю ширину" />
    </div>
  `
});
