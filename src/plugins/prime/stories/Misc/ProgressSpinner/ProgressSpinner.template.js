import { computed } from 'vue';
import ProgressSpinner from 'primevue/progressspinner';

export const Template = (args) => ({
  components: { ProgressSpinner },
  setup() {
    const sizeClass = computed(() =>
      args.size ? `p-progressspinner-${args.size}` : ''
    );

    const monochromeClass = computed(() =>
      args.multicolor ? '' : 'p-progressspinner-monochrome'
    );

    return { args, sizeClass, monochromeClass };
  },
  template: `<ProgressSpinner :class="[sizeClass, monochromeClass]" v-bind="args" />`,
});
