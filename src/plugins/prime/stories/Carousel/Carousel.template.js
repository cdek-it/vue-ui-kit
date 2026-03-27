import Carousel from 'primevue/carousel';
import { ref } from 'vue';

export const BasicTemplate = (args) => ({
  components: { Carousel },
  setup() {
    const products = ref([
      { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/150' },
    ]);

    return {
      args,
      products,
    };
  },
  template: `
    <Carousel :value="products" :numVisible="3" :numScroll="1" v-bind="args">
      <template #item="slotProps">
        <div style="border: 1px dashed #e2e2e4; border-radius: 10.5px; padding: 20px; text-align: center;">
          <div style="font-size: 14px; color: #1dc831; font-weight: 600;">{{ slotProps.data.name }}</div>
        </div>
      </template>
    </Carousel>
  `,
});

export const VerticalTemplate = (args) => ({
  components: { Carousel },
  setup() {
    const products = ref([
      { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/150' },
    ]);

    return {
      args,
      products,
    };
  },
  template: `
    <Carousel :value="products" :numVisible="3" :numScroll="1" orientation="vertical" verticalViewPortHeight="300px" v-bind="args">
      <template #item="slotProps">
        <div style="border: 1px dashed #e2e2e4; border-radius: 10.5px; padding: 20px; text-align: center;">
          <div style="font-size: 14px; color: #1dc831; font-weight: 600;">{{ slotProps.data.name }}</div>
        </div>
      </template>
    </Carousel>
  `,
});

export const AutoplayTemplate = (args) => ({
  components: { Carousel },
  setup() {
    const products = ref([
      { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/150' },
    ]);

    return {
      args,
      products,
    };
  },
  template: `
    <Carousel :value="products" :numVisible="3" :numScroll="1" :autoplayInterval="3000" circular v-bind="args">
      <template #item="slotProps">
        <div style="border: 1px dashed #e2e2e4; border-radius: 10.5px; padding: 20px; text-align: center;">
          <div style="font-size: 14px; color: #1dc831; font-weight: 600;">{{ slotProps.data.name }}</div>
        </div>
      </template>
    </Carousel>
  `,
});
