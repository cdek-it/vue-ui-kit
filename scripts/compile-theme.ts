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
    // ThemeService сам вызовет её с правильным dt()
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
const commonCss = Theme.getCommonStyleSheet('primevue', {});

// 2. CSS для каждого компонента
const componentNames = Object.keys(baseTokens.components || {});
const componentCssParts: string[] = [];

for (const name of componentNames) {
  const sheet = Theme.getStyleSheet(name, {});
  if (sheet) {
    componentCssParts.push(sheet);
  }
}

// 3. Собираем всё вместе
const fullCss = [
  '/* PrimeVue Theme — compiled from CdekPreset */',
  '/* This file is auto-generated. Do not edit manually. */',
  '',
  commonCss,
  '',
  componentCssParts.join('\n'),
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
