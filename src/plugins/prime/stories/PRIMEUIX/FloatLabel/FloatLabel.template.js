import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import AutoComplete from 'primevue/autocomplete';
import { ref } from 'vue';

const cities = [
  { name: 'Москва', code: 'MSK' },
  { name: 'Санкт-Петербург', code: 'SPB' },
  { name: 'Новосибирск', code: 'NSK' },
  { name: 'Екатеринбург', code: 'EKB' }
];

// Базовый пример
export const BasicTemplate = () => ({
  components: { FloatLabel, InputText },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <FloatLabel class="w-full md:w-80">
        <InputText id="username" v-model="value" class="w-full" />
        <label for="username">Имя пользователя</label>
      </FloatLabel>
    </div>
  `
});

// Select
export const SelectTemplate = () => ({
  components: { FloatLabel, Select },
  setup() {
    const selectedCity = ref(null);
    
    return { selectedCity, cities };
  },
  template: `
    <div class="flex justify-center p-4">
      <FloatLabel class="w-full md:w-80">
        <Select 
          id="city" 
          v-model="selectedCity" 
          :options="cities" 
          optionLabel="name"
          class="w-full"
        />
        <label for="city">Выберите город</label>
      </FloatLabel>
    </div>
  `
});

// AutoComplete
export const AutoCompleteTemplate = () => ({
  components: { FloatLabel, AutoComplete },
  setup() {
    const value = ref('');
    const items = ref([]);
    
    const search = (event) => {
      items.value = cities
        .filter(city => city.name.toLowerCase().includes(event.query.toLowerCase()))
        .map(city => city.name);
    };
    
    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <FloatLabel class="w-full md:w-80">
        <AutoComplete 
          id="autocomplete" 
          v-model="value" 
          :suggestions="items" 
          @complete="search"
          class="w-full"
        />
        <label for="autocomplete">Поиск города</label>
      </FloatLabel>
    </div>
  `
});

// Textarea
export const TextareaTemplate = () => ({
  components: { FloatLabel, Textarea },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <FloatLabel class="w-full md:w-80">
        <Textarea id="description" v-model="value" rows="5" class="w-full" />
        <label for="description">Описание</label>
      </FloatLabel>
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { FloatLabel, InputText },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-80">
        <FloatLabel>
          <InputText id="username-invalid" v-model="value" invalid class="w-full" />
          <label for="username-invalid">Имя пользователя</label>
        </FloatLabel>
        <small class="text-red-600 mt-2">Это поле обязательно</small>
      </div>
    </div>
  `
});

