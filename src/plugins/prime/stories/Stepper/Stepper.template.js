import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import Step from 'primevue/step';
import StepPanels from 'primevue/steppanels';
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button';

export const BasicTemplate = (args) => ({
  components: { Stepper, StepList, Step, StepPanels, StepPanel, Button },
  setup() {
    return {
      args,
    };
  },
  template: `
    <Stepper value="1" v-bind="args">
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
        <StepPanel v-slot="{ activateCallback }" value="1">
          <div class="flex flex-col gap-4">
            <div>Step 1 Content</div>
            <div class="flex justify-end">
              <Button label="Next" severity="secondary" @click="activateCallback('2')" />
            </div>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <div class="flex flex-col gap-4">
            <div>Step 2 Content</div>
            <div class="flex justify-between">
              <Button label="Back" severity="contrast" @click="activateCallback('1')" />
              <Button label="Next" severity="secondary" @click="activateCallback('3')" />
            </div>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <div class="flex flex-col gap-4">
            <div>Step 3 Content</div>
            <div class="flex justify-start">
              <Button label="Back" severity="contrast" @click="activateCallback('2')" />
            </div>
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  `,
});

export const ErrorTemplate = (args) => ({
  components: { Stepper, StepList, Step, StepPanels, StepPanel, Button },
  setup() {
    return {
      args,
    };
  },
  template: `
    <Stepper value="2" v-bind="args">
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
        <StepPanel v-slot="{ activateCallback }" value="1">
          <div class="flex flex-col gap-4">
            <div>Step 1 Content</div>
            <div class="flex justify-end">
              <Button label="Next" severity="secondary" @click="activateCallback('2')" />
            </div>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <div class="flex flex-col gap-4">
            <div>Step 2 Content (Invalid)</div>
            <div class="flex justify-between">
              <Button label="Back" severity="contrast" @click="activateCallback('1')" />
              <Button label="Next" severity="secondary" disabled />
            </div>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <div class="flex flex-col gap-4">
            <div>Step 3 Content</div>
            <div class="flex justify-start">
              <Button label="Back" severity="contrast" @click="activateCallback('2')" />
            </div>
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  `,
});

export const IconsTemplate = (args) => ({
  components: { Stepper, StepList, Step, StepPanels, StepPanel, Button },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 40px;">
      <!-- Пример 1: User, Card, Check -->
      <Stepper value="1">
        <StepList>
          <Step 
            value="1" 
            :pt="{
              number: {
                innerHTML: '<i class=\\'ti ti-user\\'></i>'
              }
            }"
          >
            Personal Info
            <div class="caption-secondary">Enter your details</div>
          </Step>
          <Step 
            value="2"
            :pt="{
              number: {
                innerHTML: '<i class=\\'ti ti-credit-card\\'></i>'
              }
            }"
          >
            Payment
            <div class="caption-secondary">Payment method</div>
          </Step>
          <Step 
            value="3"
            :pt="{
              number: {
                innerHTML: '<i class=\\'ti ti-check\\'></i>'
              }
            }"
          >
            Confirmation
            <div class="caption-secondary">Review and confirm</div>
          </Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex flex-col gap-4">
              <div>Step 1 Content</div>
              <div class="flex justify-end">
                <Button label="Next" severity="secondary" @click="activateCallback('2')" />
              </div>
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex flex-col gap-4">
              <div>Step 2 Content</div>
              <div class="flex justify-between">
                <Button label="Back" severity="contrast" @click="activateCallback('1')" />
                <Button label="Next" severity="secondary" @click="activateCallback('3')" />
              </div>
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="3">
            <div class="flex flex-col gap-4">
              <div>Step 3 Content</div>
              <div class="flex justify-start">
                <Button label="Back" severity="contrast" @click="activateCallback('2')" />
              </div>
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>

      <!-- Пример 2: Shopping Cart, Truck, Package -->
      <Stepper value="2">
        <StepList>
          <Step 
            value="1"
            :pt="{
              number: {
                innerHTML: '<i class=\\'ti ti-shopping-cart\\'></i>'
              }
            }"
          >
            Cart
            <div class="caption-secondary">Review items</div>
          </Step>
          <Step 
            value="2"
            :pt="{
              number: {
                innerHTML: '<i class=\\'ti ti-truck\\'></i>'
              }
            }"
          >
            Shipping
            <div class="caption-secondary">Delivery address</div>
          </Step>
          <Step 
            value="3"
            :pt="{
              number: {
                innerHTML: '<i class=\\'ti ti-package\\'></i>'
              }
            }"
          >
            Complete
            <div class="caption-secondary">Order placed</div>
          </Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex flex-col gap-4">
              <div>Step 1 Content</div>
              <div class="flex justify-end">
                <Button label="Next" severity="secondary" @click="activateCallback('2')" />
              </div>
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex flex-col gap-4">
              <div>Step 2 Content</div>
              <div class="flex justify-between">
                <Button label="Back" severity="contrast" @click="activateCallback('1')" />
                <Button label="Next" severity="secondary" @click="activateCallback('3')" />
              </div>
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="3">
            <div class="flex flex-col gap-4">
              <div>Step 3 Content</div>
              <div class="flex justify-start">
                <Button label="Back" severity="contrast" @click="activateCallback('2')" />
              </div>
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
  `,
});
