import useToast from './useToast';
import { CdekToaster } from '@/components/cdek-toaster';

export default {
  title: 'Plugins/Toastification',
  subcomponents: { CdekToaster },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    settings: {
      description: 'Опции, принимаемые CdekToaster',
      required: true,
    },
  },
};

const Template = (args) => ({
  setup() {
    let toastId;
    const toast = useToast();

    if (args.story === 'dismiss') {
      args.settings.button.action = () => {
        toast.dismiss(toastId);
      };
    }

    if (args.story === 'show-loading') {
      args.settings.button.action = () => {
        toast.update(toastId, {
          title: 'Какой-то текст',
          button: { text: 'Начать загрузку', loading: true },
        });
      };
    }

    const showToast = () => {
      if (args.type === 'info') {
        toastId = toast.info(args.settings);
      } else if (args.type === 'success') {
        toastId = toast.success(args.settings);
      } else if (args.type === 'error') {
        toastId = toast.error(args.settings);
      } else {
        toastId = toast(args.settings);
      }
    };

    const clearAll = () => {
      toast.clear();
    };

    return { args, toast, showToast, clearAll };
  },
  template: `
    <button @click="showToast">Показать toast</button>
    <button v-if="args.story === 'clear-all'" @click="clearAll">Закрыть все</button>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  settings: {
    title: 'Какой-то текст',
  },
};
Primary.parameters = {
  docs: {
    source: {
      code: `
const toast = useToast();

const showToast = () => {
  toast({ title: 'Какой-то текст' });
};
`,
    },
  },
};

export const Mobile = Template.bind({});
Mobile.args = {
  settings: {
    title: 'Какой-то текст',
  },
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  docs: {
    source: {
      code: `
const toast = useToast();

const showToast = () => {
  toast({ title: 'Какой-то текст' });
};
`,
    },
  },
};

export const Info = Template.bind({});
Info.args = {
  settings: {
    title: 'Какой-то текст',
  },
  type: 'info',
};
Info.parameters = {
  docs: {
    source: {
      code: `
const toast = useToast();

const showToast = () => {
  toast.info({ title: 'Какой-то текст' });
};
`,
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  settings: {
    title: 'Какой-то текст',
  },
  type: 'success',
};
Success.parameters = {
  docs: {
    source: {
      code: `
const toast = useToast();

const showToast = () => {
  toast.success({ title: 'Какой-то текст' });
};
`,
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  settings: {
    title: 'Какой-то текст',
  },
  type: 'error',
};
Error.parameters = {
  docs: {
    source: {
      code: `
const toast = useToast();

const showToast = () => {
  toast.error({ title: 'Какой-то текст' });
};
`,
    },
  },
};

export const Dismiss = Template.bind({});
Dismiss.args = {
  settings: {
    title: 'Какой-то текст',
    button: {
      text: 'Закрыть раньше',
    },
  },
  story: 'dismiss',
};
Dismiss.parameters = {
  docs: {
    source: {
      code: `
const toast = useToast();
let toastId;

const closeToast = () => {
  toast.dismiss(toastId);
}

const showToast = () => {
  toastId = toast({
    title: 'Какой-то текст',
    button: {
      text: 'Закрыть раньше',
      action: closeToast,
    },
  });
};
`,
    },
  },
};

export const ClearAll = Template.bind({});
ClearAll.args = {
  settings: {
    title: 'Какой-то текст',
  },
  story: 'clear-all',
};
ClearAll.parameters = {
  docs: {
    source: {
      code: `
const toast = useToast();

const closeAll = () => {
  toast.clear();
}

const showToast = () => {
  toast({
    title: 'Какой-то текст',
  });
};
`,
    },
  },
};

export const ShowLoading = Template.bind({});
ShowLoading.args = {
  settings: {
    title: 'Какой-то текст',
    button: {
      text: 'Начать загрузку',
      loading: false,
    },
  },
  story: 'show-loading',
};
ShowLoading.parameters = {
  docs: {
    source: {
      code: `
const toast = useToast();

let toastId;
const toastSettings = {
  title: 'Какой-то текст',
  button: {
    text: 'Начать загрузку',
    action: () => {
      toastSettings.button.loading = true;
      toast.update(toastId, toastSettings);
    },
    loading: false,
  },
}

const showToast = () => {
  toastId = toast(toastSettings);
};
`,
    },
  },
};
