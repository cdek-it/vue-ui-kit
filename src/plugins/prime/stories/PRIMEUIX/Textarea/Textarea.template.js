import Textarea from 'primevue/textarea';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Textarea },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Textarea v-model="value" rows="5" placeholder="Введите текст" class="w-full md:w-96" />
    </div>
  `
});

// Автоизменение размера
export const AutoResizeTemplate = () => ({
  components: { Textarea },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Textarea 
        v-model="value" 
        autoResize 
        rows="3" 
        placeholder="Автоизменение размера" 
        class="w-full md:w-96" 
      />
    </div>
  `
});

// Заполненный
export const FilledTemplate = () => ({
  components: { Textarea },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Textarea 
        v-model="value" 
        variant="filled" 
        rows="5" 
        placeholder="Заполненный" 
        class="w-full md:w-96" 
      />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { Textarea },
  setup() {
    const value = ref('Отключенное текстовое поле');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Textarea v-model="value" disabled rows="5" class="w-full md:w-96" />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { Textarea },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2 w-full md:w-96">
        <Textarea 
          v-model="value" 
          invalid 
          rows="5" 
          placeholder="Невалидное поле" 
          class="w-full" 
        />
        <small class="text-red-600">Это поле обязательно</small>
      </div>
    </div>
  `
});

// Fluid
export const FluidTemplate = () => ({
  components: { Textarea },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="p-4">
      <Textarea v-model="value" fluid rows="5" placeholder="Fluid занимает всю ширину" />
    </div>
  `
});

