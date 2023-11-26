import CdekRadio from './CdekRadio.vue';
import getVersion from '@/test/getVersion';
import { ref } from 'vue';
export default {
  title: 'Ui kit/CdekRadio',
  component: CdekRadio,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?type=design&node-id=2009-8577&mode=design&t=zACUd2FgFw8akMc3-0)',
      },
    },
    version: getVersion('0.0.1'),
  },
};

const Template = (args) => ({
  components: { CdekRadio },
  setup() {
    const val = ref('');

    return { args, val };
  },
  template: `
    <CdekRadio v-for="d in args.data" v-bind="d" v-model="val" />
    <p>{{val}}</p>
  `,
});

export const Default = Template.bind({});

Default.args = {
  data: [
    {
      label: 'Пункт первый из группы',
      value: '1',
      tip: 'Пояснение или помощь',
    },
    {
      label: 'Пункт первый из группы',
      value: '2',
      tip: 'Пояснение или помощь',
    },
    {
      label: 'Пункт первый из группы',
      value: '3',
      tip: 'Пояснение или помощь',
    },
  ],
};

Default.parameters = {
  docs: {
    source: {
      code: '<CdekRadio label="Пункт первый из группы"></CdekRadio>',
    },
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  data: [
    {
      label: 'Пункт первый из группы',
      value: '1',
      disabled: true,
    },
    {
      label: 'Пункт первый из группы',
      value: '2',
      disabled: true,
    },
    {
      label: 'Пункт первый из группы',
      value: '3',
      disabled: true,
    },
  ],
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<CdekRadio label="Пункт первый из группы" disabled></CdekRadio>',
    },
  },
};

export const Small = Template.bind({});

Small.args = {
  data: [
    {
      label: 'Пункт первый из группы',
      value: '1',
      small: true,
    },
    {
      label: 'Пункт первый из группы',
      value: '2',
      small: true,
    },
    {
      label: 'Пункт первый из группы',
      value: '3',
      small: true,
    },
  ],
};
Small.parameters = {
  docs: {
    source: {
      code: '<CdekRadio label="Пункт первый из группы" small></CdekRadio>',
    },
  },
};
