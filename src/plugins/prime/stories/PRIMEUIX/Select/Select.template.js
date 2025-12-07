import Select from 'primevue/select';
import { ref } from 'vue';

const cities = [
  { name: 'Москва', code: 'MSK' },
  { name: 'Санкт-Петербург', code: 'SPB' },
  { name: 'Новосибирск', code: 'NSK' },
  { name: 'Екатеринбург', code: 'EKB' },
  { name: 'Казань', code: 'KZN' }
];

// Базовый пример
export const BasicTemplate = () => ({
  components: { Select },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Select 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name" 
        placeholder="Выберите город"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Редактируемый
export const EditableTemplate = () => ({
  components: { Select },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Select 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name" 
        editable
        placeholder="Выберите или введите город"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Группы
export const GroupTemplate = () => ({
  components: { Select },
  setup() {
    const selectedCity = ref(null);
    const groupedCities = ref([
      {
        label: 'Центральный ФО',
        code: 'CFO',
        items: [
          { label: 'Москва', value: 'Moscow' },
          { label: 'Тверь', value: 'Tver' }
        ]
      },
      {
        label: 'Северо-Западный ФО',
        code: 'NWFO',
        items: [
          { label: 'Санкт-Петербург', value: 'SPB' },
          { label: 'Мурманск', value: 'Murmansk' }
        ]
      }
    ]);
    
    return { selectedCity, groupedCities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Select 
        v-model="selectedCity" 
        :options="groupedCities" 
        optionLabel="label" 
        optionGroupLabel="label"
        optionGroupChildren="items"
        placeholder="Выберите город"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Фильтр
export const FilterTemplate = () => ({
  components: { Select },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Select 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name"
        filter
        filterPlaceholder="Поиск города"
        placeholder="Выберите город"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { Select },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Select 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name"
        placeholder="Выберите город"
        class="w-full md:w-80"
      >
        <template #option="slotProps">
          <div class="flex items-center gap-2">
            <i class="pi pi-map-marker"></i>
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Select>
    </div>
  `
});

// Заполненный
export const FilledTemplate = () => ({
  components: { Select },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Select 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name"
        variant="filled"
        placeholder="Выберите город"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { Select },
  setup() {
    const selectedCity = ref(cities[0]);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Select 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name"
        disabled
        placeholder="Выберите город"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { Select },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2 w-full md:w-80">
        <Select 
          v-model="selectedCity" 
          :options="cities" 
          optionLabel="name"
          invalid
          placeholder="Выберите город"
          class="w-full"
        />
        <small class="text-red-600">Необходимо выбрать город</small>
      </div>
    </div>
  `
});
