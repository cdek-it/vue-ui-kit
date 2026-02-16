import { DatePicker } from 'primevue';
import Select from 'primevue/select';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

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

export const CustomHeaderTemplate = (args) => ({
  components: { DatePicker, Select, Button, InputText },
  setup() {
    const date = ref(new Date());
    const dp = ref(null);

    const onMonthSelect = (val) => {
      if (dp.value) {
        dp.value.currentMonth = val;
        dp.value.$emit('month-change', {
          month: val + 1,
          year: dp.value.currentYear,
        });
      }
    };

    const onYearSelect = (val) => {
      if (dp.value) {
        dp.value.currentYear = val;
        dp.value.$emit('year-change', {
          month: dp.value.currentMonth + 1,
          year: val,
        });
      }
    };

    return { args, date, months, years, dp, onMonthSelect, onYearSelect };
  },
  template: `
<div class="flex flex-col gap-2.5">
  <span class="font-bold">DatePicker с кастомным хедером (Final DOM Structure)</span>
  <DatePicker 
    ref="dp"
    v-model="date"
    inline
    dateFormat="dd.mm.yy"
    v-bind="args"
    :pt="{
        title: { 
          // Полное удаление нативного узла из DOM
          onVnodeMounted: (vnode) => vnode.el?.remove() 
        }
    }"
  >
    <!-- 1. Слот #prevbutton позволяет нам поставить кнопку и заголовок ВМЕСТЕ в начале DOM -->
    <template #prevbutton="{ actionCallback }">
      <Button 
        class="p-datepicker-prev-button"
        severity="secondary"
        rounded
        text
        @click="actionCallback"
        aria-label="Previous Month"
        data-pc-name="pcprevbutton"
      >
        <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
      </Button>

      <!-- Наш кастомный заголовок физически идет вторым в DOM -->
      <div class="p-datepicker-title">
        <Select 
          :options="months" 
          optionLabel="name" 
          optionValue="value"
          :modelValue="dp?.currentMonth"
          @update:modelValue="onMonthSelect"
          size="small"
          class="p-datepicker-month-select"
        />
        <Select 
          :options="years" 
          optionLabel="name"
          optionValue="value"
          :modelValue="dp?.currentYear"
          @update:modelValue="onYearSelect"
          size="small"
          class="p-datepicker-year-select"
        />
      </div>
    </template>

    <!-- 2. Слот #nextbutton ставит кнопку в самый конец DOM контейнера хедера -->
    <template #nextbutton="{ actionCallback }">
      <Button 
        class="p-datepicker-next-button"
        severity="secondary"
        rounded
        text
        @click="actionCallback"
        aria-label="Next Month"
        data-pc-name="pcnextbutton"
      >
        <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
      </Button>
    </template>
  </DatePicker>

  <div class="mt-5">
    <span>Выбранная дата (v-model):</span>
    <InputText :value="date?.toLocaleDateString ? date.toLocaleDateString() : date" readonly placeholder="Выберите дату" />
  </div>
</div>
`,
});
