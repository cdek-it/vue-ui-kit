import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import Step from 'primevue/step';
import StepItem from 'primevue/stepitem';
import StepPanels from 'primevue/steppanels';
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import ToggleButton from 'primevue/togglebutton';
import { ref } from 'vue';

// Horizontal Stepper
export const Horizontal = (args) => ({
  components: { Stepper, StepList, Step, StepPanels, StepPanel, Button },
  setup() {
    return { args };
  },
  template: `
    <div class="card flex justify-center">
      <Stepper value="1" class="basis-[50rem]">
        <StepList>
          <Step value="1">Header I</Step>
          <Step value="2">Header II</Step>
          <Step value="3">Header III</Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex flex-col h-48">
              <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
            </div>
            <div class="flex pt-6 justify-end">
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('2')" />
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex flex-col h-48">
              <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
            </div>
            <div class="flex pt-6 justify-between">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="3">
            <div class="flex flex-col h-48">
              <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
            </div>
            <div class="pt-6">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
  `,
});

// Vertical Stepper
export const Vertical = (args) => ({
  components: { Stepper, StepItem, Step, StepPanel, Button },
  setup() {
    return { args };
  },
  template: `
    <div class="card">
      <Stepper value="1">
        <StepItem value="1">
          <Step>Header I</Step>
          <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col h-48">
              <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
            </div>
            <div class="py-6">
              <Button label="Next" @click="activateCallback('2')" />
            </div>
          </StepPanel>
        </StepItem>
        <StepItem value="2">
          <Step>Header II</Step>
          <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col h-48">
              <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
            </div>
            <div class="flex py-6 gap-2">
              <Button label="Back" severity="secondary" @click="activateCallback('1')" />
              <Button label="Next" @click="activateCallback('3')" />
            </div>
          </StepPanel>
        </StepItem>
        <StepItem value="3">
          <Step>Header III</Step>
          <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col h-48">
              <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
            </div>
            <div class="py-6">
              <Button label="Back" severity="secondary" @click="activateCallback('2')" />
            </div>
          </StepPanel>
        </StepItem>
      </Stepper>
    </div>
  `,
});

// Steps Only
export const StepsOnly = (args) => ({
  components: { Stepper, StepList, Step },
  setup() {
    return { args };
  },
  template: `
    <div class="card flex justify-center">
      <Stepper value="3" class="basis-[50rem]">
        <StepList>
          <Step value="1">Design</Step>
          <Step value="2">Development</Step>
          <Step value="3">QA</Step>
        </StepList>
      </Stepper>
    </div>
  `,
});

// Basic Stepper (Simple horizontal layout)
export const Basic = (args) => ({
  components: { Stepper, StepList, Step, StepPanels, StepPanel, Button },
  setup() {
    return { args };
  },
  template: `
    <div class="card flex justify-center">
      <Stepper value="1" class="basis-[50rem]">
        <StepList>
          <Step value="1">Header I</Step>
          <Step value="2">Header II</Step>
          <Step value="3">Header III</Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex flex-col h-48">
              <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
            </div>
            <div class="flex pt-6 justify-end">
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('2')" />
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex flex-col h-48">
              <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
            </div>
            <div class="flex pt-6 justify-between">
              <Button label="Back" severity="outlined" icon="pi pi-arrow-left" @click="activateCallback('1')" />
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="3">
            <div class="flex flex-col h-48">
              <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
            </div>
            <div class="pt-6">
              <Button label="Back" severity="outlined" icon="pi pi-arrow-left" @click="activateCallback('2')" />
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
  `,
});

