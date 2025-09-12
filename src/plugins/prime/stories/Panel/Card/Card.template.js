import Card from 'primevue/card';

export const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: `
      <Card v-bind="args">
        <template #header>HEADER</template>
        
        <template #title>
          <div class="flex flex-col gap-1">
            <p class="title-h4">Title</p>
            <p class="caption">Caption</p>
          </div>
        </template>
        
        <template #content>
          CONTENT
        </template>
        
        <template #footer>
          FOOTER
        </template>
      </Card>
    `,
});
