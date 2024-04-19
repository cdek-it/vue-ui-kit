import BaseTextarea from './BaseTextarea.vue';
import { ref } from 'vue';

export default {
  title: 'Ui kit/CdekTextarea',
  component: BaseTextarea,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/UGMAPkZEk7xfoT8MUYykNH/Web-%2F-International?node-id=3466%3A12563&mode=dev)',
      },
    },
  },
  // TODO: изменить control для validRes
  // TODO: для resize сделать селект со значениями (смотри в BaseBadge)
};

const Template = (args) => ({
  components: { BaseTextarea },
  setup() {
    const inputVal = ref(
      ['LabelFilled', 'ErrorFilled', 'DisabledFilled'].includes(args.story)
        ? '345'
        : ''
    );

    return { args, inputVal };
  },
  template: `
    <BaseTextarea v-bind="args" v-model="inputVal" />
  `,
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" />',
    },
  },
};

// TODO: высота становится меньше когда вводишь 1 символ
export const ResizeAuto = Template.bind({});
ResizeAuto.args = {
  resize: 'auto',
};
ResizeAuto.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" resize="auto" />',
    },
  },
};

// TODO: появляется скролл когда 1 строка
export const ResizeUser = Template.bind({});
ResizeUser.args = {
  resize: 'user',
};
ResizeUser.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" resize="user" />',
    },
  },
};

// TODO: появляется скролл когда 1 строка
export const ResizeUserWithLabel = Template.bind({});
ResizeUserWithLabel.args = {
  resize: 'user',
  label: 'Комментарий',
};
ResizeUserWithLabel.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" resize="user" label="Комментарий" />',
    },
  },
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Введите текст...',
};
Placeholder.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" placeholder="Введите текст..."/>',
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  label: 'Комментарий',
};
Label.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" label="Комментарий"/>',
    },
  },
};

export const LabelFilled = Template.bind({});
LabelFilled.args = {
  label: 'Комментарий',
  story: 'LabelFilled',
};
LabelFilled.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" label="Комментарий"/>',
    },
  },
};

export const LabelWithPlaceholder = Template.bind({});
LabelWithPlaceholder.args = {
  label: 'Комментарий',
  placeholder: '00 00 – 000 000',
};
LabelWithPlaceholder.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" label="Комментарий" placeholder="Введите текст..." />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  label: 'Комментарий',
  validRes: 'Ошибка',
};
Error.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" label="Комментарий" valid-res="Ошибка"/>',
    },
  },
};

export const ErrorWithoutMessage = Template.bind({});
ErrorWithoutMessage.args = {
  label: 'Комментарий',
  validRes: 'Ошибка',
  hideErrorMessage: true,
};
ErrorWithoutMessage.parameters = {
  docs: {
    source: {
      code: `
<CdekTextarea
  v-model="inputVal"
  label="Комментарий"
  valid-res="Ошибка"
  hide-error-message
/>
`,
    },
  },
};

export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  label: 'Комментарий',
  validRes: 'Ошибка',
  story: 'LabelFilled',
};
ErrorFilled.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" label="Комментарий" valid-res="Ошибка"/>',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Комментарий',
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" label="Комментарий" disabled/>',
    },
  },
};

export const DisabledWithError = Template.bind({});
DisabledWithError.args = {
  label: 'Комментарий',
  disabled: true,
  validRes: 'Ошибка',
};
DisabledWithError.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" label="Комментарий" disabled valid-res="Ошибка"/>',
    },
  },
};

export const DisabledFilled = Template.bind({});
DisabledFilled.args = {
  label: 'Комментарий',
  disabled: true,
  story: 'LabelFilled',
};
DisabledFilled.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" label="Комментарий" disabled />',
    },
  },
};

// TODO: нет истории на высоту
