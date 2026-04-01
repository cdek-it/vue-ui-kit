import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { usePrimeVue } from 'primevue/config';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import FloatLabel from 'primevue/floatlabel';

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

const formatDateDigits = (digits) => {
  let result = '';
  if (digits.length > 0) {
    result = digits.slice(0, 2);
  }
  if (digits.length > 2) {
    result += '.' + digits.slice(2, 4);
  }
  if (digits.length > 4) {
    result += '.' + digits.slice(4, 8);
  }
  return result;
};

const useDateAutoFormat = (dpRef) => {
  const isInvalid = ref(false);
  let inputEl = null;

  const validateDate = (formatted) => {
    if (formatted.length < 10) {
      isInvalid.value = false;
      return;
    }
    const [dd, mm, yyyy] = formatted.split('.');
    const day = parseInt(dd, 10);
    const month = parseInt(mm, 10);
    const year = parseInt(yyyy, 10);
    const date = new Date(year, month - 1, day);
    isInvalid.value =
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day;
  };

  const onInput = (e) => {
    const input = e.target;
    const raw = input.value.replace(/\D/g, '').slice(0, 8);
    const formatted = formatDateDigits(raw);
    if (input.value !== formatted) {
      input.value = formatted;
      input.setSelectionRange(formatted.length, formatted.length);
    }
    validateDate(formatted);
    if (isInvalid.value) {
      e.stopImmediatePropagation();
    }
  };

  const onKeydown = (e) => {
    if (e.key !== 'Backspace') {
      return;
    }
    const input = e.target;
    const pos = input.selectionStart;
    if (pos > 0 && pos === input.selectionEnd && input.value[pos - 1] === '.') {
      e.preventDefault();
      const raw = (input.value.slice(0, pos - 1) + input.value.slice(pos))
        .replace(/\D/g, '')
        .slice(0, 8);
      const formatted = formatDateDigits(raw);
      input.value = formatted;
      input.setSelectionRange(formatted.length, formatted.length);
      validateDate(formatted);
    }
  };

  onMounted(() => {
    inputEl = dpRef.value?.$el?.querySelector('.p-datepicker-input');
    if (inputEl) {
      inputEl.addEventListener('input', onInput, true);
      inputEl.addEventListener('keydown', onKeydown, true);
    }
  });

  onBeforeUnmount(() => {
    if (inputEl) {
      inputEl.removeEventListener('input', onInput, true);
      inputEl.removeEventListener('keydown', onKeydown, true);
    }
  });

  return { isInvalid };
};

const sharedSetup = (args) => {
  const value = ref(null);
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

  return { args, value, dp, months, years, onMonthSelect, onYearSelect };
};

export const BasicTemplate = (args) => ({
  components: { DatePicker, Select, Button },
  setup() {
    const context = sharedSetup(args);
    const { isInvalid } = useDateAutoFormat(context.dp);
    return { ...context, isInvalid };
  },
  template: `
<DatePicker
  ref="dp"
  dateFormat="dd.mm.yy"
  v-model="value"
  showIcon
  iconDisplay="input"
  :invalid="isInvalid || args.invalid"
  :panelStyle="{ minWidth: 'fit-content' }"
  v-bind="args"
  :inputClass="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
  :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
  :pt="{ title: { onVnodeMounted: (vnode) => vnode.el?.remove() } }"
>
  <template #prevbutton="{ actionCallback }">
    <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
    </Button>
    <div class="p-datepicker-title">
      <Select appendTo="self" :options="months" optionLabel="name" optionValue="value" :modelValue="dp?.currentMonth" @update:modelValue="onMonthSelect" class="p-datepicker-month-select" />
      <Select appendTo="self" :options="years" optionLabel="name" optionValue="value" :modelValue="dp?.currentYear" @update:modelValue="onYearSelect" class="p-datepicker-year-select" />
    </div>
  </template>
  <template #nextbutton="{ actionCallback }">
    <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
    </Button>
  </template>
  <template #inputicon="slotProps">
    <i class="ti ti-calendar-month cursor-pointer" @click="slotProps.clickCallback" />
  </template>
  <template #dropdownicon>
    <i class="ti ti-calendar-month" />
  </template>
</DatePicker>`,
});

