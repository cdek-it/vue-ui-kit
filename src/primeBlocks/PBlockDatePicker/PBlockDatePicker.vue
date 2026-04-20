<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { Button, DatePicker, Select, type DatePickerProps } from 'primevue';

interface IPBlockDatePicker extends Omit<DatePickerProps, 'size'> {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

const props = defineProps<IPBlockDatePicker>();

const emit = defineEmits<{
  (
    e: 'update:modelValue',
    value: Date | Date[] | (Date | null)[] | null | undefined
  ): void;
  (
    e: 'value-change',
    value: Date | Date[] | (Date | null)[] | null | undefined
  ): void;
  (e: 'date-select', value: Date): void;
  (e: 'today-click', date: Date): void;
  (e: 'clear-click', event: Event): void;
  (e: 'month-change', event: { month: number; year: number }): void;
  (e: 'year-change', event: { month: number; year: number }): void;
}>();

// ── Данные для выпадающих списков месяц/год ──────────────────────────────────

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

const years = (() => {
  const list: { name: string; value: number }[] = [];
  for (let i = 1990; i <= 2035; i++) {
    list.push({ name: String(i), value: i });
  }
  return list;
})();

// ── Ссылка на экземпляр DatePicker ──────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dp = ref<any>(null);

// ── Навигация по месяцу и году ───────────────────────────────────────────────

const onMonthSelect = (val: number) => {
  if (!dp.value) {
    return;
  }
  dp.value.currentMonth = val;
  dp.value.$emit('month-change', {
    month: val + 1,
    year: dp.value.currentYear,
  });
};

const onYearSelect = (val: number) => {
  if (!dp.value) {
    return;
  }
  dp.value.currentYear = val;
  dp.value.$emit('year-change', {
    month: dp.value.currentMonth + 1,
    year: val,
  });
};

// ── Автоформатирование ввода (dd.mm.yyyy) ────────────────────────────────────

const isInvalidInternal = ref(false);
let inputEl: HTMLInputElement | null = null;

const formatDateDigits = (digits: string): string => {
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

const validateDate = (formatted: string) => {
  if (formatted.length < 10) {
    isInvalidInternal.value = false;
    return;
  }
  const [dd, mm, yyyy] = formatted.split('.');
  const day = parseInt(dd, 10);
  const month = parseInt(mm, 10);
  const year = parseInt(yyyy, 10);
  const date = new Date(year, month - 1, day);
  isInvalidInternal.value =
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day;
};

const onInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const raw = input.value.replace(/\D/g, '').slice(0, 8);
  const formatted = formatDateDigits(raw);
  if (input.value !== formatted) {
    input.value = formatted;
    input.setSelectionRange(formatted.length, formatted.length);
  }
  validateDate(formatted);
  if (isInvalidInternal.value) {
    e.stopImmediatePropagation();
  }
};

const onKeydown = (e: KeyboardEvent) => {
  if (e.key !== 'Backspace') {
    return;
  }
  const input = e.target as HTMLInputElement;
  const pos = input.selectionStart ?? 0;
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
  inputEl = dp.value?.$el?.querySelector('.p-datepicker-input') ?? null;
  if (inputEl) {
    inputEl.addEventListener('input', onInput, true);
    inputEl.addEventListener('keydown', onKeydown as EventListener, true);
  }
});

onBeforeUnmount(() => {
  if (inputEl) {
    inputEl.removeEventListener('input', onInput, true);
    inputEl.removeEventListener('keydown', onKeydown as EventListener, true);
  }
});

// ── Превью диапазона (selectionMode="range") ─────────────────────────────────

const hoveredDate = ref<{ year: number; month: number; day: number } | null>(
  null
);

const onDateMouseEnter = (date: {
  year: number;
  month: number;
  day: number;
}) => {
  const mv = props.modelValue;
  if (Array.isArray(mv) && mv[0] && !mv[1]) {
    hoveredDate.value = date;
  }
};

const isDayInRangePreview = (date: {
  year: number;
  month: number;
  day: number;
}): boolean => {
  const mv = props.modelValue;
  if (!hoveredDate.value || !Array.isArray(mv) || !mv[0]) {
    return false;
  }
  const d = new Date(date.year, date.month, date.day);
  const start = mv[0] as Date;
  const end = new Date(
    hoveredDate.value.year,
    hoveredDate.value.month,
    hoveredDate.value.day
  );
  const [min, max] = start < end ? [start, end] : [end, start];
  return d >= min && d <= max;
};

