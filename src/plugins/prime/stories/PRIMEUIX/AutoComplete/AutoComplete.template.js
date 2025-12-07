import AutoComplete from 'primevue/autocomplete';
import FloatLabel from 'primevue/floatlabel';
import IftaLabel from 'primevue/iftalabel';
import Button from 'primevue/button';
import { ref } from 'vue';

// Данные для примеров
const countries = [
  { name: 'Австралия', code: 'AU' },
  { name: 'Бразилия', code: 'BR' },
  { name: 'Китай', code: 'CN' },
  { name: 'Египет', code: 'EG' },
  { name: 'Франция', code: 'FR' },
  { name: 'Германия', code: 'DE' },
  { name: 'Индия', code: 'IN' },
  { name: 'Япония', code: 'JP' },
  { name: 'Испания', code: 'ES' },
  { name: 'США', code: 'US' }
];

const cities = [
  {
    label: 'Германия',
    code: 'DE',
    items: [
      { label: 'Берлин', value: 'Berlin' },
      { label: 'Франкфурт', value: 'Frankfurt' },
      { label: 'Гамбург', value: 'Hamburg' },
      { label: 'Мюнхен', value: 'Munich' }
    ]
  },
  {
    label: 'США',
    code: 'US',
    items: [
      { label: 'Чикаго', value: 'Chicago' },
      { label: 'Лос-Анджелес', value: 'Los Angeles' },
      { label: 'Нью-Йорк', value: 'New York' },
      { label: 'Сан-Франциско', value: 'San Francisco' }
    ]
  },
  {
    label: 'Япония',
    code: 'JP',
    items: [
      { label: 'Киото', value: 'Kyoto' },
      { label: 'Осака', value: 'Osaka' },
      { label: 'Токио', value: 'Tokyo' },
      { label: 'Йокогама', value: 'Yokohama' }
    ]
  }
];

// Базовый пример
export const BasicTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const value = ref('');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="value" 
        :suggestions="items" 
        @complete="search"
        placeholder="Поиск страны"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Выпадающий список
export const DropdownTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const value = ref('');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="value" 
        :suggestions="items" 
        @complete="search"
        dropdown
        placeholder="Поиск страны"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Объекты
export const ObjectsTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const selectedCountry = ref(null);
    const filteredCountries = ref([]);

    const search = (event) => {
      if (!event.query.trim().length) {
        filteredCountries.value = [...countries];
      } else {
        filteredCountries.value = countries.filter((country) => {
          return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    };

    return { selectedCountry, filteredCountries, search };
  },
  template: `
    <div class="flex flex-col gap-4 p-4 items-center">
      <AutoComplete 
        v-model="selectedCountry" 
        optionLabel="name"
        :suggestions="filteredCountries" 
        @complete="search"
        placeholder="Выберите страну"
        class="w-full md:w-80"
      />
      <div v-if="selectedCountry" class="text-sm">
        Выбрано: {{ selectedCountry.name }} ({{ selectedCountry.code }})
      </div>
    </div>
  `
});

