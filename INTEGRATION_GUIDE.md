# Гайд по интеграции Vue UI Kit

Этот документ содержит подробные инструкции по интеграции библиотеки компонентов `@cdek-it/vue-ui-kit` в ваш проект.

## Установка

### NPM
```bash
npm install @cdek-it/vue-ui-kit
```

### Yarn
```bash
yarn add @cdek-it/vue-ui-kit
```

## Базовая настройка

### 1. Импорт библиотеки

В вашем главном файле приложения (обычно `main.ts` или `main.js`):

```typescript
import { createApp } from 'vue'
import App from './App.vue'

// Импорт библиотеки компонентов
import VueUIKit from '@cdek-it/vue-ui-kit'

// Импорт стилей
import '@cdek-it/vue-ui-kit/style.css'

const app = createApp(App)

// Регистрация плагина
app.use(VueUIKit)

app.mount('#app')
```

### 2. Настройка стилей

Библиотека использует Tailwind CSS и PrimeVue. Убедитесь, что в вашем проекте настроен Tailwind CSS.

#### Установка Tailwind CSS (если не установлен)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Конфигурация Tailwind CSS

Обновите ваш `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // Добавьте путь к компонентам библиотеки
    "./node_modules/@cdek-it/vue-ui-kit/dist/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Если используете PrimeVue темы
    require('tailwindcss-primeui')
  ],
}
```

#### Импорт базовых стилей

В вашем основном CSS файле:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Импорт SCSS стилей библиотеки (опционально) */
@import '@cdek-it/vue-ui-kit/scss';
```

## Использование компонентов

### Глобальная регистрация

После подключения плагина все компоненты доступны глобально:

```vue
<template>
  <div>
    <BaseButton variant="primary" @click="handleClick">
      Нажми меня
    </BaseButton>
    
    <BaseInput 
      v-model="inputValue" 
      placeholder="Введите текст"
    />
    
    <BaseModal v-model:visible="showModal">
      <template #header>
        <BaseHeadline level="h3">Заголовок модального окна</BaseHeadline>
      </template>
      
      <p>Содержимое модального окна</p>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const showModal = ref(false)

const handleClick = () => {
  showModal.value = true
}
</script>
```

### Локальный импорт компонентов

Если вы предпочитаете импортировать компоненты локально:

```vue
<template>
  <BaseButton variant="secondary">
    Локальный компонент
  </BaseButton>
</template>

<script setup lang="ts">
import { BaseButton } from '@cdek-it/vue-ui-kit'
</script>
```

## Настройка тем

Библиотека поддерживает темизацию через PrimeVue:

```typescript
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

// Настройка темы
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{violet.50}',
      100: '{violet.100}',
      // ... остальные цвета
    }
  }
})

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: '.dark-mode'
    }
  }
})
```

## TypeScript поддержка

Библиотека полностью поддерживает TypeScript. Типы экспортируются автоматически.

### Настройка типов в tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["@cdek-it/vue-ui-kit"]
  }
}
```

## Валидация форм

Библиотека интегрирована с VeeValidate для валидации форм:

```vue
<template>
  <form @submit="onSubmit">
    <BaseInput
      v-model="email"
      name="email"
      placeholder="Email"
      :error="errors.email"
    />
    
    <BaseButton type="submit">
      Отправить
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email().required()
})

const { errors, handleSubmit } = useForm({
  validationSchema: schema
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
```

## Иконки

Библиотека использует Tabler Icons. Иконки доступны через CSS классы:

```vue
<template>
  <BaseButton>
    <i class="ti ti-plus"></i>
    Добавить
  </BaseButton>
</template>
```

## Сборка и оптимизация

### Tree Shaking

Библиотека поддерживает tree shaking для оптимизации размера бандла:

```typescript
// Импорт только нужных компонентов
import { BaseButton, BaseInput } from '@cdek-it/vue-ui-kit'
```

### Настройка Vite

Для корректной работы с Vite добавьте в `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['@cdek-it/vue-ui-kit']
  }
})
```

## Примеры использования

### Форма с валидацией

```vue
<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <BaseInput
      v-model="form.name"
      label="Имя"
      placeholder="Введите ваше имя"
      :error="errors.name"
      required
    />
    
    <BaseSelect
      v-model="form.country"
      label="Страна"
      :options="countries"
      :error="errors.country"
    />
    
    <BaseSwitch
      v-model="form.newsletter"
      label="Подписаться на рассылку"
    />
    
    <BaseButton 
      type="submit" 
      variant="primary"
      :loading="isSubmitting"
    >
      Отправить
    </BaseButton>
  </form>
</template>
```

### Модальное окно с формой

```vue
<template>
  <div>
    <BaseButton @click="openModal">
      Открыть форму
    </BaseButton>
    
    <BaseModal v-model:visible="showModal" size="md">
      <template #header>
        <BaseHeadline level="h3">Создать пользователя</BaseHeadline>
      </template>
      
      <UserForm @submit="handleSubmit" />
      
      <template #footer>
        <BaseButton variant="secondary" @click="closeModal">
          Отмена
        </BaseButton>
      </template>
    </BaseModal>
  </div>
</template>
```

## Совместимость

- **Vue**: 3.5+
- **Node.js**: 20.x+
- **TypeScript**: 4.7+
- **Браузеры**: Современные браузеры (ES2020+)