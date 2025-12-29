# Menu Component

## Обзор
Компонент Menu реализован на основе PrimeVue с кастомной стилизацией согласно дизайн-системе.

## Figma
- [Menu](https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/%F0%9F%A7%A9-UI-kit-PrimeFace--1.0.0-beta-?node-id=16005-21803)
- [Menu.ItemBase](https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/%F0%9F%A7%A9-UI-kit-PrimeFace--1.0.0-beta-?node-id=16005-24594)
- [Menu.ItemTemplate](https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/%F0%9F%A7%A9-UI-kit-PrimeFace--1.0.0-beta-?node-id=16005-24612)

## Stories

### 1. Basic
Базовое меню с простыми элементами (иконка + текст). По умолчанию все пункты не выбраны.

### 2. Group
Меню с группировкой элементов через submenu labels и separators.

### 3. Popup
Меню в режиме overlay, открывается по клику на кнопку.

### 4. Template - Caption
Элементы меню с дополнительным текстом (caption) под основным label.

### 5. Template - Badge
Элементы меню с badge (значком) справа от текста.

## Варианты

### Menu.ItemBase
Простые элементы меню с иконкой и текстом:
- Иконка слева
- Текст label
- Состояния: default, hover, selected, disabled

### Menu.ItemTemplate
Расширенный вариант с дополнительными возможностями:
- **Caption** - дополнительный текст под основным label
- **Badge** - значок справа от текста
- **Submenu Label** - заголовок группы элементов (создается через вложенные `items`)
- **Separator** - разделитель между элементами

## Состояния
- **Default** - обычное состояние (по умолчанию все пункты не выбраны)
- **Hover** - при наведении (светлый фон из `menu.item.focusBackground`)
- **Selected** - активный элемент (темный фон из `menu.extend.extItem.activeBackground`), класс `p-menuitem-checked` добавляется при клике
- **Disabled** - неактивный элемент

## Интерактивность

По умолчанию все пункты меню не выбраны. При клике на пункт меню:
1. Снимается выделение со всех пунктов
2. Выбранному пункту присваивается класс `p-menuitem-checked`
3. Применяются стили активного состояния

```css
.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content {
  background: var(--p-menu-ext-item-active-background);
  color: var(--p-menu-ext-item-active-color);
}
```

## Примеры использования

### Базовый пример
```vue
<Menu :model="items" />
```

```javascript
const items = [
  {
    label: 'Home',
    icon: 'ti ti-user',
    command: () => handleClick() // При клике добавляется класс p-menuitem-checked
  },
  {
    label: 'Features',
    icon: 'ti ti-star'
  }
];
```

### С Caption
```javascript
{
  label: 'MenuItem',
  icon: 'ti ti-user',
  template: () => {
    return {
      template: `
        <div class="p-menu-item-link" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
          <div style="display: flex; align-items: center; gap: 7px; flex: 1;">
            <i class="p-menu-item-icon ti ti-user"></i>
            <div class="p-menu-item-label">
              <span>MenuItem</span>
              <span class="p-menu-item-caption">Caption text</span>
            </div>
          </div>
          <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
        </div>
      `
    };
  }
}
```

### С Badge
```javascript
{
  label: 'MenuItem',
  icon: 'ti ti-user',
  badge: '2',
  template: (item) => {
    return {
      components: { Badge },
      setup() {
        return { item };
      },
      template: `
        <div class="p-menu-item-link" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
          <div style="display: flex; align-items: center; gap: 7px; flex: 1;">
            <i class="p-menu-item-icon ti ti-user"></i>
            <div class="p-menu-item-label">
              <span>MenuItem</span>
              <span class="p-menu-item-caption">Caption</span>
            </div>
            <Badge :value="item.badge" severity="success" />
          </div>
          <i class="ti ti-chevron-right" style="font-size: 17.5px; flex-shrink: 0;"></i>
        </div>
      `
    };
  }
}
```

### Submenu Label (группа)
```javascript
{
  label: 'Documents', // submenu label (заголовок группы)
  items: [
    {
      label: 'New',
      icon: 'ti ti-user'
    },
    {
      label: 'Search',
      icon: 'ti ti-user'
    }
  ]
}
```

### Separator (разделитель)
```javascript
{
  separator: true
}
```

### Popup Menu
```vue
<template>
  <Button label="Show Menu" @click="toggle" />
  <Menu ref="menu" :model="items" :popup="true" />
</template>

<script setup>
const menu = ref();
const items = ref([...]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>
```

## Стилизация

### Design Tokens
Основные стили определены в `src/plugins/prime/theme3.0/components/index.ts`:
- `menu.root.*` - контейнер меню (background, border, shadow, borderRadius)
- `menu.list.*` - список элементов (padding, gap)
- `menu.item.*` - элементы меню (padding, gap, borderRadius, colors)
- `menu.item.icon.*` - иконки (color, focusColor)
- `menu.submenuLabel.*` - заголовки групп (padding, fontWeight, background, color)
- `menu.separator.*` - разделители (borderColor)
- `menu.extend.extItem.*` - расширенные стили (activeBackground, activeColor, caption)

### Дополнительные CSS
Дополнительные стили в `src/plugins/prime/theme3.0/components/css/menu.ts`:
- Border для menu container (1px solid)
- Caption стили:
  - `color: menu.extend.extItem.caption.color`
  - `font-size: fonts.fontSize.sm`
  - `line-height: 1.5`
- Submenu label:
  - `text-transform: uppercase`
  - `font-family: fonts.fontFamily.heading`
  - `line-height: 1`
- Label структура:
  - `display: flex`
  - `flex-direction: column`
  - `gap: menu.extend.extItem.caption.gap`
- Active state для caption:
  - `opacity: 0.7` для лучшей читаемости на темном фоне

## Технические детали
- Используется PrimeVue Menu component
- По умолчанию все пункты не выбраны
- При клике активный элемент помечается классом `p-menuitem-checked`
- Caption и Badge реализуются через template функцию
- Submenu label - обычный item с классом `p-menu-submenu-label`
- Все интерактивные состояния покрыты design tokens
- Дополнительные стили только для того, что не покрывается tokens
