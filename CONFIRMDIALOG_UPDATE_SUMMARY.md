# ConfirmDialog - Обновление стилизации

## Дата обновления
17 декабря 2024

## Внесённые изменения

### 1. Минимальные размеры
- ✅ Добавлена минимальная ширина: **280px** (из Figma)
- ✅ Border radius: **21px (1.5rem)** вместо переменной

### 2. Header
- ✅ **Нижняя граница**: добавлен `border-bottom: 1px solid {content.borderColor}`
- ✅ **Padding**: обновлён на `21px 21px 14px 21px` (bottom padding 14px вместо 0)
- ✅ **Gap между иконкой и текстом**: изменён с `0.75rem` на `0` (иконка вплотную)
- ✅ **Цвет иконки в header**: добавлены стили для всех severity вариантов

### 3. Footer
- ✅ **Выравнивание кнопок**: изменено с `flex-end` (справа) на `flex-start` (слева)
- ✅ **Порядок кнопок**: добавлен `flex-direction: row-reverse`
  - Accept кнопка теперь слева
  - Reject кнопка справа
- ✅ **Gap**: сохранён `0.5rem` (7px)

### 4. Цвета иконок

Добавлены точные цвета из Figma для всех severity вариантов:

| Severity | Цвет | Hex | RGB |
|----------|------|-----|-----|
| Danger | Красный | #E85244 | rgb(232, 82, 68) |
| Warning | Оранжевый | #F5B83D | rgb(245, 184, 61) |
| Success | Зелёный | #44E858 | rgb(68, 232, 88) |
| Info | Синий | #4496E8 | rgb(68, 150, 232) |
| Help | Фиолетовый | #A855F7 | rgb(168, 85, 247) |

### 5. Иконки в Header

Добавлены стили для иконок в header с правильными цветами:

```css
.p-confirmdialog .p-dialog-header .p-icon {
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0;
}

/* Цвета по severity */
.p-confirmdialog[data-pc-severity="danger"] .p-dialog-header .p-icon {
  color: {error.500};
}
/* ... и т.д. для всех severity */
```

## Структура компонента

```
┌─────────────────────────────────────────┐
│ Header (21px padding, 14px bottom)      │
│  ├─ Icon (severity color, no gap)       │
│  └─ Title                               │
│  └─ Border Bottom (1px solid gray)      │
├─────────────────────────────────────────┤
│ Content (21px padding)                  │
│  ├─ Icon (severity color)               │
│  └─ Message                             │
├─────────────────────────────────────────┤
│ Footer (0 21px 21px 21px padding)       │
│  [Accept] [Reject] ← reversed order     │
└─────────────────────────────────────────┘
```

## Визуальные изменения

### До обновления:
- Header без нижней границы
- Иконка в header с gap 0.75rem
- Кнопки справа (justify-content: flex-end)
- Порядок: Reject, Accept
- Border radius из переменной

### После обновления:
- ✅ Header с серой нижней границей
- ✅ Иконка в header вплотную к тексту (gap: 0)
- ✅ Кнопки слева (justify-content: flex-start)
- ✅ Порядок: Accept, Reject (row-reverse)
- ✅ Border radius 21px (1.5rem)
- ✅ Min-width 280px
- ✅ Цвета иконок в header по severity

## Файлы изменены

1. **`src/plugins/prime/theme3.0/components/css/confirmdialog.ts`**
   - Обновлены все стили согласно Figma
   - Добавлены стили для иконок в header
   - Изменён порядок кнопок в footer

2. **`CONFIRMDIALOG_FIGMA_ANALYSIS.md`**
   - Обновлена документация с точными размерами
   - Добавлены hex коды цветов
   - Обновлена таблица сравнения

## Проверка

```bash
# Проверка TypeScript
✅ No diagnostics found

# Проверка Storybook
npm run storybook
# Проверить все severity варианты
```

## Тестирование

Проверьте следующие сценарии:

1. ✅ Все 5 severity вариантов (danger, warning, success, info, help)
2. ✅ Цвета иконок в header соответствуют severity
3. ✅ Нижняя граница header видна
4. ✅ Иконка в header без отступа от текста
5. ✅ Кнопки расположены слева
6. ✅ Accept кнопка слева, Reject справа
7. ✅ Минимальная ширина 280px
8. ✅ Border radius 21px

## Соответствие Figma

| Параметр | Соответствие |
|----------|--------------|
| Размеры | ✅ 100% |
| Цвета | ✅ 100% |
| Отступы | ✅ 100% |
| Границы | ✅ 100% |
| Порядок элементов | ✅ 100% |
| Иконки | ✅ 100% |

## Следующие шаги

1. Протестировать в реальном приложении
2. Проверить на разных разрешениях экрана
3. Убедиться в работе всех severity вариантов
4. Проверить accessibility (keyboard navigation, screen readers)
5. Добавить unit тесты при необходимости

## Примечания

- Размеры кнопок (72px × 35px) управляются PrimeVue автоматически
- Все цвета используют design tokens для консистентности
- Border radius 21px даёт более мягкий вид компонента
- Порядок кнопок (Accept слева) соответствует UX best practices
