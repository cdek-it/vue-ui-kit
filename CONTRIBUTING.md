# Гайд по контрибуции в Vue UI Kit

Этот документ содержит необходимые инструкции для участия в разработке.

## Содержание

- [Как начать](#как-начать)
- [Процесс разработки](#процесс-разработки)
- [Создание Issues](#создание-issues)
- [Разработка компонентов](#разработка-компонентов)
- [Тестирование](#тестирование)
- [Документация](#документация)
- [Code Review](#code-review)
- [Релизы](#релизы)

## Как начать

### Требования к системе

- **Node.js** v20.x+
- **Yarn** v1.22.x+
- **Git** для работы с репозиторием

### Настройка окружения

1. **Форкните репозиторий** на GitLab
2. **Клонируйте ваш форк:**
   ```bash
   git clone https://gitlab.com/your-username/vue-ui-kit.git
   cd vue-ui-kit
   ```

3. **Установите зависимости:**
   ```bash
   yarn install
   ```

4. **Настройте IDE** (рекомендуется VSCode):
   - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
   - [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

5. **Настройте VSCode:**
   - Editor: Format On Save - `true`
   - Editor: Default Formatter - `Prettier ESLint`

### Проверка установки

Убедитесь, что все работает корректно:

```bash
# Запуск линтера
yarn lint

# Запуск тестов
yarn test

# Проверка типов
yarn type-check

# Запуск Storybook
yarn storybook
```

## Процесс разработки

### Workflow

1. **Создайте Issue** (если его еще нет)
2. **Создайте ветку** от `main`
3. **Разработайте функциональность**
4. **Напишите тесты**
5. **Обновите документацию**
6. **Создайте Merge Request**
7. **Пройдите Code Review**
8. **Merge в main**

### Именование веток

Используйте следующий формат:

```
feature/component-name-description
bugfix/component-name-issue-description
hotfix/critical-issue-description
docs/documentation-update
```

**Примеры:**
- `feature/base-button-loading-state`
- `bugfix/base-modal-close-on-escape`
- `docs/update-integration-guide`

### Коммиты

Следуйте [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

feat(BaseButton): add loading state support
fix(BaseModal): fix close on escape key
docs(README): update installation instructions
test(BaseInput): add validation tests
style(BaseCard): improve responsive design
refactor(BaseSelect): optimize performance
```

**Типы коммитов:**
- `feat` - новая функциональность
- `fix` - исправление бага
- `docs` - изменения в документации
- `style` - изменения стилей (не влияющие на логику)
- `refactor` - рефакторинг кода
- `test` - добавление или изменение тестов
- `chore` - изменения в сборке, CI/CD

## Создание Issues

Мы используем шаблоны для Issues. Выберите подходящий тип:

### Создание компонента

Используйте шаблон **"Создание компонента"** для запроса новых компонентов.

**Обязательные поля:**
- Описание компонента и его назначения
- Ожидаемый результат
- Причина необходимости
- Ссылка на дизайн-файл в Figma
- Основной сценарий использования
- Приоритет запроса

**Перед созданием убедитесь:**
- Аналогичный компонент не существует
- Функциональность нельзя реализовать комбинацией существующих компонентов
- Компонент будет переиспользован минимум в 3 местах

### Исправление бага

Используйте шаблон **"Исправление бага"** для сообщения о проблемах.

**Обязательные поля:**
- Компонент с багом
- Версия компонента
- Краткое описание проблемы
- Ожидаемое vs фактическое поведение
- Шаги для воспроизведения
- Информация о браузере и ОС

**Рекомендуется добавить:**
- Код для воспроизведения
- Скриншоты или видео
- Ссылку на живую демонстрацию
- Ошибки из консоли

### Изменение компонента

Используйте шаблон **"Изменение компонента"** для улучшений существующих компонентов.

**Обязательные поля:**
- Компонент для изменения
- Что именно изменить
- Ожидаемый результат
- Причина изменения
- Тип изменения (Visual/Functional/API/Performance/Accessibility/Breaking)
- Приоритет

## Разработка компонентов

### Создание нового компонента

Используйте генератор для создания базовой структуры:

```bash
yarn gen:component ComponentName
```

Это создаст:
- `ComponentName.vue` - основной файл компонента
- `ComponentName.test.ts` - файл с тестами
- `ComponentName.stories.js` - Storybook истории
- `index.ts` - файл экспорта

### Структура компонента

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

// Интерфейсы и типы
interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

// Пропсы с дефолтными значениями
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

// Эмиты
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Реактивные данные
const isLoading = ref(false)

// Вычисляемые свойства
const classes = computed(() => ({
  [`base-component--${props.variant}`]: true,
  [`base-component--${props.size}`]: true,
  'base-component--disabled': props.disabled
}))

// Методы
const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <div 
    :class="classes"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-component {
  // Базовые стили
  
  &--primary {
    // Стили для primary варианта
  }
  
  &--secondary {
    // Стили для secondary варианта
  }
  
  &--sm {
    // Стили для маленького размера
  }
  
  &--md {
    // Стили для среднего размера
  }
  
  &--lg {
    // Стили для большого размера
  }
  
  &--disabled {
    // Стили для отключенного состояния
  }
}
</style>
```

### Соглашения по коду

#### Именование

- **Компоненты:** PascalCase (`BaseButton`, `BaseModal`)
- **Пропсы:** camelCase (`isVisible`, `maxLength`)
- **События:** kebab-case (`update:modelValue`, `item-selected`)
- **CSS классы:** BEM методология (`base-button`, `base-button--primary`, `base-button__icon`)

#### TypeScript

- Всегда используйте типизацию для пропсов
- Определяйте интерфейсы для сложных объектов
- Используйте дженерики для переиспользуемых компонентов

```typescript
// Хорошо
interface SelectOption<T = string> {
  label: string
  value: T
  disabled?: boolean
}

// Плохо
const option = {
  label: 'Option',
  value: 'value'
}
```

#### Доступность (a11y)

- Добавляйте ARIA атрибуты
- Поддерживайте клавиатурную навигацию
- Обеспечивайте достаточный цветовой контраст
- Используйте семантические HTML элементы

```vue
<template>
  <button
    :aria-label="ariaLabel"
    :aria-pressed="isPressed"
    :disabled="disabled"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <slot />
  </button>
</template>
```

### Стилизация

#### Tailwind CSS

Используйте Tailwind классы для базовой стилизации:

```vue
<template>
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
    <!-- Содержимое -->
  </div>
</template>
```

#### SCSS

Для сложных стилей используйте SCSS:

```scss
.base-component {
  @apply flex items-center;
  
  // Кастомные стили
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  // Адаптивность
  @media (max-width: 768px) {
    @apply flex-col;
  }
}
```

## Тестирование

### Unit тесты

Каждый компонент должен иметь тесты:

```typescript
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  test('renders correctly', () => {
    const wrapper = mount(BaseButton, {
      props: { variant: 'primary' },
      slots: { default: 'Click me' }
    })
    
    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.classes()).toContain('base-button--primary')
  })
  
  test('emits click event', async () => {
    const wrapper = mount(BaseButton)
    
    await wrapper.trigger('click')
    
    expect(wrapper.emitted('click')).toBeTruthy()
  })
  
  test('does not emit when disabled', async () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: true }
    })
    
    await wrapper.trigger('click')
    
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
```

### Запуск тестов

```bash
# Запуск всех тестов
yarn test

# Запуск тестов с UI
yarn test:ui

# Запуск тестов в CI режиме
yarn test:cli
```

## Документация

### Storybook

Каждый компонент должен иметь Storybook истории:

```javascript
import BaseButton from './BaseButton.vue'

export default {
  title: 'Components/BaseButton',
  component: BaseButton,
  parameters: {
    docs: {
      description: {
        component: 'Базовый компонент кнопки с различными вариантами стилизации.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  }
}

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args">{{ args.default }}</BaseButton>'
})

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  default: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  default: 'Secondary Button'
}

export const AllSizes = () => ({
  components: { BaseButton },
  template: `
    <div class="space-y-4">
      <BaseButton size="sm">Small</BaseButton>
      <BaseButton size="md">Medium</BaseButton>
      <BaseButton size="lg">Large</BaseButton>
    </div>
  `
})
```

### JSDoc комментарии

Документируйте сложные функции и компоненты:

```typescript
/**
 * Базовый компонент кнопки
 * 
 * @example
 * ```vue
 * <BaseButton variant="primary" @click="handleClick">
 *   Нажми меня
 * </BaseButton>
 * ```
 */
interface Props {
  /** Вариант стилизации кнопки */
  variant?: 'primary' | 'secondary'
  
  /** Размер кнопки */
  size?: 'sm' | 'md' | 'lg'
  
  /** Отключить кнопку */
  disabled?: boolean
}
```

## Code Review

### Чек-лист для автора

Перед созданием Merge Request убедитесь:

- Код соответствует стандартам проекта
- Все тесты проходят
- Линтер не выдает ошибок
- TypeScript проверка проходит успешно
- Добавлены/обновлены тесты
- Обновлена документация
- Storybook истории созданы/обновлены
- Компонент протестирован в разных браузерах
- Проверена доступность (a11y)

### Чек-лист для ревьюера

При проведении Code Review проверьте:

- Соответствие требованиям из Issue
- Качество и читаемость кода
- Покрытие тестами
- Производительность
- Безопасность
- Доступность
- Совместимость с существующими компонентами
- Документация

### Процесс Review

1. **Автоматические проверки** должны пройти успешно
2. **Минимум 2 аппрува** от мейнтейнеров
3. **Обсуждение** спорных моментов в комментариях
4. **Исправления** по замечаниям
5. **Финальный аппрув** и merge

## Релизы

### Версионирование

Мы используем [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0) - breaking changes
- **MINOR** (0.x.0) - новая функциональность (обратно совместимая)
- **PATCH** (0.0.x) - исправления багов

### Процесс релиза

1. **Обновление версии** в `package.json`
2. **Создание changelog** с описанием изменений
3. **Создание тега** в Git
4. **Публикация** в npm registry
5. **Обновление документации**
