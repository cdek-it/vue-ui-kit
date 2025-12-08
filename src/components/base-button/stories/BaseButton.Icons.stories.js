import BaseButton from '../BaseButton.vue';
import ArrowRightIcon from '../svg/arrow-right.svg?component';
import CheckIcon from '../svg/check.svg?component';

export default {
  title: 'Components/Button/Icons',
  component: BaseButton,
  parameters: {
    docs: {
      description: {
        component: 'Кнопки могут содержать иконки до, после текста или использоваться только с иконкой.',
      },
    },
  },
};

export const IconBefore = () => ({
  components: { BaseButton, CheckIcon },
  template: `
    <BaseButton>
      <CheckIcon />
      Подтвердить
    </BaseButton>
  `,
});
IconBefore.parameters = {
  docs: {
    description: {
      story: 'Иконка перед текстом кнопки.',
    },
    source: {
      code: `
<CdekButton>
  <CheckIcon />
  Подтвердить
</CdekButton>
`,
    },
  },
};

export const IconAfter = () => ({
  components: { BaseButton, ArrowRightIcon },
  template: `
    <BaseButton>
      Подтвердить
      <ArrowRightIcon />
    </BaseButton>
  `,
});
IconAfter.parameters = {
  docs: {
    description: {
      story: 'Иконка после текста кнопки.',
    },
    source: {
      code: `
<CdekButton>
  Подтвердить
  <ArrowRightIcon />
</CdekButton>
`,
    },
  },
};

export const IconOnly = () => ({
  components: { BaseButton, CheckIcon },
  template: `
    <BaseButton icon width="content">
      <CheckIcon />
    </BaseButton>
  `,
});
IconOnly.parameters = {
  docs: {
    description: {
      story: 'Кнопка только с иконкой без текста.',
    },
    source: {
      code: `
<CdekButton icon width="content">
  <CheckIcon />
</CdekButton>
`,
    },
  },
};
