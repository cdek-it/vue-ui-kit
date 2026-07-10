import Drawer from 'primevue/drawer';
import Button from 'primevue/button';

export const Template = (args) => ({
  components: { Drawer, Button },
  setup() {
    return { args };
  },
  template: `
    <div>
      <Button label="Open Drawer" @click="args.visible = true" />
      <Drawer v-bind="args" v-model:visible="args.visible">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Drawer>
    </div>
  `,
});
