import { ref } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import FloatLabel from 'primevue/floatlabel';

export const Template = (args) => ({
  components: { AutoComplete },
  setup() {
    const cities = ref([
      'Москва',
      'Санкт-Петербург',
      'Новосибирск',
      'Екатеринбург',
      'Казань',
      'Нижний Новгород',
      'Челябинск',
      'Самара',
      'Омск',
      'Ростов-на-Дону',
      'Уфа',
      'Красноярск',
      'Воронеж',
      'Пермь',
      'Волгоград',
      'Краснодар',
      'Саратов',
      'Тюмень',
      'Тольятти',
      'Ижевск',
    ]);
    const filteredCities = ref([]);

    const search = (event) => {
      if (!event.query.trim().length) {
        filteredCities.value = [...cities.value];
      } else {
        filteredCities.value = cities.value.filter((city) => {
          return city.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    };

    return { args, cities, filteredCities, search };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '30px' }">
  <div :style="{ padding: '10px', background: '#f5f5f5', borderRadius: '4px', fontSize: '14px' }">
    💡 <strong>Подсказка:</strong> Начните вводить название города (например: "Мос", "Сан", "Ека", "Каз")
  </div>

  <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
    <span></span>
    <span></span>
    <span><code>v-model="Москва"</code></span>

    <span :style="{ justifySelf: 'flex-start' }"></span>
    <AutoComplete placeholder="Выберите город" :suggestions="filteredCities" @complete="search" v-bind="args" />
    <AutoComplete placeholder="Выберите город" :suggestions="filteredCities" @complete="search" :default-value="'Москва'" v-bind="args" />

    <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
    <AutoComplete placeholder="Выберите город" :suggestions="filteredCities" @complete="search" invalid v-bind="args" />
    <AutoComplete placeholder="Выберите город" :suggestions="filteredCities" @complete="search" :default-value="'Москва'" invalid v-bind="args" />

    <span :style="{ justifySelf: 'flex-start' }"><code>loading</code></span>
    <AutoComplete placeholder="Выберите город" :suggestions="filteredCities" @complete="search" loading v-bind="args" />
    <AutoComplete placeholder="Выберите город" :suggestions="filteredCities" @complete="search" :default-value="'Москва'" loading v-bind="args" />

    <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
    <AutoComplete placeholder="Выберите город" :suggestions="filteredCities" @complete="search" disabled v-bind="args" />
    <AutoComplete placeholder="Выберите город" :suggestions="filteredCities" @complete="search" :default-value="'Москва'" disabled v-bind="args" />
  </div>
</div>
`,
});

export const TemplateMultiple = (args) => ({
  components: { AutoComplete },
  setup() {
    const cities = ref([
      'Москва',
      'Санкт-Петербург',
      'Новосибирск',
      'Екатеринбург',
      'Казань',
      'Нижний Новгород',
      'Челябинск',
      'Самара',
      'Омск',
      'Ростов-на-Дону',
      'Уфа',
      'Красноярск',
      'Воронеж',
      'Пермь',
      'Волгоград',
      'Краснодар',
      'Саратов',
      'Тюмень',
      'Тольятти',
      'Ижевск',
    ]);
    const filteredCities = ref([]);
    const defaultValue = ref(['Москва', 'Санкт-Петербург']);

    const search = (event) => {
      if (!event.query.trim().length) {
        filteredCities.value = [...cities.value];
      } else {
        filteredCities.value = cities.value.filter((city) => {
          return city.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    };

    return { args, cities, filteredCities, search, defaultValue };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '30px' }">
  <div :style="{ padding: '10px', background: '#f5f5f5', borderRadius: '4px', fontSize: '14px' }">
    💡 <strong>Подсказка:</strong> Начните вводить название города для множественного выбора (например: "Ново", "Рос", "Крас")
  </div>

  <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
    <span></span>
    <span></span>
    <span><code>v-model="[Москва, Санкт-Петербург]"</code></span>

    <span :style="{ justifySelf: 'flex-start' }"></span>
    <AutoComplete placeholder="Выберите города" :suggestions="filteredCities" @complete="search" multiple v-bind="args" />
    <AutoComplete placeholder="Выберите города" :suggestions="filteredCities" @complete="search" :default-value="defaultValue" multiple v-bind="args" />

    <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
    <AutoComplete placeholder="Выберите города" :suggestions="filteredCities" @complete="search" invalid multiple v-bind="args" />
    <AutoComplete placeholder="Выберите города" :suggestions="filteredCities" @complete="search" :default-value="defaultValue" invalid multiple v-bind="args" />

    <span :style="{ justifySelf: 'flex-start' }"><code>loading</code></span>
    <AutoComplete placeholder="Выберите города" :suggestions="filteredCities" @complete="search" loading multiple v-bind="args" />
    <AutoComplete placeholder="Выберите города" :suggestions="filteredCities" @complete="search" :default-value="defaultValue" loading multiple v-bind="args" />

    <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
    <AutoComplete placeholder="Выберите города" :suggestions="filteredCities" @complete="search" disabled multiple v-bind="args" />
    <AutoComplete placeholder="Выберите города" :suggestions="filteredCities" @complete="search" :default-value="defaultValue" disabled multiple v-bind="args" />
  </div>
</div>
`,
});

export const TemplateFloatLabel = (args) => ({
  components: { AutoComplete, FloatLabel },
  setup() {
    const cities = ref([
      'Москва',
      'Санкт-Петербург',
      'Новосибирск',
      'Екатеринбург',
      'Казань',
      'Нижний Новгород',
      'Челябинск',
      'Самара',
      'Омск',
      'Ростов-на-Дону',
      'Уфа',
      'Красноярск',
      'Воронеж',
      'Пермь',
      'Волгоград',
      'Краснодар',
      'Саратов',
      'Тюмень',
      'Тольятти',
      'Ижевск',
    ]);
    const filteredCities = ref([]);
    const value1 = ref('');
    const value2 = ref('Москва');
    const value3 = ref('');
    const value4 = ref('Москва');

    const search = (event) => {
      if (!event.query.trim().length) {
        filteredCities.value = [...cities.value];
      } else {
        filteredCities.value = cities.value.filter((city) => {
          return city.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    };

    return {
      args,
      cities,
      filteredCities,
      search,
      value1,
      value2,
      value3,
      value4,
    };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '30px' }">
  <div :style="{ padding: '10px', background: '#f5f5f5', borderRadius: '4px', fontSize: '14px' }">
    💡 <strong>Подсказка:</strong> Float Label автоматически поднимается при фокусе или заполнении поля
  </div>

  <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'start', justifyItems: 'center' }">
    <span :style="{ justifySelf: 'flex-start', alignSelf: 'center' }"><strong>Одиночный выбор</strong></span>
    <span></span>

    <FloatLabel variant="in">
      <AutoComplete id="ac1" v-model="value1" :suggestions="filteredCities" @complete="search" v-bind="args" />
      <label for="ac1">Выберите город</label>
    </FloatLabel>
    <FloatLabel variant="in">
      <AutoComplete id="ac2" v-model="value2" :suggestions="filteredCities" @complete="search" v-bind="args" />
      <label for="ac2">Выберите город</label>
    </FloatLabel>

    <span :style="{ justifySelf: 'flex-start', alignSelf: 'center' }"><code>invalid</code></span>
    <span></span>

    <FloatLabel variant="in">
      <AutoComplete id="ac3" v-model="value3" :suggestions="filteredCities" @complete="search" invalid v-bind="args" />
      <label for="ac3">Выберите город</label>
    </FloatLabel>
    <FloatLabel variant="in">
      <AutoComplete id="ac4" v-model="value4" :suggestions="filteredCities" @complete="search" invalid v-bind="args" />
      <label for="ac4">Выберите город</label>
    </FloatLabel>

    <span :style="{ justifySelf: 'flex-start', alignSelf: 'center' }"><code>disabled</code></span>
    <span></span>

    <FloatLabel variant="in">
      <AutoComplete id="ac5" :suggestions="filteredCities" @complete="search" disabled v-bind="args" />
      <label for="ac5">Выберите город</label>
    </FloatLabel>
    <FloatLabel variant="in">
      <AutoComplete id="ac6" :default-value="'Москва'" :suggestions="filteredCities" @complete="search" disabled v-bind="args" />
      <label for="ac6">Выберите город</label>
    </FloatLabel>
  </div>
</div>
`,
});
