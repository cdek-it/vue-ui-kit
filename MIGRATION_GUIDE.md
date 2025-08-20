# Гайд по миграции Vue UI Kit

Этот документ содержит инструкции по миграции между версиями библиотеки `@cdek-it/vue-ui-kit`.

## Миграция на версию 2.x

### Основные изменения

Версия 2.x включает значительные изменения в архитектуре и API библиотеки:

- **Vue 3.5+** - Обновление до последней версии Vue
- **PrimeVue 4.x** - Переход на новую версию PrimeVue
- **Новая система тем** - Интеграция с `@primevue/themes`
- **TypeScript улучшения** - Лучшая типизация компонентов
- **Обновленные зависимости** - Современные версии всех пакетов

### Требования к системе

**Минимальные требования:**
- Node.js 20.x+
- Vue 3.5+
- TypeScript 4.7+ (при использовании TS)

### Пошаговая миграция

#### Шаг 1: Обновление зависимостей

```bash
# Удалите старую версию
npm uninstall @cdek-it/vue-ui-kit

# Установите новую версию
npm install @cdek-it/vue-ui-kit@^2.0.0

# Обновите Vue до совместимой версии
npm install vue@^3.5.0
```

#### Шаг 2: Обновление импортов

**Было (v1.x):**
```typescript
import VueUIKit from '@cdek-it/vue-ui-kit'
import '@cdek-it/vue-ui-kit/dist/style.css'
```

**Стало (v2.x):**
```typescript
import VueUIKit from '@cdek-it/vue-ui-kit'
import '@cdek-it/vue-ui-kit/style.css'
```

#### Шаг 3: Настройка PrimeVue

В версии 2.x требуется дополнительная настройка PrimeVue:

```typescript
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import VueUIKit from '@cdek-it/vue-ui-kit'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false
    }
  }
})

app.use(VueUIKit)
```

#### Шаг 4: Обновление Tailwind конфигурации

**Обновите `tailwind.config.js`:**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@cdek-it/vue-ui-kit/dist/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}
```

## Breaking Changes

### Компонент BaseButton

**Изменения в пропсах:**

```vue
<!-- Было (v1.x) -->
<BaseButton type="primary" size="large">
  Кнопка
</BaseButton>

<!-- Стало (v2.x) -->
<BaseButton variant="primary" size="lg">
  Кнопка
</BaseButton>
```

**Изменения:**
- `type` → `variant`
- `size="large"` → `size="lg"`
- `size="small"` → `size="sm"`

### Компонент BaseInput

**Изменения в событиях:**

```vue
<!-- Было (v1.x) -->
<BaseInput @input="handleInput" />

<!-- Стало (v2.x) -->
<BaseInput @update:modelValue="handleInput" />
```

**Новые возможности:**
- Поддержка `v-model`
- Встроенная валидация с VeeValidate
- Новые варианты стилизации

### Компонент BaseModal

**Изменения в API:**

```vue
<!-- Было (v1.x) -->
<BaseModal :visible="showModal" @close="showModal = false">
  Содержимое
</BaseModal>

<!-- Стало (v2.x) -->
<BaseModal v-model:visible="showModal">
  Содержимое
</BaseModal>
```

**Изменения:**
- Добавлена поддержка `v-model:visible`
- Новые слоты: `#header`, `#footer`
- Улучшенная доступность (a11y)

### Компонент BaseSelect

**Изменения в структуре опций:**

```typescript
// Было (v1.x)
const options = ['Опция 1', 'Опция 2']

// Стало (v2.x)
const options = [
  { label: 'Опция 1', value: 'option1' },
  { label: 'Опция 2', value: 'option2' }
]
```

### Система тем

**Было (v1.x):**
```css
/* Кастомные CSS переменные */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}
```

**Стало (v2.x):**
```typescript
// Настройка через PrimeVue темы
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      // ...
    }
  }
})
```

## Удаленные компоненты

Следующие компоненты были удалены или переименованы:

- `BaseCard` → Используйте `BaseWidget`
- `BaseTable` → Будет добавлен в следующих версиях
- `BaseForm` → Заменен на композицию с VeeValidate

## Новые компоненты

Добавлены новые компоненты:

- **BaseChip** - Компонент для отображения тегов
- **BaseBreadcrumbs** - Навигационные хлебные крошки
- **BaseAutocomplete** - Автокомплит с поиском
- **BaseMaskedInput** - Поле ввода с маской
- **BaseToaster** - Система уведомлений

## Миграция стилей

### CSS классы

Некоторые CSS классы были переименованы для соответствия новой системе дизайна:

```css
/* Было (v1.x) */
.btn-primary { }
.input-error { }
.modal-overlay { }

/* Стало (v2.x) */
.base-button--primary { }
.base-input--error { }
.base-modal__overlay { }
```

### SCSS переменные

```scss
// Было (v1.x)
$primary-color: #007bff;
$border-radius: 4px;

// Стало (v2.x)
// Используйте CSS переменные PrimeVue
:root {
  --p-primary-color: #007bff;
  --p-border-radius: 6px;
}
```

## Автоматизированная миграция

### Скрипт для замены импортов

Создайте файл `migrate.js`:

```javascript
const fs = require('fs')
const path = require('path')

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  
  // Замена импортов стилей
  content = content.replace(
    /@cdek-it\/vue-ui-kit\/dist\/style\.css/g,
    '@cdek-it/vue-ui-kit/style.css'
  )
  
  // Замена пропсов BaseButton
  content = content.replace(
    /type="(primary|secondary|success|warning|danger)"/g,
    'variant="$1"'
  )
  
  // Замена размеров
  content = content.replace(/size="large"/g, 'size="lg"')
  content = content.replace(/size="small"/g, 'size="sm"')
  
  fs.writeFileSync(filePath, content)
}

// Запуск миграции для всех Vue файлов
// node migrate.js
```

### Codemod для автоматической миграции

```bash
# Установите jscodeshift
npm install -g jscodeshift

# Запустите миграцию (пример)
jscodeshift -t vue-ui-kit-v2-transform.js src/
```

## Тестирование после миграции

### Запуск тестов

```bash
# Проверка типов
npm run type-check

# Запуск unit тестов
npm run test

# Линтинг
npm run lint

# Сборка проекта
npm run build
```

## Производительность

### Оптимизации в v2.x

- **Tree shaking** - Лучшая поддержка исключения неиспользуемого кода
- **Lazy loading** - Компоненты загружаются по требованию
- **Smaller bundle** - Уменьшенный размер бандла на ~30%

### Рекомендации

```typescript
// Используйте динамические импорты для больших компонентов
const BaseModal = defineAsyncComponent(() => 
  import('@cdek-it/vue-ui-kit').then(m => m.BaseModal)
)
```

## Обратная совместимость

### Поддержка старых API

Некоторые старые API поддерживаются с предупреждениями:

```vue
<!-- Работает, но выводит предупреждение -->
<BaseButton type="primary">
  Кнопка
</BaseButton>

<!-- Рекомендуемый способ -->
<BaseButton variant="primary">
  Кнопка
</BaseButton>
```