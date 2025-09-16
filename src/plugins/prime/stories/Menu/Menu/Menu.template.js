import { Menu } from 'primevue';
import { ref } from 'vue';
import {
  baseMenuItems,
  selectedClass,
} from '@/plugins/prime/stories/Menu/consts';

export const Template = (args) => ({
  components: { Menu },
  setup() {
    const items = ref(baseMenuItems);

    delete items.value[0].class;

    items.value[0]['items'][0]['class'] = selectedClass;

    const codeSnippet = `const items ='${JSON.stringify(
      items.value,
      null,
      2
    )}' />`;

    return { args, items, codeSnippet };
  },
  template: `
    <div>
      <Menu :model="items"/>
      <br>
      <pre><code>{{ codeSnippet }}</code></pre>
    </div>
  `,
});
