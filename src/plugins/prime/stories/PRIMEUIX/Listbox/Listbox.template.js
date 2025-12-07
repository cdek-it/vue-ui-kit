import Listbox from 'primevue/listbox';
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
  components: { Listbox },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Listbox 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name" 
        class="w-full md:w-80"
      />
    </div>
  `
});

// Множественный выбор
export const MultipleTemplate = () => ({
  components: { Listbox },
  setup() {
    const selectedCities = ref([]);
    
    return { selectedCities, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Listbox 
        v-model="selectedCities" 
        :options="cities" 
        optionLabel="name" 
        multiple
        class="w-full md:w-80"
      />
    </div>
  `
});

// Группы
export const GroupTemplate = () => ({
  components: { Listbox },
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
      <Listbox 
        v-model="selectedCity" 
        :options="groupedCities" 
        optionLabel="label" 
        optionGroupLabel="label"
        optionGroupChildren="items"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Фильтр
export const FilterTemplate = () => ({
  components: { Listbox },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Listbox 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name"
        filter
        filterPlaceholder="Поиск города"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { Listbox },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Listbox 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name"
        class="w-full md:w-80"
      >
        <template #option="slotProps">
          <div class="flex items-center gap-2">
            <i class="pi pi-map-marker"></i>
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Listbox>
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { Listbox },
  setup() {
    const selectedCity = ref(cities[0]);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <Listbox 
        v-model="selectedCity" 
        :options="cities" 
        optionLabel="name"
        disabled
        class="w-full md:w-80"
      />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { Listbox },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2">
        <Listbox 
          v-model="selectedCity" 
          :options="cities" 
          optionLabel="name"
          invalid
          class="w-full md:w-80"
        />
        <small class="text-red-600">Необходимо выбрать город</small>
      </div>
    </div>
  `
});

