import Popover from 'primevue/popover';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Popover, Button },
  setup() {
    const op = ref();
    
    const toggle = (event) => {
      op.value.toggle(event);
    };
    
    return { op, toggle };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="toggle" />
      <Popover ref="op">
        <div class="p-4">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </Popover>
    </div>
  `
});

// С контентом
export const ContentTemplate = () => ({
  components: { Popover, Button },
  setup() {
    const op = ref();
    
    const products = [
      { name: 'Продукт 1', price: 1000 },
      { name: 'Продукт 2', price: 2000 },
      { name: 'Продукт 3', price: 3000 }
    ];
    
    const toggle = (event) => {
      op.value.toggle(event);
    };
    
    return { op, toggle, products };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Продукты" @click="toggle" />
      <Popover ref="op">
        <div class="p-4">
          <div class="font-semibold mb-3">Список продуктов</div>
          <ul class="list-none p-0 m-0">
            <li v-for="product in products" :key="product.name" class="mb-2">
              <span>{{ product.name }}</span>
              <span class="ml-2 font-semibold">{{ product.price }} ₽</span>
            </li>
          </ul>
        </div>
      </Popover>
    </div>
  `
});

// С изображением
export const ImageTemplate = () => ({
  components: { Popover, Button },
  setup() {
    const op = ref();
    
    const toggle = (event) => {
      op.value.toggle(event);
    };
    
    return { op, toggle };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать изображение" @click="toggle" />
      <Popover ref="op">
        <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Product" />
      </Popover>
    </div>
  `
});

