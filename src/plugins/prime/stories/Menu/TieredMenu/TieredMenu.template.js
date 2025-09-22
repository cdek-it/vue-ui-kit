import { TieredMenu } from 'primevue';
import CodeSnippet from '@/plugins/prime/stories/_common/CodeSnippet.vue';
import { useMenu } from '@/plugins/prime/stories/Menu/_common/composables/useMenu';

export const Template = (args) => ({
  components: { TieredMenu, CodeSnippet },
  setup() {
    const { items } = useMenu();

    return { args, items };
  },
  template: `
    <div>
      <TieredMenu :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});
