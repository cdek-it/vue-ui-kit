import { ref } from 'vue';
import Button from 'primevue/button';
import Tooltip from 'primevue/tooltip';

export const Template = (args) => ({
  components: { Button },
  directive: { Tooltip },
  setup() {
    const value = ref(args.defaultValue || 50);

    return { args, value };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <button v-tooltip="'Enter your username username username username username username username м username username username username username usernameusername м usernameusernameusernameusernameusernameusernameusername   username username username username username username username'">
  Hover me
  </button>
</div>
`,
});
