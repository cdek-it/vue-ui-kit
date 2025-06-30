import { DatePicker, usePrimeVue } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { DatePicker },
  setup() {
    const date = ref(new Date());

    return { args, date };
  },
  template: `
    <DatePicker 
        showTime 
        show-button-bar 
        :todayButtonProps="{ label: 'Сегодня', variant: 'text'}" 
        :clear-button-props="{ label: 'Очистить', variant: 'text'}"
        v-model="date"
        date-format="dd/mm/yy"
        v-bind="args"
    />
`,
});

export const Languages = (args) => ({
  components: { DatePicker },
  setup() {
    const primeVue = usePrimeVue();
    primeVue.config.locale.dayNamesMin = [
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб',
      'Вс',
    ];

    primeVue.config.locale.monthNames = [
      'Январь',
      'Февраль',
      'март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];

    // Отображаются при выборе месеяцев
    primeVue.config.locale.monthNamesShort = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];

    return { args };
  },
  template: `
    <DatePicker 
        showTime 
        show-button-bar 
        :todayButtonProps="{ label: 'Сегодня', variant: 'text'}" 
        :clear-button-props="{ label: 'Очистить', variant: 'text'}"
        date-format="dd/mm/yy"
    />
`,
});
