import Galleria from 'primevue/galleria';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Galleria },
  setup() {
    const images = ref([
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Изображение 1'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Изображение 2'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
        alt: 'Изображение 3'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg',
        alt: 'Изображение 4'
      }
    ]);
    
    return { images };
  },
  template: `
    <div class="flex justify-center p-4">
      <Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
      </Galleria>
    </div>
  `
});

// Миниатюры
export const ThumbnailTemplate = () => ({
  components: { Galleria },
  setup() {
    const images = ref([
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Изображение 1'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Изображение 2'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
        alt: 'Изображение 3'
      }
    ]);
    
    return { images };
  },
  template: `
    <div class="flex justify-center p-4">
      <Galleria 
        :value="images" 
        :numVisible="3" 
        :showThumbnails="true"
        :showItemNavigators="true"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
      </Galleria>
    </div>
  `
});

// Автовоспроизведение
export const AutoplayTemplate = () => ({
  components: { Galleria },
  setup() {
    const images = ref([
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Изображение 1'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Изображение 2'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
        alt: 'Изображение 3'
      }
    ]);
    
    return { images };
  },
  template: `
    <div class="flex justify-center p-4">
      <Galleria 
        :value="images" 
        :autoPlay="true"
        :transitionInterval="3000"
        :numVisible="3"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
      </Galleria>
    </div>
  `
});

// Полноэкранный режим
export const FullscreenTemplate = () => ({
  components: { Galleria, Button },
  setup() {
    const visible = ref(false);
    const images = ref([
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Изображение 1'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Изображение 2'
      }
    ]);
    
    return { visible, images };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать галерею" @click="visible = true" />
      <Galleria 
        v-model:visible="visible"
        :value="images" 
        :numVisible="7"
        :fullScreen="true"
        :showThumbnails="false"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
      </Galleria>
    </div>
  `
});

