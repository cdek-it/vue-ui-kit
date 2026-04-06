import ToggleSwitch from 'primevue/toggleswitch';

export const Template = (args) => ({
  components: { ToggleSwitch },
  setup() {
    return { args };
  },
  template: `<ToggleSwitch :default-value="args.checked" :invalid="args.invalid" :disabled="args.disabled" />`,
});
