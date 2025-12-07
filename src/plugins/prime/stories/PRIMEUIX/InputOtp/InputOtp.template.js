import InputOtp from 'primevue/inputotp';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { InputOtp },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputOtp v-model="value" />
    </div>
  `
});

// Маска
export const MaskTemplate = () => ({
  components: { InputOtp },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputOtp v-model="value" mask />
    </div>
  `
});

// Целочисленный
export const IntegerTemplate = () => ({
  components: { InputOtp },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputOtp v-model="value" integerOnly />
    </div>
  `
});

// Количество полей
export const LengthTemplate = () => ({
  components: { InputOtp },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputOtp v-model="value" :length="8" />
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { InputOtp },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputOtp v-model="value">
        <template #default="{ attrs, events, index }">
          <input 
            type="text" 
            v-bind="attrs" 
            v-on="events" 
            class="custom-otp-input" 
          />
          <div v-if="index === 2" class="px-3">
            <i class="pi pi-minus" />
          </div>
        </template>
      </InputOtp>
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { InputOtp },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2">
        <InputOtp v-model="value" invalid />
        <small class="text-red-600">Неверный код</small>
      </div>
    </div>
  `
});