// Template Stepper (Custom with icons, titles and subtitles)
export const Template = (args) => ({
  components: { Stepper, StepList, Step, StepPanels, StepPanel, Button, Divider, InputText, Password, ToggleButton },
  setup() {
    const activeStep = ref(1);
    return { args, activeStep };
  },
  template: `
    <div class="card flex justify-center">
      <Stepper v-model:value="activeStep" class="basis-[56rem]">
        <StepList>
          <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="1">
            <div class="flex flex-row flex-auto gap-2" v-bind="a11yAttrs.root">
              <button class="bg-transparent border-0 inline-flex flex-col gap-2" style="display: flex; flex-direction: row;" @click="activateCallback" v-bind="a11yAttrs.header">
                <span :class="['rounded-full border-2 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': value <= activeStep, 'border-surface-200 dark:border-surface-700': value > activeStep }]" style="width: 32px !important; height: 32px !important; min-width: 32px; min-height: 32px; flex-shrink: 0" data-pc-section="number">
                  <i class="ti ti-home" style="font-size: 16px"></i>
                </span>
                <div class="flex flex-col justify-content-center gap-1">
                  <span class="text-sm font-medium" data-pc-section="title">Личные данные</span>
                  <span class="text-xs text-surface-500" data-pc-section="title">Основная информация</span>
                </div>
              </button>
              <Divider />
            </div>
          </Step>
          <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="2">
            <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
              <button class="bg-transparent border-0 inline-flex flex-col gap-2" style="display: flex; flex-direction: row;" @click="activateCallback" v-bind="a11yAttrs.header">
                <span :class="['rounded-full border-2 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': value <= activeStep, 'border-surface-200 dark:border-surface-700': value > activeStep }]" style="width: 32px !important; height: 32px !important; min-width: 32px; min-height: 32px; flex-shrink: 0" data-pc-section="number">
                  <i class="ti ti-star" style="font-size: 16px"></i>
                </span>
                <div class="flex flex-col gap-1">
                  <span class="text-sm font-medium" data-pc-section="title">Интересы</span>
                  <span class="text-xs text-surface-500" data-pc-section="title">Выберите предпочтения</span>
                </div>
              </button>
              <Divider />
            </div>
          </Step>
          <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="3">
            <div class="flex flex-row pl-2" v-bind="a11yAttrs.root">
              <button class="bg-transparent border-0 inline-flex flex-col gap-2" style="display: flex; flex-direction: row;" @click="activateCallback" v-bind="a11yAttrs.header">
                <span :class="['rounded-full border-2 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': value <= activeStep, 'border-surface-200 dark:border-surface-700': value > activeStep }]" style="width: 32px !important; height: 32px !important; min-width: 32px; min-height: 32px; flex-shrink: 0" data-pc-section="number">
                  <i class="ti ti-check" style="font-size: 16px"></i>
                </span>
                <div class="flex flex-col gap-1">
                  <span class="text-sm font-medium" data-pc-section="title">Завершение</span>
                  <span class="text-xs text-surface-500" data-pc-section="title">Подтверждение данных</span>
                </div>
              </button>
            </div>
          </Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" :value="1">
            <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
              <div class="text-center mt-4 mb-4 text-xl font-semibold">Создайте свой аккаунт</div>
              <div class="field">
                <InputText type="text" placeholder="Имя" fluid />
              </div>
              <div class="field">
                <InputText type="email" placeholder="Email" fluid />
              </div>
              <div class="field">
                <Password placeholder="Пароль" fluid />
              </div>
            </div>
            <div class="flex pt-6 justify-end">
              <Button label="Далее" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback(2)" />
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" :value="2">
            <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
              <div class="text-center mt-4 mb-4 text-xl font-semibold">Выберите ваши интересы</div>
              <div class="flex flex-wrap justify-center gap-4">
                <ToggleButton onLabel="Природа" offLabel="Природа" />
                <ToggleButton onLabel="Искусство" offLabel="Искусство" />
                <ToggleButton onLabel="Музыка" offLabel="Музыка" />
                <ToggleButton onLabel="Дизайн" offLabel="Дизайн" />
                <ToggleButton onLabel="Фотография" offLabel="Фотография" />
                <ToggleButton onLabel="Кино" offLabel="Кино" />
                <ToggleButton onLabel="Спорт" offLabel="Спорт" />
                <ToggleButton onLabel="Игры" offLabel="Игры" />
                <ToggleButton onLabel="Путешествия" offLabel="Путешествия" />
                <ToggleButton onLabel="Танцы" offLabel="Танцы" />
              </div>
            </div>
            <div class="flex pt-6 justify-between">
              <Button label="Назад" severity="outlined" icon="pi pi-arrow-left" @click="activateCallback(1)" />
              <Button label="Далее" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback(3)" />
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" :value="3">
            <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
              <div class="text-center mt-4 mb-4 text-xl font-semibold">Аккаунт успешно создан</div>
              <div class="flex justify-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper/content.svg" />
              </div>
            </div>
            <div class="flex pt-6 justify-start">
              <Button label="Назад" severity="outlined" icon="pi pi-arrow-left" @click="activateCallback(2)" />
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
  `,
});
