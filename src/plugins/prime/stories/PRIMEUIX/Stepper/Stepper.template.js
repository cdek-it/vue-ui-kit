import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Stepper, StepList, StepPanels, StepItem, Step, StepPanel, Button },
  template: `
    <div class="flex justify-center p-4">
      <Stepper class="w-full md:w-[800px]">
        <StepList>
          <Step value="1">Персональные данные</Step>
          <Step value="2">Адрес</Step>
          <Step value="3">Подтверждение</Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex flex-col h-48">
              <div class="flex-auto flex items-center justify-center font-semibold">
                Содержимое шага 1
              </div>
              <div class="flex justify-end">
                <Button label="Далее" @click="activateCallback('2')" />
              </div>
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex flex-col h-48">
              <div class="flex-auto flex items-center justify-center font-semibold">
                Содержимое шага 2
              </div>
              <div class="flex justify-between">
                <Button label="Назад" severity="secondary" @click="activateCallback('1')" />
                <Button label="Далее" @click="activateCallback('3')" />
              </div>
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="3">
            <div class="flex flex-col h-48">
              <div class="flex-auto flex items-center justify-center font-semibold">
                Содержимое шага 3
              </div>
              <div class="flex justify-start">
                <Button label="Назад" severity="secondary" @click="activateCallback('2')" />
              </div>
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
  `
});

// Вертикальный
export const VerticalTemplate = () => ({
  components: { Stepper, StepList, StepPanels, StepItem, Step, StepPanel, Button },
  template: `
    <div class="flex justify-center p-4">
      <Stepper orientation="vertical" class="w-full md:w-[600px]">
        <StepList>
          <Step value="1">Шаг 1</Step>
          <Step value="2">Шаг 2</Step>
          <Step value="3">Шаг 3</Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex flex-col gap-2 mb-4">
              <div class="font-semibold">Персональные данные</div>
              <p class="m-0">Введите ваши персональные данные</p>
            </div>
            <Button label="Далее" @click="activateCallback('2')" />
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex flex-col gap-2 mb-4">
              <div class="font-semibold">Адрес</div>
              <p class="m-0">Введите ваш адрес</p>
            </div>
            <div class="flex gap-2">
              <Button label="Назад" severity="secondary" @click="activateCallback('1')" />
              <Button label="Далее" @click="activateCallback('3')" />
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="3">
            <div class="flex flex-col gap-2 mb-4">
              <div class="font-semibold">Подтверждение</div>
              <p class="m-0">Проверьте данные и подтвердите</p>
            </div>
            <Button label="Назад" severity="secondary" @click="activateCallback('2')" />
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
  `
});

