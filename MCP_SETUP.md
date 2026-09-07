# MCP Setup (Figma, JetBrains)

Этот проект хранит шаблон конфигурации MCP в файле `mcp.json`.

## Что внутри

- Сервер `figma` через `stdio`
- Команда запуска `figma-mcp`
- Переменная окружения `FIGMA_TOKEN`

## Для кого эта инструкция

Этот файл описывает настройку MCP именно для JetBrains IDE + GitHub Copilot.

## Предварительное требование

Сначала установите MCP-сервер `figma-mcp` (команда должна появиться в `PATH`).
Если `command -v figma-mcp` ничего не возвращает, установите сервер по официальной инструкции `figma-mcp` и только потом продолжайте настройку.

## Как использовать в JetBrains + GitHub Copilot

1. Из корня репозитория скопируйте шаблон в пользовательский конфиг:

```bash
cp ./mcp.json ~/.config/github-copilot/intellij/mcp.json
```

2. Подставьте токен Figma в поле `FIGMA_TOKEN`.

3. Перезапустите IDE.

### Вариант: использовать файл из проекта напрямую

Copilot в JetBrains читает конфиг из `~/.config/github-copilot/intellij/mcp.json`.
Чтобы использовать `mcp.json` из проекта как единый источник, создайте симлинк:

```bash
mkdir -p ~/.config/github-copilot/intellij
ln -sfn "$(pwd)/mcp.json" ~/.config/github-copilot/intellij/mcp.json
```

После этого изменения в `mcp.json` внутри проекта будут сразу применяться для Copilot.

## Проверка

Проверить, что бинарник доступен:

```bash
command -v figma-mcp
```

Проверить валидность JSON-файла:

```bash
python3 - <<'PY'
import json
from pathlib import Path
json.load(open(Path.home() / '.config/github-copilot/intellij/mcp.json'))
print('ok')
PY
```

## Важно

- Не коммитьте реальный токен в репозиторий.
- В репозитории должен оставаться только шаблон с плейсхолдером.