export const RangeTemplate = (args) => ({
  components: { DatePicker, Select, Button, InputText },
  setup() {
    const context = sharedSetup(args);
    const dates = ref(null);
    const hoveredDate = ref(null);

    const onDateMouseEnter = (date) => {
      if (Array.isArray(dates.value) && dates.value[0] && !dates.value[1]) {
        hoveredDate.value = date;
      }
    };

    const isDayInRangePreview = (date) => {
      if (
        !hoveredDate.value ||
        !Array.isArray(dates.value) ||
        !dates.value[0]
      ) {
        return false;
      }
      const d = new Date(date.year, date.month, date.day);
      const start = dates.value[0];
      const end = new Date(
        hoveredDate.value.year,
        hoveredDate.value.month,
        hoveredDate.value.day
      );
      const [min, max] = start < end ? [start, end] : [end, start];
      return d >= min && d <= max;
    };

    const { isInvalid } = useDateAutoFormat(context.dp);

    return {
      ...context,
      dates,
      onDateMouseEnter,
      hoveredDate,
      isDayInRangePreview,
      isInvalid,
    };
  },
  template: `
<div class="flex flex-col gap-4">
  <DatePicker
    ref="dp"
    dateFormat="dd.mm.yy"
    v-model="dates"
    selectionMode="range"
    showIcon
    iconDisplay="input"
    :invalid="isInvalid || args.invalid"
    :panelStyle="{ minWidth: 'fit-content' }"
    v-bind="args"
    :inputClass="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
    :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    :pt="{
      title: { onVnodeMounted: (vnode) => vnode.el?.remove() },
      day: ({ context }) => ({
        class: {
          'p-datepicker-day-preview': isDayInRangePreview(context.date)
        },
        onMouseenter: () => onDateMouseEnter(context.date),
        onMouseleave: () => hoveredDate = null
      })
    }"
  >
  <template #prevbutton="{ actionCallback }">
    <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
    </Button>
    <div class="p-datepicker-title">
      <Select appendTo="self" :options="months" optionLabel="name" optionValue="value" :modelValue="dp?.currentMonth" @update:modelValue="onMonthSelect" class="p-datepicker-month-select" />
      <Select appendTo="self" :options="years" optionLabel="name" optionValue="value" :modelValue="dp?.currentYear" @update:modelValue="onYearSelect" class="p-datepicker-year-select" />
    </div>
  </template>
  <template #nextbutton="{ actionCallback }">
    <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
    </Button>
  </template>
  <template #inputicon="slotProps">
    <i class="ti ti-calendar-month cursor-pointer" @click="slotProps.clickCallback" />
  </template>
  <template #dropdownicon>
    <i class="ti ti-calendar-month" />
  </template>
</DatePicker>
</div>`,
});

export const TimeTemplate = (args) => ({
  components: { DatePicker, Select, Button, InputNumber },
  setup() {
    const context = sharedSetup(args);
    const { isInvalid } = useDateAutoFormat(context.dp);
    const dateValue = ref(new Date());

    const hours = computed({
      get: () => (dateValue.value ? dateValue.value.getHours() : 0),
      set: (val) => {
        if (!dateValue.value) {
          dateValue.value = new Date();
        }
        const d = new Date(dateValue.value);
        d.setHours(val);
        dateValue.value = d;
      },
    });

    const minutes = computed({
      get: () => (dateValue.value ? dateValue.value.getMinutes() : 0),
      set: (val) => {
        if (!dateValue.value) {
          dateValue.value = new Date();
        }
        const d = new Date(dateValue.value);
        d.setMinutes(val);
        dateValue.value = d;
      },
    });

    const modelProxy = computed({
      get: () => dateValue.value,
      set: (val) => {
        dateValue.value = val;
      },
    });

    return { ...context, modelProxy, hours, minutes, isInvalid };
  },
  template: `
<DatePicker
  ref="dp"
  dateFormat="dd.mm.yy"
  v-model="modelProxy"
  showTime
  hourFormat="24"
  showIcon
  iconDisplay="input"
  :invalid="isInvalid || args.invalid"
  :panelStyle="{ minWidth: 'fit-content' }"
  v-bind="args"
  :inputClass="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
  :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
  :pt="{
    title: { onVnodeMounted: (vnode) => vnode.el?.remove() },
    timePicker: { style: { display: 'none' } }
  }"
>

  <template #prevbutton="{ actionCallback }">
    <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
    </Button>
    <div class="p-datepicker-title">
      <Select appendTo="self" :options="months" optionLabel="name" optionValue="value" :modelValue="dp?.currentMonth" @update:modelValue="onMonthSelect" class="p-datepicker-month-select" />
      <Select appendTo="self" :options="years" optionLabel="name" optionValue="value" :modelValue="dp?.currentYear" @update:modelValue="onYearSelect" class="p-datepicker-year-select" />
    </div>
  </template>
  <template #nextbutton="{ actionCallback }">
    <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
    </Button>
  </template>
  <template #inputicon="slotProps">
    <i class="ti ti-calendar-month cursor-pointer" @click="slotProps.clickCallback" />
  </template>
  <template #dropdownicon>
    <i class="ti ti-calendar-month" />
  </template>


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
          input: {
            'data-p': 'large',
            root: { 'data-p': 'large' }
          }
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
          input: {
            'data-p': 'large',
            root: { 'data-p': 'large' }
          }
        }"
      />
    </div>
  </template>

</DatePicker>`,
});

