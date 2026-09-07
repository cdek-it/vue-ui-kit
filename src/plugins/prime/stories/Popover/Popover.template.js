import { ref } from 'vue';
import Popover from 'primevue/popover';
import Button from 'primevue/button';

export const Template = (args) => ({
  components: { Popover, Button },
  setup() {
    const op = ref();
    const toggle = (event) => op.value.toggle(event);
    return { args, op, toggle };
  },
  template: `
    <div class="flex justify-center items-center" style="min-height: 200px">
      <Button type="button" label="Показать" @click="toggle" />
      <Popover ref="op" v-bind="args">
        <div class="flex flex-col gap-2 p-2">
          <p class="m-0 text-sm">Содержимое popover.</p>
        </div>
      </Popover>
    </div>
  `,
});

export const TemplateRichContent = (args) => ({
  components: { Popover, Button },
  setup() {
    const op = ref();
    const toggle = (event) => op.value.toggle(event);
    return { args, op, toggle };
  },
  template: `
    <div class="flex justify-center items-center" style="min-height: 200px">
      <Button type="button" label="Показать" @click="toggle" />
      <Popover ref="op" v-bind="args">
        <div class="flex flex-col gap-3 p-1" style="min-width: 200px">
          <p class="m-0 font-semibold">Заголовок</p>
          <p class="m-0 text-sm">Дополнительное описание или любой произвольный контент внутри popover.</p>
          <div class="flex gap-2">
            <Button label="Действие" size="small" />
            <Button label="Отмена" size="small" severity="contrast" />
          </div>
        </div>
      </Popover>
    </div>
  `,
});
