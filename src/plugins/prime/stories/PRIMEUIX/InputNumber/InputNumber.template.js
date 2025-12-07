import InputNumber from 'primevue/inputnumber';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { InputNumber },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputNumber v-model="value" class="w-full md:w-80" />
    </div>
  `
});

// С кнопками
export const ButtonsTemplate = () => ({
  components: { InputNumber },
  setup() {
    const value = ref(20);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputNumber v-model="value" showButtons mode="decimal" class="w-full md:w-80" />
    </div>
  `
});

// Мин/Макс
export const MinMaxTemplate = () => ({
  components: { InputNumber },
  setup() {
    const value = ref(50);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputNumber v-model="value" showButtons :min="0" :max="100" class="w-full md:w-80" />
    </div>
  `
});

// Дробные числа
export const DecimalTemplate = () => ({
  components: { InputNumber },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputNumber v-model="value" :minFractionDigits="2" :maxFractionDigits="2" class="w-full md:w-80" />
    </div>
  `
});

// Валюта
export const CurrencyTemplate = () => ({
  components: { InputNumber },
  setup() {
    const valueRUB = ref(null);
    const valueUSD = ref(null);
    const valueEUR = ref(null);
    
    return { valueRUB, valueUSD, valueEUR };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-4 w-full md:w-80">
        <InputNumber v-model="valueRUB" mode="currency" currency="RUB" locale="ru-RU" />
        <InputNumber v-model="valueUSD" mode="currency" currency="USD" locale="en-US" />
        <InputNumber v-model="valueEUR" mode="currency" currency="EUR" locale="de-DE" />
      </div>
    </div>
  `
});

// Проценты
export const PercentTemplate = () => ({
  components: { InputNumber },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputNumber v-model="value" prefix="%" class="w-full md:w-80" />
    </div>
  `
});

// Вертикальные кнопки
export const VerticalTemplate = () => ({
  components: { InputNumber },
  setup() {
    const value = ref(50);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputNumber 
        v-model="value" 
        showButtons 
        buttonLayout="vertical" 
        :min="0" 
        :max="100"
        class="w-full md:w-80"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { InputNumber },
  setup() {
    const value = ref(50);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputNumber v-model="value" disabled class="w-full md:w-80" />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { InputNumber },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2 w-full md:w-80">
        <InputNumber v-model="value" invalid class="w-full" />
        <small class="text-red-600">Это поле обязательно</small>
      </div>
    </div>
  `
});

