import ProgressSpinner from 'primevue/progressspinner';

// Базовый пример
export const BasicTemplate = () => ({
  components: { ProgressSpinner },
  template: `
    <div class="flex justify-center p-4">
      <ProgressSpinner />
    </div>
  `
});

// Пользовательский
export const CustomTemplate = () => ({
  components: { ProgressSpinner },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex gap-4">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--p-surface-ground)" animationDuration=".5s" />
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" fill="transparent" animationDuration="1s" />
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="2" animationDuration="2s" />
      </div>
    </div>
  `
});

