import DatePicker from 'primevue/datepicker';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { DatePicker },
  setup() {
    const date = ref(null);
    
    return { date };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="date" placeholder="Выберите дату" class="w-full md:w-80" />
    </div>
  `
});

// Формат
export const FormatTemplate = () => ({
  components: { DatePicker },
  setup() {
    const date = ref(null);
    
    return { date };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="date" dateFormat="dd.mm.yy" placeholder="ДД.MM.ГГ" class="w-full md:w-80" />
    </div>
  `
});

// Иконка
export const IconTemplate = () => ({
  components: { DatePicker },
  setup() {
    const date = ref(null);
    
    return { date };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="date" showIcon iconDisplay="input" placeholder="Выберите дату" class="w-full md:w-80" />
    </div>
  `
});

// Диапазон
export const RangeTemplate = () => ({
  components: { DatePicker },
  setup() {
    const dates = ref(null);
    
    return { dates };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="dates" selectionMode="range" placeholder="Выберите диапазон" class="w-full md:w-80" />
    </div>
  `
});

// Множественный выбор
export const MultipleTemplate = () => ({
  components: { DatePicker },
  setup() {
    const dates = ref(null);
    
    return { dates };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="dates" selectionMode="multiple" placeholder="Выберите даты" class="w-full md:w-80" />
    </div>
  `
});

// Время
export const TimeTemplate = () => ({
  components: { DatePicker },
  setup() {
    const datetime = ref(null);
    
    return { datetime };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="datetime" showTime hourFormat="24" placeholder="Дата и время" class="w-full md:w-80" />
    </div>
  `
});

// Только время
export const TimeOnlyTemplate = () => ({
  components: { DatePicker },
  setup() {
    const time = ref(null);
    
    return { time };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="time" timeOnly placeholder="Выберите время" class="w-full md:w-80" />
    </div>
  `
});

// Месяц
export const MonthTemplate = () => ({
  components: { DatePicker },
  setup() {
    const date = ref(null);
    
    return { date };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="date" view="month" dateFormat="mm/yy" placeholder="Выберите месяц" class="w-full md:w-80" />
    </div>
  `
});

// Год
export const YearTemplate = () => ({
  components: { DatePicker },
  setup() {
    const date = ref(null);
    
    return { date };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="date" view="year" dateFormat="yy" placeholder="Выберите год" class="w-full md:w-80" />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { DatePicker },
  setup() {
    const date = ref(new Date());
    
    return { date };
  },
  template: `
    <div class="flex justify-center p-4">
      <DatePicker v-model="date" disabled class="w-full md:w-80" />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { DatePicker },
  setup() {
    const date = ref(null);
    
    return { date };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2 w-full md:w-80">
        <DatePicker v-model="date" invalid placeholder="Выберите дату" class="w-full" />
        <small class="text-red-600">Дата обязательна</small>
      </div>
    </div>
  `
});
