import { ref } from 'vue';
import BaseMaskedInput from './BaseMaskedInput.vue';

export default {
  title: 'Ui kit/CdekMaskedInput',
  component: BaseMaskedInput,
};

const Template = (args) => ({
  components: { BaseMaskedInput },
  setup() {
    const value = ref('');
    const unmaskedValue = ref('');
    const completed = ref(false);
    const completeEventCount = ref(0);

    const onComplete = () => {
      completeEventCount.value++;
    };

    delete args.story;
    return {
      args,
      value,
      unmaskedValue,
      completed,
      completeEventCount,
      onComplete,
    };
  },
  template: `
    <div>
      <BaseMaskedInput
        v-model="value"
        v-model:unmasked="unmaskedValue"
        v-model:completed="completed"
        @complete="onComplete"
        v-bind="args"
      />

      <hr />

      <details>
        <summary><code>v-model</code></summary>
        <p><code>v-model => {{ value }}</code></p>
        <p><code>v-model:unmasked => {{ unmaskedValue }}</code></p>
        <p><code>v-model:completed => {{ completed }}</code></p>
      </details>
      
      <details>
        <summary><code>complete</code> event</summary>
        <p v-for="n in completeEventCount">{{ n }} <code>complete</code> event fired!</p>
      </details>
    </div>
  `,
});

export const Phone = Template.bind({});
Phone.args = {
  label: 'Телефон',
  mask: '+7 ### ###-##-##',
};
Phone.parameters = {
  docs: {
    source: {
      code: '<CdekMaskedInput v-model="value" v-model:unmasked="unmaskedValue" mask="+7 ### ###-##-##" />',
    },
  },
};

export const RegPlate = Template.bind({});
RegPlate.args = {
  label: 'Гос. номер автомобиля',
  mask: 'X###XX',
  tokens: 'X:[АВЕКМНОРСТУХABEKMHOPCTYX]',
};
RegPlate.parameters = {
  docs: {
    source: {
      code: '<CdekMaskedInput v-model="value" mask="X###XX" tokens="X:[АВЕКМНОРСТУХABEKMHOPCTYX]" />',
    },
  },
};

export const RegPlateWithTransform = Template.bind({});
RegPlateWithTransform.args = {
  label: 'Гос. номер автомобиля',
  mask: 'X###XX',
  tokens: {
    X: {
      pattern: /[АВЕКМНОРСТУХABEKMHOPCTYX]/,
      transform: (chr) => chr.toUpperCase(),
    },
  },
};
RegPlateWithTransform.parameters = {
  docs: {
    source: {
      code: `
<CdekMaskedInput
  v-model="value"
  mask="X###XX"
  :tokens="{
    X: { pattern: /[АВЕКМНОРСТУХABEKMHOPCTYX]/, transform: (chr) => chr.toUpperCase() }
  }"
/>
`,
    },
  },
};

export const DateWithMaxValues = Template.bind({});
DateWithMaxValues.args = {
  label: 'Дата',
  mask: '##.##.####',
  postProcess: (val) => {
    const [day, month, year] = val.split('.');
    const maxDay = 30;
    const maxMonth = 12;
    const maxYear = new Date().getFullYear();

    let validDay = '';
    let validMonth = '';
    let validYear = '';

    if (day) {
      validDay = Number(day) <= maxDay ? day : maxDay;
    }

    if (month) {
      validMonth = Number(month) <= maxMonth ? month : maxMonth;
    }

    if (year) {
      validYear = Number(year) <= maxYear ? year : maxYear;
    }

    if (validYear) {
      return [validDay, validMonth, validYear].join('.');
    }

    if (validMonth) {
      return [validDay, validMonth].join('.');
    }

    if (validDay) {
      return validDay;
    }

    return '';
  },
};
DateWithMaxValues.parameters = {
  docs: {
    source: {
      code: `
<CdekMaskedInput
  v-model="value"
  mask="##.##.####"
  :post-process="(val: string) => {
    // пример обработки года
    const max = '' + new Date().getFullYear();
    return val > max ? max : val;
  }"
/>
`,
    },
  },
};

export const NumberType = Template.bind({});
NumberType.args = {
  label: 'Телефон',
  mask: '+7 ### ###-##-##',
  type: 'number',
};
NumberType.parameters = {
  docs: {
    source: {
      code: '<CdekMaskedInput v-model="value" v-model:unmasked="unmaskedValue" mask="+7 ### ###-##-##" type="number" />',
    },
  },
};
