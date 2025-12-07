import Password from 'primevue/password';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Password },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Password v-model="value" placeholder="Пароль" class="w-full md:w-80" />
    </div>
  `
});

// Индикатор надежности
export const MeterTemplate = () => ({
  components: { Password },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Password v-model="value" placeholder="Пароль" toggleMask class="w-full md:w-80" />
    </div>
  `
});

// Без переключения видимости
export const WithoutToggleTemplate = () => ({
  components: { Password },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Password v-model="value" :feedback="false" placeholder="Пароль" class="w-full md:w-80" />
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { Password },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Password v-model="value" placeholder="Пароль" toggleMask class="w-full md:w-80">
        <template #header>
          <div class="font-semibold text-sm mb-3">Требования к паролю</div>
        </template>
        <template #footer>
          <div class="mt-3 text-xs">
            <ul class="list-disc ml-4 space-y-1">
              <li>Минимум 8 символов</li>
              <li>Одна заглавная буква</li>
              <li>Одна цифра</li>
              <li>Один спецсимвол</li>
            </ul>
          </div>
        </template>
      </Password>
    </div>
  `
});

// Заполненный
export const FilledTemplate = () => ({
  components: { Password },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Password v-model="value" variant="filled" placeholder="Пароль" class="w-full md:w-80" />
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { Password },
  setup() {
    const value = ref('password123');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <Password v-model="value" disabled class="w-full md:w-80" />
    </div>
  `
});

// Невалидный
export const InvalidTemplate = () => ({
  components: { Password },
  setup() {
    const value = ref('');
    
    return { value };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-2 w-full md:w-80">
        <Password v-model="value" invalid placeholder="Пароль" class="w-full" />
        <small class="text-red-600">Пароль обязателен</small>
      </div>
    </div>
  `
});

