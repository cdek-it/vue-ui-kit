# Где задаётся иконка в header для каждого варианта ConfirmDialog

## Файл: `src/plugins/prime/stories/ConfirmDialog/ConfirmDialog.stories.js`

### 1. Danger (Красная иконка)
**Строка 84:**
```javascript
icon: 'pi pi-exclamation-triangle',
```

**Полный контекст (строки 77-89):**
```javascript
export const Danger = Template.bind({});
Danger.args = {
  group: 'danger',
  severity: 'danger',
  header: 'Подтверждение удаления',
  message: 'Вы уверены, что хотите удалить этот элемент? Это действие нельзя отменить.',
  icon: 'pi pi-exclamation-triangle',  // ← СТРОКА 84
  acceptLabel: 'Удалить',
  rejectLabel: 'Отмена',
  buttonLabel: 'Удалить элемент',
};
```

---

### 2. Warning (Оранжевая иконка)
**Строка 130:**
```javascript
icon: 'pi pi-exclamation-circle',
```

**Полный контекст (строки 123-135):**
```javascript
export const Warning = Template.bind({});
Warning.args = {
  group: 'warning',
  severity: 'warn',
  header: 'Предупреждение',
  message: 'Это действие может привести к потере несохранённых данных. Продолжить?',
  icon: 'pi pi-exclamation-circle',  // ← СТРОКА 130
  acceptLabel: 'Продолжить',
  rejectLabel: 'Отмена',
  buttonLabel: 'Показать предупреждение',
};
```

---

### 3. Success (Зелёная иконка)
**Строка 173:**
```javascript
icon: 'pi pi-check-circle',
```

**Полный контекст (строки 166-178):**
```javascript
export const Success = Template.bind({});
Success.args = {
  group: 'success',
  severity: 'success',
  header: 'Подтверждение',
  message: 'Операция выполнена успешно. Хотите продолжить?',
  icon: 'pi pi-check-circle',  // ← СТРОКА 173
  acceptLabel: 'Продолжить',
  rejectLabel: 'Закрыть',
  buttonLabel: 'Показать успех',
};
```

---

### 4. Info (Синяя иконка)
**Строка 216:**
```javascript
icon: 'pi pi-info-circle',
```

**Полный контекст (строки 209-221):**
```javascript
export const Info = Template.bind({});
Info.args = {
  group: 'info',
  severity: 'info',
  header: 'Информация',
  message: 'Эта функция находится в разработке. Хотите узнать больше?',
  icon: 'pi pi-info-circle',  // ← СТРОКА 216
  acceptLabel: 'Узнать больше',
  rejectLabel: 'Закрыть',
  buttonLabel: 'Показать информацию',
};
```

---

### 5. Help (Фиолетовая иконка)
**Строка 259:**
```javascript
icon: 'pi pi-question-circle',
```

**Полный контекст (строки 252-264):**
```javascript
export const Help = Template.bind({});
Help.args = {
  group: 'help',
  severity: 'help',
  header: 'Справка',
  message: 'Нужна помощь с этой функцией? Мы можем показать вам руководство.',
  icon: 'pi pi-question-circle',  // ← СТРОКА 259
  acceptLabel: 'Показать руководство',
  rejectLabel: 'Не сейчас',
  buttonLabel: 'Показать справку',
};
```

---

## Как это работает

### 1. Иконка передаётся через API
```javascript
const showDialog = () => {
  confirm.require({
    icon: args.icon,  // ← Передаётся из args
    severity: args.severity,
    // ...
  });
};
```

### 2. PrimeVue отображает иконку в header
PrimeVue автоматически добавляет иконку в header, если она указана.

### 3. CSS применяет цвет по severity
```css
/* .storybook/preview-head.html */
.p-confirmdialog[data-pc-severity="danger"] .p-dialog-header .p-icon {
  color: #E85244 !important;  /* Красный */
}

.p-confirmdialog[data-pc-severity="warn"] .p-dialog-header .p-icon {
  color: #F5B83D !important;  /* Оранжевый */
}

.p-confirmdialog[data-pc-severity="success"] .p-dialog-header .p-icon {
  color: #44E858 !important;  /* Зелёный */
}

.p-confirmdialog[data-pc-severity="info"] .p-dialog-header .p-icon {
  color: #4496E8 !important;  /* Синий */
}

.p-confirmdialog[data-pc-severity="help"] .p-dialog-header .p-icon {
  color: #A855F7 !important;  /* Фиолетовый */
}
```

---

## Сводная таблица

| Severity | Строка | Иконка | Цвет | Hex |
|----------|--------|--------|------|-----|
| **Danger** | 84 | `pi pi-exclamation-triangle` | Красный | #E85244 |
| **Warning** | 130 | `pi pi-exclamation-circle` | Оранжевый | #F5B83D |
| **Success** | 173 | `pi pi-check-circle` | Зелёный | #44E858 |
| **Info** | 216 | `pi pi-info-circle` | Синий | #4496E8 |
| **Help** | 259 | `pi pi-question-circle` | Фиолетовый | #A855F7 |

---

## Где ещё используются иконки

### В AllVariants (строки 407-452)
```javascript
const variants = [
  {
    name: 'Danger',
    icon: 'pi pi-exclamation-triangle',  // Строка 417
    severity: 'danger',
  },
  {
    name: 'Warning',
    icon: 'pi pi-exclamation-circle',    // Строка 425
    severity: 'warn',
  },
  {
    name: 'Success',
    icon: 'pi pi-check-circle',          // Строка 433
    severity: 'success',
  },
  {
    name: 'Info',
    icon: 'pi pi-info-circle',           // Строка 441
    severity: 'info',
  },
  {
    name: 'Help',
    icon: 'pi pi-question-circle',       // Строка 449
    severity: 'help',
  },
];
```

---

## Как изменить иконку

Чтобы изменить иконку для конкретного варианта, измените значение в соответствующей строке:

```javascript
// Было
icon: 'pi pi-exclamation-triangle',

// Стало (например, другая иконка)
icon: 'pi pi-times-circle',
```

**Доступные иконки PrimeIcons:**
- https://primevue.org/icons/

**Примеры:**
- `pi pi-trash` - корзина
- `pi pi-times-circle` - крестик в круге
- `pi pi-exclamation-triangle` - треугольник с восклицательным знаком
- `pi pi-check-circle` - галочка в круге
- `pi pi-info-circle` - информация в круге
- `pi pi-question-circle` - вопрос в круге
