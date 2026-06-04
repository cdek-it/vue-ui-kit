/**
 * Скрипт компиляции темы PrimeVue в статический CSS.
 * Запускать после сборки библиотеки: `npx tsx scripts/compile-theme.ts`
 *
 * Результат: dist/prime-theme.css — готовый CSS со всеми переменными темы.
 * Этот файл можно подключать в Nuxt-проектах без runtime-генерации темы PrimeVue.
 */

import { definePreset } from '@primevue/themes';
import Lara from '@primevue/themes/lara';
import { Theme } from '@primeuix/styled';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Загружаем tokens.json
const tokensPath = path.resolve(
  __dirname,
  '../src/plugins/prime/theme3.0/tokens.json'
);
const baseTokens: any = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));

// Загружаем глобальный CSS (он не использует dt, просто строка)
const globalCssPath = path.resolve(
  __dirname,
  '../src/plugins/prime/theme3.0/css.ts'
);
const globalCssModule = (await import(globalCssPath)).default;
const globalCss =
  typeof globalCssModule === 'function' ? globalCssModule() : globalCssModule;

// Добавляем глобальный CSS в пресет
baseTokens.css = globalCss;

// Загружаем CSS-функции компонентов (они принимают { dt } и возвращают строку CSS)
const componentsCssDir = path.resolve(
  __dirname,
  '../src/plugins/prime/theme3.0/components/css'
);

if (fs.existsSync(componentsCssDir)) {
  const files = fs
    .readdirSync(componentsCssDir)
    .filter((f) => f.endsWith('.ts'));
  for (const file of files) {
    const name = file.replace('.ts', '');
    const filePath = path.resolve(componentsCssDir, file);
    const mod = await import(filePath);
    const cssFn = mod.default;
    // cssFn — это функция ({ dt }) => `...`, передаём как есть,
    // Theme сам вызовет её с правильным dt()
    if (typeof cssFn === 'function' && baseTokens.components?.[name]) {
      baseTokens.components[name].css = cssFn;
    }
  }
}

// Создаём пресет
const CdekPreset = definePreset(Lara as any, baseTokens);

// Настраиваем тему
Theme.setTheme({
  preset: CdekPreset,
  options: {
    prefix: 'p',
    darkModeSelector: false,
    cssLayer: false,
  },
});

// Генерируем CSS

// 1. Common CSS (примитивы + семантика + глобал)
// getCommon возвращает { primitive: { css }, semantic: { css }, global: { css }, style: string }
const common = Theme.getCommon('primevue', {});
const commonCssParts: string[] = [];

// Примитивные переменные
if (common.primitive?.css) {
  commonCssParts.push(
    common.primitive.css.startsWith(':root')
      ? common.primitive.css
      : `:root{${common.primitive.css}}`
  );
}
// Семантические переменные
if (common.semantic?.css) {
  commonCssParts.push(
    common.semantic.css.startsWith(':root')
      ? common.semantic.css
      : `:root{${common.semantic.css}}`
  );
}
// Глобальные (color-scheme)
if (common.global?.css) {
  commonCssParts.push(
    common.global.css.startsWith(':root')
      ? common.global.css
      : `:root{${common.global.css}}`
  );
}
// Дополнительный style из css()
if (common.style) {
  commonCssParts.push(common.style);
}

// 2. CSS для каждого компонента
const componentNames = Object.keys(baseTokens.components || {});
const componentCssParts: string[] = [];

for (const name of componentNames) {
  const presetC = Theme.getComponent(name, {});
  if (presetC?.css) {
    const css =
      presetC.css.startsWith('@media') || presetC.css.startsWith(':root')
        ? presetC.css
        : `:root{${presetC.css}}`;
    componentCssParts.push(css);
  }
}

// 3. Собираем всё вместе
const fullCss = [
  '/* PrimeVue Theme — compiled from CdekPreset */',
  '/* This file is auto-generated. Do not edit manually. */',
  '',
  ...commonCssParts,
  '',
  ...componentCssParts,
  '',
].join('\n');

// Сохраняем в dist
const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const outputPath = path.resolve(distDir, 'prime-theme.css');
fs.writeFileSync(outputPath, fullCss, 'utf-8');
// eslint-disable-next-line no-console
console.log(`✅ Theme compiled successfully: ${outputPath}`);
// eslint-disable-next-line no-console
console.log(
  `   File size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`
);
