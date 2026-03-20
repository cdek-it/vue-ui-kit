import { TieredMenu } from 'primevue';
import { useMenu } from '@/plugins/prime/stories/Menu/_common/composables/useMenu';

export const BasicTemplate = () => ({
  components: { TieredMenu },
  setup() {
    const { items } = useMenu();

    if (items.value[0]) {
      delete items.value[0].class;
    }

    return { items };
  },
  template: `
    <div class="card flex justify-center">
      <TieredMenu :model="items" />
    </div>
  `,
});

export const WithSelectedTemplate = () => ({
  components: { TieredMenu },
  setup() {
    const { items } = useMenu();

    return { items };
  },
  template: `
    <div class="card flex justify-center">
      <TieredMenu :model="items" />
    </div>
  `,
});
