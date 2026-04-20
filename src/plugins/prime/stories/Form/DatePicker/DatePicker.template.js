import { computed, ref } from 'vue';
import { usePrimeVue } from 'primevue/config';
import Select from 'primevue/select';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import PBlockDatePicker from '@/primeBlocks/PBlockDatePicker/PBlockDatePicker.vue';

const months = [
  { name: 'Январь', value: 0 },
  { name: 'Февраль', value: 1 },
  { name: 'Март', value: 2 },
  { name: 'Апрель', value: 3 },
  { name: 'Май', value: 4 },
  { name: 'Июнь', value: 5 },
  { name: 'Июль', value: 6 },
  { name: 'Август', value: 7 },
  { name: 'Сентябрь', value: 8 },
  { name: 'Октябрь', value: 9 },
  { name: 'Ноябрь', value: 10 },
  { name: 'Декабрь', value: 11 },
];

const generateYears = (startYear = 1990, endYear = 2035) => {
  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push({ name: String(i), value: i });
  }
  return years;
};

const years = generateYears();

export const BasicTemplate = (args) => ({
  components: { PBlockDatePicker },
  setup() {
    const value = ref(null);
    return { value, args };
  },
  template: `<PBlockDatePicker v-model="value" v-bind="args" />`,
});

export const RangeTemplate = (args) => ({
  components: { PBlockDatePicker },
  setup() {
    const dates = ref(null);
    return { dates, args };
  },
  template: `
<div class="flex flex-col gap-4">
  <PBlockDatePicker v-model="dates" selection-mode="range" v-bind="args" />
</div>`,
});

export const TimeTemplate = (args) => ({
  components: { PBlockDatePicker, InputNumber },
  setup() {
    const dateValue = ref(new Date());

    const hours = computed({
      get: () => dateValue.value?.getHours() ?? 0,
      set: (val) => {
        const d = new Date(dateValue.value ?? Date.now());
        d.setHours(val);
        dateValue.value = d;
      },
    });

    const minutes = computed({
      get: () => dateValue.value?.getMinutes() ?? 0,
      set: (val) => {
        const d = new Date(dateValue.value ?? Date.now());
        d.setMinutes(val);
        dateValue.value = d;
      },
    });

    return { dateValue, hours, minutes, args };
  },
  template: `
<PBlockDatePicker
  v-model="dateValue"
  showTime
  hourFormat="24"
  v-bind="args"
  :pt="{ timePicker: { style: { display: 'none' } } }"
>
  <template #footer>
    <div class="grid grid-cols-[auto_max-content_auto] gap-x-4 gap-y-2 p-4 border-t border-surface-200 justify-center items-center">
      <span class="text-sm font-medium text-center col-start-1 row-start-1">Часы</span>
      <InputNumber
        v-model="hours"
        :min="0"
        :max="23"
        class="w-fit col-start-1 row-start-2"
        inputClass="text-center"
        inputStyle="width: calc(2ch + 2.5rem)"
        :pt="{
          root: { 'data-p': 'large' },
          input: { 'data-p': 'large', root: { 'data-p': 'large' } }
        }"
      />
      <span class="text-xl font-bold col-start-2 row-start-2">:</span>
      <span class="text-sm font-medium text-center col-start-3 row-start-1">Минуты</span>
      <InputNumber
        v-model="minutes"
        :min="0"
        :max="59"
        class="w-fit col-start-3 row-start-2"
        inputClass="text-center"
        inputStyle="width: calc(2ch + 2.5rem)"
        :pt="{
          root: { 'data-p': 'large' },
          input: { 'data-p': 'large', root: { 'data-p': 'large' } }
        }"
      />
    </div>
  </template>
</PBlockDatePicker>`,
});

export const ButtonBarTemplate = (args) => ({
  components: { PBlockDatePicker },
  setup() {
    const value = ref(null);
    const primevue = usePrimeVue();
    primevue.config.locale.today = 'Сегодня';
    primevue.config.locale.clear = 'Очистить';
    return { value, args };
  },
  template: `
<PBlockDatePicker
  v-model="value"
  showButtonBar
  :todayButtonProps="{ label: 'Сегодня' }"
  :clearButtonProps="{ label: 'Очистить' }"
  v-bind="args"
/>`,
});

export const InlineTemplate = (args) => ({
  components: { PBlockDatePicker },
  setup() {
    const value = ref(null);
    return { value, args };
  },
  template: `<PBlockDatePicker v-model="value" inline v-bind="args" />`,
});

export const MonthPickerTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);
    return { value, months, args };
  },
  template: `
<Select
  v-model="value"
  :options="months"
  optionLabel="name"
  optionValue="value"
  placeholder="Выберите месяц"
  v-bind="args"
  :class="{ 'p-select-xlg': args.size === 'xlarge' }"
  :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
>
  <template #dropdownicon>
    <i class="ti ti-calendar-month" />
  </template>
</Select>`,
});

export const YearPickerTemplate = (args) => ({
  components: { Select },
  setup() {
    const value = ref(null);
    return { value, years, args };
  },
  template: `
<Select
  v-model="value"
  :options="years"
  optionLabel="name"
  optionValue="value"
  placeholder="Выберите год"
  v-bind="args"
  :class="{ 'p-select-xlg': args.size === 'xlarge' }"
  :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
>
  <template #dropdownicon>
    <i class="ti ti-calendar-month" />
  </template>
</Select>`,
});

export const FloatLabelTemplate = (args) => ({
  components: { PBlockDatePicker, FloatLabel },
  setup() {
    const value = ref(null);
    const inputProps = computed(() => {
      const rest = { ...args };
      delete rest.label;
      delete rest.showClear;
      return rest;
    });
    return { value, inputProps, args };
  },
  template: `
<FloatLabel variant="in">
  <PBlockDatePicker
    id="in_label"
    inputId="in_label"
    v-model="value"
    v-bind="inputProps"
  />
  <label for="in_label">{{ args.label }}</label>
</FloatLabel>`,
});

export const ClearIconTemplate = (args) => ({
  components: { PBlockDatePicker },
  setup() {
    const value = ref(null);
    return { value, args };
  },
  template: `<PBlockDatePicker v-model="value" showClear v-bind="args" />`,
});
