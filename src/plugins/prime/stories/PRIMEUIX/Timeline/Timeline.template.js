import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Timeline, Card },
  setup() {
    const events = ref([
      { status: 'Заказан', date: '15/10/2023 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
      { status: 'Обработан', date: '15/10/2023 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Отправлен', date: '15/10/2023 16:15', icon: 'pi pi-envelope', color: '#FF9800' },
      { status: 'Доставлен', date: '16/10/2023 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ]);
    
    return { events };
  },
  template: `
    <div class="flex justify-center p-4">
      <Timeline :value="events" class="w-full md:w-[600px]">
        <template #content="slotProps">
          <small class="text-color-secondary">{{ slotProps.item.date }}</small>
          <p class="mt-2 mb-0">{{ slotProps.item.status }}</p>
        </template>
      </Timeline>
    </div>
  `
});

// Горизонтальный
export const HorizontalTemplate = () => ({
  components: { Timeline },
  setup() {
    const events = ref(['2020', '2021', '2022', '2023']);
    
    return { events };
  },
  template: `
    <div class="flex justify-center p-4">
      <Timeline :value="events" layout="horizontal" class="w-full md:w-[600px]">
        <template #content="slotProps">
          <span>{{ slotProps.item }}</span>
        </template>
      </Timeline>
    </div>
  `
});

// С иконками
export const CustomIconTemplate = () => ({
  components: { Timeline, Card },
  setup() {
    const events = ref([
      { status: 'Заказан', date: '15/10/2023 10:30', icon: 'pi pi-shopping-cart' },
      { status: 'Обработан', date: '15/10/2023 14:00', icon: 'pi pi-cog' },
      { status: 'Отправлен', date: '15/10/2023 16:15', icon: 'pi pi-envelope' },
      { status: 'Доставлен', date: '16/10/2023 10:00', icon: 'pi pi-check' }
    ]);
    
    return { events };
  },
  template: `
    <div class="flex justify-center p-4">
      <Timeline :value="events" class="w-full md:w-[600px]">
        <template #marker="slotProps">
          <span class="flex items-center justify-center text-white rounded-full z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color, width: '2.5rem', height: '2.5rem' }">
            <i :class="slotProps.item.icon"></i>
          </span>
        </template>
        <template #content="slotProps">
          <Card>
            <template #title>{{ slotProps.item.status }}</template>
            <template #subtitle>{{ slotProps.item.date }}</template>
          </Card>
        </template>
      </Timeline>
    </div>
  `
});

// Чередующийся
export const AlternateTemplate = () => ({
  components: { Timeline, Card },
  setup() {
    const events = ref([
      { status: 'Заказан', date: '15/10/2023 10:30', icon: 'pi pi-shopping-cart' },
      { status: 'Обработан', date: '15/10/2023 14:00', icon: 'pi pi-cog' },
      { status: 'Отправлен', date: '15/10/2023 16:15', icon: 'pi pi-envelope' },
      { status: 'Доставлен', date: '16/10/2023 10:00', icon: 'pi pi-check' }
    ]);
    
    return { events };
  },
  template: `
    <div class="flex justify-center p-4">
      <Timeline :value="events" align="alternate" class="w-full md:w-[600px]">
        <template #content="slotProps">
          <small class="text-color-secondary">{{ slotProps.item.date }}</small>
          <p class="mt-2 mb-0">{{ slotProps.item.status }}</p>
        </template>
      </Timeline>
    </div>
  `
});