export const ButtonBarTemplate = (args) => ({
  components: { DatePicker, Select, Button },
  setup() {
    const context = sharedSetup(args);
    const { isInvalid } = useDateAutoFormat(context.dp);
    const primevue = usePrimeVue();
    primevue.config.locale.today = 'Сегодня';
    primevue.config.locale.clear = 'Очистить';
    return { ...context, isInvalid };
  },
  template: `
<DatePicker
  ref="dp"
  dateFormat="dd.mm.yy"
  v-model="value"
  showButtonBar
  showIcon
  iconDisplay="input"
  :invalid="isInvalid || args.invalid"
  :panelStyle="{ minWidth: 'fit-content' }"
  v-bind="args"
  :inputClass="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
  :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
  :todayButtonProps="{ label: 'Сегодня' }"
  :clearButtonProps="{ label: 'Очистить' }"
  :pt="{ title: { onVnodeMounted: (vnode) => vnode.el?.remove() } }"
>
  <template #prevbutton="{ actionCallback }">
    <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
    </Button>
    <div class="p-datepicker-title">
      <Select appendTo="self" :options="months" optionLabel="name" optionValue="value" :modelValue="dp?.currentMonth" @update:modelValue="onMonthSelect" class="p-datepicker-month-select" />
      <Select appendTo="self" :options="years" optionLabel="name" optionValue="value" :modelValue="dp?.currentYear" @update:modelValue="onYearSelect" class="p-datepicker-year-select" />
    </div>
  </template>
  <template #nextbutton="{ actionCallback }">
    <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
    </Button>
  </template>
  <template #inputicon="slotProps">
    <i class="ti ti-calendar-month cursor-pointer" @click="slotProps.clickCallback" />
  </template>
  <template #dropdownicon>
    <i class="ti ti-calendar-month" />
  </template>
</DatePicker>`,
});

export const InlineTemplate = (args) => ({
  components: { DatePicker, Select, Button },
  setup() {
    return sharedSetup(args);
  },
  template: `
<DatePicker
  ref="dp"
  dateFormat="dd.mm.yy"
  v-model="value"
  inline
  v-bind="args"
  :invalid="args.invalid"
  :inputClass="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
  :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
  :pt="{ title: { onVnodeMounted: (vnode) => vnode.el?.remove() } }"
>
  <template #prevbutton="{ actionCallback }">
    <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
    </Button>
    <div class="p-datepicker-title">
      <Select appendTo="self" :options="months" optionLabel="name" optionValue="value" :modelValue="dp?.currentMonth" @update:modelValue="onMonthSelect" class="p-datepicker-month-select" />
      <Select appendTo="self" :options="years" optionLabel="name" optionValue="value" :modelValue="dp?.currentYear" @update:modelValue="onYearSelect" class="p-datepicker-year-select" />
    </div>
  </template>
  <template #nextbutton="{ actionCallback }">
    <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
    </Button>
  </template>
  <template #inputicon="slotProps">
    <i class="ti ti-calendar-month cursor-pointer" @click="slotProps.clickCallback" />
  </template>
  <template #dropdownicon>
    <i class="ti ti-calendar-month" />
  </template>
</DatePicker>`,
});

