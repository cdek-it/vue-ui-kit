# MegaMenu Component

## Обзор
Компонент MegaMenu реализован на основе PrimeVue с кастомной стилизацией согласно дизайн-системе. Отображает расширенное меню с многоколоночной структурой.

## PrimeVue Documentation
[PrimeVue MegaMenu](https://primevue.org/megamenu)

## Stories

### 1. Basic
Базовое мега-меню с многоколоночной структурой. По умолчанию все пункты не выбраны.

## Состояния
- **Default** - обычное состояние (по умолчанию все пункты не выбраны)
- **Hover** - при наведении (светлый фон)
- **Selected** - активный элемент (темный фон), класс `p-menuitem-checked` добавляется при клике
- **Disabled** - неактивный элемент

## Интерактивность

По умолчанию все пункты меню не выбраны. При клике на пункт меню:
1. Снимается выделение со всех пунктов
2. Выбранному пункту присваивается класс `p-menuitem-checked`
3. Применяются стили активного состояния

## Примеры использования

### Базовый пример
```vue
<MegaMenu :model="items" />
```

```javascript
const items = [
  {
    label: 'Products',
    icon: 'ti ti-box',
    items: [
      [
        {
          label: 'Electronics',
          items: [
            { label: 'Laptops', icon: 'ti ti-device-laptop' },
            { label: 'Phones', icon: 'ti ti-device-mobile' }
          ]
        }
      ]
    ]
  }
];
```

## Стилизация

### Design Tokens
Основные стили определены в `src/plugins/prime/theme3.0/components/index.ts`:
- `megamenu.root.*` - контейнер меню
- `megamenu.item.*` - элементы меню
- `megamenu.overlay.*` - оверлей подменю
- `megamenu.extend.extItem.*` - расширенные стили (activeBackground, activeColor, caption)

### Дополнительные CSS
Дополнительные стили в `src/plugins/prime/theme3.0/components/css/megamenu.ts`:
- Caption стили
- Active state стили
- Многоколоночная структура

## Технические детали
- Используется PrimeVue MegaMenu component
- По умолчанию все пункты не выбраны
- При клике активный элемент помечается классом `p-menuitem-checked`
- Все интерактивные состояния покрыты design tokens
