import Button from 'primevue/button';
import Tooltip from 'primevue/tooltip';

export const Template = (args) => ({
  components: { Button },
  directives: { tooltip: Tooltip },
  setup() {
    return { args };
  },
  template: `
    <Button 
      label="Наведите на меня" 
      v-tooltip="args.value || 'Это подсказка'"
      v-bind="args"
    />
  `,
});
