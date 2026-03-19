import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';

export const Template = (args) => ({
  components: { RadioButton },
  setup() {
    const value = ref('option1');
    return { args, value };
  },
  template: `
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <RadioButton v-model="value" name="group" value="option1" inputId="opt1" v-bind="args" />
        <label for="opt1">Опция 1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="value" name="group" value="option2" inputId="opt2" v-bind="args" />
        <label for="opt2">Опция 2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="value" name="group" value="option3" inputId="opt3" v-bind="args" />
        <label for="opt3">Опция 3</label>
      </div>
    </div>
  `,
});

export const TemplateInvalid = (args) => ({
  components: { RadioButton },
  setup() {
    const value = ref('option1');
    return { args, value };
  },
  template: `
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <RadioButton v-model="value" name="group-invalid" value="option1" inputId="inv1" invalid v-bind="args" />
        <label for="inv1">Опция 1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="value" name="group-invalid" value="option2" inputId="inv2" invalid v-bind="args" />
        <label for="inv2">Опция 2</label>
      </div>
    </div>
  `,
});

export const TemplateDisabled = (args) => ({
  components: { RadioButton },
  setup() {
    const value = ref('option1');
    return { args, value };
  },
  template: `
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <RadioButton v-model="value" name="group-disabled" value="option1" inputId="dis1" disabled v-bind="args" />
        <label for="dis1" class="opacity-60">Опция 1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="value" name="group-disabled" value="option2" inputId="dis2" disabled v-bind="args" />
        <label for="dis2" class="opacity-60">Опция 2</label>
      </div>
    </div>
  `,
});
