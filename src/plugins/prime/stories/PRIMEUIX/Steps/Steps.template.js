import Steps from 'primevue/steps';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Steps },
  setup() {
    const items = ref([
      {
        label: 'Персональные данные'
      },
      {
        label: 'Резервирование'
      },
      {
        label: 'Оплата'
      },
      {
        label: 'Подтверждение'
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Steps :model="items" class="w-full md:w-[800px]" />
    </div>
  `
});

// Интерактивный
export const InteractiveTemplate = () => ({
  components: { Steps },
  setup() {
    const activeStep = ref(0);
    const items = ref([
      {
        label: 'Персональные данные',
        command: () => { activeStep.value = 0; }
      },
      {
        label: 'Резервирование',
        command: () => { activeStep.value = 1; }
      },
      {
        label: 'Оплата',
        command: () => { activeStep.value = 2; }
      },
      {
        label: 'Подтверждение',
        command: () => { activeStep.value = 3; }
      }
    ]);
    
    return { activeStep, items };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-[800px]">
        <Steps :model="items" :activeStep="activeStep" />
        <div class="mt-4 p-4 border border-surface-200 rounded-lg">
          <p class="font-semibold">Шаг {{ activeStep + 1 }}: {{ items[activeStep].label }}</p>
        </div>
      </div>
    </div>
  `
});

// Только чтение
export const ReadonlyTemplate = () => ({
  components: { Steps },
  setup() {
    const items = ref([
      {
        label: 'Персональные данные'
      },
      {
        label: 'Резервирование'
      },
      {
        label: 'Оплата'
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Steps :model="items" :activeStep="1" readonly class="w-full md:w-[800px]" />
    </div>
  `
});

