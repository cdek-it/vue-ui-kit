import Carousel from 'primevue/carousel';

export const Template = (args) => ({
  components: { Carousel },
  setup() {
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

    return {
      args,
      carouselSlides,
    };
  },
  template: `
    <div class="px-3">
      <Carousel
        :value="carouselSlides"
        :numVisible="5"
        :numScroll="1"
      >
        <template #item="{ data }">
          <div class="flex flex-col gap-3 mx-1 px-3 py-3 border rounded">
            <span v-html="data.title" />
            <span v-html="data.subtitle" />
          </div>
        </template>
      </Carousel>
    </div>
  `,
});
