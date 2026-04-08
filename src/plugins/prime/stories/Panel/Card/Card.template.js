import Card from 'primevue/card';
import Button from 'primevue/button';

export const Template = () => ({
  components: { Card, Button },
  template: `
    <Card style="width: 20rem">
      <template #header>
        <img alt="user header" src="assets/mascot.jpg" class="w-full" />
      </template>
      <template #title>Title</template>
      <template #subtitle>Caption</template>
      <template #content>
        <p class="text-sm">Контент карточки. Гибкая область для любого содержимого.</p>
      </template>
      <template #footer>
        <Button label="Действие" size="small" style="width: 100%" />
      </template>
    </Card>
  `,
});

export const TemplateOverlay = () => ({
  components: { Card, Button },
  template: `
    <Card style="width: 20rem" class="shadow-md">
      <template #header>
        <img alt="user header" src="assets/mascot.jpg" class="w-full" />
      </template>
      <template #title>Title</template>
      <template #subtitle>Caption</template>
      <template #content>
        <p class="text-sm">Карточка с тенью.</p>
      </template>
      <template #footer>
        <Button label="Действие" size="small" style="width: 100%" />
      </template>
    </Card>
  `,
});

export const TemplateWithoutHeader = () => ({
  components: { Card, Button },
  template: `
    <Card style="width: 20rem">
      <template #title>Title</template>
      <template #subtitle>Caption</template>
      <template #content>
        <p class="text-sm">Карточка без изображения в шапке.</p>
      </template>
      <template #footer>
        <Button label="Действие" size="small" style="width: 100%" />
      </template>
    </Card>
  `,
});

export const TemplateWithoutFooter = () => ({
  components: { Card },
  template: `
    <Card style="width: 20rem">
      <template #header>
        <img alt="user header" src="assets/mascot.jpg" class="w-full" />
      </template>
      <template #title>Title</template>
      <template #subtitle>Caption</template>
      <template #content>
        <p class="text-sm">Карточка без футера.</p>
      </template>
    </Card>
  `,
});

export const TemplateWithoutSubtitle = () => ({
  components: { Card, Button },
  template: `
    <Card style="width: 20rem">
      <template #header>
        <img alt="user header" src="assets/mascot.jpg" class="w-full" />
      </template>
      <template #title>Title</template>
      <template #content>
        <p class="text-sm">Карточка без подзаголовка.</p>
      </template>
      <template #footer>
        <Button label="Действие" size="small" style="width: 100%" />
      </template>
    </Card>
  `,
});
