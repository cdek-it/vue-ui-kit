import { ExtraButton } from '@/primeBlocks';
import ExtraInputText from '@/primeBlocks/ExtraInputText/ExtraInputText.vue';

export const Template = (args) => ({
  components: { ExtraButton },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center justify-center p-10">
      <ExtraButton v-if="args.position === 'top'"    v-tooltip.top="args.text"    :label="args.label" />
      <ExtraButton v-else-if="args.position === 'bottom'" v-tooltip.bottom="args.text" :label="args.label" />
      <ExtraButton v-else-if="args.position === 'left'"   v-tooltip.left="args.text"   :label="args.label" />
      <ExtraButton v-else                             v-tooltip.right="args.text"  :label="args.label" />
    </div>
  `,
});

export const TemplatePositions = () => ({
  components: { ExtraButton },
  template: `
    <div class="grid grid-cols-3 gap-8 justify-items-center p-10">
      <div />
      <ExtraButton v-tooltip.top="'Подсказка сверху'" label="Сверху" />
      <div />
      <ExtraButton v-tooltip.left="'Подсказка слева'" label="Слева" />
      <div />
      <ExtraButton v-tooltip.right="'Подсказка справа'" label="Справа" />
      <div />
      <ExtraButton v-tooltip.bottom="'Подсказка снизу'" label="Снизу" />
      <div />
    </div>
  `,
});

export const TemplateDelay = () => ({
  components: { ExtraButton },
  template: `
    <div class="flex flex-col items-center gap-4 p-10 justify-center">
      <ExtraButton v-tooltip="{ value: 'Подсказка с задержкой 1с', showDelay: 1000 }" label="Задержка появления (1с)" />
      <ExtraButton v-tooltip="{ value: 'Подсказка с задержкой скрытия 0.5с', hideDelay: 500 }" label="Задержка скрытия (0.5с)" variant="tertiary" />
    </div>

  `,
});

export const TemplateEvent = () => ({
  components: { InputText: ExtraInputText, ExtraButton },
  template: `
    <div class="flex flex-col items-center gap-8 p-10">
      <div class="flex flex-col gap-2">
        <InputText v-tooltip.focus="'Введите ваше имя'" placeholder="Кликни для фокуса" />
      </div>
    </div>
  `,
});
