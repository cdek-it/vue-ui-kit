import Checkbox from 'primevue/checkbox';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Checkbox },
  setup() {
    const checked = ref(false);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex items-center">
        <Checkbox v-model="checked" inputId="agree" binary />
        <label for="agree" class="ml-2">Я согласен с условиями</label>
      </div>
    </div>
  `
});

// Группа
export const GroupTemplate = () => ({
  components: { Checkbox },
  setup() {
    const categories = ref([]);
    
    return { categories };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3">
        <div class="flex items-center">
          <Checkbox v-model="categories" inputId="cat1" value="Technology" />
          <label for="cat1" class="ml-2">Технологии</label>
        </div>
        <div class="flex items-center">
          <Checkbox v-model="categories" inputId="cat2" value="Finance" />
          <label for="cat2" class="ml-2">Финансы</label>
        </div>
        <div class="flex items-center">
          <Checkbox v-model="categories" inputId="cat3" value="Sports" />
          <label for="cat3" class="ml-2">Спорт</label>
        </div>
        <div class="flex items-center">
          <Checkbox v-model="categories" inputId="cat4" value="Entertainment" />
          <label for="cat4" class="ml-2">Развлечения</label>
        </div>
      </div>
    </div>
  `
});

// Динамические значения
export const DynamicTemplate = () => ({
  components: { Checkbox },
  setup() {
    const checked = ref(false);
    const cities = ref([
      { name: 'Москва', code: 'MSK' },
      { name: 'Санкт-Петербург', code: 'SPB' },
      { name: 'Новосибирск', code: 'NSK' },
      { name: 'Екатеринбург', code: 'EKB' }
    ]);
    const selectedCities = ref([]);
    
    return { checked, cities, selectedCities };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3">
        <div v-for="city in cities" :key="city.code" class="flex items-center">
          <Checkbox v-model="selectedCities" :inputId="city.code" :value="city" />
          <label :for="city.code" class="ml-2">{{ city.name }}</label>
        </div>
      </div>
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { Checkbox },
  setup() {
    const checked = ref(true);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex items-center">
        <Checkbox v-model="checked" inputId="disabled" binary disabled />
        <label for="disabled" class="ml-2">Отключенный checkbox</label>
      </div>
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { Checkbox },
  setup() {
    const checked = ref(false);
    
    return { checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2">
        <div class="flex items-center">
          <Checkbox v-model="checked" inputId="invalid" binary invalid />
          <label for="invalid" class="ml-2">Необходимо согласиться</label>
        </div>
        <small class="text-red-600">Это поле обязательно</small>
      </div>
    </div>
  `
});
