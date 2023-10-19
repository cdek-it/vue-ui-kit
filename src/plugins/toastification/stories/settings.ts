import { ref, watch } from 'vue';
import useToast from '../useToast';

interface ITemplateArs {
  showToastSettings: any;
  settings: any;
  story?: string;
  type?: string;
}

export const Template = (args: ITemplateArs) => ({
  setup() {
    let toastId: string | number;

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

    const showWithoutPropsToast = () => {
      const title = 'Поддержка строкового параметра';
      if (args.type === 'info') {
        toastId = toast.info(title);
      } else if (args.type === 'success') {
        toastId = toast.success(title);
      } else if (args.type === 'error') {
        toastId = toast.error(title);
      } else {
        toastId = toast(title);
      }
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
      showWithoutPropsToast,
    };
  },
  template: `
  <div style="display: flex; flex-direction: column;">
    <button v-if="args.story !== 'StringParamSupport'" @click="showToast">Показать toast</button>
    <button v-if="args.story === 'clear-all'" @click="clearAll">Закрыть все</button>
    
    <button v-if="args.story === 'StringParamSupport'" @click="showWithoutPropsToast">Поддержка строкового параметра</button>

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
