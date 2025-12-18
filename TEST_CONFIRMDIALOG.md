# Тестирование ConfirmDialog

## Проблема
В Storybook не отображаются изменения CSS, кроме border линии.

## Что должно работать

### 1. Border radius (21px)
```css
.p-confirmdialog.p-component {
  border-radius: 1.5rem; /* 21px */
}
```
**Проверка:** Углы диалога должны быть скруглены на 21px

### 2. Min-width (280px)
```css
.p-confirmdialog.p-component {
  min-width: 280px;
}
```
**Проверка:** Диалог не должен быть уже 280px

### 3. Header border-bottom
```css
.p-confirmdialog .p-dialog-header {
  border-bottom: 1px solid {content.borderColor};
}
```
**Проверка:** ✅ Работает (видна серая линия)

### 4. Header padding
```css
.p-confirmdialog .p-dialog-header {
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}
```
**Проверка:** Padding снизу должен быть 1rem (14px)

### 5. Header icon gap
```css
.p-confirmdialog .p-dialog-header .p-dialog-title {
  gap: 0;
}
```
**Проверка:** Иконка должна быть вплотную к тексту

### 6. Footer button order
```css
.p-confirmdialog .p-dialog-footer {
  justify-content: flex-start;
  flex-direction: row-reverse;
}
```
**Проверка:** Accept кнопка слева, Reject справа

### 7. Icon colors by severity
```css
.p-confirmdialog[data-pc-severity="danger"] .p-dialog-header .p-icon {
  color: {error.500}; /* #E85244 */
}
```
**Проверка:** Иконки в header должны иметь цвет по severity

## Возможные причины проблемы

### 1. CSS не загружается
Проверить в DevTools:
- Открыть Elements
- Найти `.p-confirmdialog`
- Проверить Computed styles

### 2. Специфичность селекторов
PrimeVue может иметь более специфичные селекторы, которые перекрывают наши стили.

**Решение:** Увеличить специфичность или использовать `!important` (временно)

### 3. Severity не передаётся
PrimeVue может не устанавливать атрибут `data-pc-severity`.

**Проверка в DevTools:**
```html
<div class="p-confirmdialog" data-pc-severity="danger">
```

Если атрибута нет, стили не применятся.

### 4. Структура DOM отличается
PrimeVue может рендерить другую структуру.

**Проверка:** Посмотреть в DevTools фактическую структуру

## Действия для отладки

### Шаг 1: Проверить загрузку CSS
```javascript
// В консоли браузера
const styles = document.styleSheets;
for (let sheet of styles) {
  try {
    const rules = sheet.cssRules || sheet.rules;
    for (let rule of rules) {
      if (rule.selectorText && rule.selectorText.includes('confirmdialog')) {
        console.log(rule.cssText);
      }
    }
  } catch (e) {}
}
```

### Шаг 2: Проверить атрибут severity
```javascript
// В консоли браузера
const dialog = document.querySelector('.p-confirmdialog');
console.log('Dialog element:', dialog);
console.log('Severity attr:', dialog?.getAttribute('data-pc-severity'));
console.log('All attributes:', dialog?.attributes);
```

### Шаг 3: Проверить computed styles
```javascript
// В консоли браузера
const dialog = document.querySelector('.p-confirmdialog');
const styles = window.getComputedStyle(dialog);
console.log('Border radius:', styles.borderRadius);
console.log('Min width:', styles.minWidth);

const footer = document.querySelector('.p-confirmdialog .p-dialog-footer');
const footerStyles = window.getComputedStyle(footer);
console.log('Footer flex-direction:', footerStyles.flexDirection);
console.log('Footer justify-content:', footerStyles.justifyContent);
```

### Шаг 4: Проверить структуру header
```javascript
// В консоли браузера
const header = document.querySelector('.p-confirmdialog .p-dialog-header');
console.log('Header HTML:', header?.innerHTML);
console.log('Title element:', header?.querySelector('.p-dialog-title'));
console.log('Icon element:', header?.querySelector('.p-icon'));
```

## Временное решение с !important

Если проблема в специфичности, можно временно добавить `!important`:

```css
.p-confirmdialog.p-component {
  border-radius: 1.5rem !important;
  min-width: 280px !important;
}

.p-confirmdialog .p-dialog-footer {
  justify-content: flex-start !important;
  flex-direction: row-reverse !important;
}
```

## Проверка в Storybook

1. Открыть http://localhost:6006/?path=/story/primevue-confirmdialog--danger
2. Открыть DevTools (F12)
3. Нажать кнопку "Удалить элемент"
4. Проверить:
   - Есть ли класс `.p-confirmdialog`
   - Есть ли атрибут `data-pc-severity="danger"`
   - Какие стили применены
   - Какая структура DOM

## Ожидаемый результат

После исправления должны работать:
- ✅ Border radius 21px
- ✅ Min-width 280px
- ✅ Header border-bottom (уже работает)
- ✅ Header padding 1rem снизу
- ✅ Header icon gap 0
- ✅ Footer buttons слева
- ✅ Footer button order reversed
- ✅ Icon colors по severity
