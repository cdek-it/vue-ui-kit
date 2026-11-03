# ExtraToggleButton

Обёртка сохраняет Prime ToggleButton и его слоты; позиция иконки и xlarge
реализованы локальными BEM-модификаторами, без копирования разметки Figma.

- `size`: `small | base | large | xlarge`; default — `base`.
- `iconPos`: `left | right`; default — `left`. В установленном PrimeVue этого
  пропса нет: обёртка меняет порядок собственного icon-slot контейнера.
- `iconOnly`: скрывает стандартный текст и задаёт квадратный размер из
  существующих component-level токенов. Для доступности передайте `ariaLabel`
  или непустой `baseLabel`/`onLabel`/`offLabel`.
- `disabled`: пробрасывается в Prime; modelValue и события остаются upstream.
- `xlarge`: использует Prime large как базу и существующий `extXlg.padding`;
  значения экспортированных токенов не изменяются.

Default и icon slots сохраняются; icon slot получает upstream `value` и `class`.
Геометрия иконок использует существующие `iconSize.sm/md/lg` токены.

Шрифт — TT Fellows напрямую через `fonts.fontFamily.heading`.
Установленный Prime наследует семейство шрифта и не предоставляет токен
для этой настройки; локальная дельта назначает heading только этой обёртке.
Дополнительные алиасы не создаются; экспорт `tokens.json` не изменяется.
