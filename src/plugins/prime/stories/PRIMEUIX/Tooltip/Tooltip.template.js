import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <Button 
        v-tooltip="'Это всплывающая подсказка'" 
        label="Наведите курсор" 
      />
    </div>
  `
});

// Позиции
export const PositionsTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Button 
          v-tooltip.top="'Сверху'" 
          label="Сверху" 
        />
        <Button 
          v-tooltip.bottom="'Снизу'" 
          label="Снизу" 
        />
        <Button 
          v-tooltip.left="'Слева'" 
          label="Слева" 
        />
        <Button 
          v-tooltip.right="'Справа'" 
          label="Справа" 
        />
      </div>
    </div>
  `
});

// На полях ввода
export const InputTemplate = () => ({
  components: { InputText },
  template: `
    <div class="flex justify-center p-4">
      <InputText 
        v-tooltip="'Введите ваше имя'" 
        type="text" 
        placeholder="Имя пользователя" 
        class="w-full md:w-80"
      />
    </div>
  `
});

// Фокус
export const FocusTemplate = () => ({
  components: { InputText },
  template: `
    <div class="flex justify-center p-4">
      <InputText 
        v-tooltip.focus="'Введите минимум 6 символов'" 
        type="text" 
        placeholder="Пароль" 
        class="w-full md:w-80"
      />
    </div>
  `
});

// Объект конфигурации
export const ObjectTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <Button 
        v-tooltip="{ value: 'Это подсказка', showDelay: 500, hideDelay: 300 }" 
        label="С задержкой" 
      />
    </div>
  `
});

