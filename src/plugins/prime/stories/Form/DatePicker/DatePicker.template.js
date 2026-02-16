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
<div class="flex flex-col gap-8">
  <div class="flex flex-wrap gap-8 items-start">
    <div class="flex flex-col gap-2">
      <span class="font-bold">Default Custom Header</span>
      <DatePicker 
        ref="dp"
        v-model="date"
        inline
        dateFormat="dd.mm.yy"
        v-bind="args"
        :pt="{
            title: { 
              onVnodeMounted: (vnode) => vnode.el?.remove() 
            }
        }"
      >
        <template #prevbutton="{ actionCallback }">
          <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
            <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
          </Button>
          <div class="p-datepicker-title">
            <Select :options="months" optionLabel="name" optionValue="value" :modelValue="dp?.currentMonth" @update:modelValue="onMonthSelect" size="small" class="p-datepicker-month-select" />
            <Select :options="years" optionLabel="name" optionValue="value" :modelValue="dp?.currentYear" @update:modelValue="onYearSelect" size="small" class="p-datepicker-year-select" />
          </div>
        </template>
        <template #nextbutton="{ actionCallback }">
          <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
            <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
          </Button>
        </template>
      </DatePicker>
    </div>

    <div class="flex flex-col gap-2">
      <span class="font-bold">With Button Bar</span>
      <DatePicker 
        ref="dp2"
        v-model="date"
        inline
        showButtonBar
        todayButtonLabel="Сегодня"
        clearButtonLabel="Очистить"
        dateFormat="dd.mm.yy"
        v-bind="args"
        :pt="{
            title: { 
              onVnodeMounted: (vnode) => vnode.el?.remove() 
            }
        }"
      >
        <template #prevbutton="{ actionCallback }">
          <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
            <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
          </Button>
          <div class="p-datepicker-title">
            <Select :options="months" optionLabel="name" optionValue="value" :modelValue="dp2?.currentMonth" @update:modelValue="(val) => { if(dp2) { dp2.currentMonth = val; dp2.$emit('month-change', { month: val + 1, year: dp2.currentYear }); } }" size="small" class="p-datepicker-month-select" />
            <Select :options="years" optionLabel="name" optionValue="value" :modelValue="dp2?.currentYear" @update:modelValue="(val) => { if(dp2) { dp2.currentYear = val; dp2.$emit('year-change', { month: dp2.currentMonth + 1, year: val }); } }" size="small" class="p-datepicker-year-select" />
          </div>
        </template>
        <template #nextbutton="{ actionCallback }">
          <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
            <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
          </Button>
        </template>
      </DatePicker>
    </div>

    <div class="flex flex-col gap-2">
      <span class="font-bold">With Time Picker</span>
      <DatePicker 
        ref="dp3"
        v-model="date"
        inline
        showTime
        hourFormat="24"
        dateFormat="dd.mm.yy"
        v-bind="args"
        :pt="{
            title: { 
              onVnodeMounted: (vnode) => vnode.el?.remove() 
            }
        }"
      >
        <template #prevbutton="{ actionCallback }">
          <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
            <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
          </Button>
          <div class="p-datepicker-title">
            <Select :options="months" optionLabel="name" optionValue="value" :modelValue="dp3?.currentMonth" @update:modelValue="(val) => { if(dp3) { dp3.currentMonth = val; dp3.$emit('month-change', { month: val + 1, year: dp3.currentYear }); } }" size="small" class="p-datepicker-month-select" />
            <Select :options="years" optionLabel="name" optionValue="value" :modelValue="dp3?.currentYear" @update:modelValue="(val) => { if(dp3) { dp3.currentYear = val; dp3.$emit('year-change', { month: dp3.currentMonth + 1, year: val }); } }" size="small" class="p-datepicker-year-select" />
          </div>
        </template>
        <template #nextbutton="{ actionCallback }">
          <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
            <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
          </Button>
        </template>
      </DatePicker>
    </div>
  </div>

  <div class="mt-5">
    <span>Выбранная дата (v-model):</span>
    <InputText :value="date?.toLocaleString ? date.toLocaleString() : date" readonly placeholder="Выберите дату" />
  </div>
</div>
`,
});
