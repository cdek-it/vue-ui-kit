import BaseToaster from '@/components/base-toaster/BaseToaster.vue';
import { Template } from './settings';

export default {
  title: 'Plugins/Toastification/StringSupport',
  subcomponents: { BaseToaster },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    settings: {
      description: 'Поддержка строкового параметра тостером',
      required: true,
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  story: 'StringParamSupport',
};
Primary.parameters = {
  docs: {
    source: {
      code: `
       const toast = useToast();

        const showToast = () => {
          toast('Какой-то текст');
        };
      `,
    },
  },
};

export const Info = Template.bind({});
Info.args = {
  story: 'StringParamSupport',
  type: 'info',
};
Info.parameters = {
  docs: {
    source: {
      code: `
       const toast = useToast();

        const showToast = () => {
          toast.info('Какой-то текст');
        };
      `,
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  story: 'StringParamSupport',
  type: 'error',
};
Error.parameters = {
  docs: {
    source: {
      code: `
       const toast = useToast();

        const showToast = () => {
          toast.error('Какой-то текст');
        };
      `,
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  story: 'StringParamSupport',
  type: 'success',
};
Success.parameters = {
  docs: {
    source: {
      code: `
       const toast = useToast();

        const showToast = () => {
          toast.success('Какой-то текст');
        };
      `,
    },
  },
};
