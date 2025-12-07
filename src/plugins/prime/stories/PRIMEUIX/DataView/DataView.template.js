import DataView from 'primevue/dataview';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { DataView, Button },
  setup() {
    const products = ref([
      { id: 1, name: 'Продукт 1', description: 'Описание продукта 1', price: 100, image: 'https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg' },
      { id: 2, name: 'Продукт 2', description: 'Описание продукта 2', price: 150, image: 'https://primefaces.org/cdn/primevue/images/product/black-watch.jpg' },
      { id: 3, name: 'Продукт 3', description: 'Описание продукта 3', price: 200, image: 'https://primefaces.org/cdn/primevue/images/product/blue-band.jpg' }
    ]);
    
    return { products };
  },
  template: `
    <div class="flex justify-center p-4">
      <DataView :value="products" class="w-full">
        <template #list="slotProps">
          <div class="grid grid-cols-1 gap-4">
            <div v-for="product in slotProps.items" :key="product.id" class="flex items-center gap-4 p-4 border border-surface-200 rounded-lg">
              <img :src="product.image" :alt="product.name" class="w-32 h-32 object-cover rounded" />
              <div class="flex-1">
                <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                <p class="text-surface-600">{{ product.description }}</p>
                <div class="text-2xl font-bold mt-2">{{ product.price }} ₽</div>
              </div>
              <Button label="Купить" />
            </div>
          </div>
        </template>
      </DataView>
    </div>
  `
});

// Сетка
export const GridTemplate = () => ({
  components: { DataView, Button },
  setup() {
    const products = ref([
      { id: 1, name: 'Продукт 1', description: 'Описание 1', price: 100, image: 'https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg' },
      { id: 2, name: 'Продукт 2', description: 'Описание 2', price: 150, image: 'https://primefaces.org/cdn/primevue/images/product/black-watch.jpg' },
      { id: 3, name: 'Продукт 3', description: 'Описание 3', price: 200, image: 'https://primefaces.org/cdn/primevue/images/product/blue-band.jpg' },
      { id: 4, name: 'Продукт 4', description: 'Описание 4', price: 250, image: 'https://primefaces.org/cdn/primevue/images/product/blue-t-shirt.jpg' }
    ]);
    
    return { products };
  },
  template: `
    <div class="flex justify-center p-4">
      <DataView :value="products" layout="grid" class="w-full">
        <template #grid="slotProps">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="product in slotProps.items" :key="product.id" class="border border-surface-200 rounded-lg p-4">
              <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded mb-4" />
              <h3 class="text-lg font-semibold">{{ product.name }}</h3>
              <p class="text-surface-600 text-sm">{{ product.description }}</p>
              <div class="text-xl font-bold mt-2">{{ product.price }} ₽</div>
              <Button label="Купить" class="w-full mt-4" />
            </div>
          </div>
        </template>
      </DataView>
    </div>
  `
});

// Пагинация
export const PaginationTemplate = () => ({
  components: { DataView, Button },
  setup() {
    const products = ref([
      { id: 1, name: 'Продукт 1', description: 'Описание продукта 1', price: 100 },
      { id: 2, name: 'Продукт 2', description: 'Описание продукта 2', price: 150 },
      { id: 3, name: 'Продукт 3', description: 'Описание продукта 3', price: 200 },
      { id: 4, name: 'Продукт 4', description: 'Описание продукта 4', price: 250 },
      { id: 5, name: 'Продукт 5', description: 'Описание продукта 5', price: 300 },
      { id: 6, name: 'Продукт 6', description: 'Описание продукта 6', price: 350 }
    ]);
    
    return { products };
  },
  template: `
    <div class="flex justify-center p-4">
      <DataView :value="products" :rows="3" paginator class="w-full">
        <template #list="slotProps">
          <div class="grid grid-cols-1 gap-4">
            <div v-for="product in slotProps.items" :key="product.id" class="flex items-center gap-4 p-4 border border-surface-200 rounded-lg">
              <div class="flex-1">
                <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                <p class="text-surface-600">{{ product.description }}</p>
                <div class="text-2xl font-bold mt-2">{{ product.price }} ₽</div>
              </div>
              <Button label="Купить" />
            </div>
          </div>
        </template>
      </DataView>
    </div>
  `
});

