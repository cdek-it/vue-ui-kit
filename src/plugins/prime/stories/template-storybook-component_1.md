# Шаблон: Storybook сторисы для компонента `{{ComponentName}}`

> **Инструкция по использованию шаблона:**
> Замени все плейсхолдеры `{{...}}` на значения конкретного компонента.
> Удали блоки, отмеченные `<!-- ЕСЛИ НЕТ ВАРИАЦИЙ: удалить -->`, если компонент не имеет вариаций.

---

## Цель

Создать сторисы для компонента `{{ComponentName}}` дизайн-системы RT Gen2 согласно структуре референса [design.rt.ru/gen2/react-storybook](https://design.rt.ru/gen2/react-storybook).

---

## Задачи

### 1. Структура файлов

<!-- ЕСЛИ ЕСТЬ ВАРИАЦИИ: одна папка, несколько файлов -->
```
src/stories/
  {{CategoryName}}/           # например: Buttons, Checkboxes, Input
    {{ComponentName}}/
      {{ComponentName}}.stories.ts                   # default + autodocs
      {{ComponentName}}.{{Story1Name}}.stories.ts    # <!-- ЕСЛИ ЕСТЬ ВАРИАЦИИ -->
      {{ComponentName}}.{{Story2Name}}.stories.ts    # <!-- ЕСЛИ ЕСТЬ ВАРИАЦИИ -->
      {{ComponentName}}.{{Story3Name}}.stories.ts    # <!-- ЕСЛИ ЕСТЬ ВАРИАЦИИ -->
```

<!-- ЕСЛИ НЕТ ВАРИАЦИЙ: единственный файл -->
```
src/stories/
  {{CategoryName}}/
    {{ComponentName}}/
      {{ComponentName}}.stories.ts
```

---

### 2. Meta (default export) с Autodocs

Каждый файл начинается с `meta` с `tags: ['autodocs']`.

```ts
import type { Meta, StoryObj } from '@storybook/react';
import { {{ComponentName}} } from '@rt-ui/react';

const meta: Meta<typeof {{ComponentName}}> = {
  title: '{{SidebarPath}}',              // например: 'Components/Buttons/Button'
  component: {{ComponentName}},
  tags: ['autodocs'],                    // ← обязательно, включает Docs-страницу
  parameters: {
    docs: {
      description: {
        component: '{{ComponentDescription}}',
      },
    },
    designToken: { disable: false },     // ← вкладка Design Tokens
  },
  argTypes: {
    // ── Props ────────────────────────────────────────────────
    {{prop1}}: {
      control: '{{controlType}}',        // 'select' | 'boolean' | 'text' | 'number' | 'color' | 'radio'
      options: [{{prop1Options}}],       // удалить, если не select/radio
      description: '{{prop1Description}}',
      table: {
        category: 'Props',
        defaultValue: { summary: '{{prop1Default}}' },
        type: { summary: '{{prop1TypeSummary}}' },
      },
    },
    {{prop2}}: {
      control: '{{controlType}}',
      description: '{{prop2Description}}',
      table: {
        category: 'Props',
        defaultValue: { summary: '{{prop2Default}}' },
      },
    },
    // ── Events ───────────────────────────────────────────────
    {{eventHandler}}: {                  // например: onClick, onChange, onClose
      action: '{{actionLabel}}',         // например: 'clicked', 'changed'
      table: { category: 'Events' },
    },
    // ── Slots / Children ─────────────────────────────────────
    // children: { control: 'text', table: { category: 'Slots' } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
```

---

### 3. Сторис по умолчанию (Default)

Первая сторис — базовый пример, все Controls активны.

```tsx
export const {{ComponentName}}Default: Story = {
  name: '{{ComponentName}}',
  args: {
    {{prop1}}: {{prop1DefaultValue}},
    {{prop2}}: {{prop2DefaultValue}},
    children: '{{defaultChildrenText}}',  // удалить, если нет children
  },
  parameters: {
    docs: {
      description: { story: 'Базовый пример компонента.' },
    },
    codeV2: {
      language: 'tsx',
      code: `import { {{ComponentName}} } from '@rt-ui/react';

<{{ComponentName}} {{prop1}}='{{prop1DefaultValue}}'>{{defaultChildrenText}}</{{ComponentName}}>`,
      tabs: [
        { label: 'npm',    language: 'bash', code: 'npm install @rt-ui/react' },
        { label: 'Импорт', language: 'tsx',  code: "import { {{ComponentName}} } from '@rt-ui/react';" },
      ],
    },
  },
};
```

---

### 4. Именованные сторисы <!-- ЕСЛИ ЕСТЬ ВАРИАЦИИ: -->

Каждая сторис показывает одну ось вариации. Полный список для данного компонента:

| Story name | Что демонстрирует |
|---|---|
| `{{Story1Name}}` | {{Story1Description}} |
| `{{Story2Name}}` | {{Story2Description}} |
| `{{Story3Name}}` | {{Story3Description}} |
| `Disabled` | Состояние `disabled` для всех вариантов |
| `Loading` | Состояние `loading` с индикатором _(если применимо)_ |

**Шаблон именованной сторис:**

```tsx
export const {{StoryName}}: Story = {
  name: '{{StoryDisplayName}}',
  parameters: {
    docs: {
      description: { story: '{{StoryDescription}}' },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'tsx',
      code: `{{storyCodeExample}}`,
    },
  },
  // render — использовать, если нужна кастомная разметка (несколько экземпляров и т.д.)
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {([{{variantValues}}] as const).map((v) => (
        <{{ComponentName}} key={v} {...args} {{variantProp}}={v}>
          {v}
        </{{ComponentName}}>
      ))}
    </div>
  ),
  args: {
    // базовые args для этой сторис
    {{prop1}}: {{prop1DefaultValue}},
  },
};
```

**Шаблон сторис `Disabled`:**

```tsx
export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {([{{variantValues}}] as const).map((v) => (
        <{{ComponentName}} key={v} {...args} {{variantProp}}={v} disabled>
          {v}
        </{{ComponentName}}>
      ))}
    </div>
  ),
  args: { disabled: true },
  parameters: {
    codeV2: {
      language: 'tsx',
      code: `<{{ComponentName}} disabled>{{defaultChildrenText}}</{{ComponentName}}>`,
    },
  },
};
```

---

### 5. Design Tokens

Подключить аддон и добавить аннотации в CSS файл компонента:

**`.storybook/main.ts`:**

```ts
addons: [
  // ...
  'storybook-design-token',
],
```

**`{{ComponentName}}.module.scss`** — аннотировать используемые токены:

```scss
/* @tokens {{ComponentName}} Colors */
.{{componentClassName}} {
  background-color: var(--rt-color-{{token1}});     /* {{token1Description}} */
  color:            var(--rt-color-{{token2}});     /* {{token2Description}} */
  border-radius:    var(--rt-border-radius-{{token3}});
  padding:          var(--rt-spacing-{{token4}}) var(--rt-spacing-{{token5}});
}
```

> Группы токенов: `Colors`, `Typography`, `Spacing`, `Border`, `Shadow`, `Animation`

---

### 6. Code v2 (кастомный аддон RT)

Параметр `codeV2` обязателен в каждой сторис:

```ts
parameters: {
  codeV2: {
    language: 'tsx',   // 'tsx' | 'ts' | 'jsx' | 'js' | 'html' | 'css'
    code: ``,          // готовый пример для копирования
    tabs: [            // дополнительные вкладки (опционально)
      { label: 'npm',     language: 'bash', code: 'npm install @rt-ui/react' },
      { label: 'Импорт',  language: 'tsx',  code: "import { {{ComponentName}} } from '@rt-ui/react';" },
      { label: 'Пример',  language: 'tsx',  code: `{{fullUsageExample}}` },
    ],
  },
},
```

---

## Образ результата

- [ ] Папка `{{CategoryName}}/{{ComponentName}}/` создана
- [ ] Файл `{{ComponentName}}.stories.ts` содержит `meta` с `tags: ['autodocs']` и полным `argTypes`
- [ ] Каждый prop описан: `control`, `options`, `description`, `table` (category, defaultValue, type)
- [ ] Каждый event описан: `action`, `table.category: 'Events'`
- [ ] Создан `export {{ComponentName}}Default` — базовая сторис с активными Controls
- [ ] Созданы именованные сторисы по таблице выше <!-- ЕСЛИ ЕСТЬ ВАРИАЦИИ -->
- [ ] Каждая сторис содержит параметр `codeV2` с примером кода и вкладками
- [ ] CSS аннотации `/* @tokens ... */` добавлены, аддон `storybook-design-token` подключён
- [ ] Storybook запускается без ошибок, компонент отображается в sidebar по пути `{{SidebarPath}}`

---

## Плейсхолдеры — шпаргалка

| Плейсхолдер | Пример |
|---|---|
| `{{ComponentName}}` | `Button`, `Input`, `Badge` |
| `{{CategoryName}}` | `Buttons`, `Inputs`, `Components` |
| `{{SidebarPath}}` | `Components/Buttons/Button` |
| `{{ComponentDescription}}` | `Кнопка — базовый интерактивный элемент` |
| `{{prop1}}` | `variant`, `size`, `color`, `type` |
| `{{controlType}}` | `select`, `boolean`, `text`, `number`, `color`, `radio` |
| `{{prop1Options}}` | `'primary', 'secondary', 'ghost'` |
| `{{variantProp}}` | `variant`, `size`, `color` |
| `{{variantValues}}` | `'primary', 'secondary', 'ghost', 'danger'` |
| `{{eventHandler}}` | `onClick`, `onChange`, `onClose`, `onSelect` |
| `{{actionLabel}}` | `'clicked'`, `'changed'`, `'closed'` |
| `{{token1}}` | `brand-primary`, `text-on-brand` |
| `{{componentClassName}}` | `.button`, `.input`, `.badge` |

---

## Ссылки

- Референс: [design.rt.ru/gen2/react-storybook](https://design.rt.ru/gen2/react-storybook/?path=/story/components-buttons-button--variant)
- Storybook docs: [storybook.js.org/docs/writing-stories](https://storybook.js.org/docs/writing-stories)
- storybook-design-token: [npmjs.com/package/storybook-design-token](https://www.npmjs.com/package/storybook-design-token)
