import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { InputGroup, InputGroupAddon, InputText },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputGroup class="w-full md:w-80">
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText v-model="value" placeholder="Имя пользователя" />
      </InputGroup>
    </div>
  `
});

// Множественные аддоны
export const MultipleTemplate = () => ({
  components: { InputGroup, InputGroupAddon, InputText },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputGroup class="w-full md:w-80">
        <InputGroupAddon>
          <i class="pi pi-globe"></i>
        </InputGroupAddon>
        <InputGroupAddon>www</InputGroupAddon>
        <InputText v-model="value" placeholder="website" />
        <InputGroupAddon>.com</InputGroupAddon>
      </InputGroup>
    </div>
  `
});

// Кнопки
export const ButtonTemplate = () => ({
  components: { InputGroup, InputGroupAddon, InputText, Button },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-4 w-full md:w-80">
        <InputGroup>
          <Button label="Поиск" />
          <InputText v-model="value" placeholder="Ключевое слово" />
        </InputGroup>
        
        <InputGroup>
          <InputText v-model="value" placeholder="Ключевое слово" />
          <Button icon="pi pi-search" severity="secondary" />
        </InputGroup>
        
        <InputGroup>
          <Button icon="pi pi-check" severity="success" />
          <InputText v-model="value" placeholder="Голосовать" />
          <Button icon="pi pi-times" severity="danger" />
        </InputGroup>
      </div>
    </div>
  `
});

// Checkbox и RadioButton
export const CheckboxTemplate = () => ({
  components: { InputGroup, InputGroupAddon, InputText, Checkbox },
  setup() {
    const value = ref('');
    const checked = ref(false);
    
    return { value, checked };
  },
  template: `
    <div class="flex justify-center p-4">
      <InputGroup class="w-full md:w-80">
        <InputGroupAddon>
          <Checkbox v-model="checked" binary />
        </InputGroupAddon>
        <InputText v-model="value" placeholder="Имя пользователя" />
      </InputGroup>
    </div>
  `
});

