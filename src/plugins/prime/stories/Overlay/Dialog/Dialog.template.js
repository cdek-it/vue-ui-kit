import { ref } from 'vue';
import { Dialog } from 'primevue';
import Button from 'primevue/button';
import { addons } from '@storybook/addons';

export const Template = (args) => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const channel = addons.getChannel();
    channel.on('storyChanged', () => {
      visible.value = false;
    });

    return { args, visible };
  },
  template: `
    <Button @click="visible = true">Открыть диалог</Button>
    
    <Dialog 
      header="Заголовок диалога" 
      modal 
      v-model:visible="visible" 
      v-bind="args"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Delectus, saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Delectus, saepe.
      </div>
      <template #footer>
        <Button label="Отмена" text @click="visible = false" />
        <Button label="Сохранить" @click="visible = false" />
      </template>
    </Dialog>
  `,
});
