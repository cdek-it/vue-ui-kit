import MeterGroup from 'primevue/metergroup';

// Базовый пример
export const BasicTemplate = () => ({
  components: { MeterGroup },
  setup() {
    const { ref } = require('vue');
    const value = ref([
      { label: 'Приложения', color: '#34d399', value: 24, icon: 'pi pi-table' },
      { label: 'Видео', color: '#fbbf24', value: 20, icon: 'pi pi-video' },
      { label: 'Музыка', color: '#60a5fa', value: 12, icon: 'pi pi-music' },
      { label: 'Остальное', color: '#c084fc', value: 10, icon: 'pi pi-circle' }
    ]);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <MeterGroup :value="value" class="w-full md:w-96" />
    </div>
  `
});

// Вертикальный
export const VerticalTemplate = () => ({
  components: { MeterGroup },
  setup() {
    const { ref } = require('vue');
    const value = ref([
      { label: 'Приложения', color: '#34d399', value: 24 },
      { label: 'Видео', color: '#fbbf24', value: 20 },
      { label: 'Музыка', color: '#60a5fa', value: 12 },
      { label: 'Остальное', color: '#c084fc', value: 10 }
    ]);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <MeterGroup :value="value" orientation="vertical" style="height: 300px" class="w-full md:w-96" />
    </div>
  `
});

// С иконками
export const IconTemplate = () => ({
  components: { MeterGroup },
  setup() {
    const { ref } = require('vue');
    const value = ref([
      { label: 'Приложения', color: '#34d399', value: 24, icon: 'pi pi-table' },
      { label: 'Видео', color: '#fbbf24', value: 20, icon: 'pi pi-video' },
      { label: 'Музыка', color: '#60a5fa', value: 12, icon: 'pi pi-music' }
    ]);
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <MeterGroup :value="value" class="w-full md:w-96">
        <template #label="{ value }">
          <div class="flex flex-col gap-4 mt-4">
            <div v-for="val in value" :key="val.label" class="flex items-center gap-2">
              <i :class="val.icon" :style="{ color: val.color }"></i>
              <span class="font-semibold">{{ val.label }}</span>
              <span class="ml-auto">{{ val.value }}%</span>
            </div>
          </div>
        </template>
      </MeterGroup>
    </div>
  `
});

