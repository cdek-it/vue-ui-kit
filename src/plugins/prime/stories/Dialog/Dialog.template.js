import { ref } from 'vue';
import { Dialog } from 'primevue';
import Button from 'primevue/button';

export const Template = (args) => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(args.modal === false);

    return { args, visible };
  },
  template: `
    <Button v-if="args.modal !== false" @click="visible = true">Нажми на меня</Button>
    
    <Dialog header="Dialog" modal v-model:visible="visible" v-bind="args">
      <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe. </div>
      <template #footer>
        Футер диалога
      </template>
    </Dialog>
  `,
});
