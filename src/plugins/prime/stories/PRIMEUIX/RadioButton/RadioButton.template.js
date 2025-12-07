import RadioButton from 'primevue/radiobutton';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { RadioButton },
  setup() {
    const pizza = ref('');
    
    return { pizza };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3">
        <div class="flex items-center">
          <RadioButton v-model="pizza" inputId="cheese" name="pizza" value="Cheese" />
          <label for="cheese" class="ml-2">Сырная</label>
        </div>
        <div class="flex items-center">
          <RadioButton v-model="pizza" inputId="mushroom" name="pizza" value="Mushroom" />
          <label for="mushroom" class="ml-2">Грибная</label>
        </div>
        <div class="flex items-center">
          <RadioButton v-model="pizza" inputId="pepperoni" name="pizza" value="Pepperoni" />
          <label for="pepperoni" class="ml-2">Пепперони</label>
        </div>
        <div class="flex items-center">
          <RadioButton v-model="pizza" inputId="veggie" name="pizza" value="Veggie" />
          <label for="veggie" class="ml-2">Вегетарианская</label>
        </div>
      </div>
    </div>
  `
});

// Группа
export const GroupTemplate = () => ({
  components: { RadioButton },
  setup() {
    const category = ref('');
    const categories = ref([
      { name: 'Бухгалтерия', key: 'A' },
      { name: 'Маркетинг', key: 'M' },
      { name: 'Производство', key: 'P' },
      { name: 'Исследования', key: 'R' }
    ]);
    
    return { category, categories };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3">
        <div v-for="cat in categories" :key="cat.key" class="flex items-center">
          <RadioButton v-model="category" :inputId="cat.key" name="category" :value="cat.key" />
          <label :for="cat.key" class="ml-2">{{ cat.name }}</label>
        </div>
      </div>
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { RadioButton },
  setup() {
    const value = ref('Cheese');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3">
        <div class="flex items-center">
          <RadioButton v-model="value" inputId="cheese-d" name="pizza-d" value="Cheese" disabled />
          <label for="cheese-d" class="ml-2">Сырная</label>
        </div>
        <div class="flex items-center">
          <RadioButton v-model="value" inputId="mushroom-d" name="pizza-d" value="Mushroom" disabled />
          <label for="mushroom-d" class="ml-2">Грибная</label>
        </div>
      </div>
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { RadioButton },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-3">
        <div class="flex items-center">
          <RadioButton v-model="value" inputId="cheese-i" name="pizza-i" value="Cheese" invalid />
          <label for="cheese-i" class="ml-2">Сырная</label>
        </div>
        <div class="flex items-center">
          <RadioButton v-model="value" inputId="mushroom-i" name="pizza-i" value="Mushroom" invalid />
          <label for="mushroom-i" class="ml-2">Грибная</label>
        </div>
        <small class="text-red-600 mt-2">Выберите один вариант</small>
      </div>
    </div>
  `
});

