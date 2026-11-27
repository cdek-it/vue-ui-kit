import { readFileSync, writeFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const tokens = JSON.parse(read('../src/plugins/prime/theme3.0/tokens.json'));
const registryPath = '../docs/design-token-conflicts.md';
const registry = read(registryPath);
const requested = process.argv.slice(2);
const removeId =
  requested[0] === '--remove-verified' ? requested[1] : undefined;
if (requested.length && (!removeId || requested.length !== 2)) {
  throw new Error('Использование: --remove-verified DTC-ID');
}

const cssFiles = {
  'DTC-BUTTON': '../src/primeBlocks/ExtraButton/ExtraButton.vue',
};
const table = registry.match(
  /<!-- token-conflicts:start -->([\s\S]*?)<!-- token-conflicts:end -->/
)?.[1];

if (!table) {
  throw new Error('Не найдена таблица проверяемых путей токенов.');
}

const get = (path) =>
  path.split('.').reduce((node, key) => node?.[key], tokens);

function resolveColor(path) {
  const mode = path.match(/\.colorScheme\.(light|dark)\./)?.[1];
  const seen = new Set();
  let value = get(path);

  while (typeof value === 'string' && /^\{[^{}]+\}$/.test(value)) {
    const alias = value.slice(1, -1);
    if (seen.has(alias)) {
      throw new Error('Циклическая ссылка для ' + path + ': ' + alias);
    }
    seen.add(alias);
    value =
      get('semantic.colorScheme.' + mode + '.' + alias) ??
      get('semantic.' + alias) ??
      get('primitive.' + alias) ??
      get('components.' + alias);
  }

  if (typeof value !== 'string') {
    throw new Error('Не удалось раскрыть цвет для ' + path);
  }

  return value.toLowerCase();
}

let checked = 0;
const entries = new Map();

for (const row of table.trim().split('\n').slice(2)) {
  const entry = row.match(
    /^\| (DTC-[\w-]+) \| `([^`]+)` \| `([^`]+)` \| `([^`]+)` \| `([^`]+)` \| `([^`]+)` \|$/
  );
  if (!entry) {
    throw new Error('Некорректная строка реестра: ' + row);
  }

  const [, id, path, previousAlias, expectedAlias, previous, expected] = entry;
  const color = resolveColor(path);
  const alias = get(path);
  const paths = entries.get(id) ?? [];
  paths.push({
    path,
    color,
    alias,
    previousAlias,
    expectedAlias,
    previous,
    expected,
  });
  entries.set(id, paths);
  checked++;
}

if (removeId) {
  const paths = entries.get(removeId);
  if (
    !paths?.length ||
    paths.some(({ color, expected }) => color !== expected)
  ) {
    throw new Error(removeId + ' — экспорт ещё не покрывает все цвета записи.');
  }
  const file = cssFiles[removeId.replace(/-\d+$/, '')];
  if (!file) {
    throw new Error(removeId + ' — не указан файл адаптации.');
  }
  const css = read(file);
  const startMarker = '/* Design conflict ' + removeId + ':';
  const endMarker = '/* End design conflict ' + removeId + ' */';
  const start = css.indexOf(startMarker);
  const end = css.indexOf(endMarker);
  if (
    start < 0 ||
    end <= start ||
    css.lastIndexOf(startMarker) !== start ||
    css.lastIndexOf(endMarker) !== end ||
    css.slice(start + startMarker.length, end).includes('/* Design conflict ')
  ) {
    throw new Error(removeId + ' — блок CSS отсутствует или неоднозначен.');
  }

  const rows = table.split('\n');
  const kept = rows.filter((row) => !row.startsWith('| ' + removeId + ' |'));
  const archived = rows.filter((row) => row.startsWith('| ' + removeId + ' |'));
  const updatedRegistry =
    registry.replace(table, () => kept.join('\n')).trimEnd() +
    '\n\n### Закрыто: ' +
    removeId +
    '\n\n' +
    rows.slice(1, 3).concat(archived).join('\n') +
    '\n';

  writeFileSync(
    new URL(file, import.meta.url),
    css.slice(0, start) +
      css.slice(end + endMarker.length).replace(/^\n\n/, ''),
    'utf8'
  );
  writeFileSync(
    new URL(registryPath, import.meta.url),
    updatedRegistry,
    'utf8'
  );
  process.stdout.write(
    removeId + ' — адаптация удалена, пути перенесены в историю.\n'
  );
  process.exit(0);
}

for (const [id, paths] of entries) {
  if (paths.every(({ color, expected }) => color === expected)) {
    process.stderr.write(
      id +
        ' — все цвета совпали с Figma. Слои для проверки: docs/design-token-conflicts.md.\n' +
        'После проверки рендера: yarn check:token-conflicts --remove-verified ' +
        id +
        '\n'
    );
    process.exitCode = 1;
    continue;
  }

  for (const {
    path,
    color,
    alias,
    previousAlias,
    expectedAlias,
    previous,
    expected,
  } of paths) {
    if (color === previous && alias === previousAlias) {
      continue;
    }

    const status =
      color === expected
        ? 'цвет совпал, запись закрыта частично'
        : 'пересверить с Figma';
    process.stderr.write(
      id +
        ' — ' +
        status +
        ': ' +
        path +
        ' = ' +
        color +
        ' (' +
        alias +
        '), Figma: ' +
        expected +
        ' (' +
        expectedAlias +
        ')\n'
    );
    process.exitCode = 1;
  }
}

if (!process.exitCode) {
  process.stdout.write('Проверено путей: ' + checked + '.\n');
}
