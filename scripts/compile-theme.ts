/**
 * Компиляция PrimeVue темы в статический CSS.
 * Запускать после сборки библиотеки: `npx tsx scripts/compile-theme.ts`
 */
import { definePreset } from '@primevue/themes';
import Lara from '@primevue/themes/lara';
import { Theme, dt, evaluateDtExpressions } from '@primeuix/styled';
import { PRIME_ENTRIES } from '../src/prime/entries';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dedupeCssParts = (parts: string[]) => {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const part of parts) {
    const normalized = part.trim();
    if (!normalized || seen.has(normalized)) {
      continue;
    }
    seen.add(normalized);
    result.push(normalized);
  }
  return result;
};
const minifyCss = (css: string) =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
const sanitizeCss = (css: string) => css.split('\0').join('\\0');
const tokensPath = path.resolve(
  __dirname,
  '../src/plugins/prime/theme3.0/tokens.json'
);
const baseTokens: any = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));
const globalCssPath = path.resolve(
  __dirname,
  '../src/plugins/prime/theme3.0/css.ts'
);
const globalCssModule = (await import(globalCssPath)).default;
const globalCss =
  typeof globalCssModule === 'function' ? globalCssModule() : globalCssModule;
baseTokens.css = globalCss;
const componentsCssDir = path.resolve(
  __dirname,
  '../src/plugins/prime/theme3.0/components/css'
);
if (fs.existsSync(componentsCssDir)) {
  const files = fs
    .readdirSync(componentsCssDir)
    .filter((f) => f.endsWith('.ts'));
  baseTokens.components ??= {};
  for (const file of files) {
    const name = file.replace('.ts', '');
    const filePath = path.resolve(componentsCssDir, file);
    const mod = await import(filePath);
    const cssFn = mod.default;
    if (typeof cssFn === 'function') {
      baseTokens.components[name] ??= {};
      baseTokens.components[name].css = cssFn;
    }
  }
}
const CdekPreset = definePreset(Lara as any, baseTokens);
Theme.setTheme({
  preset: CdekPreset,
  options: {
    prefix: 'p',
    darkModeSelector: false,
    cssLayer: false,
  },
});
const common = Theme.getCommon('primevue', {});
const commonCssPartsRaw: string[] = [];
if (common.primitive?.css) {
  commonCssPartsRaw.push(
    common.primitive.css.startsWith(':root')
      ? common.primitive.css
      : `:root{${common.primitive.css}}`
  );
}
if (common.semantic?.css) {
  commonCssPartsRaw.push(
    common.semantic.css.startsWith(':root')
      ? common.semantic.css
      : `:root{${common.semantic.css}}`
  );
}
if (common.global?.css) {
  commonCssPartsRaw.push(
    common.global.css.startsWith(':root')
      ? common.global.css
      : `:root{${common.global.css}}`
  );
}
if (common.style) {
  commonCssPartsRaw.push(common.style);
}
const componentNames = Object.keys(baseTokens.components || {});
const componentCssPartsRaw: string[] = [];
const componentStylePartsRaw: string[] = [];
const perComponentStyles = new Map<string, string>();
for (const name of componentNames) {
  const presetC = Theme.getComponent(name, {});
  const stylesForComponent: string[] = [];
  if (presetC?.css && presetC.css.trim()) {
    componentCssPartsRaw.push(presetC.css);
  }
  try {
    const baseStyleModule = await import(`@primeuix/styles/${name}`);
    const baseStyle = baseStyleModule?.style;
    if (typeof baseStyle === 'string' && baseStyle.trim()) {
      const resolvedBaseStyle = evaluateDtExpressions(baseStyle, dt);
      const normalizedBaseStyle = Theme.transformCSS(
        name,
        sanitizeCss(resolvedBaseStyle),
        'style'
      );
      if (normalizedBaseStyle.trim()) {
        stylesForComponent.push(normalizedBaseStyle);
      }
    }
  } catch {
    // Модуль стилей может отсутствовать для части сущностей из tokens.
  }
  if (presetC?.style && presetC.style.trim()) {
    stylesForComponent.push(sanitizeCss(presetC.style));
  }
  if (stylesForComponent.length) {
    const merged = dedupeCssParts(stylesForComponent).join('\n');
    componentStylePartsRaw.push(merged);
    perComponentStyles.set(name, merged);
  }
}
const commonCssParts = dedupeCssParts(commonCssPartsRaw);
const componentCssParts = dedupeCssParts(componentCssPartsRaw);
const componentStyleParts = dedupeCssParts(componentStylePartsRaw);
const tokensCss = [
  '/* PrimeVue Theme Tokens — compiled from CdekPreset */',
  '/* This file is auto-generated. Do not edit manually. */',
  '',
  ...commonCssParts,
  '',
  ...componentCssParts,
  '',
].join('\n');
const componentsCss = [
  '/* PrimeVue Theme Component Styles — compiled from CdekPreset */',
  '/* This file is auto-generated. Do not edit manually. */',
  '',
  ...componentStyleParts,
  '',
].join('\n');
const fullCss = [
  '/* PrimeVue Theme — compiled from CdekPreset */',
  '/* This file is auto-generated. Do not edit manually. */',
  '',
  ...commonCssParts,
  '',
  ...componentCssParts,
  '',
  ...componentStyleParts,
  '',
].join('\n');
const distDir = path.resolve(__dirname, '../dist');
fs.mkdirSync(distDir, { recursive: true });
const outputPath = path.resolve(distDir, 'prime-theme.css');
const tokensOutputPath = path.resolve(distDir, 'prime-theme-tokens.css');
const componentsOutputPath = path.resolve(
  distDir,
  'prime-theme-components.css'
);
const outputMinPath = path.resolve(distDir, 'prime-theme.min.css');
const tokensOutputMinPath = path.resolve(distDir, 'prime-theme-tokens.min.css');
const componentsOutputMinPath = path.resolve(
  distDir,
  'prime-theme-components.min.css'
);
const componentsDir = path.resolve(distDir, 'prime-theme-components');
fs.mkdirSync(componentsDir, { recursive: true });
fs.writeFileSync(outputPath, fullCss, 'utf-8');
fs.writeFileSync(tokensOutputPath, tokensCss, 'utf-8');
fs.writeFileSync(componentsOutputPath, componentsCss, 'utf-8');
fs.writeFileSync(outputMinPath, minifyCss(fullCss), 'utf-8');
fs.writeFileSync(tokensOutputMinPath, minifyCss(tokensCss), 'utf-8');
fs.writeFileSync(componentsOutputMinPath, minifyCss(componentsCss), 'utf-8');
for (const [name, css] of perComponentStyles) {
  const filePath = path.resolve(componentsDir, `${name}.css`);
  const minFilePath = path.resolve(componentsDir, `${name}.min.css`);
  const content = [
    `/* PrimeVue Theme Component: ${name} */`,
    '/* This file is auto-generated. Do not edit manually. */',
    '',
    css,
    '',
  ].join('\n');
  fs.writeFileSync(filePath, content, 'utf-8');
  fs.writeFileSync(minFilePath, minifyCss(content), 'utf-8');
}
const withStylesEntryPath = path.resolve(distDir, 'with-styles.es.js');
const withStylesDtsPath = path.resolve(distDir, 'with-styles.d.ts');
const withStylesDir = path.resolve(distDir, 'with-styles');
const withStylesComponentsDir = path.resolve(withStylesDir, 'components');
const withStylesTokensEntryPath = path.resolve(withStylesDir, 'tokens.es.js');
const withStylesTokensDtsPath = path.resolve(withStylesDir, 'tokens.d.ts');
const withStylesEntry = [
  "import './style.css';",
  "import './prime-theme-tokens.min.css';",
  "import './prime-theme-components.min.css';",
  "export * from './vue-ui-kit.es.js';",
  '',
].join('\n');
const withStylesDts = ["export * from './vue-ui-kit.es';", ''].join('\n');
fs.writeFileSync(withStylesEntryPath, withStylesEntry, 'utf-8');
fs.writeFileSync(withStylesDtsPath, withStylesDts, 'utf-8');

