# ConfirmDialog Token Analysis

## Текущее состояние файла `confirmdialog.ts`

### Проблемы с использованием токенов:

1. **Hardcoded значения вместо токенов:**
   - `border-radius: 1.5rem` → должно быть `${dt('overlay.modal.borderRadius')}`
   - `min-width: 280px` → должно быть через токен или переменную
   - `padding: 1.5rem` → должно быть `${dt('overlay.modal.padding')}`
   - `gap: 0.5rem` → должно быть `${dt('dialog.footer.gap')}`
   - `padding: 1.5rem 1.5rem 1rem 1.5rem` → должно быть `${dt('dialog.header.padding')}`
   - `gap: 0.5rem` → должно быть `${dt('dialog.header.gap')}`

2. **Отсутствующие `!important` флаги:**
   - Некоторые стили были с `!important`, но после форматирования они удалены
   - Нужно вернуть `!important` для критичных стилей, которые переопределяют PrimeVue

3. **Правильно используемые токены:**
   - ✅ `${dt('overlay.modal.shadow')}` для box-shadow
   - ✅ `${dt('confirmdialog.content.gap')}` для gap в content
   - ✅ `${dt('confirmdialog.icon.size')}` для размера иконки
   - ✅ `${dt('confirmdialog.extend.extIcon.*')}` для цветов иконок
   - ✅ `${dt('content.borderColor')}` для border-bottom
   - ✅ `${dt('fonts.fontWeight.bold')}` для font-weight

## Доступные токены из `index.ts`

### Dialog токены:
```typescript
dialog: {
  root: {
    background: '{overlay.modal.background}',
    borderColor: '{overlay.modal.borderColor}',
    color: '{overlay.modal.color}',
    borderRadius: '{overlay.modal.borderRadius}',
    shadow: '{overlay.popover.shadow}',
  },
  header: {
    padding: '{overlay.modal.padding} {overlay.modal.padding} 1rem {overlay.modal.padding}',
    gap: '0',
  },
  title: {
    fontSize: '{fonts.fontSize.xl}',
    fontWeight: '{fonts.fontWeight.demibold}',
  },
  content: {
    padding: '1.5rem',
  },
  footer: {
    padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}',
    gap: '0.5rem',
  },
}
```

### ConfirmDialog токены:
```typescript
confirmdialog: {
  extend: {
    extIcon: {
      success: '{success.500}',
      info: '{info.500}',
      help: '{help.500}',
      warn: '{warn.500}',
      danger: '{error.500}',
    },
  },
  icon: {
    size: '1.5rem',
    color: '{overlay.modal.color}',
  },
  content: {
    gap: '0',
  },
}
```

## Рекомендации по исправлению

### 1. Заменить hardcoded значения на токены:
```typescript
// Было:
border-radius: 1.5rem;

// Должно быть:
border-radius: ${dt('overlay.modal.borderRadius')};
```

### 2. Использовать токены для padding:
```typescript
// Было:
padding: 1.5rem;

// Должно быть:
padding: ${dt('overlay.modal.padding')};
```

### 3. Использовать токены для gap:
```typescript
// Было:
gap: 0.5rem;

// Должно быть:
gap: ${dt('dialog.footer.gap')};
```

### 4. Добавить недостающие токены в `index.ts`:
Если нужны специфичные значения для ConfirmDialog (например, минимальная ширина), добавить их в секцию `confirmdialog`:

```typescript
confirmdialog: {
  root: {
    minWidth: '280px', // или использовать sizingDialog
  },
  extend: {
    extIcon: { ... }
  },
  ...
}
```

## Сравнение с PrimeVue Lara preset

Согласно официальным примерам:
- https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/dialog/index.ts
- https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/confirmdialog/index.ts

PrimeVue использует систему токенов для всех значений, избегая hardcoded значений в CSS.
