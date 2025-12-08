# Организация Stories в UI Kit

## Обзор

Stories в этом проекте организованы по категориям для улучшения навигации и документации. Каждый компонент имеет несколько файлов stories, сгруппированных по функциональности.

## Структура

```
src/components/
  base-button/
    stories/
      BaseButton.Basic.stories.js      # Базовые примеры
      BaseButton.States.stories.js     # Состояния компонента
      BaseButton.Sizes.stories.js      # Размеры
      BaseButton.Icons.stories.js      # Примеры с иконками
      BaseButton.Advanced.stories.js   # Продвинутые сценарии
    BaseButton.vue
    BaseButton.test.ts
    index.ts
```

## Категории Stories

### Basic
Базовые примеры использования компонента с основными вариантами:
- Primary/Default варианты
- Основные темы (primary, secondary, outline, ghost)
- Простые примеры с минимальными props

**Пример:**
```javascript
export const Primary = Template.bind({});
Primary.args = {
  label: 'Подтвердить',
};
```

### States
Различные состояния компонента:
- Disabled - отключенное состояние
- Loading - состояние загрузки
- Error - состояние с ошибкой
- ReadOnly - только для чтения
- Active/Inactive - активное/неактивное состояние

**Пример:**
```javascript
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Подтвердить',
};
```

### Sizes
Различные размеры компонента:
- Small - маленький размер
- Normal - стандартный размер
- Large - большой размер

**Пример:**
```javascript
export const Small = Template.bind({});
Small.args = {
  small: true,
  label: 'Подтвердить',
};
```

### Severity/Variants
Варианты оформления по важности или типу:
- Success - успешное действие
- Warning - предупреждение
- Error/Danger - ошибка
- Info - информация
- Primary/Secondary - основной/вторичный

**Пример:**
```javascript
export const Success = Template.bind({});
Success.args = {
  type: 'success',
  text: 'Успешно',
};
```

### Icons
Примеры использования с иконками:
- IconBefore - иконка перед текстом
- IconAfter - иконка после текста
- IconOnly - только иконка

**Пример:**
```javascript
export const IconBefore = () => ({
  components: { BaseButton, CheckIcon },
  template: `
    <BaseButton>
      <CheckIcon />
      Подтвердить
    </BaseButton>
  `,
});
```

### Template
Кастомизация через слоты и шаблоны:
- Кастомный контент
- Слоты для header/footer/content
- Кастомные элементы списков

**Пример:**
```javascript
export const CustomContent = () => ({
  components: { BaseBadge, EyeIcon },
  template: `
    <BaseBadge>
      <EyeIcon />
    </BaseBadge>
  `,
});
```

### Advanced
Продвинутые сценарии использования:
- Асинхронная загрузка данных
- Сложные конфигурации
- Интеграция с другими компонентами
- Специальные случаи использования

**Пример:**
```javascript
export const FetchItems = Template.bind({});
FetchItems.args = {
  fetchItems: (query) => fetch(`/api/search?q=${query}`),
};
```

## Шаблон файла Stories

```javascript
import ComponentName from '../ComponentName.vue';

export default {
  title: 'Components/ComponentName/Category',
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: 'Описание категории примеров для этого компонента.',
      },
    },
  },
};

const Template = (args) => ({
  components: { ComponentName },
  setup() {
    return { args };
  },
  template: '<ComponentName v-bind="args" />',
});

export const ExampleName = Template.bind({});
ExampleName.args = {
  prop: 'value',
};
ExampleName.parameters = {
  docs: {
    description: {
      story: 'Подробное описание этого конкретного примера.',
    },
    source: {
      code: '<ComponentName prop="value" />',
    },
  },
};
```

## Рекомендации

### 1. Именование
- Используйте PascalCase для имен файлов: `ComponentName.Category.stories.js`
- Используйте описательные имена для примеров: `Primary`, `WithIcon`, `LoadingState`

### 2. Описания
- Добавляйте описание для каждой категории в `parameters.docs.description.component`
- Добавляйте описание для каждого примера в `parameters.docs.description.story`

### 3. Код примеров
- Показывайте чистый код в `parameters.docs.source.code`
- Используйте реальные имена компонентов (CdekButton, а не BaseButton)
- Форматируйте код для читаемости

### 4. Организация
- Группируйте связанные примеры в одну категорию
- Начинайте с простых примеров, переходите к сложным
- Используйте одинаковую структуру для всех компонентов

### 5. Интерактивность
- Используйте `argTypes` для интерактивных контролов
- Добавляйте обработчики событий для демонстрации
- Показывайте состояние компонента (v-model, события)

## Примеры реализации

### Button
```
Components/Button/
  Basic/         - Primary, Secondary, Outline, Ghost
  States/        - Disabled, Loading, LoadingWithContent
  Sizes/         - Small, Normal
  Icons/         - IconBefore, IconAfter, IconOnly
  Advanced/      - WidthContent, AsDiv, Toast
```

### Badge
```
Components/Badge/
  Basic/         - Default
  Severity/      - Positive, Negative, Process, Info, Deactive, Neutral
  Variants/      - Light, Dark
  Template/      - Slot, IconSlot
```

### Autocomplete
```
Components/Autocomplete/
  Basic/         - Primary, WithLabel, NotFound
  States/        - Disabled, ReadOnly, WithError
  Sizes/         - Small, Normal
  Advanced/      - FetchItems, MinLength, CustomItems
```

## Миграция существующих Stories

1. Создайте директорию `stories/` в директории компонента
2. Проанализируйте существующий файл stories
3. Разделите примеры по категориям
4. Создайте отдельные файлы для каждой категории
5. Добавьте описания
6. Обновите импорты (добавьте `../`)
7. Проверьте в Storybook
8. Удалите старый файл

## Полезные ссылки

- [Storybook Documentation](https://storybook.js.org/docs)
- [PrimeNG Components](https://primeng.org/)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