fs.mkdirSync(withStylesComponentsDir, { recursive: true });

const withStylesTokensEntry = [
  "import '../style.css';",
  "import '../prime-theme-tokens.min.css';",
  '',
].join('\n');

fs.writeFileSync(withStylesTokensEntryPath, withStylesTokensEntry, 'utf-8');
fs.writeFileSync(withStylesTokensDtsPath, 'export {};\n', 'utf-8');

for (const name of perComponentStyles.keys()) {
  const componentEntryPath = path.resolve(
    withStylesComponentsDir,
    `${name}.es.js`
  );
  const componentDtsPath = path.resolve(
    withStylesComponentsDir,
    `${name}.d.ts`
  );
  const componentEntry = [
    "import '../tokens.es.js';",
    `import '../../prime-theme-components/${name}.min.css';`,
    '',
  ].join('\n');

  fs.writeFileSync(componentEntryPath, componentEntry, 'utf-8');
  fs.writeFileSync(componentDtsPath, 'export {};\n', 'utf-8');
}

const primeDir = path.resolve(distDir, 'prime');
fs.mkdirSync(primeDir, { recursive: true });

const primeEntries = PRIME_ENTRIES;

for (const entry of primeEntries) {
  const jsPath = path.resolve(primeDir, `${entry.out}.es.js`);
  const dtsPath = path.resolve(primeDir, `${entry.out}.d.ts`);
  const hasStyle = perComponentStyles.has(entry.style);
  const jsContent = [
    "import '../with-styles/tokens.es.js';",
    ...(hasStyle
      ? [`import '../prime-theme-components/${entry.style}.min.css';`]
      : []),
    `export { default } from 'primevue/${entry.module}';`,
    '',
  ].join('\n');

  const dtsContent = [
    `export { default } from 'primevue/${entry.module}';`,
    '',
  ].join('\n');

  fs.writeFileSync(jsPath, jsContent, 'utf-8');
  fs.writeFileSync(dtsPath, dtsContent, 'utf-8');
}

const primeRegisterPath = path.resolve(primeDir, 'register.es.js');
const primeRegisterDtsPath = path.resolve(primeDir, 'register.d.ts');

const registerImports = primeEntries
  .map((entry) => `import ${entry.component} from './${entry.out}.es.js';`)
  .join('\n');
const registerComponents = primeEntries
  .map(
    (entry) => `    app.component('${entry.component}', ${entry.component});`
  )
  .join('\n');

const registerContent = [
  registerImports,
  '',
  'export const PrimeUiKitComponents = {',
  '  install(app) {',
  registerComponents,
  '  },',
  '};',
  '',
].join('\n');

const registerDts = [
  "import type { App } from 'vue';",
  'export declare const PrimeUiKitComponents: {',
  '  install(app: App): void;',
  '};',
  '',
].join('\n');

fs.writeFileSync(primeRegisterPath, registerContent, 'utf-8');
fs.writeFileSync(primeRegisterDtsPath, registerDts, 'utf-8');
// eslint-disable-next-line no-console
console.log(`✅ Theme compiled successfully: ${outputPath}`);
// eslint-disable-next-line no-console
console.log(
  `   Full: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB, Tokens: ${(
    fs.statSync(tokensOutputPath).size / 1024
  ).toFixed(1)} KB, Components: ${(
    fs.statSync(componentsOutputPath).size / 1024
  ).toFixed(1)} KB`
);
