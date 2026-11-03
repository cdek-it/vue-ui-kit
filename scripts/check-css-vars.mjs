#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TOKENS_PATH = path.join(ROOT, 'src/plugins/prime/theme3.0/tokens.json');
const WRAPPERS_DIR = path.join(ROOT, 'src/primeBlocks');
const THEME_COMPONENTS_DIR = path.join(
  ROOT,
  'src/plugins/prime/theme3.0/components/css'
);
const BUILD_DIR = path.join(ROOT, 'storybook-static');

const STYLE_FILE_EXTENSIONS = new Set(['.vue', '.scss', '.css']);
const THEME_FILE_EXTENSIONS = new Set(['.ts']);
const EXCLUDED_TOKEN_SEGMENTS = new Set([
  'primitive',
  'semantic',
  'components',
  'directives',
  'variables',
  'colorscheme',
  'color-scheme',
  'light',
  'dark',
  'common',
  'root',
  'states',
  'extend',
  'css',
]);

function toKebab(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function flattenTokenLeaves(obj, pathParts = [], result = []) {
  for (const [key, value] of Object.entries(obj)) {
    const nextPath = [...pathParts, toKebab(key)];

    if (isPlainObject(value)) {
      flattenTokenLeaves(value, nextPath, result);
      continue;
    }

    result.push(nextPath);
  }

  return result;
}

function buildVarName(parts) {
  const normalized = parts.filter((part) => !EXCLUDED_TOKEN_SEGMENTS.has(part));

  return normalized.length > 0 ? `--p-${normalized.join('-')}` : null;
}

async function collectFiles(dirPath, allowedExts) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath, allowedExts)));
      continue;
    }

    const ext = path.extname(entry.name);
    if (allowedExts.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractUsedVars(content) {
  const vars = new Set();
  const varCallRegex = /var\(([^)]+)\)/g;
  const tokenRegex = /--p-[a-z0-9-]+/g;

  for (const call of content.matchAll(varCallRegex)) {
    const args = call[1];
    for (const token of args.matchAll(tokenRegex)) {
      vars.add(token[0]);
    }
  }

  return vars;
}

function extractDefinedVars(content) {
  const vars = new Set();
  const regex = /(--p-[a-z0-9-]+)\s*:/g;

  for (const match of content.matchAll(regex)) {
    vars.add(match[1]);
  }

  return vars;
}

