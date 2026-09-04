#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TOKENS_PATH = path.join(ROOT, 'src/plugins/prime/theme3.0/tokens.json');
const WRAPPERS_DIR = path.join(ROOT, 'src/primeBlocks');
const BUILD_DIR = path.join(ROOT, 'storybook-static');

const STYLE_FILE_EXTENSIONS = new Set(['.vue', '.scss', '.css']);

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

function removeAllSegments(parts, segment) {
  if (!parts.includes(segment)) {
    return [parts];
  }

  return [parts, parts.filter((part) => part !== segment)];
}

function buildVarNameCandidates(parts) {
  const prefixVariants = [parts];
  const topPrefix = parts[0];

  if (['primitive', 'semantic', 'components'].includes(topPrefix)) {
    prefixVariants.push(parts.slice(1));
  }

  const candidates = new Set();

  for (const variant of prefixVariants) {
    if (variant.length === 0) {
      continue;
    }

    let variants = [variant];

    for (const segment of [
      'extend',
      'root',
      'color-scheme',
      'light',
      'dark',
      'colors',
      'solid',
      'alpha',
    ]) {
      variants = variants.flatMap((v) => removeAllSegments(v, segment));
    }

    for (const normalized of variants) {
      if (normalized.length > 0) {
        candidates.add(`--p-${normalized.join('-')}`);
      }
    }
  }

  return candidates;
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
    for (const candidate of buildVarNameCandidates(leafPath)) {
      knownVars.add(candidate);
    }
  }

  const wrapperStyleFiles = (
    await collectFiles(WRAPPERS_DIR, STYLE_FILE_EXTENSIONS)
  ).filter((filePath) => filePath.includes(`${path.sep}Extra`));

  const usageInWrappers = new Map();
  const locallyDefinedInWrappers = new Set();

  for (const filePath of wrapperStyleFiles) {
    const content = await fs.readFile(filePath, 'utf8');
    const usedVars = extractUsedVars(content);
    const definedVars = extractDefinedVars(content);

    for (const cssVar of definedVars) {
      locallyDefinedInWrappers.add(cssVar);
    }

    for (const cssVar of usedVars) {
      if (!usageInWrappers.has(cssVar)) {
        usageInWrappers.set(cssVar, new Set());
      }
      usageInWrappers.get(cssVar).add(path.relative(ROOT, filePath));
    }
  }

  const unresolved = [...usageInWrappers.keys()]
    .filter(
      (cssVar) =>
        !knownVars.has(cssVar) && !locallyDefinedInWrappers.has(cssVar)
    )
    .sort();

  if (unresolved.length === 0) {
    // eslint-disable-next-line no-console
    console.log(
      `CSS vars check passed: ${usageInWrappers.size} vars resolved (build-gated).`
    );
    return;
  }

  // eslint-disable-next-line no-console
  console.error('Unresolved --p-* CSS variables found:');
  for (const cssVar of unresolved) {
    const files = [...usageInWrappers.get(cssVar)].sort().join(', ');
    // eslint-disable-next-line no-console
    console.error(`- ${cssVar} (used in: ${files})`);
  }

  process.exitCode = 1;
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('check-css-vars failed:', error);
  process.exitCode = 1;
});
