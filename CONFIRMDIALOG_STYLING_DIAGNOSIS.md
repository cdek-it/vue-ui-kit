# Диагностика: Почему изменения CSS не отображаются в ConfirmDialog

## Где задаётся отображение

### 1. Конфигурация Storybook (`.storybook/main.cjs`)

```javascript
stories: [
  '../src/docs/1_installation.stories.mdx',
  '../src/**/*.stories.mdx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
],
```

**Что это значит:**
- Storybook ищет все файлы `*.stories.js` в директории `src/`
- Наш файл: `src/plugins/prime/stories/ConfirmDialog/ConfirmDialog.stories.js` ✅ найден

### 2. Title в stories файле

```javascript
// src/plugins/prime/stories/ConfirmDialog/ConfirmDialog.stories.js
export default {
  title: 'Prime/ConfirmDialog',  // ← Определяет категорию в навигации
  component: ConfirmDialog,
}
```

**Что это значит:**
- `Prime/ConfirmDialog` создаёт категорию "Prime" с подкатегорией "ConfirmDialog"
- Отображается в навигации Storybook как: **Prime → ConfirmDialog**

### 3. Подключение темы (`.storybook/preview.js`)

```javascript
import { getPrimeVueConfig } from '@/plugins/prime';

const storyBookConfig = {
  theme: {
    options: {
      darkModeSelector: '.theme-prime-dark',
    },
  },
};

const mergedConfig = getPrimeVueConfig(storyBookConfig);
app.use(PrimeVue, mergedConfig);
```

**Что это значит:**
- `getPrimeVueConfig()` загружает тему из `src/plugins/prime/install.ts`
- Тема использует preset из `src/plugins/prime/theme3.0/`
- CSS из `src/plugins/prime/theme3.0/css.ts` должен применяться

### 4. CSS в теме (`src/plugins/prime/theme3.0/css.ts`)

```typescript
import confirmdialogCss from './components/css/confirmdialog';

const css = ({ dt }: { dt: (token: string) => string }) => `
   ${confirmdialogCss({ dt })}
   // ... другие компоненты
`;
```

**Что это значит:**
- CSS для ConfirmDialog генерируется динамически
- Использует design tokens через функцию `dt()`

### 5. Дополнительные стили (`.storybook/preview-head.html`)

```html
<style>
  /* ConfirmDialog custom styles - Figma design */
  .p-confirmdialog .p-dialog {
    border-radius: 1.5rem !important;
    min-width: 280px !important;
  }
  /* ... остальные стили */
</style>
```

**Что это значит:**
- Стили добавлены напрямую в `<head>` с `!important`
- Должны применяться в любом случае

---

## Почему изменения не отображаются

### Проблема 1: CSS из темы не применяется

**Причина:**
PrimeVue v4 использует CSS-in-JS подход. Стили генерируются динамически и могут:
1. Загружаться ПОСЛЕ наших стилей
2. Иметь более высокую специфичность
3. Перезаписывать наши правила

**Решение:**
Используем `!important` в `.storybook/preview-head.html` ✅ (уже сделано)

### Проблема 2: Кэш браузера

**Причина:**
Браузер кэширует CSS и JavaScript файлы.

**Решение:**
```bash
# Жёсткая перезагрузка
Chrome/Edge: Ctrl+Shift+R (Windows) или Cmd+Shift+R (Mac)
Firefox: Ctrl+F5 (Windows) или Cmd+Shift+R (Mac)
```

### Проблема 3: Кэш Storybook

**Причина:**
Storybook кэширует сборку в `node_modules/.cache`

**Решение:**
```bash
# Остановить Storybook (Ctrl+C)
rm -rf node_modules/.cache
npm run storybook
```

### Проблема 4: Hot Module Replacement (HMR)

**Причина:**
Изменения в `.storybook/preview-head.html` не подхватываются HMR автоматически.

**Решение:**
Нужно полностью перезапустить Storybook после изменений в `preview-head.html`

### Проблема 5: Порядок загрузки CSS

**Причина:**
PrimeVue загружает свои стили после наших, что перекрывает правила.

**Проверка в DevTools:**
```javascript
// В консоли браузера
const footer = document.querySelector('.p-confirmdialog .p-dialog-footer');
const styles = window.getComputedStyle(footer);
console.log({
  flexDirection: styles.flexDirection,
  justifyContent: styles.justifyContent,
  gap: styles.gap
});
```

**Ожидаемый результат:**
```javascript
{
  flexDirection: "row-reverse",  // ← должно быть
  justifyContent: "flex-start",  // ← должно быть
  gap: "8px"                     // ← 0.5rem
}
```

**Если результат другой:**
Стили не применяются. Нужно увеличить специфичность.

---

## Пошаговая диагностика

### Шаг 1: Проверить, что файл найден Storybook

```bash
# Проверить, что файл существует
ls -la src/plugins/prime/stories/ConfirmDialog/ConfirmDialog.stories.js
```

✅ Файл существует

### Шаг 2: Проверить, что stories загружаются