function extractDtVars(content) {
  const vars = new Set();
  const regex = /\bdt\(\s*['"]([^'"]+)['"]/g;

  for (const match of content.matchAll(regex)) {
    const cssVar = buildVarName(match[1].split('.').map(toKebab));
    if (cssVar) {
      vars.add(cssVar);
    }
  }

  return vars;
}

function extractExtraSelectors(content) {
  const selectors = new Set();
  const regex = /(^|[\s,{])\.(extra-[a-z0-9_-]+)/gm;

  for (const match of content.matchAll(regex)) {
    selectors.add(match[2]);
  }

  return selectors;
}

async function main() {
  try {
    await fs.access(BUILD_DIR);
  } catch {
    throw new Error(
      'Build artifacts not found. Run `yarn -s build-storybook` before `yarn -s check:css-vars`.'
    );
  }

  const tokenText = await fs.readFile(TOKENS_PATH, 'utf8');
  const tokens = JSON.parse(tokenText);

  const leafPaths = flattenTokenLeaves(tokens);
  const knownVars = new Set();
  for (const leafPath of leafPaths) {
    const cssVar = buildVarName(leafPath);
    if (cssVar) {
      knownVars.add(cssVar);
    }
  }

  const wrapperStyleFiles = (
    await collectFiles(WRAPPERS_DIR, STYLE_FILE_EXTENSIONS)
  ).filter((filePath) => filePath.includes(`${path.sep}Extra`));

  const usageInWrappers = new Map();
  const locallyDefinedInWrappers = new Map();
  const primitiveColorUsageInWrappers = new Map();

  for (const filePath of wrapperStyleFiles) {
    const content = await fs.readFile(filePath, 'utf8');
    const usedVars = extractUsedVars(content);
    const definedVars = extractDefinedVars(content);
    const relativeFilePath = path.relative(ROOT, filePath);

    for (const cssVar of definedVars) {
      if (!locallyDefinedInWrappers.has(cssVar)) {
        locallyDefinedInWrappers.set(cssVar, new Set());
      }
      locallyDefinedInWrappers.get(cssVar).add(relativeFilePath);
    }

    for (const cssVar of usedVars) {
      if (!usageInWrappers.has(cssVar)) {
        usageInWrappers.set(cssVar, new Set());
      }
      usageInWrappers.get(cssVar).add(relativeFilePath);

      if (cssVar.startsWith('--p-colors-')) {
        if (!primitiveColorUsageInWrappers.has(cssVar)) {
          primitiveColorUsageInWrappers.set(cssVar, new Set());
        }
        primitiveColorUsageInWrappers.get(cssVar).add(relativeFilePath);
      }
    }
  }

  const unresolved = [...usageInWrappers.keys()]
    .filter((cssVar) => !knownVars.has(cssVar))
    .sort();

  const themeFiles = await collectFiles(
    THEME_COMPONENTS_DIR,
    THEME_FILE_EXTENSIONS
  );
  const unresolvedThemeRefs = new Map();
  const wrapperSelectorsInThemeFiles = new Map();

  for (const filePath of themeFiles) {
    const content = await fs.readFile(filePath, 'utf8');
    const relativeFilePath = path.relative(ROOT, filePath);

    for (const cssVar of extractDtVars(content)) {
      if (!knownVars.has(cssVar)) {
        if (!unresolvedThemeRefs.has(cssVar)) {
          unresolvedThemeRefs.set(cssVar, new Set());
        }
        unresolvedThemeRefs.get(cssVar).add(relativeFilePath);
      }
    }

    for (const selector of extractExtraSelectors(content)) {
      if (!wrapperSelectorsInThemeFiles.has(selector)) {
        wrapperSelectorsInThemeFiles.set(selector, new Set());
      }
      wrapperSelectorsInThemeFiles.get(selector).add(relativeFilePath);
    }
  }

  if (
    unresolved.length === 0 &&
    unresolvedThemeRefs.size === 0 &&
    locallyDefinedInWrappers.size === 0 &&
    primitiveColorUsageInWrappers.size === 0 &&
    wrapperSelectorsInThemeFiles.size === 0
  ) {
    // eslint-disable-next-line no-console
    console.log(
      `CSS vars check passed: ${usageInWrappers.size} wrapper vars and theme dt() refs resolved (build-gated).`
    );
    return;
  }

  if (unresolved.length > 0) {
    // eslint-disable-next-line no-console
    console.error('Unresolved --p-* CSS variables found:');
    for (const cssVar of unresolved) {
      const files = [...usageInWrappers.get(cssVar)].sort().join(', ');
      // eslint-disable-next-line no-console
      console.error(`- ${cssVar} (used in: ${files})`);
    }
  }

  if (locallyDefinedInWrappers.size > 0) {
    // eslint-disable-next-line no-console
    console.error(
      'Prime theme CSS variables must not be defined inside wrapper styles:'
    );
    for (const [cssVar, files] of [...locallyDefinedInWrappers].sort()) {
      // eslint-disable-next-line no-console
      console.error(
        `- ${cssVar} (defined in: ${[...files].sort().join(', ')})`
      );
    }
  }

  if (primitiveColorUsageInWrappers.size > 0) {
    // eslint-disable-next-line no-console
    console.error(
      'Primitive color CSS variables must not be used directly inside wrapper styles:'
    );
    for (const [cssVar, files] of [...primitiveColorUsageInWrappers].sort()) {
      // eslint-disable-next-line no-console
      console.error(`- ${cssVar} (used in: ${[...files].sort().join(', ')})`);
    }
  }

  if (unresolvedThemeRefs.size > 0) {
    // eslint-disable-next-line no-console
    console.error('Unresolved theme dt() references found:');
    for (const [cssVar, files] of [...unresolvedThemeRefs].sort()) {
      // eslint-disable-next-line no-console
      console.error(`- ${cssVar} (used in: ${[...files].sort().join(', ')})`);
    }
  }

  if (wrapperSelectorsInThemeFiles.size > 0) {
    // eslint-disable-next-line no-console
    console.error(
      'Wrapper selectors (.extra-*) must not be used inside theme3.0/components/css files:'
    );
    for (const [selector, files] of [...wrapperSelectorsInThemeFiles].sort()) {
      // eslint-disable-next-line no-console
      console.error(
        `- .${selector} (used in: ${[...files].sort().join(', ')})`
      );
    }
  }

  process.exitCode = 1;
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('check-css-vars failed:', error);
  process.exitCode = 1;
});
