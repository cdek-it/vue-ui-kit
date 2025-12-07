import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Divider },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-96">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Divider />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Divider />
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  `
});

// Вертикальный
export const VerticalTemplate = () => ({
  components: { Divider },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex">
        <div class="flex flex-col">
          <div class="font-semibold">Раздел 1</div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <Divider layout="vertical" />
        <div class="flex flex-col">
          <div class="font-semibold">Раздел 2</div>
          <p>Consectetur adipiscing elit</p>
        </div>
        <Divider layout="vertical" />
        <div class="flex flex-col">
          <div class="font-semibold">Раздел 3</div>
          <p>Sed do eiusmod tempor</p>
        </div>
      </div>
    </div>
  `
});

// С содержимым
export const ContentTemplate = () => ({
  components: { Divider, Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-96">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Divider align="left">
          <div class="inline-flex items-center">
            <i class="pi pi-user mr-2"></i>
            <b>Иконка</b>
          </div>
        </Divider>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Divider align="center">
          <span class="p-tag">Бейдж</span>
        </Divider>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <Divider align="right">
          <Button label="Кнопка" icon="pi pi-search" text size="small" />
        </Divider>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  `
});

// Типы
export const TypesTemplate = () => ({
  components: { Divider },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-96">
        <p>Lorem ipsum dolor sit amet</p>
        <Divider type="solid" />
        <p>Consectetur adipiscing elit</p>
        <Divider type="dashed" />
        <p>Sed do eiusmod tempor</p>
        <Divider type="dotted" />
        <p>Ut labore et dolore magna</p>
      </div>
    </div>
  `
});

