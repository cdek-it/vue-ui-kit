import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    
    return { visible };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="visible = true" />
      <Dialog v-model:visible="visible" header="Заголовок" style="width: 30rem">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Dialog>
    </div>
  `
});

// С футером
export const FooterTemplate = () => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    
    return { visible };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="visible = true" />
      <Dialog v-model:visible="visible" header="Заголовок" style="width: 30rem">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <template #footer>
          <Button label="Отменить" text @click="visible = false" />
          <Button label="Сохранить" @click="visible = false" />
        </template>
      </Dialog>
    </div>
  `
});

// Без заголовка
export const WithoutHeaderTemplate = () => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    
    return { visible };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="visible = true" />
      <Dialog v-model:visible="visible" :showHeader="false" style="width: 30rem">
        <div class="flex items-center gap-3 mb-5">
          <span class="pi pi-info-circle text-4xl text-blue-500"></span>
          <p class="m-0 font-semibold text-xl">Информация</p>
        </div>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <template #footer>
          <Button label="OK" @click="visible = false" />
        </template>
      </Dialog>
    </div>
  `
});

// Модальный
export const ModalTemplate = () => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    
    return { visible };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="visible = true" />
      <Dialog v-model:visible="visible" modal header="Модальное окно" style="width: 30rem">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Dialog>
    </div>
  `
});

// Позиции
export const PositionTemplate = () => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const position = ref('center');
    
    const open = (pos) => {
      position.value = pos;
      visible.value = true;
    };
    
    return { visible, position, open };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Button label="Слева" @click="open('left')" />
        <Button label="Справа" @click="open('right')" />
        <Button label="Сверху" @click="open('top')" />
        <Button label="Снизу" @click="open('bottom')" />
        <Button label="Сверху слева" @click="open('topleft')" />
        <Button label="Сверху справа" @click="open('topright')" />
        <Button label="Снизу слева" @click="open('bottomleft')" />
        <Button label="Снизу справа" @click="open('bottomright')" />
      </div>
      <Dialog v-model:visible="visible" :position="position" header="Диалог" style="width: 30rem">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Dialog>
    </div>
  `
});

// Максимизируемый
export const MaximizableTemplate = () => ({
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    
    return { visible };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="visible = true" />
      <Dialog v-model:visible="visible" maximizable header="Максимизируемое окно" style="width: 30rem">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Dialog>
    </div>
  `
});

