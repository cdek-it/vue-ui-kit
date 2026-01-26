import Card from 'primevue/card';
import Button from 'primevue/button';

export const Template = (args) => ({
  components: { Card, Button },
  setup() {
    return { args };
  },
  template: `
    <div class="flex gap-4">
      <Card v-bind="args" style="width: 240px">
        <template #header>
          <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-500">
            Header Image
          </div>
        </template>
        
        <template #title>
          Title
        </template>
        
        <template #subtitle>
          Caption
        </template>
        
        <template #content>
          <div class="text-sm">
            Card content goes here. This is a flexible area for any content.
          </div>
        </template>
        
        <template #footer>
          <Button label="Action" size="small" />
        </template>
      </Card>
    </div>
  `,
});

export const OverlayTemplate = (args) => ({
  components: { Card, Button },
  setup() {
    return { args };
  },
  template: `
    <div class="flex gap-6 flex-wrap">
      <div class="flex flex-col gap-2">
        <span class="text-sm font-semibold">With Shadow (overlay: true)</span>
        <Card 
          v-bind="args" 
          style="width: 240px"
          :pt="{ root: { class: 'shadow-md' } }"
        >
          <template #header>
            <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-500">
              Header
            </div>
          </template>
          
          <template #title>
            Title
          </template>
          
          <template #subtitle>
            Caption
          </template>
          
          <template #content>
            <div class="text-sm">
              Card with shadow overlay effect.
            </div>
          </template>
          
          <template #footer>
            <Button label="Action" size="small" />
          </template>
        </Card>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-sm font-semibold">Without Shadow (overlay: false)</span>
        <Card 
          v-bind="args" 
          style="width: 240px"
          :pt="{ root: { class: 'shadow-none' } }"
        >
          <template #header>
            <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-500">
              Header
            </div>
          </template>
          
          <template #title>
            Title
          </template>
          
          <template #subtitle>
            Caption
          </template>
          
          <template #content>
            <div class="text-sm">
              Card without shadow, only border.
            </div>
          </template>
          
          <template #footer>
            <Button label="Action" size="small" />
          </template>
        </Card>
      </div>
    </div>
  `,
});

export const WithoutHeaderTemplate = (args) => ({
  components: { Card, Button },
  setup() {
    return { args };
  },
  template: `
    <div class="flex gap-4">
      <Card v-bind="args" style="width: 240px">
        <template #title>
          Title
        </template>
        
        <template #subtitle>
          Caption
        </template>
        
        <template #content>
          <div class="text-sm">
            Card without header image.
          </div>
        </template>
        
        <template #footer>
          <Button label="Action" size="small" />
        </template>
      </Card>
    </div>
  `,
});

export const WithoutFooterTemplate = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: `
    <div class="flex gap-4">
      <Card v-bind="args" style="width: 240px">
        <template #header>
          <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-500">
            Header Image
          </div>
        </template>
        
        <template #title>
          Title
        </template>
        
        <template #subtitle>
          Caption
        </template>
        
        <template #content>
          <div class="text-sm">
            Card without footer.
          </div>
        </template>
      </Card>
    </div>
  `,
});

export const WithoutCaptionTemplate = (args) => ({
  components: { Card, Button },
  setup() {
    return { args };
  },
  template: `
    <div class="flex gap-4">
      <Card v-bind="args" style="width: 240px">
        <template #header>
          <div class="bg-gray-200 h-32 flex items-center justify-center text-gray-500">
            Header Image
          </div>
        </template>
        
        <template #title>
          Title
        </template>
        
        <template #content>
          <div class="text-sm">
            Card without caption/subtitle.
          </div>
        </template>
        
        <template #footer>
          <Button label="Action" size="small" />
        </template>
      </Card>
    </div>
  `,
});
