import Carousel from 'primevue/carousel';

const slidesCount = 8;

const carouselSlides = (() => {
  const slides = [];

  for (let slideIndex = 1; slideIndex <= slidesCount; slideIndex++) {
    slides.push({
      title: `Lorem Ipsum ${slideIndex}`,
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe.',
    });
  }

  return slides;
})();

export const BasicTemplate = (args) => ({
  components: { Carousel },
  setup() {
    return { args, carouselSlides };
  },
  template: `
    <div class="px-3">
      <Carousel
        :value="carouselSlides"
        v-bind="args"
      >
        <template #item="{ data }">
          <div class="flex flex-col gap-3 px-3 py-3 border rounded min-w-0 overflow-hidden">
            <span v-html="data.title" class="font-bold truncate" />
            <span v-html="data.subtitle" />
          </div>
        </template>
      </Carousel>
    </div>
  `,
});

export const VerticalTemplate = (args) => ({
  components: { Carousel },
  setup() {
    return { args, carouselSlides };
  },
  template: `
    <div class="px-3" style="height: 400px;">
      <Carousel
        :value="carouselSlides"
        orientation="vertical"
        :numVisible="3"
        :numScroll="1"
        v-bind="args"
      >
        <template #item="{ data }">
          <div class="flex flex-col gap-3 px-3 py-3 border rounded min-w-0 overflow-hidden">
            <span v-html="data.title" class="font-bold truncate" />
            <span v-html="data.subtitle" />
          </div>
        </template>
      </Carousel>
    </div>
  `,
});

export const AutoplayTemplate = (args) => ({
  components: { Carousel },
  setup() {
    return { args, carouselSlides };
  },
  template: `
    <div class="px-3">
      <Carousel
        :value="carouselSlides"
        :autoplayInterval="3000"
        :numVisible="3"
        :numScroll="1"
        circular
        v-bind="args"
      >
        <template #item="{ data }">
          <div class="flex flex-col gap-3 px-3 py-3 border rounded min-w-0 overflow-hidden">
            <span v-html="data.title" class="font-bold truncate" />
            <span v-html="data.subtitle" />
          </div>
        </template>
      </Carousel>
    </div>
  `,
});
