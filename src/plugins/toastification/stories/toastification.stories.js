import BaseToaster from '@/components/base-toaster/BaseToaster.vue';
import getVersion from '@/test/getVersion';
import { POSITION } from '../lib/index';
import { Template } from './settings';

export default {
  title: 'Plugins/Toastification',
  subcomponents: { BaseToaster },
  parameters: {
    version: getVersion('0.0.1'),
  },
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

export const Primary = Template.bind({});
Primary.args = {
  settings: {
    title: 'Какой-то текст',
    position: POSITION.BOTTOM_CENTER,
    timeout: 1000,
  },
};
Primary.parameters = {
  docs: {
    source: {
      code: `
const toast = useToast();

const showToast = () => {
  toast({ title: 'Какой-то текст'});
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

export const SelectPosition = Template.bind({});
SelectPosition.args = {
  settings: {
    title: 'Какой-то текст',
  },
  showToastSettings: {
    position: POSITION.TOP_CENTER,
  },
};
SelectPosition.parameters = {
  docs: {
    source: {
      code: `
        const toast = useToast();

        let toastId;

        const toastSettings = {
          title: 'Какой-то текст',
        }
        
        const settings = {
          position: 'top-center'
        }
      
        const showToast = () => {
          toastId = toast(toastSettings, settings);
        };
      `,
    },
  },
};

export const SetTimeout = Template.bind({});
SetTimeout.args = {
  settings: {
    title: 'Какой-то текст',
  },
  showToastSettings: {
    timeout: 10000,
  },
};
SetTimeout.parameters = {
  docs: {
    source: {
      code: `
        const toast = useToast();

        let toastId;
        const props = {
          title: 'Какой-то текст',
        }
        
        const settings = {
          timeout: 10000,
        }

        const showToast = () => {
          toastId = toast(props, settings);
        };
      `,
    },
  },
};
