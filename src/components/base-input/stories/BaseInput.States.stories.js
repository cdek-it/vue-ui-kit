import { ref } from 'vue';
import BaseInput from '../BaseInput.vue';
import './BaseInput.stories.scss';

export default {
  title: 'Components/Input/States',
  component: BaseInput,
  parameters: {
    docs: {
      description: {
        component: 'Различные состояния компонента Input: отключенный, только для чтения, с ошибкой.',
      },
    },
  },
};

const Template = (args) => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref(args.initValue || '');
    return { args, inputVal };
  },
  template: `
    <div class="input-story">
      <BaseInput v-bind="args" v-model="inputVal">
        <template #tip v-if="args.tip">{{ args.tip }}</template>
      </BaseInput>
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Серия и номер паспорта',
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'Отключенное состояние - инпут не доступен для взаимодействия.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" disabled />',
    },
  },
};

export const DisabledFilled = () => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref('345');
    return { inputVal };
  },
  template: `
    <div class="input-story">
      <BaseInput v-model="inputVal" label="Серия и номер паспорта" disabled />
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});
DisabledFilled.parameters = {
  docs: {
    description: {
      story: 'Отключенный инпут с заполненным значением.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" disabled />',
    },
  },
};

export const DisabledWithError = Template.bind({});
DisabledWithError.args = {
  label: 'Серия и номер паспорта',
  disabled: true,
  validRes: 'Ошибка',
};
DisabledWithError.parameters = {
  docs: {
    description: {
      story: 'Отключенный инпут с ошибкой валидации.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" disabled valid-res="Ошибка" />',
    },
  },
};

export const ReadOnly = () => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref('345');
    return { inputVal };
  },
  template: `
    <div class="input-story">
      <BaseInput v-model="inputVal" label="Серия и номер паспорта" readonly />
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});
ReadOnly.parameters = {
  docs: {
    description: {
      story: 'Режим только для чтения - значение отображается, но не может быть изменено.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" readonly />',
    },
  },
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Серия и номер паспорта',
  validRes: 'Ошибка',
};
WithError.parameters = {
  docs: {
    description: {
      story: 'Состояние с ошибкой валидации и сообщением об ошибке.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" valid-res="Ошибка" />',
    },
  },
};

export const ErrorFilled = () => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref('345');
    return { inputVal };
  },
  template: `
    <div class="input-story">
      <BaseInput v-model="inputVal" label="Серия и номер паспорта" valid-res="Ошибка" />
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});
ErrorFilled.parameters = {
  docs: {
    description: {
      story: 'Инпут с ошибкой и заполненным значением.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" valid-res="Ошибка" />',
    },
  },
};

export const ErrorWithoutMessage = Template.bind({});
ErrorWithoutMessage.args = {
  label: 'Серия и номер паспорта',
  validRes: 'Ошибка',
  hideErrorMessage: true,
};
ErrorWithoutMessage.parameters = {
  docs: {
    description: {
      story: 'Состояние с ошибкой, но без отображения сообщения об ошибке.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" valid-res="Ошибка" hide-error-message />',
    },
  },
};

export const ErrorWithoutMessageWithTip = Template.bind({});
ErrorWithoutMessageWithTip.args = {
  label: 'Серия и номер паспорта',
  validRes: 'Ошибка',
  hideErrorMessage: true,
  tip: 'Подсказка',
};
ErrorWithoutMessageWithTip.parameters = {
  docs: {
    description: {
      story: 'Ошибка без сообщения, но с подсказкой.',
    },
    source: {
      code: `
<CdekInput 
  v-model="inputVal" 
  label="Серия и номер паспорта" 
  valid-res="Ошибка" 
  hide-error-message
>
  <template #tip>Подсказка</template>
</CdekInput>`,
    },
  },
};

export const ShowErrorIfExists = () => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref('');
    const validRes = ref('');
    const toggleValidRes = () => {
      validRes.value = validRes.value === 'Ошибка' ? '' : 'Ошибка';
    };
    return { inputVal, validRes, toggleValidRes };
  },
  template: `
    <div class="input-story">
      <BaseInput 
        v-model="inputVal" 
        label="Серия и номер паспорта" 
        :valid-res="validRes"
        show-error-if-exists
      />
      <p><button @click="toggleValidRes">Переключить ошибку</button></p>
    </div>
  `,
});
ShowErrorIfExists.parameters = {
  docs: {
    description: {
      story: 'Показывать ошибку только если она существует (интерактивный пример).',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" :valid-res="validRes" show-error-if-exists />',
    },
  },
};

export const HtmlError = Template.bind({});
HtmlError.args = {
  class: 'input-html-error',
  label: 'Серия и номер паспорта',
  validRes: '<p>Накладные компании СДЭК длиной от 6 до 10 цифр.</p><p>Если Ваш номер не соответствует данному формату, обратитесь, пожалуйста, в магазин за уточнением верного номера.</p>',
};
HtmlError.parameters = {
  docs: {
    description: {
      story: 'Сообщение об ошибке с HTML разметкой.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" valid-res="<p>Накладные компании СДЭК...</p>" />',
    },
  },
};
