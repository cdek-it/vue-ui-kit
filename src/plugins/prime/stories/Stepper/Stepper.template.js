import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import Step from 'primevue/step';
import StepPanels from 'primevue/steppanels';
import StepPanel from 'primevue/steppanel';
import StepItem from 'primevue/stepitem';
import Button from 'primevue/button';
import { ref } from 'vue';

export const HorizontalTemplate = () => ({
  components: { Stepper, StepList, Step, StepPanels, StepPanel, Button },
  setup() {
    const activeStep = ref('1');
    return { activeStep };
  },
  template: `
    <Stepper v-model:value="activeStep">
      <StepList>
        <Step value="1">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <Step value="2">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <Step value="3">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
      </StepList>
      <StepPanels>
        <StepPanel value="1">
          <div class="flex flex-col gap-4">
            <div>Step 1 Content</div>
            <div class="flex justify-end">
              <Button label="Next" severity="secondary" @click="activeStep = '2'" />
            </div>
          </div>
        </StepPanel>
        <StepPanel value="2">
          <div class="flex flex-col gap-4">
            <div>Step 2 Content</div>
            <div class="flex justify-between">
              <Button label="Back" severity="contrast" @click="activeStep = '1'" />
              <Button label="Next" severity="secondary" @click="activeStep = '3'" />
            </div>
          </div>
        </StepPanel>
        <StepPanel value="3">
          <div class="flex flex-col gap-4">
            <div>Step 3 Content</div>
            <div class="flex justify-start">
              <Button label="Back" severity="contrast" @click="activeStep = '2'" />
            </div>
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  `,
});

export const VerticalTemplate = () => ({
  components: { Stepper, StepItem, Step, StepPanel, Button },
  setup() {
    const activeStep = ref('1');
    return { activeStep };
  },
  template: `
    <Stepper v-model:value="activeStep">
      <StepItem value="1">
        <Step>
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <StepPanel>
          <div class="flex flex-col gap-4 pb-4">
            <div>Step 1 Content</div>
            <div class="flex justify-start">
              <Button label="Next" severity="secondary" @click="activeStep = '2'" />
            </div>
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step>
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <StepPanel>
          <div class="flex flex-col gap-4 pb-4">
            <div>Step 2 Content</div>
            <div class="flex justify-start gap-2">
              <Button label="Back" severity="contrast" @click="activeStep = '1'" />
              <Button label="Next" severity="secondary" @click="activeStep = '3'" />
            </div>
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <StepPanel>
          <div class="flex flex-col gap-4 pb-4">
            <div>Step 3 Content</div>
            <div class="flex justify-start">
              <Button label="Back" severity="contrast" @click="activeStep = '2'" />
            </div>
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  `,
});

export const LinearTemplate = () => ({
  components: { Stepper, StepList, Step, StepPanels, StepPanel, Button },
  setup() {
    const activeStep = ref('1');
    return { activeStep };
  },
  template: `
    <Stepper v-model:value="activeStep" linear>
      <StepList>
        <Step value="1">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <Step value="2">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <Step value="3">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
      </StepList>
      <StepPanels>
        <StepPanel value="1">
          <div class="flex flex-col gap-4">
            <div>Step 1 Content</div>
            <div class="flex justify-end">
              <Button label="Next" severity="secondary" @click="activeStep = '2'" />
            </div>
          </div>
        </StepPanel>
        <StepPanel value="2">
          <div class="flex flex-col gap-4">
            <div>Step 2 Content</div>
            <div class="flex justify-between">
              <Button label="Back" severity="contrast" @click="activeStep = '1'" />
              <Button label="Next" severity="secondary" @click="activeStep = '3'" />
            </div>
          </div>
        </StepPanel>
        <StepPanel value="3">
          <div class="flex flex-col gap-4">
            <div>Step 3 Content</div>
            <div class="flex justify-start">
              <Button label="Back" severity="contrast" @click="activeStep = '2'" />
            </div>
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  `,
});

export const StepsOnlyTemplate = () => ({
  components: { Stepper, StepList, Step },
  setup() {
    const activeStep = ref('1');
    return { activeStep };
  },
  template: `
    <Stepper v-model:value="activeStep">
      <StepList>
        <Step value="1">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <Step value="2">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <Step value="3">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
      </StepList>
    </Stepper>
  `,
});

export const ErrorTemplate = () => ({
  components: { Stepper, StepList, Step, StepPanels, StepPanel, Button },
  setup() {
    const activeStep = ref('2');
    return { activeStep };
  },
  template: `
    <Stepper v-model:value="activeStep">
      <StepList>
        <Step value="1">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <Step value="2" class="step-invalid">
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
        <Step value="3" disabled>
          Stepper
          <div class="caption-secondary">caption</div>
        </Step>
      </StepList>
      <StepPanels>
        <StepPanel value="1">
          <div class="flex flex-col gap-4">
            <div>Step 1 Content</div>
            <div class="flex justify-end">
              <Button label="Next" severity="secondary" @click="activeStep = '2'" />
            </div>
          </div>
        </StepPanel>
        <StepPanel value="2">
          <div class="flex flex-col gap-4">
            <div>Step 2 Content (Invalid)</div>
            <div class="flex justify-between">
              <Button label="Back" severity="contrast" @click="activeStep = '1'" />
              <Button label="Next" severity="secondary" disabled />
            </div>
          </div>
        </StepPanel>
        <StepPanel value="3">
          <div class="flex flex-col gap-4">
            <div>Step 3 Content</div>
            <div class="flex justify-start">
              <Button label="Back" severity="contrast" @click="activeStep = '2'" />
            </div>
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  `,
});
