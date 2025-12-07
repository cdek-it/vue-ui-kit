import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Drawer, Button },
  setup() {
    const visible = ref(false);
    
    return { visible };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="visible = true" />
      <Drawer v-model:visible="visible" header="Drawer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Drawer>
    </div>
  `
});

// Позиции
export const PositionTemplate = () => ({
  components: { Drawer, Button },
  setup() {
    const visibleLeft = ref(false);
    const visibleRight = ref(false);
    const visibleTop = ref(false);
    const visibleBottom = ref(false);
    
    return { visibleLeft, visibleRight, visibleTop, visibleBottom };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Button label="Слева" @click="visibleLeft = true" />
        <Button label="Справа" @click="visibleRight = true" />
        <Button label="Сверху" @click="visibleTop = true" />
        <Button label="Снизу" @click="visibleBottom = true" />
      </div>
      
      <Drawer v-model:visible="visibleLeft" header="Слева">
        <p>Содержимое drawer</p>
      </Drawer>
      
      <Drawer v-model:visible="visibleRight" header="Справа" position="right">
        <p>Содержимое drawer</p>
      </Drawer>
      
      <Drawer v-model:visible="visibleTop" header="Сверху" position="top">
        <p>Содержимое drawer</p>
      </Drawer>
      
      <Drawer v-model:visible="visibleBottom" header="Снизу" position="bottom">
        <p>Содержимое drawer</p>
      </Drawer>
    </div>
  `
});

// Размеры
export const SizeTemplate = () => ({
  components: { Drawer, Button },
  setup() {
    const visibleSmall = ref(false);
    const visibleMedium = ref(false);
    const visibleLarge = ref(false);
    
    return { visibleSmall, visibleMedium, visibleLarge };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Button label="Маленький" @click="visibleSmall = true" />
        <Button label="Средний" @click="visibleMedium = true" />
        <Button label="Большой" @click="visibleLarge = true" />
      </div>
      
      <Drawer v-model:visible="visibleSmall" header="Маленький" style="width: 20rem">
        <p>Содержимое drawer</p>
      </Drawer>
      
      <Drawer v-model:visible="visibleMedium" header="Средний" style="width: 30rem">
        <p>Содержимое drawer</p>
      </Drawer>
      
      <Drawer v-model:visible="visibleLarge" header="Большой" style="width: 40rem">
        <p>Содержимое drawer</p>
      </Drawer>
    </div>
  `
});

// Полноэкранный
export const FullScreenTemplate = () => ({
  components: { Drawer, Button },
  setup() {
    const visible = ref(false);
    
    return { visible };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="visible = true" />
      <Drawer v-model:visible="visible" header="Полноэкранный" position="full">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Drawer>
    </div>
  `
});

// Без заголовка
export const WithoutHeaderTemplate = () => ({
  components: { Drawer, Button },
  setup() {
    const visible = ref(false);
    
    return { visible };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="visible = true" />
      <Drawer v-model:visible="visible" :showCloseIcon="false">
        <div class="flex items-center gap-2 mb-4">
          <i class="pi pi-bars text-2xl"></i>
          <span class="font-semibold text-xl">Меню</span>
        </div>
        <p>Содержимое drawer</p>
      </Drawer>
    </div>
  `
});

