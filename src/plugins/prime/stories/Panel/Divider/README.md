# Divider

Компонент Divider используется для визуального разделения контента горизонтальными или вертикальными линиями с возможностью добавления текста или иконок.

## Дизайн-токены

Компонент использует следующие дизайн-токены из темы:

### Root
- `borderColor`: `{content.borderColor}` - цвет линии разделителя

### Content
- `background`: `{content.background}` - фон контента внутри разделителя
- `color`: `{text.mutedColor}` - цвет текста контента

### Horizontal (Горизонтальный)
- `margin`: `1rem 0` - внешние отступы сверху и снизу
- `padding`: `0 1rem` - внутренние отступы слева и справа
- `content.padding`: `0 0.5rem` - отступы вокруг контента

### Vertical (Вертикальный)
- `margin`: `0 1rem` - внешние отступы слева и справа
- `padding`: `1rem 0` - внутренние отступы сверху и снизу
- `content.padding`: `0.5rem 0` - отступы вокруг контента

## Основные свойства

- `layout` - ориентация разделителя: `'horizontal'` (по умолчанию) или `'vertical'`
- `align` - выравнивание контента:
  - Для горизонтального: `'left'`, `'center'` (по умолчанию), `'right'`
  - Для вертикального: `'top'`, `'center'` (по умолчанию), `'bottom'`
- `type` - тип линии: `'solid'` (по умолчанию), `'dashed'`, `'dotted'`

## Примеры использования

### Базовый горизонтальный разделитель
```vue
<div>
  <p>Контент 1</p>
  <Divider />
  <p>Контент 2</p>
</div>
```

### С текстовым контентом
```vue
<div>
  <p>Контент 1</p>
  <Divider align="left">
    <span>Раздел</span>
  </Divider>
  <p>Контент 2</p>
</div>
```

### С иконкой
```vue
<Divider align="center">
  <i class="ti ti-star"></i>
</Divider>
```

### Различные типы линий
```vue
<Divider type="solid" />
<Divider type="dashed" />
<Divider type="dotted" />
```

### Вертикальный разделитель
```vue
<div style="display: flex;">
  <div>Контент 1</div>
  <Divider layout="vertical" />
  <div>Контент 2</div>
  <Divider layout="vertical" />
  <div>Контент 3</div>
</div>
```

### Вертикальный с контентом
```vue
<div style="display: flex; min-height: 200px;">
  <div>Контент 1</div>
  <Divider layout="vertical" align="center">
    <span>ИЛИ</span>
  </Divider>
  <div>Контент 2</div>
</div>
```

### В форме (разделение способов входа)
```vue
<div>
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Пароль" />
  
  <Divider align="center">
    <span>ИЛИ</span>
  </Divider>
  
  <button>Войти через Google</button>
  <button>Войти через GitHub</button>
</div>
```

## Рекомендации

1. Используйте горизонтальный разделитель для разделения вертикально расположенного контента
2. Используйте вертикальный разделитель для разделения горизонтально расположенного контента
3. Для вертикального разделителя убедитесь, что родительский контейнер имеет `display: flex`
4. Текст внутри разделителя должен быть кратким и описательным
5. Используйте `type="dashed"` или `type="dotted"` для менее акцентированного разделения

## Ссылки

- [PrimeVue Divider Documentation](https://primevue.org/divider)
