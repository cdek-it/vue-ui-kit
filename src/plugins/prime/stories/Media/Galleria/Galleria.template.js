import Galleria from 'primevue/galleria';
import Button from 'primevue/button';
import { ref } from 'vue';

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
  components: { Galleria },
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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-prev-icon">
              <path d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z" fill="currentColor"></path>
            </svg>
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-next-icon">
              <path d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z" fill="currentColor"></path>
            </svg>
          </button>
        </template>
      </Galleria>
    </div>
  `,
});

export const TemplateIndicators = (args) => ({
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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-prev-icon">
              <path d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z" fill="currentColor"></path>
            </svg>
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-next-icon">
              <path d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z" fill="currentColor"></path>
            </svg>
          </button>
        </template>
      </Galleria>
    </div>
  `,
});

export const TemplateThumbnails = (args) => ({
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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-prev-icon">
              <path d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z" fill="currentColor"></path>
            </svg>
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-next-icon">
              <path d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z" fill="currentColor"></path>
            </svg>
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
  components: { Galleria, Button },
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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-prev-icon">
              <path d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z" fill="currentColor"></path>
            </svg>
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-next-icon">
              <path d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z" fill="currentColor"></path>
            </svg>
          </button>
        </template>
      </Galleria>
    </div>
  `,
});

export const TemplateAutoplay = (args) => ({
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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-prev-icon">
              <path d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z" fill="currentColor"></path>
            </svg>
          </button>
        </template>
        <template #nextThumbnailButton="slotProps">
          <button
            class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button"
            type="button"
            @click="slotProps.onClick"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-next-icon">
              <path d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z" fill="currentColor"></path>
            </svg>
          </button>
        </template>
      </Galleria>
    </div>
  `,
});
