# Отладка CSS для ConfirmDialog

## Проблема
CSS не применяется в Storybook, хотя файл правильно подключён.

## Шаги для отладки

### 1. Проверить в DevTools браузера

Откройте Storybook и DevTools (F12), затем выполните в консоли:

```javascript
// Проверить, что диалог существует
const dialog = document.querySelector('.p-confirmdialog');
console.log('Dialog found:', !!dialog);

// Проверить footer
const footer = document.querySelector('.p-confirmdialog .p-dialog-footer');
if (footer) {
  const styles = window.getComputedStyle(footer);
  console.log('Footer styles:', {
    display: styles.display,
    flexDirection: styles.flexDirection,
    justifyContent: styles.justifyContent,
    gap: styles.gap
  });
}

// Проверить все CSS правила для confirmdialog
const allRules = [];
for (let sheet of document.styleSheets) {
  try {
    for (let rule of sheet.cssRules || sheet.rules) {
      if (rule.cssText && rule.cssText.includes('confirmdialog')) {
        allRules.push(rule.cssText);
      }
    }
  } catch(e) {}
}
console.log('CSS rules found:', allRules.length);
console.log('Rules:', allRules);
```

### 2. Проверить порядок загрузки CSS

PrimeVue может загружать свои стили ПОСЛЕ наших, что перекрывает наши правила.

**Решение:** Увеличить специфичность или использовать более поздний порядок загрузки.

### 3. Проверить, что тема применяется

```javascript
// В консоли DevTools
const primeConfig = window.__PRIMEVUE__;
console.log('PrimeVue config:', primeConfig);
```

### 4. Проверить структуру DOM

Откройте Elements в DevTools и найдите `.p-confirmdialog`. Проверьте:

```html
<!-- Ожидаемая структура -->
<div class="p-confirmdialog" data-pc-name="confirmdialog">
  <div class="p-dialog" data-pc-name="dialog">
    <div class="p-dialog-header">
      <div class="p-dialog-title">
        <i class="p-icon"></i>
        <span>Заголовок</span>
      </div>
    </div>
    <div class="p-dialog-content">
      <i class="p-confirmdialog-icon"></i>
      <span class="p-confirmdialog-message">Сообщение</span>
    </div>
    <div class="p-dialog-footer">
      <button class="p-confirmdialog-reject-button">Отмена</button>
      <button class="p-confirmdialog-accept-button">Удалить</button>
    </div>
  </div>
</div>
```

## Возможные причины

### Причина 1: CSS не загружается
**Проверка:** Найти в DevTools Sources наш CSS файл

**Решение:** Перезапустить Storybook

### Причина 2: PrimeVue перекрывает стили
**Проверка:** В DevTools Computed посмотреть, какие стили применены

**Решение:** Использовать более специфичные селекторы

### Причина 3: Кэш браузера
**Решение:** 
- Chrome/Edge: Ctrl+Shift+R (Windows) или Cmd+Shift+R (Mac)
- Firefox: Ctrl+F5 (Windows) или Cmd+Shift+R (Mac)

### Причина 4: Storybook не перезагрузился
**Решение:**
```bash
# Остановить Storybook (Ctrl+C)
# Очистить кэш
rm -rf node_modules/.cache
# Запустить снова
npm run storybook
```

## Временное решение

Если ничего не помогает, можно добавить стили напрямую в `.storybook/preview-head.html`:

```html
<style>
.p-confirmdialog .p-dialog {
  border-radius: 1.5rem !important;
  min-width: 280px !important;
}

.p-confirmdialog .p-dialog-footer {
  display: flex !important;
  flex-direction: row-reverse !important;
  justify-content: flex-start !important;
  gap: 0.5rem !important;
  padding: 0 1.5rem 1.5rem 1.5rem !important;
}

.p-confirmdialog .p-dialog-header {
  padding: 1.5rem 1.5rem 1rem 1.5rem !important;
  border-bottom: 1px solid #e5e7eb !important;
}

.p-confirmdialog .p-dialog-header .p-dialog-title {
  display: flex !important;
  align-items: center !important;
  gap: 0 !important;
}
</style>
```

## Команды для проверки

```bash
# Проверить, что файл существует
ls -la src/plugins/prime/theme3.0/components/css/confirmdialog.ts

# Проверить, что файл импортируется
grep -n "confirmdialog" src/plugins/prime/theme3.0/css.ts

# Проверить синтаксис
npm run build

# Перезапустить Storybook с очисткой кэша
rm -rf node_modules/.cache && npm run storybook
```

## Ожидаемый результат

После применения стилей:
- ✅ Кнопки должны быть слева (Accept, Reject)
- ✅ Border radius 21px
- ✅ Min-width 280px
- ✅ Header border-bottom видна
- ✅ Gap между иконкой и текстом = 0
