import Rating from 'primevue/rating';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Rating },
  setup() {
    const value = ref(null);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Rating v-model="value" />
    </div>
  `
});

// Без отмены
export const WithoutCancelTemplate = () => ({
  components: { Rating },
  setup() {
    const value = ref(3);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Rating v-model="value" :cancel="false" />
    </div>
  `
});

// Только чтение
export const ReadOnlyTemplate = () => ({
  components: { Rating },
  setup() {
    const value = ref(4);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Rating v-model="value" readonly />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { Rating },
  setup() {
    const value = ref(3);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Rating v-model="value" disabled />
    </div>
  `
});

// Количество звезд
export const NumberOfStarsTemplate = () => ({
  components: { Rating },
  setup() {
    const value = ref(5);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Rating v-model="value" :stars="10" />
    </div>
  `
});

