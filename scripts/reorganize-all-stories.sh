#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

STORIES_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/plugins/prime/stories/PRIMEUIX"
DOCS_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/primefaces-llm/components"

echo -e "${BLUE}=== Начинаем реорганизацию всех stories ===${NC}\n"

# Count total components
TOTAL_COMPONENTS=$(ls -1 "$STORIES_DIR" | wc -l | tr -d ' ')
CURRENT=0

# Process each component directory
for component_dir in "$STORIES_DIR"/*; do
    if [ -d "$component_dir" ]; then
        CURRENT=$((CURRENT + 1))
        component_name=$(basename "$component_dir")
        doc_file="$DOCS_DIR/$(echo "$component_name" | tr '[:upper:]' '[:lower:]').md"

        echo -e "${YELLOW}[$CURRENT/$TOTAL_COMPONENTS]${NC} ${BLUE}Обработка: $component_name${NC}"

        # Check if documentation exists
        if [ ! -f "$doc_file" ]; then
            echo -e "  ${RED}✗ Документация не найдена: $doc_file${NC}"
            continue
        fi

        # Create stories directory if it doesn't exist
        stories_subdir="$component_dir/stories"
        mkdir -p "$stories_subdir"

        # Extract sections from markdown documentation
        section_count=0
        current_section=""
        current_content=""
        in_code_block=false

        while IFS= read -r line; do
            # Check for code block markers
            if [[ "$line" =~ ^\`\`\` ]]; then
                if [ "$in_code_block" = false ]; then
                    in_code_block=true
                else
                    in_code_block=false
                fi
            fi

            # Only look for headers outside code blocks
            if [ "$in_code_block" = false ]; then
                # Check if line is a section header (## Title)
                if [[ "$line" =~ ^##[[:space:]](.+)$ ]]; then
                    # Save previous section if it exists
                    if [ -n "$current_section" ]; then
                        # Clean section name for filename
                        clean_section=$(echo "$current_section" | sed 's/[^a-zA-Z0-9]//g')

                        # Skip certain sections that are not stories
                        if [[ ! "$clean_section" =~ ^(Props|Emits|Templates|PassThroughOptions|Theming|CSSClasses|DesignTokens|Style)$ ]]; then
                            story_file="$stories_subdir/${component_name}.${clean_section}.stories.js"

                            # Create story file
                            cat > "$story_file" << EOF
export default {
  title: 'PRIMEUIX/${component_name}/${clean_section}',
  parameters: {
    docs: {
      description: {
        component: \`
# ${current_section}

${current_content}
        \`
      }
    }
  }
};

export const Default = () => ({
  template: \`
    <div class="card flex justify-center gap-2">
      <!-- Add your component implementation here based on the documentation -->
      <p>Story implementation for ${current_section}</p>
    </div>
  \`
});
EOF
                            section_count=$((section_count + 1))
                        fi
                    fi

                    # Start new section
                    current_section="${BASH_REMATCH[1]}"
                    current_content=""
                elif [ -n "$current_section" ]; then
                    # Accumulate content for current section
                    if [ -n "$current_content" ]; then
                        current_content="$current_content
$line"
                    else
                        current_content="$line"
                    fi
                fi
            elif [ -n "$current_section" ]; then
                # In code block - accumulate as part of content
                if [ -n "$current_content" ]; then
                    current_content="$current_content
$line"
                else
                    current_content="$line"
                fi
            fi
        done < "$doc_file"

        # Save last section
        if [ -n "$current_section" ]; then
            clean_section=$(echo "$current_section" | sed 's/[^a-zA-Z0-9]//g')

            if [[ ! "$clean_section" =~ ^(Props|Emits|Templates|PassThroughOptions|Theming|CSSClasses|DesignTokens|Style)$ ]]; then
                story_file="$stories_subdir/${component_name}.${clean_section}.stories.js"

                cat > "$story_file" << EOF
export default {
  title: 'PRIMEUIX/${component_name}/${clean_section}',
  parameters: {
    docs: {
      description: {
        component: \`
# ${current_section}

${current_content}
        \`
      }
    }
  }
};

export const Default = () => ({
  template: \`
    <div class="card flex justify-center gap-2">
      <!-- Add your component implementation here based on the documentation -->
      <p>Story implementation for ${current_section}</p>
    </div>
  \`
});
EOF
                section_count=$((section_count + 1))
            fi
        fi

        if [ $section_count -gt 0 ]; then
            echo -e "  ${GREEN}✓ Создано $section_count story файлов${NC}"
        else
            echo -e "  ${YELLOW}⚠ Секции для stories не найдены${NC}"
        fi

        # Create main stories file with overview
        main_story="$component_dir/${component_name}.stories.mdx"
        if [ -f "$main_story" ]; then
            echo -e "  ${GREEN}✓ Основной файл уже существует${NC}"
        else
            # Extract description from docs
            description=$(head -n 5 "$doc_file" | tail -n 3)

            cat > "$main_story" << EOF
import { Meta } from '@storybook/addon-docs';

<Meta title="PRIMEUIX/${component_name}/Overview" />

# ${component_name}

${description}

[Документация PrimeVue](https://primevue.org/${component_name,,}/)

---

## Доступные примеры

Используйте боковую панель для просмотра различных вариантов использования компонента ${component_name}.
EOF
            echo -e "  ${GREEN}✓ Создан файл Overview${NC}"
        fi

        echo ""
    fi
done

echo -e "${GREEN}=== Реорганизация завершена ===${NC}"
echo -e "${BLUE}Всего обработано компонентов: $TOTAL_COMPONENTS${NC}"
