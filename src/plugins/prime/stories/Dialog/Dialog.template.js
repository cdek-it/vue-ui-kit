import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import { ExtraButton } from '@/primeBlocks';

export const Template = (args) => ({
  components: { Dialog, ExtraButton },
  setup() {
    const visible = ref(false);
    return { args, visible };
  },
  template: `
<div>
  <ExtraButton label="Open Dialog" @click="visible = true" />
  
  <Dialog 
    v-model:visible="visible" 
    v-bind="args"
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
      <ExtraButton label="Cancel" variant="text" @click="visible = false" />
      <ExtraButton label="Save" variant="tertiary" @click="visible = false" />
    </template>
    <template #footer v-else>
      <div class="flex justify-end">
         <ExtraButton label="Close" @click="visible = false" />
      </div>
    </template>
  </Dialog>
</div>
`,
});
