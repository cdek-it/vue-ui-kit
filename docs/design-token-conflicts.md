# Реестр расхождений токенов с Figma

Макет определяет итоговый визуал. Здесь фиксируем подтверждённые расхождения, чтобы их можно было исправить в источнике экспорта одним проходом. Для записи указываем слой, режим, состояние, текущую и ожидаемую цепочки, локальную адаптацию и хеш экспорта.

После обновления экспорта запустите `yarn check:token-conflicts`. Проверка читает пути из таблицы ниже. Скрипт раскрывает алиасы в режиме из JSON-пути и сравнивает конечное значение с зафиксированным цветом из Figma. При совпадении он отмечает путь для снятия адаптации, при третьем значении требует повторной сверки. Ожидаемый алиас рядом с цветом показывает, какую привязку нужно поправить в источнике. После совпадения проверьте рендер без адаптации, удалите её и перенесите пути из таблицы в историю закрытой записи. Для DTC, где правильный экспорт может сохранить существующий алиас, нужна проверка реального рендера.

Когда CI покажет полное совпадение, временно снимите блок для браузерной проверки и восстановите его после неё. Затем команда удалит помеченный блок и перенесёт пути в историю:

```sh
yarn check:token-conflicts --remove-verified DTC-BUTTON-001
```

Команда принимает один ID и повторно проверяет все его цвета перед записью.

Открытые записи от 27.11.2026 для `ExtraButton`, экспорт `ed13cfdff7bc09a44c012c584a05f82939015430`. Слои показывают размер `base`, адаптации проверены на четырёх размерах. Адаптации находятся в `ExtraButton.vue` и снимаются после совпадения экспорта и браузерной проверки.

- **DTC-BUTTON-001**. Тёмные [text](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=25889-11936) и [link](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=25889-11938). Компонентные переменные Figma из ветки `light` в режиме коллекции `theme/dark` дают `color/fg/default → colors/alpha/white/1000 → #ffffff`. Текущие алиасы дают `inverse.default → zinc.900 → #2b2e33`. Link также использует обычные `fg.hover` и `fg.muted` при наведении и нажатии. Обёртка применяет эти semantic-цвета локально.
- **DTC-BUTTON-002**. [Text hover/active](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=25889-12456), обе темы. `button/extend/extText/background → color/bg/neutral/translucent/faint` даёт практически прозрачный фон. В экспорте `components.button.colorScheme.{light,dark}.text.primary.{hoverBackground,activeBackground}` дают видимую заливку. Обёртка использует `--p-button-ext-text-background`.
- **DTC-BUTTON-003**. Тёмный [primary hover](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=25889-12450) и [active](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=25889-12250). В режиме `theme/dark` Figma использует `brand.strong.hover → green.400 → #77f48a` и `brand.strong.active → green.300 → #aafbb7`. Обёртка использует эти semantic-токены вместо экспортных ссылок на success.
- **DTC-BUTTON-004**. Тёмный [secondary](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=25889-11934), default, focus, hover и active. В режиме `theme/dark` Figma использует фон `neutral.strong.*` и текст `fg.inverse.*`. Обёртка применяет эти ссылки вместо экспортных `surface.canvas.*` и `fg.default/fg.on.fill.*`.
- **DTC-BUTTON-005**. Тёмный [tertiary](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=25889-11932), default, focus, hover и active. В режиме `theme/dark` Figma использует фон `surface.canvas.hover` в покое и `surface.canvas.active` при наведении, текст `fg.default → white.1000 → #ffffff`. Обёртка применяет эти ссылки вместо экспортных `neutral.strong.*` и тёмных foreground-ссылок.

- **DTC-BUTTON-006**, открыт 27.11.2026, экспорт `ed13cfdff7bc09a44c012c584a05f82939015430`. Для залитой Success в тёмной теме, размер base, [default](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=24646-66746) и [focus](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=24646-66770) используют `button/colorScheme/light/root/success/background` (components/default) → `color/bg/status/success/strong/default` (theme/dark) → `colors/solid/green/700` (primitive/default). [Hover](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=24646-66776) использует `button/colorScheme/light/root/success/hoverBackground` → `color/bg/status/success/strong/hover` → `colors/solid/green/600` в тех же режимах. Текущий экспорт берёт brand strong active → green.300 и brand strong hover → green.400. Обёртка локально использует semantic-токены из макета. Снять адаптацию после совпадения путей ниже и браузерной проверки default, focus, hover и active в тёмной теме.

На тёмных слоях залитых [Warning disabled](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=24646-66113), [Warning loading](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=24646-66119), [Success disabled](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=24646-66752) и [Success loading](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=24646-66758) фон из `button/extend/disabledBackground` (components/default) → `form/disabledBackground` разрешается в режиме theme/light → zinc.200 → `#e2e2e4`. Рендер тёмной темы использует `#404348`. Здесь нужно уточнение режима в Figma, CSS по светлому значению не адаптирован.

## Пути для автоматической проверки

