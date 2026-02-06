import Galleria from 'primevue/galleria';

export const GalleriaWithIndicatorsTemplate = (args) => ({
  components: { Galleria },
  setup() {
    const images = [
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
    ];

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
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
        </template>
      </Galleria>
    </div>
  `,
});

export const GalleriaWithThumbnailsTemplate = (args) => ({
  components: { Galleria },
  setup() {
    const images = [
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
    ];

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
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
        </template>
      </Galleria>
    </div>
  `,
});

export const GalleriaWithCaptionTemplate = (args) => ({
  components: { Galleria },
  setup() {
    const images = [
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
    ];

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

export const GalleriaFullScreenTemplate = (args) => ({
  components: { Galleria },
  setup() {
    const images = [
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
    ];

    return { args, images };
  },
  template: `
    <div class="px-3">
      <Galleria 
        :value="images" 
        :numVisible="7"
        containerStyle="max-width: 850px"
        :showItemNavigators="true"
        :showThumbnails="true"
        :showIndicators="false"
        :fullScreen="true"
        v-model:visible="args.visible"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
        </template>
      </Galleria>
    </div>
  `,
});

export const GalleriaAutoPlayTemplate = (args) => ({
  components: { Galleria },
  setup() {
    const images = [
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        itemImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
        thumbnailImageSrc:
          'https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
    ];

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
      </Galleria>
    </div>
  `,
});