export const MonthPickerTemplate = (args) => ({
  components: { Select },
  setup() {
    const context = sharedSetup(args);
    return { ...context };
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
    const context = sharedSetup(args);
    return { ...context };
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
  components: { DatePicker, Select, Button, FloatLabel },
  setup() {
    const context = sharedSetup(args);
    const { isInvalid } = useDateAutoFormat(context.dp);
    const inputProps = computed(() => {
      const rest = { ...args };
      delete rest.label;
      delete rest.showClear;
      return rest;
    });
    return { ...context, inputProps, isInvalid };
  },
  template: `
<FloatLabel variant="in">
  <DatePicker
    id="in_label"
    inputId="in_label"
    ref="dp"
    dateFormat="dd.mm.yy"
    v-model="value"
    showIcon
    iconDisplay="input"
    :panelStyle="{ minWidth: 'fit-content' }"
    v-bind="inputProps"
    :inputClass="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
    :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    :pt="{ title: { onVnodeMounted: (vnode) => vnode.el?.remove() } }"
  >
  <template #prevbutton="{ actionCallback }">
    <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
    </Button>
    <div class="p-datepicker-title">
      <Select appendTo="self" :options="months" optionLabel="name" optionValue="value" :modelValue="dp?.currentMonth" @update:modelValue="onMonthSelect" class="p-datepicker-month-select" />
      <Select appendTo="self" :options="years" optionLabel="name" optionValue="value" :modelValue="dp?.currentYear" @update:modelValue="onYearSelect" class="p-datepicker-year-select" />
    </div>
  </template>
  <template #nextbutton="{ actionCallback }">
    <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
    </Button>
  </template>
  <template #inputicon="slotProps">
    <i class="ti ti-calendar-month cursor-pointer" @click="slotProps.clickCallback" />
  </template>
  <template #dropdownicon>
    <i class="ti ti-calendar-month" />
  </template>
</DatePicker>
  <label for="in_label">{{ args.label }}</label>
</FloatLabel>`,
});

export const ClearIconTemplate = (args) => ({
  components: { DatePicker, Select, Button },
  setup() {
    const context = sharedSetup(args);
    const { isInvalid } = useDateAutoFormat(context.dp);
    return { ...context, isInvalid };
  },
  template: `
<DatePicker
  ref="dp"
  dateFormat="dd.mm.yy"
  v-model="value"
  showClear
  showIcon
  iconDisplay="input"
  :invalid="isInvalid || args.invalid"
  :panelStyle="{ minWidth: 'fit-content' }"
  v-bind="args"
  :inputClass="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
  :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
  :pt="{ title: { onVnodeMounted: (vnode) => vnode.el?.remove() } }"
>

  <template #prevbutton="{ actionCallback }">
    <Button class="p-datepicker-prev-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-left p-button-icon" aria-hidden="true"></i>
    </Button>
    <div class="p-datepicker-title">
      <Select appendTo="self" :options="months" optionLabel="name" optionValue="value" :modelValue="dp?.currentMonth" @update:modelValue="onMonthSelect" class="p-datepicker-month-select" />
      <Select appendTo="self" :options="years" optionLabel="name" optionValue="value" :modelValue="dp?.currentYear" @update:modelValue="onYearSelect" class="p-datepicker-year-select" />
    </div>
  </template>
  <template #nextbutton="{ actionCallback }">
    <Button class="p-datepicker-next-button" severity="secondary" rounded text @click="actionCallback">
      <i class="ti ti-chevron-right p-button-icon" aria-hidden="true"></i>
    </Button>
  </template>
  <template #inputicon="slotProps">
    <i class="ti ti-calendar-month cursor-pointer" @click="slotProps.clickCallback" />
  </template>
  <template #dropdownicon>
    <i class="ti ti-calendar-month" />
  </template>

  <template #clearicon="slotProps">
    <i class="p-datepicker-clear-icon ti ti-x" @click="slotProps.clearCallback" />
  </template>
</DatePicker>`,
});
