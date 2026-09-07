import ScrollPanel from 'primevue/scrollpanel';

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;

const LOREM_LONG = Array(6).fill(LOREM).join('\n\n');

const CONTENT = LOREM_LONG;

export const Template = (args) => ({
  components: { ScrollPanel },
  setup() {
    return { args, content: CONTENT };
  },
  template: `
    <ScrollPanel v-bind="args" style="width: 100%; height: 200px">
      <p style="margin: 0; white-space: pre-line">{{ content }}</p>
    </ScrollPanel>
  `,
});

export const TemplateHorizontal = () => ({
  components: { ScrollPanel },
  template: `
    <ScrollPanel style="width: 100%; height: 80px">
      <p style="white-space: nowrap; margin: 0; line-height: 1.5">
        ${LOREM}
      </p>
    </ScrollPanel>
  `,
});

export const TemplateBoth = () => ({
  components: { ScrollPanel },
  setup() {
    return { lines: Array(12).fill(LOREM) };
  },
  template: `
    <ScrollPanel style="width: 100%; height: 200px">
      <div style="width: max-content">
        <p v-for="(line, i) in lines" :key="i" style="white-space: nowrap; margin: 0 0 0.5rem 0; line-height: 1.5">{{ line }}</p>
      </div>
    </ScrollPanel>
  `,
});