// Формы
export const FormsTemplate = () => ({
  components: { AutoComplete, Button },
  setup() {
    const selectedCountry = ref(null);
    const filteredCountries = ref([]);
    const submitted = ref(false);

    const search = (event) => {
      if (!event.query.trim().length) {
        filteredCountries.value = [...countries];
      } else {
        filteredCountries.value = countries.filter((country) => {
          return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    };

    const onSubmit = () => {
      submitted.value = true;
      alert('Форма отправлена: ' + (selectedCountry.value?.name || 'не выбрано'));
    };

    return { selectedCountry, filteredCountries, search, onSubmit, submitted };
  },
  template: `
    <div class="flex justify-center p-4">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-4 w-full md:w-80">
        <div class="flex flex-col gap-2">
          <label for="country">Страна</label>
          <AutoComplete 
            id="country"
            v-model="selectedCountry" 
            optionLabel="name"
            :suggestions="filteredCountries" 
            @complete="search"
            placeholder="Выберите страну"
            :invalid="submitted && !selectedCountry"
            class="w-full"
          />
          <small v-if="submitted && !selectedCountry" class="text-red-600">
            Необходимо выбрать страну
          </small>
        </div>
        <Button type="submit" label="Отправить" severity="secondary" />
      </form>
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { AutoComplete, Button },
  setup() {
    const selectedCountry = ref(null);
    const filteredCountries = ref([]);

    const search = (event) => {
      if (!event.query.trim().length) {
        filteredCountries.value = [...countries];
      } else {
        filteredCountries.value = countries.filter((country) => {
          return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    };

    const getFlagClass = (code) => {
      return `flag flag-${code.toLowerCase()}`;
    };

    return { selectedCountry, filteredCountries, search, getFlagClass };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="selectedCountry" 
        optionLabel="name"
        :suggestions="filteredCountries" 
        @complete="search"
        placeholder="Выберите страну"
        class="w-full md:w-80"
      >
        <template #option="slotProps">
          <div class="flex items-center gap-2">
            <span class="text-xl">🌍</span>
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
        <template #header>
          <div class="font-medium px-3 py-2 border-b">Доступные страны</div>
        </template>
        <template #footer>
          <div class="px-3 py-2 border-t">
            <div class="text-sm text-gray-600">Всего: {{ filteredCountries.length }}</div>
          </div>
        </template>
      </AutoComplete>
    </div>
  `
});

// Группы
export const GroupTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const selectedCity = ref(null);
    const filteredCities = ref([]);

    const search = (event) => {
      let query = event.query;
      let filtered = [];

      for (let country of cities) {
        let filteredItems = country.items.filter((item) => {
          return item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        if (filteredItems && filteredItems.length) {
          filtered.push({ ...country, items: filteredItems });
        }
      }

      filteredCities.value = filtered;
    };

    return { selectedCity, filteredCities, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="selectedCity" 
        :suggestions="filteredCities" 
        @complete="search"
        optionLabel="label" 
        optionGroupLabel="label" 
        optionGroupChildren="items"
        placeholder="Подсказка: введите 'a'"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Принудительный выбор
export const ForceSelectionTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const value = ref('');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="value" 
        :suggestions="items" 
        @complete="search"
        forceSelection
        placeholder="Должно быть выбрано из списка"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Виртуальная прокрутка
export const VirtualScrollTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const value = ref('');
    const filteredItems = ref([]);

    // Генерируем большой список элементов
    const items = Array.from({ length: 10000 }, (_, i) => `Элемент ${i + 1}`);

    const search = (event) => {
      filteredItems.value = items.filter(item => 
        item.toLowerCase().includes(event.query.toLowerCase())
      );
    };

    return { value, filteredItems, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="value" 
        :suggestions="filteredItems" 
        @complete="search"
        :virtualScrollerOptions="{ itemSize: 38 }"
        placeholder="Поиск из 10000 элементов"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Множественный выбор
export const MultipleTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const selectedCountries = ref([]);
    const filteredCountries = ref([]);

    const search = (event) => {
      if (!event.query.trim().length) {
        filteredCountries.value = [...countries];
      } else {
        filteredCountries.value = countries.filter((country) => {
          return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    };

    return { selectedCountries, filteredCountries, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="selectedCountries" 
        :suggestions="filteredCountries" 
        @complete="search"
        optionLabel="name"
        multiple
        placeholder="Выберите страны"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Float Label
export const FloatLabelTemplate = () => ({
  components: { AutoComplete, FloatLabel },
  setup() {
    const value = ref('');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <FloatLabel class="w-full md:w-80">
        <AutoComplete 
          id="autocomplete-float"
          v-model="value" 
          :suggestions="items" 
          @complete="search"
          class="w-full"
        />
        <label for="autocomplete-float">Поиск страны</label>
      </FloatLabel>
    </div>
  `
});

// Ifta Label
export const IftaLabelTemplate = () => ({
  components: { AutoComplete, IftaLabel },
  setup() {
    const value = ref('');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <IftaLabel class="w-full md:w-80">
        <AutoComplete 
          id="autocomplete-ifta"
          v-model="value" 
          :suggestions="items" 
          @complete="search"
          variant="filled"
          class="w-full"
        />
        <label for="autocomplete-ifta">Поиск страны</label>
      </IftaLabel>
    </div>
  `
});

// Иконка очистки
export const ClearIconTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const value = ref('');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="value" 
        :suggestions="items" 
        @complete="search"
        showClear
        placeholder="Поиск страны"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Размеры
export const SizesTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const valueSmall = ref('');
    const valueNormal = ref('');
    const valueLarge = ref('');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { valueSmall, valueNormal, valueLarge, items, search };
  },
  template: `
    <div class="flex flex-col gap-4 p-4 items-center">
      <div class="flex flex-col gap-2 w-full md:w-80">
        <label class="text-sm">Small</label>
        <AutoComplete 
          v-model="valueSmall" 
          :suggestions="items" 
          @complete="search"
          size="small"
          placeholder="Small size"
          class="w-full"
        />
      </div>
      <div class="flex flex-col gap-2 w-full md:w-80">
        <label class="text-sm">Normal</label>
        <AutoComplete 
          v-model="valueNormal" 
          :suggestions="items" 
          @complete="search"
          placeholder="Normal size"
          class="w-full"
        />
      </div>
      <div class="flex flex-col gap-2 w-full md:w-80">
        <label class="text-sm">Large</label>
        <AutoComplete 
          v-model="valueLarge" 
          :suggestions="items" 
          @complete="search"
          size="large"
          placeholder="Large size"
          class="w-full"
        />
      </div>
    </div>
  `
});

// Заполненный
export const FilledTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const value = ref('');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="value" 
        :suggestions="items" 
        @complete="search"
        variant="filled"
        placeholder="Поиск страны"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const value = ref('Германия');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <AutoComplete 
        v-model="value" 
        :suggestions="items" 
        @complete="search"
        disabled
        placeholder="Отключенное состояние"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { AutoComplete },
  setup() {
    const value = ref('');
    const items = ref([]);

    const search = (event) => {
      items.value = countries
        .map(country => country.name)
        .filter(name => name.toLowerCase().includes(event.query.toLowerCase()));
    };

    return { value, items, search };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2 w-full md:w-80">
        <AutoComplete 
          v-model="value" 
          :suggestions="items" 
          @complete="search"
          invalid
          placeholder="Невалидное состояние"
          class="w-full"
        />
        <small class="text-red-600">Это поле обязательно для заполнения</small>
      </div>
    </div>
  `
});

