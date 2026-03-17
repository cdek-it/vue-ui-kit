import { ref } from 'vue';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';

export const Template = (args) => ({
  components: { Drawer, Button },
  setup() {
    return { args };
  },
  template: `
    <div>
      <Button label="Открыть Drawer" @click="args.visible = true" />
      <Drawer v-bind="args" v-model:visible="args.visible">
        <p>
          Лорем ипсум долор сит амет, консектетур адиписцинг элит, сед до эиусмод темпор инцидидунт ут лаборе эт долоре магна аликуа.
        </p>
      </Drawer>
    </div>
  `,
});

export const TemplateVariants = () => ({
  components: { Drawer, Button },
  setup() {
    const visibleLeft = ref(false);
    const visibleRight = ref(false);
    const visibleTop = ref(false);
    const visibleBottom = ref(false);
    const visibleFull = ref(false);

    return {
      visibleLeft,
      visibleRight,
      visibleTop,
      visibleBottom,
      visibleFull,
    };
  },
  template: `
<div class="flex flex-col gap-4">
  <h3>Позиции Drawer</h3>
  <div class="flex gap-2 flex-wrap">
    <Button label="Слева" @click="visibleLeft = true" />
    <Button label="Справа" @click="visibleRight = true" />
    <Button label="Сверху" @click="visibleTop = true" />
    <Button label="Снизу" @click="visibleBottom = true" />
    <Button label="На весь экран" @click="visibleFull = true" />
  </div>

  <Drawer v-model:visible="visibleLeft" header="Drawer Слева" position="left">
    <p>Панель, выдвигающаяся слева.</p>
  </Drawer>

  <Drawer v-model:visible="visibleRight" header="Drawer Справа" position="right">
    <p>Панель, выдвигающаяся справа.</p>
  </Drawer>

  <Drawer v-model:visible="visibleTop" header="Drawer Сверху" position="top">
    <p>Панель, выдвигающаяся сверху.</p>
  </Drawer>

  <Drawer v-model:visible="visibleBottom" header="Drawer Снизу" position="bottom">
    <p>Панель, выдвигающаяся снизу.</p>
  </Drawer>

  <Drawer v-model:visible="visibleFull" header="Полноэкранный Drawer" position="full">
    <p>Панель на весь экран.</p>
  </Drawer>
</div>
`,
});
