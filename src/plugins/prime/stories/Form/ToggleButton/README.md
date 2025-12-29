# ToggleButton Component

## Обзор
Компонент ToggleButton реализован на основе PrimeVue с кастомной стилизацией согласно дизайн-системе.

## Figma
[Макет в Figma](https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/%F0%9F%A7%A9-UI-kit-PrimeFace--1.0.0-beta-?node-id=174-1363)

## Размеры
- **small** - `size="small"` - маленький размер (padding: 0.75rem 0.25rem)
- **base** - по умолчанию - базовый размер (padding: 0.5rem 1rem)
- **large** - `size="large"` - большой размер (padding: 1rem 1.5rem)
- **xlarge** - `:pt="{ root: { class: 'p-togglebutton-xlarge' } }"` - очень большой размер (padding: 1.25rem 1.5rem)

## Варианты с иконками
- **Иконка слева** (по умолчанию) - `off-icon="ti ti-icon" on-icon="ti ti-icon"`
- **Иконка справа** - `icon-pos="right"`
- **Только иконка** - `:pt="{ root: { class: 'p-togglebutton-icon-only' } }"` + иконки без label

## Состояния
- **Default** - обычное состояние
- **Checked** - `v-model="true"` или `:model-value="true"`
- **Hover** - автоматически при наведении
- **Focus** - автоматически при фокусе
- **Disabled** - `disabled`

## Примеры использования

### Базовый пример
```vue
<ToggleButton 
  v-model="checked"
  off-label="Off"
  on-label="On"
/>
```

### С иконками
```vue
<ToggleButton 
  v-model="checked"
  off-icon="ti ti-arrow-down-right"
  on-icon="ti ti-arrow-down-right"
  off-label="ToggleButton"
  on-label="ToggleButton"
/>
```

### Иконка справа
```vue
<ToggleButton 
  v-model="checked"
  off-icon="ti ti-arrow-down-right"
  on-icon="ti ti-arrow-down-right"
  icon-pos="right"
  off-label="ToggleButton"
  on-label="ToggleButton"
/>
```

### Только иконка
```vue
<ToggleButton 
  :pt="{ root: { class: 'p-togglebutton-icon-only' } }"
  v-model="checked"
  off-icon="ti ti-arrow-down-right"
  on-icon="ti ti-arrow-down-right"
/>
```

### XLarge размер
```vue
<ToggleButton 
  :pt="{ root: { class: 'p-togglebutton-xlarge' } }"
  v-model="checked"
  off-label="ToggleButton"
  on-label="ToggleButton"
/>
```

### XLarge с иконкой
```vue
<ToggleButton 
  :pt="{ root: { class: 'p-togglebutton-xlarge p-togglebutton-icon-only' } }"
  v-model="checked"
  off-icon="ti ti-arrow-down-right"
  on-icon="ti ti-arrow-down-right"
/>
```

## Стилизация

### Design Tokens
Основные стили определены в `src/plugins/prime/theme3.0/components/index.ts`:
- Цвета (background, color, border)
- Отступы для размеров (sm, base, lg)
- Состояния (hover, checked, disabled)
- Focus ring
- Transition duration

### Дополнительные CSS
Дополнительные стили в `src/plugins/prime/theme3.0/components/css/togglebutton.ts`:
- Hover border color
- Checked hover states
- Icon-only width для всех размеров
- XLarge размер (padding и icon-only width)

## Технические детали
- Используется PrimeVue PassThrough API для применения кастомных классов
- XLarge размер реализован через PassThrough, так как не поддерживается нативно в PrimeVue
- Icon-only режим также реализован через PassThrough
- Все интерактивные состояния (hover, focus, checked) покрыты design tokens
