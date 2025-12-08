#!/bin/bash

# Скрипт для реорганизации stories компонентов
# Использование: ./scripts/reorganize-stories.sh <component-name>
# Пример: ./scripts/reorganize-stories.sh base-alert

set -e

COMPONENT_NAME=$1

if [ -z "$COMPONENT_NAME" ]; then
  echo "Ошибка: Укажите имя компонента"
  echo "Использование: ./scripts/reorganize-stories.sh <component-name>"
  echo "Пример: ./scripts/reorganize-stories.sh base-alert"
  exit 1
fi

COMPONENT_DIR="src/components/$COMPONENT_NAME"
STORIES_DIR="$COMPONENT_DIR/stories"

if [ ! -d "$COMPONENT_DIR" ]; then
  echo "Ошибка: Директория компонента не найдена: $COMPONENT_DIR"
  exit 1
fi

# Создаем директорию stories если её нет
if [ ! -d "$STORIES_DIR" ]; then
  echo "Создание директории: $STORIES_DIR"
  mkdir -p "$STORIES_DIR"
fi

# Конвертируем имя компонента в PascalCase
# base-alert -> BaseAlert
COMPONENT_PASCAL=$(echo "$COMPONENT_NAME" | sed -r 's/(^|-)([a-z])/\U\2/g')

echo "Компонент: $COMPONENT_NAME"
echo "PascalCase: $COMPONENT_PASCAL"
echo "Директория stories: $STORIES_DIR"
echo ""
echo "Структура stories создана!"
echo ""
echo "Следующие шаги:"
echo "1. Проанализируйте существующий файл $COMPONENT_DIR/$COMPONENT_PASCAL.stories.js"
echo "2. Создайте файлы stories в директории $STORIES_DIR/"
echo "3. Разделите примеры по категориям (Basic, States, Sizes, etc.)"
echo "4. Добавьте описания для каждой категории и примера"
echo "5. Проверьте работу в Storybook"
echo "6. Удалите старый файл stories"
echo ""
echo "Рекомендуемые категории:"
echo "  - Basic - базовые примеры"
echo "  - States - состояния (disabled, loading, error)"
echo "  - Sizes - размеры (small, normal, large)"
echo "  - Severity/Variants - варианты оформления"
echo "  - Icons - примеры с иконками"
echo "  - Template - кастомизация через слоты"
echo "  - Advanced - продвинутые сценарии"
