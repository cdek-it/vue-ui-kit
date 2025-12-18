# Troubleshooting: Stories не отображаются

## Проблема
Stories не отображаются в http://localhost:6006/?path=/story/prime-confirmdialog--all-variants

## Проверка подключения

### 1. Проверить, что файл существует
```bash
ls -la src/plugins/prime/stories/ConfirmDialog/ConfirmDialog.stories.js
```
✅ Файл существует

### 2. Проверить, что файл экспортирует истории
```bash
grep "export const" src/plugins/prime/stories/ConfirmDialog/ConfirmDialog.stories.js
```
✅ Экспортирует: Danger, Warning, Success, Info, Help, WithoutHeader, LongMessage, CustomButtons, AllVariants

### 3. Проверить конфигурацию Storybook
```javascript
// .storybook/main.cjs
stories: [
  '../src/**/*.stories.@(js|jsx|ts|tsx)',  // ← Ищет все .stories.js
]
```
✅ Конфигурация правильная

### 4. Проверить синтаксис файла
```bash
node -c src/plugins/prime/stories/ConfirmDialog/ConfirmDialog.stories.js
```
✅ Синтаксических ошибок нет

## Возможные причины

### Причина 1: Storybook не перезагрузился
**Решение:**
```bash
# 1. Остановить Storybook (Ctrl+C)
# 2. Очистить кэш
rm -rf node_modules/.cache
# 3. Запустить снова
npm run storybook
```

### Причина 2: Ошибка в консоли браузера
**Проверка:**
1. Открыть DevTools (F12)
2. Перейти на вкладку Console
3. Проверить наличие ошибок (красный текст)

**Возможные ошибки:**
- `Cannot find module 'primevue/confirmdialog'` - не установлен PrimeVue
- `useConfirm is not a function` - не подключен ConfirmationService
- Синтаксические ошибки в stories

### Причина 3: Ошибка в терминале Storybook
**Проверка:**
Посмотреть в терминал, где запущен Storybook. Ищите:
- `ERROR` - ошибки компиляции
- `Failed to load` - ошибки загрузки модулей
- `SyntaxError` - синтаксические ошибки

### Причина 4: Stories не найдены
**Проверка:**
В Storybook слева в навигации должна быть категория **"Prime"**.

**Если категории нет:**
- Storybook не нашёл файл
- Проверьте путь: `src/plugins/prime/stories/ConfirmDialog/ConfirmDialog.stories.js`
- Проверьте расширение файла: должно быть `.stories.js`

### Причина 5: Неправильный URL
**Проверка:**
URL должен быть:
```
http://localhost:6006/?path=/story/prime-confirmdialog--danger
http://localhost:6006/?path=/story/prime-confirmdialog--all-variants
```

**Не:**
```
http://localhost:6006/?path=/story/primevue-confirmdialog--danger  ❌
```

## Пошаговая диагностика

### Шаг 1: Проверить, что Storybook запущен
```bash
# Проверить процесс
ps aux | grep storybook

# Или проверить порт
lsof -i :6006
```

**Если не запущен:**
```bash
npm run storybook
```

### Шаг 2: Открыть Storybook
```
http://localhost:6006
```

### Шаг 3: Проверить навигацию
В левой панели должна быть структура:
```
📁 Prime
  📁 ConfirmDialog
    📄 Danger
    📄 Warning
    📄 Success
    📄 Info
    📄 Help
    📄 Without Header
    📄 Long Message
    📄 Custom Buttons
    📄 All Variants
```

**Если структуры нет:**
- Перезапустить Storybook
- Очистить кэш

### Шаг 4: Открыть конкретную историю
Кликнуть на "Danger" в навигации или перейти по URL:
```
http://localhost:6006/?path=/story/prime-confirmdialog--danger
```

### Шаг 5: Проверить отображение
Должна быть кнопка "Удалить элемент". При клике должен открыться диалог.

**Если кнопки нет:**
- Проверить Console в DevTools
- Проверить терминал Storybook

### Шаг 6: Проверить AllVariants
```
http://localhost:6006/?path=/story/prime-confirmdialog--all-variants
```

Должны быть 5 кнопок: Danger, Warning, Success, Info, Help

## Решение проблемы

### Вариант 1: Полный перезапуск (рекомендуется)
```bash
# 1. Остановить Storybook (Ctrl+C в терминале)

# 2. Очистить все кэши
rm -rf node_modules/.cache
rm -rf .storybook/.cache
rm -rf storybook-static

# 3. Запустить снова
npm run storybook

# 4. Подождать полной загрузки (обычно 10-30 секунд)

# 5. Обновить браузер (Ctrl+Shift+R)
```

### Вариант 2: Проверить зависимости
```bash
# Проверить версию PrimeVue
npm list primevue

# Должно быть: primevue@4.x.x

# Если нет, установить
npm install primevue@latest
```

### Вариант 3: Проверить ConfirmationService
```javascript
// .storybook/preview.js
import ConfirmationService from 'primevue/confirmationservice';

app.use(ConfirmationService);  // ← Должно быть
```
✅ Уже подключено

### Вариант 4: Создать тестовую историю
Создайте простую историю для проверки:

```javascript
// src/plugins/prime/stories/Test.stories.js
export default {
  title: 'Prime/Test',
};

export const Simple = () => ({
  template: '<div>Test Story</div>',
});
```

Если эта история отображается, значит проблема в ConfirmDialog.stories.js

## Чек-лист

- [ ] Storybook запущен (`npm run storybook`)
- [ ] Кэш очищен (`rm -rf node_modules/.cache`)
- [ ] Браузер обновлён (Ctrl+Shift+R)
- [ ] Нет ошибок в Console (DevTools)
- [ ] Нет ошибок в терминале Storybook
- [ ] Файл существует: `src/plugins/prime/stories/ConfirmDialog/ConfirmDialog.stories.js`
- [ ] Категория "Prime" видна в навигации
- [ ] URL правильный: `/story/prime-confirmdialog--danger`
- [ ] ConfirmationService подключён в preview.js

## Если ничего не помогло

### Проверить логи Storybook
В терминале, где запущен Storybook, найдите:
```
WARN ...
ERROR ...
```

### Проверить версии
```bash
node --version   # Должно быть >= 16
npm --version    # Должно быть >= 8
```

### Переустановить зависимости
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run storybook
```

### Создать issue
Если проблема не решается, создайте issue с:
1. Версией Node.js (`node --version`)
2. Версией npm (`npm --version`)
3. Версией PrimeVue (`npm list primevue`)
4. Скриншотом ошибки из Console
5. Логами из терминала Storybook
