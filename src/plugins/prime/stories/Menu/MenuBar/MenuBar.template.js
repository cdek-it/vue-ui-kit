import { Menubar } from 'primevue';
import { useMenu } from '@/plugins/prime/stories/Menu/_common/composables/useMenu';
import CodeSnippet from '@/plugins/prime/stories/_common/CodeSnippet.vue';

export const Template = (args) => ({
  components: { Menubar, CodeSnippet },
  setup() {
    const { items, codeSnippet } = useMenu();

    return { args, items, codeSnippet };
  },
  template: `
    <div>
      <Menubar :model="items"/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
`,
});
