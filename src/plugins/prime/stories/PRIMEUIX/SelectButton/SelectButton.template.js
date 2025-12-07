import SelectButton from 'primevue/selectbutton';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { SelectButton },
  setup() {
    const value = ref('');
    const options = ref(['Выкл', 'Вкл']);
    
    return { value, options };
  },
  template: `
    <div class="flex justify-center p-4">
      <SelectButton v-model="value" :options="options" />
    </div>
  `
});

// Множественный
export const MultipleTemplate = () => ({
  components: { SelectButton },
  setup() {
    const value = ref([]);
    const options = ref(['Смелый', 'Курсив', 'Подчеркнутый']);
    
    return { value, options };
  },
  template: `
    <div class="flex justify-center p-4">
      <SelectButton v-model="value" :options="options" multiple />
    </div>
  `
});

// С иконками
export const IconsTemplate = () => ({
  components: { SelectButton },
  setup() {
    const value = ref('');
    const options = ref([
      { icon: 'pi pi-align-left', value: 'left' },
      { icon: 'pi pi-align-center', value: 'center' },
      { icon: 'pi pi-align-right', value: 'right' },
      { icon: 'pi pi-align-justify', value: 'justify' }
    ]);
    
    return { value, options };
  },
  template: `
    <div class="flex justify-center p-4">
      <SelectButton v-model="value" :options="options" optionValue="value">
        <template #option="slotProps">
          <i :class="slotProps.option.icon"></i>
        </template>
      </SelectButton>
    </div>
  `
});

// Пользовательский контент
export const CustomTemplate = () => ({
  components: { SelectButton },
  setup() {
    const value = ref('');
    const options = ref([
      { name: 'Основной', value: 1 },
      { name: 'Премиум', value: 2 },
      { name: 'Корпоративный', value: 3 }
    ]);
    
    return { value, options };
  },
  template: `
    <div class="flex justify-center p-4">
      <SelectButton v-model="value" :options="options" optionLabel="name" optionValue="value" />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { SelectButton },
  setup() {
    const value = ref('Вкл');
    const options = ref(['Выкл', 'Вкл']);
    
    return { value, options };
  },
  template: `
    <div class="flex justify-center p-4">
      <SelectButton v-model="value" :options="options" disabled />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { SelectButton },
  setup() {
    const value = ref('');
    const options = ref(['Да', 'Нет']);
    
    return { value, options };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2">
        <SelectButton v-model="value" :options="options" invalid />
        <small class="text-red-600">Необходимо выбрать вариант</small>
      </div>
    </div>
  `
});