<!-- token-conflicts:start -->
| ID | JSON-путь | Текущий алиас | Алиас по Figma | Цвет до исправления | Цвет по Figma |
| --- | --- | --- | --- | --- | --- |
| DTC-BUTTON-001 | `components.button.colorScheme.dark.text.primary.color` | `{color.fg.inverse.default}` | `{color.fg.default}` | `#2b2e33` | `#ffffff` |
| DTC-BUTTON-001 | `components.button.colorScheme.dark.link.color` | `{color.fg.inverse.default}` | `{color.fg.default}` | `#2b2e33` | `#ffffff` |
| DTC-BUTTON-001 | `components.button.colorScheme.dark.link.hoverColor` | `{color.fg.inverse.hover}` | `{color.fg.hover}` | `#56595f` | `#cecfd2` |
| DTC-BUTTON-001 | `components.button.colorScheme.dark.link.activeColor` | `{color.fg.inverse.muted}` | `{color.fg.muted}` | `#85888e` | `#a2a5a9` |
| DTC-BUTTON-002 | `components.button.colorScheme.light.text.primary.hoverBackground` | `{color.bg.neutral.weak.default}` | `{color.bg.neutral.translucent.faint}` | `#f0f0f1` | `rgba(0, 0, 0, 0.0001)` |
| DTC-BUTTON-002 | `components.button.colorScheme.light.text.primary.activeBackground` | `{color.bg.neutral.medium.default}` | `{color.bg.neutral.translucent.faint}` | `#e2e2e4` | `rgba(0, 0, 0, 0.0001)` |
| DTC-BUTTON-002 | `components.button.colorScheme.dark.text.primary.hoverBackground` | `{color.bg.neutral.strong.selected}` | `{color.bg.neutral.translucent.faint}` | `#f0f0f1` | `rgba(255, 255, 255, 0.0001)` |
| DTC-BUTTON-002 | `components.button.colorScheme.dark.text.primary.activeBackground` | `{color.bg.neutral.strong.hover}` | `{color.bg.neutral.translucent.faint}` | `#e2e2e4` | `rgba(255, 255, 255, 0.0001)` |
| DTC-BUTTON-003 | `components.button.colorScheme.dark.root.primary.hoverBackground` | `{color.bg.status.success.strong.hover}` | `{color.bg.brand.strong.hover}` | `#1dc831` | `#77f48a` |
| DTC-BUTTON-003 | `components.button.colorScheme.dark.root.primary.activeBackground` | `{color.bg.status.success.strong.default}` | `{color.bg.brand.strong.active}` | `#168322` | `#aafbb7` |
| DTC-BUTTON-004 | `components.button.colorScheme.dark.root.secondary.background` | `{color.bg.surface.canvas.default}` | `{color.bg.neutral.strong.default}` | `#2b2e33` | `#f0f0f1` |
| DTC-BUTTON-004 | `components.button.colorScheme.dark.root.secondary.color` | `{color.fg.default}` | `{color.fg.inverse.default}` | `#ffffff` | `#2b2e33` |
| DTC-BUTTON-004 | `components.button.colorScheme.dark.root.secondary.hoverBackground` | `{color.bg.surface.canvas.hover}` | `{color.bg.neutral.strong.hover}` | `#404348` | `#e2e2e4` |
| DTC-BUTTON-004 | `components.button.colorScheme.dark.root.secondary.hoverColor` | `{color.fg.on.fill.hover}` | `{color.fg.inverse.hover}` | `#ffffff` | `#56595f` |
| DTC-BUTTON-004 | `components.button.colorScheme.dark.root.secondary.activeBackground` | `{color.bg.surface.canvas.active}` | `{color.bg.neutral.strong.active}` | `#56595f` | `#cecfd2` |
| DTC-BUTTON-004 | `components.button.colorScheme.dark.root.secondary.activeColor` | `{color.fg.on.fill.active}` | `{color.fg.inverse.active}` | `#ffffff` | `#181a1f` |
| DTC-BUTTON-005 | `components.button.colorScheme.dark.root.contrast.background` | `{color.bg.neutral.strong.hover}` | `{color.bg.surface.canvas.hover}` | `#e2e2e4` | `#404348` |
| DTC-BUTTON-005 | `components.button.colorScheme.dark.root.contrast.hoverBackground` | `{color.bg.neutral.strong.active}` | `{color.bg.surface.canvas.active}` | `#cecfd2` | `#56595f` |
| DTC-BUTTON-005 | `components.button.colorScheme.dark.root.contrast.color` | `{color.fg.inverse.default}` | `{color.fg.default}` | `#2b2e33` | `#ffffff` |
| DTC-BUTTON-005 | `components.button.colorScheme.dark.root.contrast.hoverColor` | `{color.fg.on.brand.hover}` | `{color.fg.default}` | `#2b2e33` | `#ffffff` |
| DTC-BUTTON-005 | `components.button.colorScheme.dark.root.contrast.activeColor` | `{color.fg.on.brand.active}` | `{color.fg.default}` | `#2b2e33` | `#ffffff` |
| DTC-BUTTON-006 | `components.button.colorScheme.dark.root.success.background` | `{color.bg.brand.strong.active}` | `{color.bg.status.success.strong.default}` | `#aafbb7` | `#168322` |
| DTC-BUTTON-006 | `components.button.colorScheme.dark.root.success.hoverBackground` | `{color.bg.brand.strong.hover}` | `{color.bg.status.success.strong.hover}` | `#77f48a` | `#1dc831` |
<!-- token-conflicts:end -->
