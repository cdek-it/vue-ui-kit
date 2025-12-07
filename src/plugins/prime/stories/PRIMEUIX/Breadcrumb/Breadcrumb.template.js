import Breadcrumb from 'primevue/breadcrumb';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Breadcrumb },
  setup() {
    const home = ref({ icon: 'pi pi-home', route: '/' });
    const items = ref([
      { label: 'Электроника' },
      { label: 'Компьютер' },
      { label: 'Аксессуары' },
      { label: 'Клавиатура' },
      { label: 'Беспроводная' }
    ]);
    
    return { home, items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Breadcrumb :home="home" :model="items" class="w-full md:w-[600px]" />
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { Breadcrumb },
  setup() {
    const home = ref({ icon: 'pi pi-home', route: '/' });
    const items = ref([
      { label: 'Электроника', icon: 'pi pi-bolt' },
      { label: 'Компьютер', icon: 'pi pi-desktop' },
      { label: 'Аксессуары', icon: 'pi pi-th-large' }
    ]);
    
    return { home, items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Breadcrumb :home="home" :model="items" class="w-full md:w-[600px]">
        <template #item="{ item, props }">
          <a v-bind="props.action" class="flex items-center gap-2">
            <span :class="item.icon" />
            <span class="font-semibold">{{ item.label }}</span>
          </a>
        </template>
      </Breadcrumb>
    </div>
  `
});

