import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

export const Template = (args) => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    return { args, visible };
  },
  template: `
<div>
  <Button label="Open Dialog" @click="visible = true" />
  
  <Dialog 
    v-model:visible="visible" 
    v-bind="args"
    :class="args.size"
    :focusOnShow="false"
    :closeButtonProps="{ 
      autofocus: false, 
      class: 'p-button-rounded p-button-text' 
    }"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <template #footer v-if="args.header !== undefined || args.showHeader !== false">
      <Button label="Нет" variant="text" @click="visible = false" />
      <Button label="Продолжить" severity="secondary" @click="visible = false" />
    </template>
    <template #footer v-else>
      <div class="flex justify-end">
         <Button label="Close" @click="visible = false" />
      </div>
    </template>
  </Dialog>
</div>
`,
});
