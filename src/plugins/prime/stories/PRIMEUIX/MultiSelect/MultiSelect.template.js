import MultiSelect from 'primevue/multiselect';
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
  components: { MultiSelect },
  setup() {
    const selectedCities = ref([]);
    
    return { selectedCities, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <MultiSelect 
        v-model="selectedCities" 
        :options="cities" 
        optionLabel="name" 
        placeholder="Выберите города"
        class="w-full md:w-80"
      />
    </div>
  `
});

// С чипами
export const ChipsTemplate = () => ({
  components: { MultiSelect },
  setup() {
    const selectedCities = ref([]);
    
    return { selectedCities, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <MultiSelect 
        v-model="selectedCities" 
        :options="cities" 
        optionLabel="name"
        display="chip"
        placeholder="Выберите города"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Группы
export const GroupTemplate = () => ({
  components: { MultiSelect },
  setup() {
    const selectedCities = ref([]);
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
    
    return { selectedCities, groupedCities };
  },
  template: `
    <div class="flex justify-center p-4">
      <MultiSelect 
        v-model="selectedCities" 
        :options="groupedCities" 
        optionLabel="label" 
        optionGroupLabel="label"
        optionGroupChildren="items"
        placeholder="Выберите города"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Фильтр
export const FilterTemplate = () => ({
  components: { MultiSelect },
  setup() {
    const selectedCities = ref([]);
    
    return { selectedCities, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <MultiSelect 
        v-model="selectedCities" 
        :options="cities" 
        optionLabel="name"
        filter
        filterPlaceholder="Поиск города"
        placeholder="Выберите города"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { MultiSelect },
  setup() {
    const selectedCities = ref([]);
    
    return { selectedCities, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <MultiSelect 
        v-model="selectedCities" 
        :options="cities" 
        optionLabel="name"
        placeholder="Выберите города"
        class="w-full md:w-80"
      >
        <template #option="slotProps">
          <div class="flex items-center gap-2">
            <i class="pi pi-map-marker"></i>
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </MultiSelect>
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { MultiSelect },
  setup() {
    const selectedCities = ref([cities[0], cities[1]]);
    
    return { selectedCities, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <MultiSelect 
        v-model="selectedCities" 
        :options="cities" 
        optionLabel="name"
        disabled
        placeholder="Выберите города"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { MultiSelect },
  setup() {
    const selectedCities = ref([]);
    
    return { selectedCities, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2 w-full md:w-80">
        <MultiSelect 
          v-model="selectedCities" 
          :options="cities" 
          optionLabel="name"
          invalid
          placeholder="Выберите города"
          class="w-full"
        />
        <small class="text-red-600">Необходимо выбрать хотя бы один город</small>
      </div>
    </div>
  `
});

