import { ref } from 'vue';
import BaseInput from '../BaseInput.vue';
import './BaseInput.stories.scss';

export default {
  title: 'Components/Input/Sizes',
  component: BaseInput,
  parameters: {
    docs: {
      description: {
        component: 'Input предоставляет различные размеры для адаптации к разным контекстам использования.',
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
    <div class="input-small-story">
      <BaseInput v-bind="args" v-model="inputVal">
        <template #tip v-if="args.tip">{{ args.tip }}</template>
      </BaseInput>
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});

export const Small = Template.bind({});
Small.args = {
  small: true,
};
Small.parameters = {
  docs: {
    description: {
      story: 'Маленький размер инпута для компактных интерфейсов.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" small />',
    },
  },
};

export const SmallWithLabel = Template.bind({});
SmallWithLabel.args = {
  label: 'Кол-во',
  small: true,
};
SmallWithLabel.parameters = {
  docs: {
    description: {
      story: 'Маленький инпут с лейблом.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small />',
    },
  },
};

export const SmallError = Template.bind({});
SmallError.args = {
  label: 'Кол-во',
  small: true,
  validRes: 'Ошибка',
};
SmallError.parameters = {
  docs: {
    description: {
      story: 'Маленький инпут с ошибкой валидации.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small valid-res="Ошибка" />',
    },
  },
};

export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
  label: 'Кол-во',
  small: true,
  disabled: true,
};
SmallDisabled.parameters = {
  docs: {
    description: {
      story: 'Маленький отключенный инпут.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small disabled />',
    },
  },
};

export const SmallDisabledFilled = () => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref('345');
    return { inputVal };
  },
  template: `
    <div class="input-small-story">
      <BaseInput v-model="inputVal" label="Кол-во" small disabled />
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});
SmallDisabledFilled.parameters = {
  docs: {
    description: {
      story: 'Маленький отключенный инпут с заполненным значением.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small disabled />',
    },
  },
};

export const SmallReadonly = () => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref('345');
    return { inputVal };
  },
  template: `
    <div class="input-small-story">
      <BaseInput v-model="inputVal" label="Кол-во" small readonly />
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});
SmallReadonly.parameters = {
  docs: {
    description: {
      story: 'Маленький инпут в режиме только для чтения.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Кол-во" small readonly />',
    },
  },
};

export const SmallTip = Template.bind({});
SmallTip.args = {
  label: 'Кол-во',
  tip: 'Подсказка',
  small: true,
};
SmallTip.parameters = {
  docs: {
    description: {
      story: 'Маленький инпут с подсказкой.',
    },
    source: {
      code: `
<CdekInput v-model="inputVal" small label="Кол-во">
  <template #tip>Подсказка</template>
</CdekInput>`,
    },
  },
};

export const Normal = () => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref('');
    return { inputVal };
  },
  template: `
    <div class="input-story">
      <BaseInput v-model="inputVal" label="Серия и номер паспорта" />
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});
Normal.parameters = {
  docs: {
    description: {
      story: 'Стандартный размер инпута.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" />',
    },
  },
};

export const SmallWidth = () => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref('');
    return { inputVal };
  },
  template: `
    <div class="input-small-width-story">
      <BaseInput v-model="inputVal" />
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});
SmallWidth.parameters = {
  docs: {
    description: {
      story: 'Инпут с уменьшенной шириной через CSS класс.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" class="input-small-width-story" />',
    },
  },
};
