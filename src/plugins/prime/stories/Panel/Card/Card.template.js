import Card from 'primevue/card';
import { ExtraButton } from '@/primeBlocks';

export const Template = () => ({
  components: { Card, ExtraButton },
  template: `
    <Card style="width: 20rem">
      <template #header>
        <div class="bg-gray-100 h-32 flex items-center justify-center text-gray-400">
          <i class="ti ti-photo text-3xl"></i>
        </div>
      </template>
      <template #title>Title</template>
      <template #subtitle>Caption</template>
      <template #content>
        <p class="text-sm">Контент карточки. Гибкая область для любого содержимого.</p>
      </template>
      <template #footer>
        <ExtraButton label="Действие" size="small" style="width: 100%" />
      </template>
    </Card>
  `,
});

export const TemplateOverlay = () => ({
  components: { Card, ExtraButton },
  template: `
    <Card style="width: 20rem" class="shadow-md">
      <template #header>
        <div class="bg-gray-100 h-32 flex items-center justify-center text-gray-400">
          <i class="ti ti-photo text-3xl"></i>
        </div>
      </template>
      <template #title>Title</template>
      <template #subtitle>Caption</template>
      <template #content>
        <p class="text-sm">Карточка с тенью.</p>
      </template>
      <template #footer>
        <ExtraButton label="Действие" size="small" style="width: 100%" />
      </template>
    </Card>
  `,
});

export const TemplateWithoutHeader = () => ({
  components: { Card, ExtraButton },
  template: `
    <Card style="width: 20rem">
      <template #title>Title</template>
      <template #subtitle>Caption</template>
      <template #content>
        <p class="text-sm">Карточка без изображения в шапке.</p>
      </template>
      <template #footer>
        <ExtraButton label="Действие" size="small" style="width: 100%" />
      </template>
    </Card>
  `,
});

export const TemplateWithoutFooter = () => ({
  components: { Card },
  template: `
    <Card style="width: 20rem">
      <template #header>
        <div class="bg-gray-100 h-32 flex items-center justify-center text-gray-400">
          <i class="ti ti-photo text-3xl"></i>
        </div>
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
  components: { Card, ExtraButton },
  template: `
    <Card style="width: 20rem">
      <template #header>
        <div class="bg-gray-100 h-32 flex items-center justify-center text-gray-400">
          <i class="ti ti-photo text-3xl"></i>
        </div>
      </template>
      <template #title>Title</template>
      <template #content>
        <p class="text-sm">Карточка без подзаголовка.</p>
      </template>
      <template #footer>
        <ExtraButton label="Действие" size="small" style="width: 100%" />
      </template>
    </Card>
  `,
});
