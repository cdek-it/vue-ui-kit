import Checkbox from 'primevue/checkbox';

export const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
});

export const TemplateGroup = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: `
<div class="flex flex-col gap-4">
  <div class="flex items-center gap-3">
    <Checkbox v-bind="args" value="Pizza" inputId="ingredient1" name="pizza" />
    <label for="ingredient1"> Cheese </label>
  </div>
  <div class="flex items-center gap-3">
    <Checkbox v-bind="args" value="Mushroom" inputId="ingredient2" name="pizza" />
    <label for="ingredient2"> Mushroom </label>
  </div>
  <div class="flex items-center gap-3">
    <Checkbox v-bind="args" value="Pepper" inputId="ingredient3" name="pizza" />
    <label for="ingredient3"> Pepper </label>
  </div>
  <div class="flex items-center gap-3">
    <Checkbox v-bind="args" value="Onion" inputId="ingredient4" name="pizza" />
    <label for="ingredient4"> Onion </label>
  </div>
</div>
`,
});
