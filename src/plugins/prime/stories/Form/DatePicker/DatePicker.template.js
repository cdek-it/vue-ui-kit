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

export const BasicTemplate = (args) => ({
  components: { DatePicker },
  setup() {
    const date = ref(new Date());
    return { args, date };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '24px' }">
  <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 300px)', gap: '20px', alignItems: 'start' }">
    <div>
      <span :style="{ fontWeight: 'bold', marginBottom: '8px', display: 'block' }">Default</span>
      <DatePicker 
        v-model="date"
        dateFormat="dd.mm.yy"
        v-bind="args"
      />
    </div>
  </div>
</div>
`,
});

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
<div :style="{ display: 'flex', flexDirection: 'column', gap: '10px' }">
  <span :style="{ fontWeight: 'bold' }">DatePicker с кастомным хедером (Final DOM Structure)</span>
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
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-button-icon" aria-hidden="true">
          <path d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z" fill="currentColor"></path>
        </svg>
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
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-button-icon" aria-hidden="true">
          <path d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z" fill="currentColor"></path>
        </svg>
      </Button>
    </template>
  </DatePicker>

  <div :style="{ marginTop: '20px' }">
    <span :style="{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }">Выбранная дата (v-model):</span>
    <InputText :value="date?.toLocaleDateString ? date.toLocaleDateString() : date" readonly placeholder="Выберите дату" />
  </div>
</div>
`,
});

export const StatesTemplate = (args) => ({
  components: { DatePicker },
  setup() {
    const date = ref(null);
    return { args, date };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '24px' }">
  <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 300px)', gap: '20px', alignItems: 'start' }">
    <DatePicker v-model="date" dateFormat="dd.mm.yy" placeholder="Default" v-bind="args" />
    <DatePicker v-model="date" invalid dateFormat="dd.mm.yy" placeholder="Invalid" v-bind="args" />
    <DatePicker v-model="date" disabled dateFormat="dd.mm.yy" placeholder="Disabled" v-bind="args" />
  </div>
</div>
`,
});
