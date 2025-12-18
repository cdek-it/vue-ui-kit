# ConfirmDialog Stories

Storybook истории для компонента ConfirmDialog, стилизованного согласно дизайн-системе из Figma.

## Расположение в Storybook

**Категория:** `Prime/ConfirmDialog`

## Figma Design

[ConfirmDialog Design](https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/UI-kit-PrimeFace--1.0.0-beta-?node-id=520-6928)

## Доступные истории

### 1. Danger
Критические действия (удаление, отмена необратимых операций)
- **Иконка:** `pi pi-exclamation-triangle`
- **Цвет:** #E85244 (красный)
- **Кнопки:** "Удалить" / "Отмена"

### 2. Warning
Предупреждения о потере данных
- **Иконка:** `pi pi-exclamation-circle`
- **Цвет:** #F5B83D (оранжевый)
- **Кнопки:** "Продолжить" / "Отмена"

### 3. Success
Подтверждение успешных операций
- **Иконка:** `pi pi-check-circle`
- **Цвет:** #44E858 (зелёный)
- **Кнопки:** "Продолжить" / "Закрыть"

### 4. Info
Информационные сообщения
- **Иконка:** `pi pi-info-circle`
- **Цвет:** #4496E8 (синий)
- **Кнопки:** "Узнать больше" / "Закрыть"

### 5. Help
Справочные диалоги
- **Иконка:** `pi pi-question-circle`
- **Цвет:** #A855F7 (фиолетовый)
- **Кнопки:** "Показать руководство" / "Не сейчас"

### 6. WithoutHeader
Простой диалог без заголовка

### 7. LongMessage
Диалог с длинным текстом для проверки переноса

### 8. CustomButtons
Диалог с кастомными текстами кнопок

### 9. AllVariants
Все варианты severity для сравнения

## Особенности стилизации

### Из Figma
- **Min-width:** 280px
- **Border radius:** 21px (1.5rem)
- **Header padding:** 21px 21px 14px 21px
- **Header border:** 1px solid gray (снизу)
- **Footer padding:** 0 21px 21px 21px
- **Footer gap:** 7px между кнопками
- **Button order:** Accept слева, Reject справа (reversed)
- **Icon gap:** 0 (иконка вплотную к тексту)

### Применённые стили
Стили добавлены в `.storybook/preview-head.html` с `!important` для гарантированного применения.

## Файлы

- **Stories:** `ConfirmDialog.stories.js`
- **Documentation:** `ConfirmDialog.stories.mdx`
- **CSS:** `src/plugins/prime/theme3.0/components/css/confirmdialog.ts`
- **Preview styles:** `.storybook/preview-head.html`

## Использование

```vue
<script setup>
import { useConfirm } from 'primevue/useconfirm';

const confirm = useConfirm();

const deleteItem = () => {
  confirm.require({
    severity: 'danger',
    header: 'Подтверждение удаления',
    message: 'Вы уверены?',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Удалить',
    rejectLabel: 'Отмена',
    accept: () => {
      // Логика удаления
    }
  });
};
</script>

<template>
  <ConfirmDialog />
  <Button @click="deleteItem" label="Удалить" />
</template>
```

## Проверка

1. Запустите Storybook: `npm run storybook`
2. Откройте http://localhost:6006
3. Найдите `Prime/ConfirmDialog` в навигации
4. Проверьте все варианты severity
5. Убедитесь, что:
   - ✅ Кнопки расположены слева
   - ✅ Accept кнопка слева, Reject справа
   - ✅ Иконки имеют правильные цвета
   - ✅ Header имеет нижнюю границу
   - ✅ Border radius 21px
   - ✅ Min-width 280px
