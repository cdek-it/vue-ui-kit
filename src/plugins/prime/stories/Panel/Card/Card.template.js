import Card from 'primevue/card';
import Button from 'primevue/button';

export const Template = (args) => ({
  components: { Card, Button },
  setup() {
    return { args };
  },
  template: `
    <Card v-bind="args" :pt="args.inline ? { root: { class: 'p-card-inline' } } : {}" style="width: 240px">
      <template v-if="args.showHeader" #header>
        <div style="background: #f0f0f0; padding: 1rem; text-align: center;">
          HEADER
        </div>
      </template>
      
      <template #title>
        Title
      </template>
      
      <template v-if="args.showCaption !== false" #subtitle>
        Caption
      </template>
      
      <template #content>
        <div>Content goes here</div>
      </template>
      
      <template v-if="args.showFooter" #footer>
        <Button label="Action" size="small" />
      </template>
    </Card>
  `,
});
