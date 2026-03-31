import ToggleSwitch from 'primevue/toggleswitch';

export const Template = (args) => ({
  components: { ToggleSwitch },
  setup() {
    return { args };
  },
  template: `<ToggleSwitch v-bind="args" />`,
});
