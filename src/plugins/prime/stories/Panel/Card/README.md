# Card Component

Card компонент используется для группировки и отображения контента в структурированном виде.

## Дизайн

[Figma макет](https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/%F0%9F%A7%A9-UI-kit-PrimeFace--1.0.0-beta-?node-id=1213-4134)

## Использование

```vue
<Card>
  <template #title>Title</template>
  <template #subtitle>Caption</template>
  <template #content>
    Content goes here
  </template>
</Card>
```

## Слоты

- `header` - Верхняя часть карточки (обычно для изображений)
- `title` - Заголовок карточки
- `subtitle` - Подзаголовок карточки
- `content` - Основной контент
- `footer` - Нижняя часть карточки (обычно для действий)

## Примеры

### С заголовком и подзаголовком

```vue
<Card>
  <template #title>Title</template>
  <template #subtitle>Caption</template>
  <template #content>
    <p>Card content</p>
  </template>
</Card>
```

### С header изображением

```vue
<Card>
  <template #header>
    <img src="image.jpg" alt="Card header" />
  </template>
  <template #title>Title</template>
  <template #content>
    <p>Card content</p>
  </template>
</Card>
```

### С footer действиями

```vue
<Card>
  <template #title>Title</template>
  <template #content>
    <p>Card content</p>
  </template>
  <template #footer>
    <Button label="Action" />
  </template>
</Card>
```

## Стилизация

Компонент использует дизайн-токены из `src/plugins/prime/theme3.0/components/index.ts`:

- `card.root.background` - Фон карточки
- `card.root.borderRadius` - Радиус скругления углов
- `card.root.color` - Цвет текста
- `card.root.shadow` - Тень карточки
- `card.extend.borderColor` - Цвет границы
- `card.body.padding` - Внутренние отступы
- `card.body.gap` - Расстояние между элементами
- `card.title.fontSize` - Размер шрифта заголовка
- `card.title.fontWeight` - Толщина шрифта заголовка
- `card.subtitle.color` - Цвет подзаголовка

## Дополнительные CSS классы

Дополнительные стили определены в `src/plugins/prime/theme3.0/components/css/card.ts` и включают:
- Flexbox layout для body, caption, content и footer
- Правильные отступы и gap между элементами
- Типографику для title и subtitle
