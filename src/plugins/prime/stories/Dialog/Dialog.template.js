import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

// Template for individual dialog variants
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
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <template #footer>
      <Button label="Cancel" variant="text" @click="visible = false" />
      <Button label="Save" severity="tertiary" @click="visible = false" />
    </template>
  </Dialog>
</div>
`,
});

// Complete variants matrix
export const TemplateVariants = () => ({
  components: { Dialog, Button },
  setup() {
    const visibleDefault = ref(false);
    const visibleSm = ref(false);
    const visibleLg = ref(false);
    const visibleXlg = ref(false);
    const visibleNoModal = ref(false);
    const visibleNoHeader = ref(false);
    const visibleNoFooter = ref(false);
    const visibleLongContent = ref(false);

    return {
      visibleDefault,
      visibleSm,
      visibleLg,
      visibleXlg,
      visibleNoModal,
      visibleNoHeader,
      visibleNoFooter,
      visibleLongContent,
    };
  },
  template: `
<div style="display: flex; flex-direction: column; gap: 20px;">
  <h3>Dialog Sizes</h3>
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <Button label="Default" @click="visibleDefault = true" />
    <Button label="Small" @click="visibleSm = true" />
    <Button label="Large" @click="visibleLg = true" />
    <Button label="Extra Large" @click="visibleXlg = true" />
  </div>

  <h3 style="margin-top: 20px;">Dialog Variants</h3>
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <Button label="No Modal" @click="visibleNoModal = true" />
    <Button label="No Header" @click="visibleNoHeader = true" />
    <Button label="No Footer" @click="visibleNoFooter = true" />
    <Button label="Long Content" @click="visibleLongContent = true" />
  </div>

  <!-- Default Dialog -->
  <Dialog v-model:visible="visibleDefault" header="Default Dialog" modal>
    <p>This is a default dialog with standard size.</p>
    <template #footer>
      <Button label="Cancel" variant="text" @click="visibleDefault = false" />
      <Button label="Save" severity="tertiary" @click="visibleDefault = false" />
    </template>
  </Dialog>

  <!-- Small Dialog -->
  <Dialog v-model:visible="visibleSm" header="Small Dialog" modal class="p-dialog-sm">
    <p>This is a small dialog.</p>
    <template #footer>
      <Button label="Cancel" variant="text" @click="visibleSm = false" />
      <Button label="Save" severity="tertiary" @click="visibleSm = false" />
    </template>
  </Dialog>

  <!-- Large Dialog -->
  <Dialog v-model:visible="visibleLg" header="Large Dialog" modal class="p-dialog-lg">
    <p>This is a large dialog with more space for content.</p>
    <template #footer>
      <Button label="Cancel" variant="text" @click="visibleLg = false" />
      <Button label="Save" severity="tertiary" @click="visibleLg = false" />
    </template>
  </Dialog>

  <!-- Extra Large Dialog -->
  <Dialog v-model:visible="visibleXlg" header="Extra Large Dialog" modal class="p-dialog-xlg">
    <p>This is an extra large dialog with maximum space for content.</p>
    <template #footer>
      <Button label="Cancel" variant="text" @click="visibleXlg = false" />
      <Button label="Save" severity="tertiary" @click="visibleXlg = false" />
    </template>
  </Dialog>

  <!-- No Modal Dialog -->
  <Dialog v-model:visible="visibleNoModal" header="No Modal Dialog" :modal="false">
    <p>This dialog doesn't block the background.</p>
    <template #footer>
      <Button label="Close" @click="visibleNoModal = false" />
    </template>
  </Dialog>

  <!-- No Header Dialog -->
  <Dialog v-model:visible="visibleNoHeader" modal>
    <p>This dialog has no header.</p>
    <template #footer>
      <Button label="Close" @click="visibleNoHeader = false" />
    </template>
  </Dialog>

  <!-- No Footer Dialog -->
  <Dialog v-model:visible="visibleNoFooter" header="No Footer Dialog" modal>
    <p>This dialog has no footer.</p>
  </Dialog>

  <!-- Long Content Dialog -->
  <Dialog v-model:visible="visibleLongContent" header="Long Content Dialog" modal>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <template #footer>
      <Button label="Cancel" variant="text" @click="visibleLongContent = false" />
      <Button label="Save" severity="tertiary" @click="visibleLongContent = false" />
    </template>
  </Dialog>
</div>
`,
});
