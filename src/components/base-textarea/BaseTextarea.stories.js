import BaseTextarea from './BaseTextarea.vue';
import BaseButton from '../base-button/BaseButton.vue';
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
  argTypes: {
    resize: {
      options: ['none', 'auto', 'user'],
    },
  },
};

const Template = (args) => ({
  components: { BaseTextarea, BaseButton },
  setup() {
    const addText = () => {
      inputVal.value = `очень много текста.
очень много текста.
очень много текста.
очень много текста.
очень много текста.`;
    };

    const removeText = () => {
      inputVal.value = '';
    };

    let resizeMode = ref(args.resize);

    const switchResizeMode = () => {
      resizeMode.value = resizeMode.value === 'auto' ? 'none' : 'auto';
    };

    const inputVal = ref(
      ['LabelFilled', 'ErrorFilled', 'DisabledFilled'].includes(args.story)
        ? '345'
        : ''
    );

    const validRes = ref(args.validRes);

    const toggleValidRes = () => {
      validRes.value = validRes.value === 'Ошибка' ? '' : 'Ошибка';
    };

    if (['AutoResizeInitialValue', 'SwitchResizeMode'].includes(args.story)) {
      inputVal.value = `очень много текста.
очень много текста.
очень много текста.
очень много текста.
очень много текста.
очень много текста.
очень много текста.
очень много текста.
очень много текста.`;
    }

    return {
      args,
      inputVal,
      validRes,
      resizeMode,
      toggleValidRes,
      addText,
      removeText,
      switchResizeMode,
    };
  },
  template: `
    <BaseTextarea v-bind="args" v-model="inputVal" :resize="resizeMode" :valid-res="validRes">
      <template #tip="{ alert, info, ban, circle }" v-if="args.tip">
        <component v-if="args.story === 'TipIcon'" :is="${args.tipIcon}" />
        <span :class="args.tipColor">{{ args.tip }}</span>
      </template>
    </BaseTextarea>

    <p v-if="args.story === 'ShowErrorIfExists'">
      <button @click="toggleValidRes">Переключить ошибку</button>
    </p>
    <p :style="{ margin: '0' }" v-else>Контент после textarea</p>
    <br />
    <p v-if="args.story === 'SwitchResizeMode'" :style="{ margin: '16px 0 0' }">resizeMode: {{ resizeMode }}</p>

    <template v-if="args.story === 'AutoResizeChangeValue'">
      <BaseButton @click="addText" width="content" small style="margin-right: 8px;">Добавить текст</BaseButton>
      <BaseButton @click="removeText" width="content" small>Удалить текст</BaseButton>
    </template>
    <BaseButton v-if="args.story === 'SwitchResizeMode'" @click="switchResizeMode" width="content" small>Переключить режим resize</BaseButton>
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

export const WithHeight = Template.bind({});
WithHeight.args = {
  height: '146px',
};
WithHeight.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" height="146px" />',
    },
  },
};

export const AutoResize = Template.bind({});
AutoResize.args = {
  resize: 'auto',
};
AutoResize.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" resize="auto" />',
    },
  },
};

export const AutoResizeWithHeight = Template.bind({});
AutoResizeWithHeight.args = {
  resize: 'auto',
  height: '150px',
};
AutoResizeWithHeight.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" resize="auto" height="150px" />',
    },
  },
};

export const AutoResizeInitialValue = Template.bind({});
AutoResizeInitialValue.args = {
  resize: 'auto',
  story: 'AutoResizeInitialValue',
};
AutoResizeInitialValue.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" resize="auto" />',
    },
  },
};

export const AutoResizeChangeValue = Template.bind({});
AutoResizeChangeValue.args = {
  resize: 'auto',
  story: 'AutoResizeChangeValue',
};
AutoResizeChangeValue.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" resize="auto" />',
    },
  },
};

export const SwitchResizeMode = Template.bind({});
SwitchResizeMode.args = {
  story: 'SwitchResizeMode',
};
SwitchResizeMode.parameters = {
  docs: {
    source: {
      code: '<CdekTextarea v-model="inputVal" />',
    },
  },
};

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

export const ErrorWithoutMessageWithTip = Template.bind({});
ErrorWithoutMessageWithTip.args = {
  label: 'Комментарий',
  validRes: 'Ошибка',
  hideErrorMessage: true,
  tip: 'Подсказка',
};
ErrorWithoutMessageWithTip.parameters = {
  docs: {
    source: {
      code: `
<CdekTextarea
  v-model="inputVal"
  label="Комментарий"
  valid-res="Ошибка"
  hide-error-message
>
  <template #tip>Подсказка</template>
</CdekTextarea>
`,
    },
  },
};

export const ShowErrorIfExists = Template.bind({});
ShowErrorIfExists.args = {
  label: 'Комментарий',
  showErrorIfExists: true,
  story: 'ShowErrorIfExists',
};
ShowErrorIfExists.parameters = {
  docs: {
    source: {
      code: `
<CdekTextarea
  v-model="inputVal"
  label="Комментарий"
  valid-res="Ошибка"
  show-error-if-exist
/>
`,
    },
  },
};

export const ShowErrorIfExistsWithTip = Template.bind({});
ShowErrorIfExistsWithTip.args = {
  label: 'Комментарий',
  showErrorIfExists: true,
  story: 'ShowErrorIfExists',
  tip: 'Подсказка',
};
ShowErrorIfExistsWithTip.parameters = {
  docs: {
    source: {
      code: `
<CdekTextarea
  v-model="inputVal"
  label="Комментарий"
  valid-res="Ошибка"
  show-error-if-exist
>
  <template #tip>Подсказка</template>
</CdekTextarea>
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

export const Tip = Template.bind({});
Tip.args = {
  label: 'Комментарий',
  tip: 'Пояснение или помощь',
};
Tip.parameters = {
  docs: {
    source: {
      code: `
<CdekTextarea v-model="inputVal" label="Комментарий">
  <template #tip>Пояснение или помощь</template>
</CdekTextarea>
`,
    },
  },
};

export const ColoredTip = Template.bind({});
ColoredTip.argTypes = {
  tipColor: {
    options: ['tertiary', 'attention', 'error', 'success'],
    type: 'select',
  },
};
ColoredTip.args = {
  label: 'Комментарий',
  tip: 'Пояснение или помощь',
  tipColor: 'success',
};
ColoredTip.parameters = {
  docs: {
    source: {
      code: `
<CdekTextarea v-model="inputVal" label="Комментарий">
  <template #tip>
    <span class="success">Пояснение или помощь</span>
  </template>
</CdekTextarea>
`,
    },
  },
};

export const TipIcon = Template.bind({});
TipIcon.argTypes = {
  tipIcon: {
    options: ['info', 'alert', 'ban', 'circle'],
    type: 'select',
  },
};
TipIcon.args = {
  label: 'Комментарий',
  tip: 'Пояснение или помощь',
  tipIcon: 'info',
  story: 'TipIcon',
};
TipIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekTextarea v-model="inputVal" label="Комментарий">
  <template #tip="{ info }">
    <component :is="info" />
    <span>Пояснение или помощь</span>
  </template>
</CdekTextarea>
`,
    },
  },
};
