import { TieredMenu } from 'primevue';
import { ref } from 'vue';
import { baseMenuItems } from '@/plugins/prime/stories/Menu/consts';

export const Template = (args) => ({
  components: { TieredMenu },
  setup() {
    const items = ref(baseMenuItems);

    const codeSnippet = `const items ='${JSON.stringify(
      items.value,
      null,
      2
    )}' />`;

    return { args, items, codeSnippet };
  },
  template: `
    <div>
      <TieredMenu :model="items"/>
      <br>
      <pre><code>{{ codeSnippet }}</code></pre>
    </div>
  `,
});
