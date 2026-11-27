import { ref } from 'vue';
import Popover from 'primevue/popover';
import { ExtraButton } from '@/primeBlocks';

export const Template = (args) => ({
  components: { Popover, ExtraButton },
  setup() {
    const op = ref();
    const toggle = (event) => op.value.toggle(event);
    return { args, op, toggle };
  },
  template: `
    <div class="flex justify-center items-center" style="min-height: 200px">
      <ExtraButton type="button" label="Показать" @click="toggle" />
      <Popover ref="op" v-bind="args">
        <div class="flex flex-col gap-2 p-2">
          <p class="m-0 text-sm">Содержимое popover.</p>
        </div>
      </Popover>
    </div>
  `,
});

export const TemplateRichContent = (args) => ({
  components: { Popover, ExtraButton },
  setup() {
    const op = ref();
    const toggle = (event) => op.value.toggle(event);
    return { args, op, toggle };
  },
  template: `
    <div class="flex justify-center items-center" style="min-height: 200px">
      <ExtraButton type="button" label="Показать" @click="toggle" />
      <Popover ref="op" v-bind="args">
        <div class="flex flex-col gap-3 p-1" style="min-width: 200px">
          <p class="m-0 font-semibold">Заголовок</p>
          <p class="m-0 text-sm">Дополнительное описание или любой произвольный контент внутри popover.</p>
          <div class="flex gap-2">
            <ExtraButton label="Действие" size="small" />
            <ExtraButton label="Отмена" size="small" variant="tertiary" />
          </div>
        </div>
      </Popover>
    </div>
  `,
});
