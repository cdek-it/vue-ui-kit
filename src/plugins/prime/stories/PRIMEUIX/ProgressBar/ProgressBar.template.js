import ProgressBar from 'primevue/progressbar';

// Базовый пример
export const BasicTemplate = () => ({
  components: { ProgressBar },
  template: `
    <div class="flex justify-center p-4">
      <ProgressBar :value="50" class="w-full md:w-96" />
    </div>
  `
});

// Динамическое значение
export const DynamicTemplate = () => ({
  components: { ProgressBar },
  setup() {
    const { ref, onMounted, onUnmounted } = require('vue');
    const value = ref(0);
    let interval;
    
    onMounted(() => {
      interval = setInterval(() => {
        value.value = value.value + Math.floor(Math.random() * 10) + 1;
        
        if (value.value >= 100) {
          value.value = 100;
          clearInterval(interval);
        }
      }, 500);
    });
    
    onUnmounted(() => {
      if (interval) {
        clearInterval(interval);
      }
    });
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <ProgressBar :value="value" class="w-full md:w-96" />
    </div>
  `
});

// Неопределенный
export const IndeterminateTemplate = () => ({
  components: { ProgressBar },
  template: `
    <div class="flex justify-center p-4">
      <ProgressBar mode="indeterminate" class="w-full md:w-96" />
    </div>
  `
});

// Пользовательский цвет
export const ColorTemplate = () => ({
  components: { ProgressBar },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-4 w-full md:w-96">
        <ProgressBar :value="25" />
        <ProgressBar :value="50" />
        <ProgressBar :value="75" />
        <ProgressBar :value="100" />
      </div>
    </div>
  `
});

