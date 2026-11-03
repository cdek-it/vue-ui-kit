import ExtraToast from './ExtraToast.vue';
import { useExtraToast } from './useExtraToast';

export const liveToastVisualAudit = {
  render: () => ({
    components: { ExtraToast },
    setup() {
      const toast = useExtraToast();
      const widths = ['sm', 'md', 'lg', 'xlg'];
      const positions = [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ];
      const show = () => {
        widths.forEach((width) => {
          toast.removeGroup(`audit-${width}`);
          ['info', 'success', 'warn', 'error'].forEach((severity) => {
            toast.add({
              group: `audit-${width}`,
              severity,
              summary: 'Заголовок сообщения',
              detail: 'Дополнительная информация',
              closable: true,
              life: 60000,
            });
          });
        });
      };

      return { widths, positions, show };
    },
    template: `
      <button data-visual-toast-trigger @click="show">Показать живые Toast</button>
      <ExtraToast
        v-for="(width, index) in widths"
        :key="width"
        :group="'audit-' + width"
        :width="width"
        :position="positions[index]"
      />
    `,
  }),
  parameters: { controls: { disable: true } },
};
