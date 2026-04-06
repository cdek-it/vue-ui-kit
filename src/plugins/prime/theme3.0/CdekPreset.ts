/**
 *
 * Финальная тема PrimeVue 4.x
 * CSS-функции передаются в definePreset — PrimeVue вызывает их сам,
 * подставляя свой dt() → CSS-переменные (var(--p-...))
 */

import { definePreset } from '@primevue/themes';
import Lara from '@primevue/themes/lara';

import baseTokens from './tokens.json';
import globalCss from './css';

// ─── Типы ────────────────────────────────────────────────────────────────────

type CssFn = (ctx: { dt: (token: string) => string }) => string;

type Tokens = typeof baseTokens & {
  css?: CssFn;
  components?: Record<string, Record<string, unknown>>;
};

// ─── Загружаем все файлы из components/css/ через Vite glob ──────────────────
// Файлы в папке components/css/ должны называться так же, как ключи компонентов
// в секции components файла tokens.json:
//
//   tokens.json                  components/css/
//   ├── components
//   │   ├── accordion      →     accordion.ts
//   │   ├── button         →     button.ts
//   │   └── dialog         →     dialog.ts
//   └── ...
//
// Файл без совпадающего ключа в tokens.json будет проигнорирован.

const cssModules = import.meta.glob<{ default: CssFn }>(
  './components/css/*.ts',
  { eager: true }
);

// ─── Мёрджим css в токены ─────────────────────────────────────────────────────

const tokens = baseTokens as Tokens;

tokens.css = globalCss;

if (tokens.components) {
  for (const [path, mod] of Object.entries(cssModules)) {
    // './components/css/accordion.ts' → 'accordion'
    const name = path.replace('./components/css/', '').replace('.ts', '');

    if (tokens.components[name]) {
      tokens.components[name].css = mod.default;
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        `[theme] components/css/${name}.ts не имеет соответствующего компонента в tokens.json → components`
      );
    }
  }
}

// ─── Финальный пресет ─────────────────────────────────────────────────────────

export const CdekPreset = definePreset(Lara, tokens);