1. Открыть http://localhost:6006
2. В навигации найти **"Prime"**
3. Развернуть **"Prime → ConfirmDialog"**
4. Должны быть видны все истории (Danger, Warning, Success, etc.)

✅ Stories загружаются

### Шаг 3: Проверить, что диалог рендерится

1. Открыть любую историю (например, Danger)
2. Нажать кнопку "Удалить элемент"
3. Диалог должен появиться

✅ Диалог рендерится

### Шаг 4: Проверить структуру DOM

1. Открыть DevTools (F12)
2. Найти элемент `.p-confirmdialog`
3. Проверить структуру:

```html
<div class="p-confirmdialog" data-pc-name="confirmdialog" data-pc-severity="danger">
  <div class="p-dialog" data-pc-name="dialog">
    <div class="p-dialog-header">
      <div class="p-dialog-title">
        <i class="p-icon pi pi-exclamation-triangle"></i>
        <span>Подтверждение удаления</span>
      </div>
    </div>
    <div class="p-dialog-content">
      <i class="p-confirmdialog-icon pi pi-exclamation-triangle"></i>
      <span class="p-confirmdialog-message">Вы уверены...</span>
    </div>
    <div class="p-dialog-footer">
      <button class="p-confirmdialog-reject-button">Отмена</button>
      <button class="p-confirmdialog-accept-button">Удалить</button>
    </div>
  </div>
</div>
```

**Важно проверить:**
- ✅ Есть ли атрибут `data-pc-severity="danger"`
- ✅ Правильный ли порядок кнопок в DOM

### Шаг 5: Проверить применённые стили

В DevTools:

1. Выбрать `.p-confirmdialog .p-dialog`
2. Во вкладке "Computed" проверить:
   - `border-radius` должен быть `24px` (1.5rem)
   - `min-width` должен быть `280px`

3. Выбрать `.p-confirmdialog .p-dialog-footer`
4. Во вкладке "Computed" проверить:
   - `flex-direction` должен быть `row-reverse`
   - `justify-content` должен быть `flex-start`

5. Во вкладке "Styles" проверить:
   - Есть ли стили из `preview-head.html`
   - Не перечёркнуты ли они

### Шаг 6: Проверить загрузку стилей из preview-head.html

В DevTools:

1. Перейти на вкладку "Elements"
2. Найти `<head>`
3. Найти `<style>` с комментарием `/* ConfirmDialog custom styles - Figma design */`
4. Проверить, что стили там есть

**Если стилей нет:**
- Storybook не перезагрузился после изменений в `preview-head.html`
- Нужно полностью перезапустить Storybook

---

## Решение проблемы

### Вариант 1: Перезапуск Storybook (рекомендуется)

```bash
# 1. Остановить Storybook (Ctrl+C в терминале)

# 2. Очистить кэш
rm -rf node_modules/.cache

# 3. Запустить снова
npm run storybook

# 4. Жёсткая перезагрузка в браузере
# Chrome/Edge: Ctrl+Shift+R (Windows) или Cmd+Shift+R (Mac)
```

### Вариант 2: Проверка в чистом окне браузера

```bash
# Chrome
# Открыть режим инкогнито: Ctrl+Shift+N (Windows) или Cmd+Shift+N (Mac)
# Перейти на http://localhost:6006
```

### Вариант 3: Увеличение специфичности (если не помогло)

Если стили всё ещё не применяются, можно увеличить специфичность в `preview-head.html`:

```html
<style>
  /* Более специфичные селекторы */
  body .p-confirmdialog .p-dialog {
    border-radius: 1.5rem !important;
    min-width: 280px !important;
  }

  body .p-confirmdialog .p-dialog-footer {
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: flex-start !important;
  }
</style>
```

---

## Чек-лист для проверки

- [ ] Storybook перезапущен после изменений в `preview-head.html`
- [ ] Кэш Storybook очищен (`rm -rf node_modules/.cache`)
- [ ] Браузер перезагружен жёстко (Ctrl+Shift+R)
- [ ] В DevTools видны стили из `preview-head.html`
- [ ] Атрибут `data-pc-severity` установлен на `.p-confirmdialog`
- [ ] В Computed styles видны правильные значения
- [ ] Кнопки в footer расположены слева
- [ ] Border radius 21px применён
- [ ] Min-width 280px применён

---

## Ожидаемый результат

После выполнения всех шагов:

✅ **Border radius:** 21px (скруглённые углы)  
✅ **Min-width:** 280px (минимальная ширина)  
✅ **Header border:** серая линия снизу  
✅ **Header icon gap:** 0 (иконка вплотную)  
✅ **Footer buttons:** слева (не справа)  
✅ **Button order:** Accept слева, Reject справа  
✅ **Icon colors:** по severity (красный, оранжевый, зелёный, синий, фиолетовый)

---

## Если ничего не помогло

Создайте issue с:
1. Скриншотом диалога
2. Скриншотом DevTools (Elements + Computed styles)
3. Выводом консоли браузера
4. Версией PrimeVue (`npm list primevue`)
