import { Menu } from 'primevue';
import { useMenu } from '@/plugins/prime/stories/Menu/_common/composables/useMenu';
import CodeSnippet from '@/plugins/prime/stories/_common/CodeSnippet.vue';
import { selectedMenuItemClass } from '@/plugins/prime/consts';

export const Template = (args) => ({
  components: { Menu, CodeSnippet },
  setup() {
    const { items } = useMenu();

    delete items.value[0].class;

    items.value[0]['items'][0]['class'] = selectedMenuItemClass;

    return { args, items };
  },
  template: `
    
    <div>
      <Menu :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
  `,
});
