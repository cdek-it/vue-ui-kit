import Galleria from 'primevue/galleria';
import Button from 'primevue/button';
import { ref } from 'vue';
import ChevronLeft from './icons/ChevronLeft.svg';
import ChevronRight from './icons/ChevronRight.svg';

const images = [
  {
    itemImageSrc:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&h=450&q=80',
    thumbnailImageSrc:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=160&h=90&q=80',
    alt: 'Green forest with fog',
    title: 'Nature',
  },
  {
    itemImageSrc:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&h=450&q=80',
    thumbnailImageSrc:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=160&h=90&q=80',
    alt: 'Busy city street with buildings',
    title: 'Urban Life',
  },
  {
    itemImageSrc:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&h=450&q=80',
    thumbnailImageSrc:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=160&h=90&q=80',
    alt: 'Modern architecture building',
    title: 'Architecture',
  },
  {
    itemImageSrc:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=450&q=80',
    thumbnailImageSrc:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=160&h=90&q=80',
    alt: 'Electronic circuit board close-up',
    title: 'Technology',
  },
  {
    itemImageSrc:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=450&q=80',
    thumbnailImageSrc:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=160&h=90&q=80',
    alt: 'Beautiful landscape with mountains and lake',
    title: 'Scenery',
  },
  {
    itemImageSrc:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=450&q=80',
    thumbnailImageSrc:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=160&h=90&q=80',
    alt: 'Wild deer in the forest',
    title: 'Wildlife',
  },
  {
    itemImageSrc:
      'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&h=450&q=80',
    thumbnailImageSrc:
      'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=160&h=90&q=80',
    alt: 'Healthy breakfast with fruit and coffee',
    title: 'Lifestyle',
  },
];

export const Template = (args) => ({
  components: { Galleria, ChevronLeft, ChevronRight },
  setup() {
    return { args, images };
  },
  template: `
    <div class="px-3">
      <Galleria
        :value="images"
        containerStyle="max-width: 640px"
        :circular="true"
        v-bind="args"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
        </template>
        <template #previousThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronLeft class="p-icon p-galleria-thumbnail-prev-icon" />
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronRight class="p-icon p-galleria-thumbnail-next-icon" />
          </button>
        </template>
      </Galleria>
    </div>
  `,
});

export const TemplateIndicators = (args) => ({
  components: { Galleria, ChevronLeft, ChevronRight },
  setup() {
    return { args, images };
  },
  template: `
    <div class="px-3">
      <Galleria
        :value="images"
        :numVisible="5"
        containerStyle="max-width: 640px"
        :showItemNavigators="true"
        :showIndicators="true"
        :circular="true"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
        </template>
        <template #previousThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronLeft class="p-icon p-galleria-thumbnail-prev-icon" />
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronRight class="p-icon p-galleria-thumbnail-next-icon" />
          </button>
        </template>
      </Galleria>
    </div>
  `,
});

export const TemplateThumbnails = (args) => ({
  components: { Galleria, ChevronLeft, ChevronRight },
  setup() {
    return { args, images };
  },
  template: `
    <div class="px-3">
      <Galleria
        :value="images"
        :numVisible="5"
        containerStyle="max-width: 640px"
        :showItemNavigators="true"
        :showThumbnails="true"
        :showIndicators="false"
        :circular="true"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
        </template>
        <template #previousThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronLeft class="p-icon p-galleria-thumbnail-prev-icon" />
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronRight class="p-icon p-galleria-thumbnail-next-icon" />
          </button>
        </template>
      </Galleria>
    </div>
  `,
});

export const TemplateCaption = (args) => ({
  components: { Galleria },
  setup() {
    return { args, images };
  },
  template: `
    <div class="px-3">
      <Galleria
        :value="images"
        :numVisible="5"
        containerStyle="max-width: 640px"
        :showItemNavigators="true"
        :showThumbnails="false"
        :showIndicators="true"
        :circular="true"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </template>
        <template #caption="slotProps">
          <div>
            <h4>{{ slotProps.item.title }}</h4>
            <p>{{ slotProps.item.alt }}</p>
          </div>
        </template>
      </Galleria>
    </div>
  `,
});

export const TemplateFullScreen = (args) => ({
  components: { Galleria, Button, ChevronLeft, ChevronRight },
  setup() {
    const visible = ref(false);
    const responsiveOptions = ref([
      {
        breakpoint: '1500px',
        numVisible: 5,
      },
      {
        breakpoint: '1024px',
        numVisible: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ]);
    return { args, images, visible, responsiveOptions };
  },
  template: `
    <div class="px-3 flex flex-col gap-3">
      <Button label="Открыть галерею" @click="visible = true" />
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="7"
        containerStyle="max-width: 850px"
        :showItemNavigators="true"
        :showThumbnails="true"
        :fullScreen="true"
        :circular="true"
        v-model:visible="visible"
        :pt="{
          closeButton: {
            class: 'p-galleria-close-button p-galleria-nav-button',
          },
          itemPrevButton: {
            class: 'p-galleria-item-prev-button p-galleria-nav-button',
          },
          itemNextButton: {
            class: 'p-galleria-item-next-button p-galleria-nav-button',
          },
        }"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
        </template>
        <template #previousThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronLeft class="p-icon p-galleria-thumbnail-prev-icon" />
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronRight class="p-icon p-galleria-thumbnail-next-icon" />
          </button>
        </template>
      </Galleria>
    </div>
  `,
});

export const TemplateAutoplay = (args) => ({
  components: { Galleria, ChevronLeft, ChevronRight },
  setup() {
    return { args, images };
  },
  template: `
    <div class="px-3">
      <Galleria
        :value="images"
        :numVisible="5"
        containerStyle="max-width: 640px"
        :showItemNavigators="true"
        :showIndicators="true"
        :autoPlay="true"
        :transitionInterval="3000"
        :circular="true"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
        </template>
        <template #previousThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronLeft class="p-icon p-galleria-thumbnail-prev-icon" />
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <ChevronRight class="p-icon p-galleria-thumbnail-next-icon" />
          </button>
        </template>
      </Galleria>
    </div>
  `,
});
