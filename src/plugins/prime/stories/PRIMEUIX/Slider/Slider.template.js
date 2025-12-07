import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Slider },
  setup() {
    const value = ref(50);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-96">
        <Slider v-model="value" class="w-full" />
        <div class="mt-2 text-center">Значение: {{ value }}</div>
      </div>
    </div>
  `
});

// С полем ввода
export const InputTemplate = () => ({
  components: { Slider, InputText },
  setup() {
    const value = ref(50);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex items-center gap-4 w-full md:w-96">
        <Slider v-model="value" class="flex-1" />
        <InputText v-model.number="value" class="w-20" />
      </div>
    </div>
  `
});

// Шаг
export const StepTemplate = () => ({
  components: { Slider },
  setup() {
    const value = ref(20);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-96">
        <Slider v-model="value" :step="20" class="w-full" />
        <div class="mt-2 text-center">Значение: {{ value }}</div>
      </div>
    </div>
  `
});

// Диапазон
export const RangeTemplate = () => ({
  components: { Slider },
  setup() {
    const value = ref([20, 80]);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-96">
        <Slider v-model="value" range class="w-full" />
        <div class="mt-2 text-center">Значения: {{ value[0] }} - {{ value[1] }}</div>
      </div>
    </div>
  `
});

// Вертикальный
export const VerticalTemplate = () => ({
  components: { Slider },
  setup() {
    const value = ref(50);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex items-center gap-4">
        <Slider v-model="value" orientation="vertical" style="height: 200px" />
        <div>Значение: {{ value }}</div>
      </div>
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { Slider },
  setup() {
    const value = ref(50);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-96">
        <Slider v-model="value" disabled class="w-full" />
      </div>
    </div>
  `
});

