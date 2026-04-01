import Stepper from 'primevue/stepper';
import {
  HorizontalTemplate,
  VerticalTemplate,
  LinearTemplate,
  StepsOnlyTemplate,
  ErrorTemplate,
} from './Stepper.template';

const meta = {
  title: 'Prime/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Пошаговый навигационный компонент для отображения прогресса через последовательность шагов.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-stepper' },
  },
  argTypes: {
    linear: {
      control: 'boolean',
      description:
        'Запрещает переход к следующему шагу без завершения текущего',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;

// ── Stories ────────────────────────────────────────────────────────────────────

export const Horizontal = {
  render: HorizontalTemplate,
  parameters: {
    docs: {},
  },
};

export const Vertical = {
  render: VerticalTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Stepper v-model:value="activeStep">
    <StepItem value="1">
      <Step>Stepper<div class="caption-secondary">caption</div></Step>
      <StepPanel>
        <div class="flex flex-col gap-4">
          <div>Step 1 Content</div>
          <div class="flex justify-start">
            <Button label="Next" severity="secondary" @click="activeStep = '2'" />
          </div>
        </div>
      </StepPanel>
    </StepItem>
    <StepItem value="2">
      <Step>Stepper<div class="caption-secondary">caption</div></Step>
      <StepPanel>
        <div class="flex flex-col gap-4">
          <div>Step 2 Content</div>
          <div class="flex justify-start gap-2">
            <Button label="Back" severity="contrast" @click="activeStep = '1'" />
            <Button label="Next" severity="secondary" @click="activeStep = '3'" />
          </div>
        </div>
      </StepPanel>
    </StepItem>
    <StepItem value="3">
      <Step>Stepper<div class="caption-secondary">caption</div></Step>
      <StepPanel>
        <div class="flex flex-col gap-4">
          <div>Step 3 Content</div>
          <div class="flex justify-start">
            <Button label="Back" severity="contrast" @click="activeStep = '2'" />
          </div>
        </div>
      </StepPanel>
    </StepItem>
  </Stepper>
</template>
        `,
      },
    },
  },
};

export const Linear = {
  render: LinearTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Stepper v-model:value="activeStep" linear>
    <StepList>
      <Step value="1">Stepper<div class="caption-secondary">caption</div></Step>
      <Step value="2">Stepper<div class="caption-secondary">caption</div></Step>
      <Step value="3">Stepper<div class="caption-secondary">caption</div></Step>
    </StepList>
    <StepPanels>
      <StepPanel value="1">...</StepPanel>
      <StepPanel value="2">...</StepPanel>
      <StepPanel value="3">...</StepPanel>
    </StepPanels>
  </Stepper>
</template>
        `,
      },
    },
  },
};

export const StepsOnly = {
  render: StepsOnlyTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Stepper v-model:value="activeStep">
    <StepList>
      <Step value="1">Stepper<div class="caption-secondary">caption</div></Step>
      <Step value="2">Stepper<div class="caption-secondary">caption</div></Step>
      <Step value="3">Stepper<div class="caption-secondary">caption</div></Step>
    </StepList>
  </Stepper>
</template>
        `,
      },
    },
  },
};

export const Error = {
  name: 'Error (Invalid step)',
  render: ErrorTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Stepper v-model:value="activeStep">
    <StepList>
      <Step value="1">Stepper</Step>
      <Step value="2" class="step-invalid">Stepper</Step>
      <Step value="3" disabled>Stepper</Step>
    </StepList>
    ...
  </Stepper>
</template>
        `,
      },
    },
  },
};
