import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import { ref } from 'vue';

const products = [
  { id: 1, name: 'Продукт 1', image: 'https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg', price: 2500 },
  { id: 2, name: 'Продукт 2', image: 'https://primefaces.org/cdn/primevue/images/product/black-watch.jpg', price: 3200 },
  { id: 3, name: 'Продукт 3', image: 'https://primefaces.org/cdn/primevue/images/product/blue-band.jpg', price: 1800 },
  { id: 4, name: 'Продукт 4', image: 'https://primefaces.org/cdn/primevue/images/product/blue-t-shirt.jpg', price: 4100 },
  { id: 5, name: 'Продукт 5', image: 'https://primefaces.org/cdn/primevue/images/product/bracelet.jpg', price: 2900 }
];

// Базовый пример
export const BasicTemplate = () => ({
  components: { Carousel, Button },
  setup() {
    const items = ref(products);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Carousel :value="items" :numVisible="3" :numScroll="1" class="w-full md:w-[800px]">
        <template #item="slotProps">
          <div class="border border-surface-200 rounded-lg p-4 m-2">
            <div class="mb-4">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded-lg" />
            </div>
            <div class="mb-4 font-semibold text-xl">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-semibold">{{ slotProps.data.price }} ₽</span>
              <Button icon="pi pi-shopping-cart" severity="secondary" />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  `
});

// Вертикальный
export const VerticalTemplate = () => ({
  components: { Carousel, Button },
  setup() {
    const items = ref(products);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Carousel :value="items" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="360px" class="w-full md:w-96">
        <template #item="slotProps">
          <div class="border border-surface-200 rounded-lg p-4 m-2">
            <div class="mb-4">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded-lg" />
            </div>
            <div class="mb-4 font-semibold text-xl">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-semibold">{{ slotProps.data.price }} ₽</span>
              <Button icon="pi pi-shopping-cart" severity="secondary" />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  `
});

// Автовоспроизведение
export const AutoplayTemplate = () => ({
  components: { Carousel, Button },
  setup() {
    const items = ref(products);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Carousel :value="items" :numVisible="3" :numScroll="1" :autoplayInterval="3000" circular class="w-full md:w-[800px]">
        <template #item="slotProps">
          <div class="border border-surface-200 rounded-lg p-4 m-2">
            <div class="mb-4">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded-lg" />
            </div>
            <div class="mb-4 font-semibold text-xl">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-semibold">{{ slotProps.data.price }} ₽</span>
              <Button icon="pi pi-shopping-cart" severity="secondary" />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  `
});