// ── Нормализация размера ──────────────────────────────────────────────────────

const normalizedSize = computed(() => {
  if (!props.size || props.size === 'xlarge' || props.size === 'medium') {
    return undefined;
  }
  return props.size as 'small' | 'large';
});

const normalizedInputClass = computed(() => ({
  'p-inputtext-xlg': props.size === 'xlarge',
}));

// ── Сборка pt ─────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mergedPt = computed<Record<string, any>>(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const base: Record<string, any> = {
    title: {
      onVnodeMounted: (vnode: { el: HTMLElement | null }) => vnode.el?.remove(),
    },
  };

  if (props.selectionMode === 'range') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    base.day = ({ context }: any) => ({
      class: { 'p-datepicker-day-preview': isDayInRangePreview(context.date) },
      onMouseenter: () => onDateMouseEnter(context.date),
      onMouseleave: () => {
        hoveredDate.value = null;
      },
    });
  }

  return props.pt
    ? { ...base, ...(props.pt as Record<string, unknown>) }
    : base;
});

// ── Props без перехваченных ключей + дефолты ─────────────────────────────────

const passthroughProps = computed(() => {
  const {
    size: propsSize,
    inputClass: propsInputClass,
    invalid: propsInvalid,
    panelStyle: propsPanelStyle,
    pt: propsPt,
    dateFormat: propsDateFormat,
    showIcon: propsShowIcon,
    iconDisplay: propsIconDisplay,
    ...rest
  } = props;
  return {
    ...rest,
    dateFormat: propsDateFormat ?? 'dd.mm.yy',
    showIcon: propsShowIcon ?? true,
    iconDisplay: (propsIconDisplay ?? 'input') as 'button' | 'input',
    panelStyle: { minWidth: 'fit-content', ...propsPanelStyle },
  };
});
</script>

<template>
  <DatePicker
    ref="dp"
    v-bind="passthroughProps"
    :size="normalizedSize"
    :input-class="normalizedInputClass"
    :invalid="isInvalidInternal || invalid"
    :pt="mergedPt"
    @update:model-value="emit('update:modelValue', $event)"
    @value-change="emit('value-change', $event)"
    @date-select="emit('date-select', $event)"
    @today-click="emit('today-click', $event)"
    @clear-click="emit('clear-click', $event)"
    @month-change="emit('month-change', $event)"
    @year-change="emit('year-change', $event)"
  >
    <template #prevbutton="{ actionCallback }">
      <Button
        class="p-datepicker-prev-button"
        severity="secondary"
        rounded
        text
        @click="actionCallback"
      >
        <i class="ti ti-chevron-left p-button-icon" aria-hidden="true" />
      </Button>
      <div class="p-datepicker-title">
        <Select
          append-to="self"
          :options="months"
          option-label="name"
          option-value="value"
          :model-value="dp?.currentMonth"
          class="p-datepicker-month-select"
          @update:model-value="onMonthSelect"
        />
        <Select
          append-to="self"
          :options="years"
          option-label="name"
          option-value="value"
          :model-value="dp?.currentYear"
          class="p-datepicker-year-select"
          @update:model-value="onYearSelect"
        />
      </div>
    </template>

    <template #nextbutton="{ actionCallback }">
      <Button
        class="p-datepicker-next-button"
        severity="secondary"
        rounded
        text
        @click="actionCallback"
      >
        <i class="ti ti-chevron-right p-button-icon" aria-hidden="true" />
      </Button>
    </template>

    <template #inputicon="slotProps">
      <i
        class="ti ti-calendar-month cursor-pointer"
        @click="slotProps.clickCallback"
      />
    </template>

    <template #dropdownicon>
      <i class="ti ti-calendar-month" />
    </template>

    <template v-if="showClear" #clearicon="slotProps">
      <slot name="clearicon" v-bind="slotProps">
        <i
          class="p-datepicker-clear-icon ti ti-x"
          @click="slotProps.clearCallback"
        />
      </slot>
    </template>

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </DatePicker>
</template>
