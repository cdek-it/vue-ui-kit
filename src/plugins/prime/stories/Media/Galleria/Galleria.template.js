import Galleria from 'primevue/galleria';
import Button from 'primevue/button';
import { ref } from 'vue';
import ChevronLeft from './icons/ChevronLeft.svg';
import ChevronRight from './icons/ChevronRight.svg';

import img1 from './images/1-nature.jpg';
import img1Thumb from './images/1-nature-thumb.jpg';
import img2 from './images/2-urban.jpg';
import img2Thumb from './images/2-urban-thumb.jpg';
import img3 from './images/3-architecture.jpg';
import img3Thumb from './images/3-architecture-thumb.jpg';
import img4 from './images/4-technology.jpg';
import img4Thumb from './images/4-technology-thumb.jpg';
import img5 from './images/5-scenery.jpg';
import img5Thumb from './images/5-scenery-thumb.jpg';
import img6 from './images/6-wildlife.jpg';
import img6Thumb from './images/6-wildlife-thumb.jpg';
import img7 from './images/7-lifestyle.jpg';
import img7Thumb from './images/7-lifestyle-thumb.jpg';

const images = [
  {
    itemImageSrc: img1,
    thumbnailImageSrc: img1Thumb,
    alt: 'Green forest with fog',
    title: 'Nature',
  },
  {
    itemImageSrc: img2,
    thumbnailImageSrc: img2Thumb,
    alt: 'Busy city street with buildings',
    title: 'Urban Life',
  },
  {
    itemImageSrc: img3,
    thumbnailImageSrc: img3Thumb,
    alt: 'Modern architecture building',
    title: 'Architecture',
  },
  {
    itemImageSrc: img4,
    thumbnailImageSrc: img4Thumb,
    alt: 'Electronic circuit board close-up',
    title: 'Technology',
  },
  {
    itemImageSrc: img5,
    thumbnailImageSrc: img5Thumb,
    alt: 'Beautiful landscape with mountains and lake',
    title: 'Scenery',
  },
  {
    itemImageSrc: img6,
    thumbnailImageSrc: img6Thumb,
    alt: 'Wild deer in the forest',
    title: 'Wildlife',
  },
  {
    itemImageSrc: img7,
    thumbnailImageSrc: img7Thumb,
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
