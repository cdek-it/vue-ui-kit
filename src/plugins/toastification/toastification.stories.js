import useToast from './useToast';
import { CdekToaster } from '@/components/cdek-toaster';
import getVersion from '@/test/getVersion';
import { POSITION } from './lib';
import { ref, watch } from 'vue';

export default {
  title: 'Plugins/Toastification',
  subcomponents: { CdekToaster },
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

const Template = (args) => ({
  setup() {
    let toastId;

    const toast = useToast();
    const selectPositionSelect = !!args.showToastSettings?.position;
    const showTimeoutInput = !!args.showToastSettings?.timeout;
    const position = ref(args.showToastSettings?.position);
    const timeout = ref(args.showToastSettings?.timeout);
    const showToastSettings = ref(args.showToastSettings);

    watch(position, () => {
      showToastSettings.value.position = position.value;
    });

    watch(timeout, () => {
      showToastSettings.value.timeout = timeout.value;
    });

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
        toastId = toast.info(args.settings, showToastSettings.value);
      } else if (args.type === 'success') {
        toastId = toast.success(args.settings, showToastSettings.value);
      } else if (args.type === 'error') {
        toastId = toast.error(args.settings, showToastSettings.value);
      } else {
        toastId = toast(args.settings, showToastSettings.value);
      }
    };

    const clearAll = () => {
      toast.clear();
    };

    return {
      args,
      toast,
      showToast,
      clearAll,
      selectPositionSelect,
      position,
      showTimeoutInput,
      timeout,
    };
  },
  template: `
  <div style="display: flex; flex-direction: column;">
    <button @click="showToast">Показать toast</button>
    <button v-if="args.story === 'clear-all'" @click="clearAll">Закрыть все</button>

    <template v-if="selectPositionSelect">
      <p>
        POSITION: {{ position }}
      </p>
      <select v-model=position>
        <option>top-left</option>
        <option>top-center</option>
        <option>top-right</option>
        <option>bottom-left</option>
        <option>bottom-center</option>
        <option>bottom-right</option>
      </select>
    </template>

    <template v-if=showTimeoutInput>
      <p>Timeout</p>
      <input type="number" v-if="showTimeoutInput" v-model="timeout" />
    </template>
  </div>
  `,
});

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
